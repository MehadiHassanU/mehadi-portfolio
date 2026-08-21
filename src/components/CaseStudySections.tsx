"use client";

import { motion } from "motion/react";

interface CaseStudySectionsProps {
  sections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
}

export function CaseStudySections({ sections }: CaseStudySectionsProps) {
  return (
    <motion.div
      className="col-span-12 lg:col-span-10 lg:col-start-3 mt-20 space-y-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-display-md font-medium text-charcoal/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display text-section font-medium text-charcoal">{section.title}</h2>
          </div>
          <div className="pl-16 lg:pl-20 font-body text-body text-slate leading-relaxed max-w-3xl">
            <p>{section.content}</p>
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
}