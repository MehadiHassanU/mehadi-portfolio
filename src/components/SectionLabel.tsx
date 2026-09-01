"use client";

import { motion } from "motion/react";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

/**
 * Swiss editorial section label.
 * Plain typographic treatment — no bordered chip — so it can never
 * overflow its grid column. Sits at the top of each section row.
 */
export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
        <span className="font-body text-meta text-charcoal uppercase font-medium whitespace-nowrap">
          {number} / {label}
        </span>
      </div>
    </motion.div>
  );
}