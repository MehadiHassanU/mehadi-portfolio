"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroCTAsProps {
  prefersReducedMotion: boolean;
}

export function HeroCTAs({ prefersReducedMotion }: HeroCTAsProps) {
  return (
    <motion.div
      className="mt-10 lg:mt-12 flex flex-col sm:flex-row lg:flex-col gap-4"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
    >
      <Link
        href="/#work"
        className="group inline-flex items-center justify-between gap-3 px-6 py-4 bg-charcoal text-swiss font-body text-meta uppercase hover:bg-accent transition-colors"
        aria-label="Explore my work"
      >
        <span>EXPLORE MY WORK</span>
        <motion.span
          animate={prefersReducedMotion ? false : { x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </motion.span>
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center justify-between gap-3 px-6 py-4 border border-charcoal text-charcoal font-body text-meta uppercase hover:border-accent hover:text-accent transition-colors"
        aria-label="Let's connect"
      >
        LET&apos;S CONNECT
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}