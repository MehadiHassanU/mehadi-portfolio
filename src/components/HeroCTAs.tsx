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
      className="col-span-12 lg:col-span-4 lg:col-start-1 mt-16 lg:mt-24 flex flex-col gap-4"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
    >
      <Link
        href="#work"
        className="group inline-flex items-center gap-3 px-6 py-4 bg-charcoal text-swiss font-body text-meta uppercase tracking-widest hover:bg-graphite transition-colors relative overflow-hidden"
        aria-label="Explore my work"
      >
        <span className="relative z-10">EXPLORE MY WORK</span>
        <motion.span
          className="relative z-10"
          animate={prefersReducedMotion ? false : { x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </motion.span>
      </Link>
      <Link
        href="/contact"
        className="inline-flex items-center gap-3 px-6 py-4 border border-border text-charcoal font-body text-meta uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
        aria-label="Let's connect"
      >
        LET'S CONNECT
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}