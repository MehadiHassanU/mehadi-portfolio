"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CaseStudyNext() {
  return (
    <motion.div
      className="col-span-12 lg:col-span-10 lg:col-start-3 mt-24 pt-16 border-t border-border"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-body text-meta text-slate uppercase tracking-widest mb-4">NEXT PROJECT</p>
      <Link
        href="/work"
        className="group inline-flex items-center gap-3 font-display text-section font-medium text-charcoal hover:text-accent transition-colors"
      >
        View All Work
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}