"use client";

import { DisplayHeading } from "./DisplayHeading";
import { motion } from "motion/react";

interface HeroNameProps {
  nameLines: string[];
  prefersReducedMotion: boolean;
}

export function HeroName({ nameLines, prefersReducedMotion }: HeroNameProps) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-4 lg:col-start-1"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <DisplayHeading lines={nameLines} size="lg" stagger={0.08} className="mb-2" />
    </motion.div>
  );
}