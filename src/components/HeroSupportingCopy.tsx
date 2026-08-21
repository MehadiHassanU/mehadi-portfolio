"use client";

import { motion } from "motion/react";

interface HeroSupportingCopyProps {
  supportingCopy: string;
  prefersReducedMotion: boolean;
}

export function HeroSupportingCopy({ supportingCopy, prefersReducedMotion }: HeroSupportingCopyProps) {
  return (
    <motion.p
      className="col-span-12 lg:col-span-6 lg:col-start-5 mt-10 lg:mt-14 text-body-lg text-slate leading-relaxed text-balance"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
    >
      {supportingCopy}
    </motion.p>
  );
}