"use client";

import { motion } from "motion/react";

interface HeroSupportingCopyProps {
  supportingCopy: string;
  prefersReducedMotion: boolean;
}

export function HeroSupportingCopy({ supportingCopy, prefersReducedMotion }: HeroSupportingCopyProps) {
  return (
    <motion.div
      className="self-start"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      <div className="swiss-accent-bar mb-6" aria-hidden="true" />
      <p className="font-body text-body text-slate leading-relaxed max-w-md">{supportingCopy}</p>
    </motion.div>
  );
}