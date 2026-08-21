"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";
import { ProjectRow } from "./ProjectRow";
import { ThinRule } from "./ThinRule";

interface ProjectIndexProps {
  projects: Array<{
    number: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    year: string;
    tech: string[];
    github?: string;
    featured?: boolean;
  }>;
  label?: string;
  headline?: string;
  supportingText?: string;
  id?: string;
}

export function ProjectIndex({
  projects,
  label = "03",
  headline = "SELECTED WORK",
  subHeadline = "THINGS I'VE BUILT.",
  supportingText = "Things I've built while learning, experimenting, and exploring technology.",
  id = "work",
}: ProjectIndexProps) {
  return (
    <section id={id} className="py-20 lg:py-32" aria-labelledby={`${id}-heading`}>
      <div className="editorial-grid">
        {/* Section Label */}
        <SectionLabel
          number={label}
          label={headline}
          className="col-span-12 lg:col-span-2"
        />

        {/* Headlines */}
        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading
            lines={subHeadline.split(" ")}
            size="lg"
            stagger={0.08}
            className="mb-6"
          />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl">
            {supportingText}
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            >
              <ProjectRow {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}