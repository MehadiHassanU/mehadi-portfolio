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
          <div className="swiss-card-soft">
            <div className="flex items-center gap-4 px-6 lg:px-8 py-4 border-b border-silver-gray">
              <span className="font-display text-display-md font-medium text-charcoal/20 leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="w-1 h-6 bg-accent shrink-0" aria-hidden="true" />
              <h2 className="font-display text-section font-medium text-charcoal">{section.title}</h2>
            </div>
            <div className="px-6 lg:px-8 py-6 font-body text-body text-slate leading-relaxed max-w-3xl">
              <p>{section.content}</p>
            </div>
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
}