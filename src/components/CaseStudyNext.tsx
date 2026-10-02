"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyNextProps {
  nextProject?: {
    slug: string;
    title: string;
    subtitle: string;
  };
}

export function CaseStudyNext({ nextProject }: CaseStudyNextProps) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-10 lg:col-start-3 mt-24 pt-16 border-t border-border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-body text-meta text-slate uppercase tracking-widest mb-4">NEXT PROJECT</p>
      {nextProject ? (
        <Link
          href={`/work/${nextProject.slug}`}
          className="group inline-flex items-baseline gap-4 font-display text-section font-medium text-charcoal hover:text-accent transition-colors"
        >
          <span>
            {nextProject.title}
            <span className="hidden sm:inline font-body text-body text-slate font-normal"> — {nextProject.subtitle}</span>
          </span>
          <ArrowRight className="w-6 h-6 self-center group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      ) : (
        <Link
          href="/work"
          className="group inline-flex items-center gap-3 font-display text-section font-medium text-charcoal hover:text-accent transition-colors"
        >
          View All Work
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      )}
    </motion.div>
  );
}