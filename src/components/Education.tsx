"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) */}
        <SectionLabel
          number="07"
          label="EDUCATION"
          className="col-span-12 lg:col-span-3"
        />

        {/* Row 1 (same row, cols 4–12): split panel */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="swiss-frame">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left panel */}
              <div className="lg:col-span-7 px-6 lg:px-10 py-8 lg:py-12 border-b lg:border-b-0 lg:border-r border-charcoal">
                <DisplayHeading lines={["EAST WEST", "UNIVERSITY"]} size="md" stagger={0.1} className="mb-8" />
                <div className="space-y-3 font-body text-body-sm text-slate leading-relaxed">
                  <p className="font-medium text-charcoal">Bachelor of Science in Computer Science & Engineering</p>
                  <p>Major: Data Science</p>
                  <p>Expected Graduation: Mid-2027</p>
                </div>
              </div>

              {/* Right meta panel */}
              <div className="lg:col-span-5 bg-charcoal text-swiss px-6 lg:px-10 py-8 lg:py-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
                  <span className="font-body text-meta uppercase">Degree Details</span>
                </div>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-body text-meta text-cool uppercase">Program</dt>
                    <dd className="font-body text-body-sm font-medium mt-1">B.Sc. Computer Science & Engineering</dd>
                  </div>
                  <div>
                    <dt className="font-body text-meta text-cool uppercase">Major</dt>
                    <dd className="font-body text-body-sm font-medium mt-1">Data Science</dd>
                  </div>
                  <div>
                    <dt className="font-body text-meta text-cool uppercase">Status</dt>
                    <dd className="font-body text-body-sm font-medium mt-1">Expected Graduation — Mid-2027</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}