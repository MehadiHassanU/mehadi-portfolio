"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";

const stages = [
  "COMPUTER SCIENCE",
  "DATA SCIENCE",
  "ARTIFICIAL INTELLIGENCE",
  "REAL-WORLD PRODUCTS",
  "TECHNOLOGY + BUSINESS",
];

export function Trajectory() {
  return (
    <section className="py-20 lg:py-32" aria-labelledby="trajectory-heading">
      <div className="editorial-grid">
        {/* Section Label */}
        <SectionLabel
          number="02"
          label="TRAJECTORY"
          className="col-span-12 lg:col-span-2"
        />

        {/* Vertical Typographic Progression */}
        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-[1.5rem] top-0 bottom-0 w-[1px] bg-border"
              aria-hidden="true"
            />

            <div className="space-y-16 lg:space-y-20 pl-12 lg:pl-16">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                >
                  {/* Dot on the line */}
                  <div
                    className="absolute left-[-1.5rem] top-[0.5rem] w-4 h-4 rounded-full bg-accent border-4 border-swiss"
                    aria-hidden="true"
                  />

                  <div className="font-display text-display-md font-medium text-charcoal leading-tight">
                    {stage}
                  </div>

                  {index < stages.length - 1 && (
                    <div className="mt-2 text-meta text-slate uppercase tracking-widest">
                      ↓
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}