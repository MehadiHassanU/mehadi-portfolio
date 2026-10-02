#!/usr/bin/env node
/**
 * verify-tokens — build guardrail for dead Tailwind utilities.
 *
 * Tailwind v4 emits a utility only if the value resolves to a real theme
 * token. A typo like `border-silver-gray` (the token is `--color-silver`)
 * produces no CSS at all, silently, and `next build` still exits 0.
 *
 * That has bitten this project twice:
 *   1. The whole design system, because `tailwind.config.ts` is never loaded
 *      by v4 without an `@config` directive.
 *   2. `border-silver-gray` / `bg-silver-gray`, in six components.
 *
 * This script derives the custom token names straight from the `@theme` block,
 * finds every `text-*` / `bg-*` / `border-*` / `font-*` class in src/ that
 * targets one of those tokens, and asserts each one actually appears in the
 * compiled stylesheet. Renaming a token in globals.css needs no change here.
 *
 * It also checks the second half of the same failure class: every path listed
 * in an MDX file's `images:` frontmatter must exist under public/. A broken
 * image path renders exactly like the dead utilities did — silently, with a
 * green build.
 *
 * Usage: npm run build   (wired in after `next build`)
 */

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const globalsPath = path.join(root, "src/app/globals.css");

function fail(message) {
  console.error(`\n[verify-tokens] ${message}\n`);
  process.exit(1);
}

// --- 1. Custom token names declared in @theme -------------------------------
if (!fs.existsSync(globalsPath)) fail(`Missing ${path.relative(root, globalsPath)}`);

const globalsCss = fs.readFileSync(globalsPath, "utf8");
const themeBlock = globalsCss.match(/@theme\s+(?:inline\s+)?\{([\s\S]*?)\n\}/);

if (!themeBlock) {
  fail("No `@theme` block found in globals.css — cannot verify tokens.");
}

const tokens = new Set(
  [...themeBlock[1].matchAll(/--(?:color|text|font)-([a-z0-9-]+)\s*:/g)].map((m) => m[1])
);

if (tokens.size === 0) fail("The `@theme` block declares no colour/size/font tokens.");

// --- 2. Collect every class string used in src/ -----------------------------
function sourceFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...sourceFiles(full));
    else if (/\.tsx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

const files = sourceFiles(path.join(root, "src"));

function classesIn(source) {
  const found = new Set();
  // Every quoted string literal, split on whitespace.
  for (const m of source.matchAll(/(['"`])(?:\\.|(?!\1)[^\\])*\1/g)) {
    for (const token of m[0].slice(1, -1).split(/\s+/)) {
      if (!token) continue;
      found.add(token.trim());
    }
  }
  return found;
}

// A class is in scope if it applies a custom token through one of the four
// utility families we control.
//
// Matching the EXACT token name is not enough: the whole point of this script
// is to catch near-misses like `border-silver-gray`, where the token is
// `silver`. So a class is also in scope when any hyphen-delimited part of its
// name is a token (`silver-gray` -> `silver` is a token).
const UTILITY_FAMILY = /^(?:text|bg|border|font)-(.+)$/;

function targetsCustomToken(className) {
  const match = className.match(UTILITY_FAMILY);
  if (!match) return false;

  const rest = match[1].split("/")[0]; // strip /30, /20 opacity modifiers
  if (tokens.has(rest)) return true;

  return rest.split("-").some((part) => tokens.has(part));
}

const usage = new Map(); // className -> Set(files)

for (const file of files) {
  for (const className of classesIn(fs.readFileSync(file, "utf8"))) {
    // Match the utility family against the unprefixed name, but track the FULL
    // class. Tailwind emits `hover:border-accent` as `.hover\:border-accent`
    // and frequently never emits the bare `.border-accent` at all, so checking
    // the stripped name would report a false positive.
    const base = className.split(":").pop();
    if (!base || !targetsCustomToken(base)) continue;
    if (!usage.has(className)) usage.set(className, new Set());
    usage.get(className).add(path.relative(root, file));
  }
}

if (usage.size === 0) {
  console.log("[verify-tokens] No custom token utilities found — nothing to check.");
  process.exit(0);
}

// --- 3. Assert each one was actually emitted --------------------------------
const cssDir = path.join(root, ".next/static/chunks");
if (!fs.existsSync(cssDir)) {
  fail("No compiled CSS found at .next/static/chunks — run this after `next build`.");
}

const builtCss = fs
  .readdirSync(cssDir)
  .filter((f) => f.endsWith(".css"))
  .map((f) => fs.readFileSync(path.join(cssDir, f), "utf8"))
  .join("\n");

/** Escape a class the way a CSS selector escapes it, then confirm the
 *  selector actually appears followed by a rule terminator. */
function isEmitted(className) {
  const escaped = className.replace(/[/.[\]%(),:#]/g, "\\$&");
  const needle = "." + escaped;
  let index = builtCss.indexOf(needle);
  while (index !== -1) {
    const next = builtCss[index + needle.length];
    if (next === "{" || next === "," || next === ":" || next === " " || next === undefined) {
      return true;
    }
    index = builtCss.indexOf(needle, index + 1);
  }
  return false;
}

const missing = [...usage.entries()].filter(([className]) => !isEmitted(className));

if (missing.length > 0) {
  console.error("\n[verify-tokens] FAIL — these classes use a custom token but were never emitted:\n");
  for (const [className, sources] of missing) {
    console.error(`  .${className}`);
    for (const file of sources) console.error(`      ${file}`);
  }
  console.error(
    "\n  Most likely the utility name does not match the token in @theme.\n" +
      "  Check the --color-* / --text-* / --font-* names in src/app/globals.css.\n"
  );
  process.exit(1);
}

// --- 2. Every frontmatter image path must exist on disk ---------------------
const contentDir = path.join(root, "content/projects");

function extractImages(frontmatter) {
  const inline = frontmatter.match(/^images:\s*\[([^\]]*)\]/m);
  if (inline) return [...inline[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
  // The MDX files are CRLF on disk, so every newline here must allow a leading CR.
  const block = frontmatter.match(/^images:[ \t]*\r?\n((?:[ \t]*-[^\n]*\r?\n?)+)/m);
  if (!block) return [];
  return [...block[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
}

const brokenImages = [];
let imageCount = 0;

if (fs.existsSync(contentDir)) {
  for (const file of fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))) {
    const source = fs.readFileSync(path.join(contentDir, file), "utf8");
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatter) continue;
    for (const src of extractImages(frontmatter[1])) {
      imageCount++;
      const onDisk = path.join(root, "public", src.replace(/^\//, ""));
      if (!fs.existsSync(onDisk)) brokenImages.push({ src, file });
    }
  }
}

if (brokenImages.length > 0) {
  console.error("\n[verify-tokens] FAIL \u2014 these images are listed in frontmatter but not on disk:\n");
  for (const { src, file } of brokenImages) {
    console.error(`  ${src}`);
    console.error(`      content/projects/${file}  \u2192  public/${src.replace(/^\//, "")}`);
  }
  console.error("\n  Add the file to public/, or remove the entry from frontmatter.\n");
  process.exit(1);
}

console.log(
  `[verify-tokens] OK \u2014 ${usage.size} custom token utilities emitted, ` +
    `${imageCount} frontmatter image${imageCount === 1 ? "" : "s"} present.`
);
