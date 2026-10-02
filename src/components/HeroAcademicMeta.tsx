"use client";

import { motion } from "motion/react";

interface HeroAcademicMetaProps {
  prefersReducedMotion: boolean;
}

const metaItems = [
  { label: "Degree", value: "B.Sc. Computer Science & Engineering" },
  { label: "Major", value: "Data Science" },
  { label: "Institution", value: "East West University" },
  { label: "Graduation", value: "Expected 2027" },
];

export function HeroAcademicMeta({ prefersReducedMotion }: HeroAcademicMetaProps) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-4 lg:col-start-9 lg:row-start-3 self-start"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      <div className="swiss-card-soft p-6">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-silver">
          <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
          <span className="font-body text-meta text-charcoal uppercase font-medium">
            Academic Profile
          </span>
        </div>
        <dl className="space-y-4">
          {metaItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="font-body text-meta text-cool uppercase">{item.label}</dt>
              <dd className="font-body text-body-sm text-charcoal font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}