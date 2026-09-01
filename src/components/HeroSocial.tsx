"use client";

import { GitBranch, Link as LinkIcon } from "lucide-react";
import { motion } from "motion/react";

interface HeroSocialProps {
  prefersReducedMotion: boolean;
}

export function HeroSocial({ prefersReducedMotion }: HeroSocialProps) {
  return (
    <motion.div
      className="col-span-12 mt-16 pt-6 border-t border-charcoal flex items-center gap-8"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
    >
      <a
        href="https://github.com/MehadiHassanU"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-body text-meta text-slate uppercase hover:text-accent transition-colors"
        aria-label="GitHub"
      >
        <GitBranch className="w-4 h-4" aria-hidden="true" />
        <span>GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/mehadihassanu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-body text-meta text-slate uppercase hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <LinkIcon className="w-4 h-4" aria-hidden="true" />
        <span>LinkedIn</span>
      </a>
    </motion.div>
  );
}