"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";

const experiences = [
  {
    role: "Founder / Entrepreneur",
    company: "Synistic Media LTD",
    period: "Present",
    description:
      "An entrepreneurial venture exploring the intersection of digital marketing, technology, and data-driven customer acquisition.",
    highlights: [
      "Business strategy",
      "Marketing",
      "Customer acquisition",
      "Digital advertising",
      "Entrepreneurship",
      "Connecting technology with commercial outcomes",
    ],
  },
  {
    role: "IT Executive",
    company: "Farabi General Hospital LTD",
    period: "Feb 2024 – Present",
    description:
      "Part-time IT Executive supporting the hospital’s digital infrastructure: maintaining hardware and software functionality, troubleshooting for staff to minimise downtime, and contributing to data security, system updates and IT protocol compliance.",
    highlights: [
      "System support",
      "Technical troubleshooting",
      "Software configuration",
      "Data security",
      "System updates",
      "IT protocol compliance",
    ],
  },
];

/**
 * `number` is a prop rather than a literal because these sections now appear on
 * more than one route. Hard-coding it is how the numbering drifted out of sync
 * with page order the first time.
 */
export function Experience({ number }: { number: string }) {
  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) */}
        <SectionLabel
          number={number}
          label="EXPERIENCE"
          className="col-span-12 lg:col-span-3"
        />

        {/* Row 1 (same row, cols 4–12): experience cards */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {experiences.map((exp, expIndex) => (
            <motion.article
              key={exp.company}
              className="swiss-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: expIndex * 0.1 }}
            >
              {/* Card header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-charcoal">
                <div className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-accent shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-section font-medium text-charcoal leading-tight">{exp.role}</h3>
                    <p className="font-body text-body-sm text-slate mt-1">{exp.company}</p>
                  </div>
                </div>
                {exp.period && (
                  <time className="font-body text-meta text-slate uppercase shrink-0">
                    {exp.period}
                  </time>
                )}
              </div>

              {/* Card body */}
              <div className="px-6 py-6 space-y-6">
                <p className="font-body text-body-sm text-slate leading-relaxed max-w-2xl">{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2" role="list">
                    {exp.highlights.map((h, i) => (
                      <span key={i} className="swiss-tag">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}