"use client";

import { MetadataBlock } from "./MetadataBlock";
import { motion } from "motion/react";

interface HeroAcademicMetaProps {
  prefersReducedMotion: boolean;
}

export function HeroAcademicMeta({ prefersReducedMotion }: HeroAcademicMetaProps) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-4 lg:col-start-9 mt-16 lg:mt-24 text-right"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
    >
      <MetadataBlock
        align="right"
        items={[
          { label: "Degree", value: "B.Sc. Computer Science & Engineering" },
          { label: "Major", value: "Data Science" },
          { label: "Institution", value: "East West University" },
          { label: "Graduation", value: "Expected 2027" },
        ]}
      />
    </motion.div>
  );
}