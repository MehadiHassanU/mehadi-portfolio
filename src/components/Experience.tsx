"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";
import { ThinRule } from "./ThinRule";

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
      "Understanding business problems",
      "Connecting technology with commercial outcomes",
    ],
  },
  {
    role: "Administrative Support",
    company: "Farabi General Hospital LTD",
    period: "Present",
    description:
      "Exposure to real-world organizational workflows, working with digital systems, supporting users/patients, using software operationally.",
    highlights: [
      "MS Word",
      "Excel",
      "Learning unfamiliar systems",
      "Digital systems operation",
      "User/patient support",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32" aria-labelledby="experience-heading">
      <div className="editorial-grid">
        <SectionLabel number="05" label="EXPERIENCE" className="col-span-12 lg:col-span-2" />

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.company}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: expIndex * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-4">
                <div>
                  <h3 className="font-display text-section font-medium text-charcoal">{exp.role}</h3>
                  <p className="font-body text-body text-slate mt-1">{exp.company}</p>
                </div>
                <time className="font-body text-meta text-slate uppercase tracking-widest shrink-0">{exp.period}</time>
              </div>

              <p className="font-body text-body text-slate leading-relaxed max-w-2xl">{exp.description}</p>

              <ul className="flex flex-wrap gap-2 text-body-sm text-cool" role="list">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="px-3 py-1 border border-border hover:border-accent hover:text-accent transition-colors">
                    {h}
                  </li>
                ))}
              </ul>

              {expIndex < experiences.length - 1 && <ThinRule className="mt-8" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}