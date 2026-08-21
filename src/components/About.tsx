"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32" aria-labelledby="about-heading">
      <div className="editorial-grid">
        {/* Section Label */}
        <SectionLabel
          number="01"
          label="ABOUT"
          className="col-span-12 lg:col-span-2"
        />

        {/* Large Headline */}
        <motion.div
          className="col-span-12 lg:col-span-5 lg:col-start-3 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading
            lines={["A LITTLE", "ABOUT ME."]}
            size="lg"
            stagger={0.1}
          />
        </motion.div>

        {/* Body Copy */}
        <motion.div
          className="col-span-12 lg:col-span-5 lg:col-start-9 mt-12 lg:mt-0 text-body-lg text-slate leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <p className="mb-6">
            I'm a Computer Science student fascinated by how quickly technology is evolving. My curiosity has gradually taken me from software development and data to Artificial Intelligence, automation, and the possibilities of building technology-driven businesses.
          </p>
          <p className="mb-6">
            I enjoy learning by building — turning ideas into working systems, experimenting with new technologies, and understanding how technical solutions can create value beyond the code itself.
          </p>
          <p>
            I'm particularly interested in AI agents, data analytics, automation, machine learning applications, and the intersection between technology and business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}