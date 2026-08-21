"use client";

import { motion } from "motion/react";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <motion.div
      className={`font-display text-meta text-slate uppercase tracking-widest ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-medium text-graphite">{number}</span>
      <span className="mx-4 text-cool">/</span>
      <span>{label}</span>
    </motion.div>
  );
}