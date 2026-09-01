"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

const aboutParagraphs = [
  "I'm a Computer Science student fascinated by how quickly technology is evolving. My curiosity has gradually taken me from software development and data to Artificial Intelligence, automation, and the possibilities of building technology-driven businesses.",
  "I enjoy learning by building — turning ideas into working systems, experimenting with new technologies, and understanding how technical solutions can create value beyond the code itself.",
  "I'm particularly interested in AI agents, data analytics, automation, machine learning applications, and the intersection between technology and business.",
];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) + heading (cols 4–12), top-aligned */}
        <SectionLabel
          number="01"
          label="ABOUT"
          className="col-span-12 lg:col-span-3"
        />

        <div className="col-span-12 lg:col-span-9 lg:col-start-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <DisplayHeading
              lines={["A LITTLE", "ABOUT ME."]}
              size="lg"
              stagger={0.1}
              className="mb-12"
            />
          </motion.div>

          {/* Row 2: three equal cards on the same grid lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutParagraphs.map((paragraph, index) => (
              <motion.article
                key={index}
                className="swiss-card-soft p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-display text-body font-medium text-charcoal/20 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-body-sm text-slate leading-relaxed">{paragraph}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}