"use client";

import { motion } from "motion/react";

interface MetadataItem {
  label: string;
  value: string;
}

interface MetadataBlockProps {
  items: MetadataItem[];
  align?: "left" | "right" | "center";
  className?: string;
}

export function MetadataBlock({ items, align = "left", className = "" }: MetadataBlockProps) {
  const alignClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return (
    <motion.dl
      className={`font-body text-meta text-slate uppercase tracking-widest space-y-3 ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
          <dt className="font-medium text-cool shrink-0">
            {item.label}
          </dt>
          <dd className="font-medium text-graphite">{item.value}</dd>
        </div>
      ))}
    </motion.dl>
  );
}