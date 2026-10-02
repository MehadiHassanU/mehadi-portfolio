"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { skillCategories } from "@/lib/skills";

/**
 * `number` is a prop rather than a literal because these sections now appear on
 * more than one route. Hard-coding it is how the numbering drifted out of sync
 * with page order the first time.
 */
export function Skills({ number }: { number: string }) {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) */}
        <SectionLabel
          number={number}
          label="SKILLS"
          className="col-span-12 lg:col-span-3"
        />

        {/* Row 1 (same row, cols 4–12): skill category cards */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                className="swiss-card-soft flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              >
                <div className="flex items-center gap-3 px-5 py-4 border-b border-silver">
                  <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
                  <h4 className="font-body text-meta text-charcoal uppercase font-medium">
                    {cat.category}
                  </h4>
                </div>
                <ul className="p-5 space-y-3 flex-1" role="list">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="font-body text-body-sm text-graphite border-b border-silver/50 pb-3 last:border-0 last:pb-0"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.08 + skillIndex * 0.03 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}