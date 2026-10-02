import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMeta {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured?: boolean;
  team?: string[];
  tech: string[];
  github?: string;
  demo?: string;
  description: string;
  problem: string;
  approach: string;
  implementation: string;
  outcome: string;
  learning: string;
  images: string[];
}

/** The shape the work index and its rows render. */
export interface ProjectSummary {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  tech: string[];
  github?: string;
  featured?: boolean;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs.readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): { meta: ProjectMeta; content: string } | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: data as ProjectMeta,
    content,
  };
}

export function getAllProjects(): Array<{ slug: string; meta: ProjectMeta }> {
  const slugs = getProjectSlugs();
  return slugs
    .map((slug) => {
      const project = getProjectBySlug(slug);
      if (!project) return null;
      return { slug, meta: project.meta };
    })
    .filter((p): p is { slug: string; meta: ProjectMeta } => p !== null)
    .sort((a, b) => parseInt(b.meta.year) - parseInt(a.meta.year));
}

/**
 * The single place that turns MDX frontmatter into what the work index shows.
 *
 * Both `/` and `/work` used to carry their own copy of this mapping, which is
 * how they drifted apart. Index numbering and the display case convention are
 * now decided here and nowhere else:
 *
 *  - Titles live in frontmatter in natural case ("ApparelSync"), because that
 *    is what the case study's <h1> and its metadata title use.
 *  - The index uppercases them, matching the all-caps Swiss index treatment.
 */
export function getProjectSummaries(): ProjectSummary[] {
  return getAllProjects().map(({ slug, meta }, index) => ({
    number: String(index + 1).padStart(2, "0"),
    slug,
    title: meta.title.toUpperCase(),
    subtitle: meta.subtitle,
    description: meta.description,
    category: meta.category,
    year: meta.year,
    tech: meta.tech,
    github: meta.github,
    featured: meta.featured,
  }));
}
