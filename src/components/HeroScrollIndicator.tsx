"use client";

import { MousePointer } from "lucide-react";
import { motion } from "motion/react";

interface HeroScrollIndicatorProps {
  prefersReducedMotion: boolean;
}

export function HeroScrollIndicator({ prefersReducedMotion }: HeroScrollIndicatorProps) {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      initial={prefersReducedMotion ? false : { opacity: 0, filter: "blur(8px)" }}
      animate={{
        opacity: [0, 1, 1, 0],
        filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{ willChange: "opacity, filter" }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-2 text-cool text-meta uppercase tracking-widest">
        <MousePointer className="w-5 h-5" aria-hidden="true" />
        <span>SCROLL</span>
      </div>
    </motion.div>
  );
}