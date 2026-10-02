"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { ArrowDown } from "lucide-react";

const stages = [
  "COMPUTER SCIENCE",
  "DATA SCIENCE",
  "ARTIFICIAL INTELLIGENCE",
  "REAL-WORLD PRODUCTS",
  "TECHNOLOGY + BUSINESS",
];

/**
 * `number` is a prop rather than a literal because these sections now appear on
 * more than one route. Hard-coding it is how the numbering drifted out of sync
 * with page order the first time.
 */
export function Trajectory({ number }: { number: string }) {
  return (
    <section className="section" aria-label="Trajectory">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) */}
        <SectionLabel
          number={number}
          label="TRAJECTORY"
          className="col-span-12 lg:col-span-3"
        />

        {/* Row 1 (same row, cols 4–12): numbered progression blocks */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            >
              <div className="swiss-card-soft flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-6">
                  <span className="font-display text-body font-medium text-charcoal/20 w-8 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-1 h-8 bg-accent shrink-0" aria-hidden="true" />
                  <span className="font-display text-section font-medium text-charcoal leading-tight">
                    {stage}
                  </span>
                </div>
                {index < stages.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-cool shrink-0" aria-hidden="true" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}