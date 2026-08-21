"use client";

import { DisplayHeading } from "./DisplayHeading";
import { motion } from "motion/react";

interface HeroHeadlineProps {
  heroLines: string[];
  prefersReducedMotion: boolean;
}

export function HeroHeadline({ heroLines, prefersReducedMotion }: HeroHeadlineProps) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-8 lg:col-start-5 pt-12 lg:pt-0"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
    >
      <DisplayHeading lines={heroLines} size="xl" stagger={0.1} className="text-balance" />
    </motion.div>
  );
}