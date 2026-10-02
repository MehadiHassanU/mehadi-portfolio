"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { ArrowRight, GitBranch } from "lucide-react";
import { MetadataBlock } from "./MetadataBlock";
import { CaseStudySections } from "./CaseStudySections";
import { CaseStudyNext } from "./CaseStudyNext";

interface CaseStudyProps {
  meta: {
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
  };
  slug: string;
  /** Position in the work index, e.g. "03". */
  number: string;
  nextProject?: {
    slug: string;
    title: string;
    subtitle: string;
  };
}

export function CaseStudy({ meta, number, nextProject }: CaseStudyProps) {
  const sections = [
    { id: "problem", title: "PROBLEM", content: meta.problem },
    { id: "approach", title: "APPROACH", content: meta.approach },
    { id: "implementation", title: "IMPLEMENTATION", content: meta.implementation },
    { id: "outcome", title: "OUTCOME", content: meta.outcome },
    { id: "learning", title: "LEARNING", content: meta.learning },
  ];

  return (
    <article className="py-16 lg:py-24">
      <div className="editorial-grid">
        <CaseStudyHeader meta={meta} number={number} />
        <CaseStudyVisual
          images={meta.images ?? []}
          number={number}
          title={meta.title}
        />
        <CaseStudyDescription meta={meta} />
        <CaseStudySections sections={sections} />
        <CaseStudyNext nextProject={nextProject} />
      </div>
    </article>
  );
}

function CaseStudyHeader({
  meta,
  number,
}: {
  meta: CaseStudyProps["meta"];
  number: string;
}) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-body text-meta text-slate uppercase tracking-widest">
        {number} / PROJECT
      </span>
      {/*
        display-md, not display-lg. This cell is 4 columns wide (368px at 1440)
        and the title has to live in it. "ApparelSync" is a single word with no
        space to break at, and at display-lg it needs 441px -- so it ran 58px
        under the figure beside it. At display-md (48px) it needs 294px.
        break-words stays as a net so a longer future title degrades onto a
        second line instead of overlapping.
      */}
      <h1 className="font-display text-display-md font-medium text-charcoal mt-4 mb-2 break-words">{meta.title}</h1>
      <p className="font-body text-body-lg text-slate mb-8">{meta.subtitle}</p>

      <MetadataBlock
        align="left"
        items={[
          { label: "Year", value: meta.year },
          { label: "Category", value: meta.category },
          { label: "Status", value: meta.featured ? "Featured" : "Completed" },
        ]}
      />

      {meta.team && meta.team.length > 0 && (
        <MetadataBlock
          align="left"
          className="mt-8"
          items={meta.team.map((member, i) => ({ label: i === 0 ? "Team" : "", value: member }))}
        />
      )}

      <MetadataBlock
        align="left"
        className="mt-8"
        items={[{ label: "Tech", value: meta.tech.join(", ") }]}
      />

      {meta.github && (
        <div className="mt-10">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-4 border border-border text-charcoal font-body text-meta uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
          >
            <GitBranch className="w-5 h-5" aria-hidden="true" />
            VIEW ON GITHUB
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

const GRID_OVERLAY: CSSProperties = {
  backgroundImage: `linear-gradient(var(--cool-gray) 1px, transparent 1px), linear-gradient(90deg, var(--cool-gray) 1px, transparent 1px)`,
  backgroundSize: "40px 40px",
};

/**
 * Renders `meta.images`, which was previously declared in every MDX file and
 * then ignored in favour of a fixed grey box. Three states:
 *
 *   0 images -- a typographic plate. A project with no screenshot is a normal
 *               thing; the plate makes that a deliberate choice instead of a
 *               broken-looking rectangle.
 *   1 image  -- a single 16:9 hero.
 *   N images -- the first as the hero, the rest as a 2-up grid.
 */
function CaseStudyVisual({
  images,
  number,
  title,
}: {
  images: string[];
  number: string;
  title: string;
}) {
  const [cover, ...rest] = images;

  return (
    <motion.div
      className="col-span-12 lg:col-span-8 lg:col-start-5 mt-12 lg:mt-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {cover ? (
        <figure className="swiss-frame overflow-hidden bg-swiss">
          <div className="relative aspect-[16/9]">
            <Image
              src={cover}
              alt={`${title} — interface`}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-silver px-4 py-3 font-body text-meta text-slate uppercase tracking-widest">
            {title} — production interface
          </figcaption>
        </figure>
      ) : (
        <div className="relative aspect-[16/9] swiss-frame overflow-hidden flex items-center px-8 lg:px-12">
          <div className="absolute inset-0 opacity-[0.04]" style={GRID_OVERLAY} aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="w-10 h-[3px] bg-accent shrink-0" aria-hidden="true" />
              <span className="font-body text-meta text-slate uppercase tracking-widest">
                {number} / {title}
              </span>
            </div>
            <p className="mt-6 font-display text-display-md font-medium text-charcoal/35 leading-[1.02]">
              No screenshots.
              <br />
              Read the write-up.
            </p>
          </div>
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {rest.map((src, i) => (
            <figure key={src} className="swiss-frame overflow-hidden bg-swiss">
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`${title} — interface detail ${i + 2}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function CaseStudyDescription({ meta }: { meta: CaseStudyProps["meta"] }) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-10 lg:col-start-3 mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-body text-body-lg text-slate leading-relaxed max-w-3xl">{meta.description}</p>
    </motion.div>
  );
}