"use client";

import { motion } from "motion/react";
import { ArrowRight, GitBranch } from "lucide-react";
import Link from "next/link";
import { MetadataBlock } from "./MetadataBlock";
import { ThinRule } from "./ThinRule";
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
}

export function CaseStudy({ meta, slug }: CaseStudyProps) {
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
        <CaseStudyHeader meta={meta} />
        <CaseStudyVisual />
        <CaseStudyDescription meta={meta} />
        <CaseStudySections sections={sections} />
        <CaseStudyNext />
      </div>
    </article>
  );
}

function CaseStudyHeader({ meta }: { meta: CaseStudyProps["meta"] }) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-body text-meta text-slate uppercase tracking-widest">01 / PROJECT</span>
      <h1 className="font-display text-display-lg font-medium text-charcoal mt-4 mb-2">{meta.title}</h1>
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

function CaseStudyVisual() {
  return (
    <motion.div
      className="col-span-12 lg:col-span-8 lg:col-start-5 mt-12 lg:mt-0 relative aspect-[16/9] bg-silver/20 overflow-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-slate">
        <span className="font-body text-meta uppercase tracking-widest">Project Visual</span>
      </div>
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