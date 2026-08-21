"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32" aria-labelledby="education-heading">
      <div className="editorial-grid">
        <SectionLabel number="07" label="EDUCATION" className="col-span-12 lg:col-span-2" />

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading lines={["EAST WEST", "UNIVERSITY"]} size="lg" stagger={0.1} className="mb-8" />

          <div className="space-y-6 font-body text-body text-slate leading-relaxed max-w-xl">
            <p className="font-medium text-charcoal">Bachelor of Science in Computer Science & Engineering</p>
            <p>Major: Data Science</p>
            <p>Expected Graduation: Mid-2027</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}