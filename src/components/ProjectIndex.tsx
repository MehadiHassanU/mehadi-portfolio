"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";
import { ProjectRow } from "./ProjectRow";

interface ProjectIndexProps {
  projects: Array<{
    number: string;
    slug: string;
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
  subHeadline?: string;
  supportingText?: string;
  id?: string;
  /**
   * Rendered under the rows when this index shows only a subset — the homepage
   * shows featured projects, /work shows the full archive, so the homepage needs a
   * route out or the rest of the work is unreachable from it.
   */
  footerLink?: { href: string; label: string };
}

export function ProjectIndex({
  projects,
  label = "03",
  headline = "ACADEMIC PROJECTS",
  subHeadline = "UNIVERSITY COURSEWORK.",
  supportingText =
    "Projects from my Computer Science degree, spanning full-stack application development, machine learning, computer architecture, and algorithms.",
  id = "work",
  footerLink,
}: ProjectIndexProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) + heading (cols 4–12) */}
        <SectionLabel
          number={label}
          label={headline}
          className="col-span-12 lg:col-span-3"
        />

        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading
            id={`${id}-heading`}
            as="h2"
            lines={subHeadline.split(" ")}
            size="lg"
            stagger={0.08}
            className="mb-6"
          />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl">
            {supportingText}
          </p>
        </motion.div>

        {/* Row 2: project cards (cols 4–12) */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4 mt-12 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectRow key={project.number} {...project} />
          ))}
        </motion.div>

        {footerLink && (
          <motion.div
            className="col-span-12 lg:col-span-9 lg:col-start-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={footerLink.href}
              className="group inline-flex items-center gap-3 font-body text-meta uppercase tracking-widest text-charcoal hover:text-accent transition-colors"
            >
              <span className="w-8 h-[2px] bg-accent shrink-0" aria-hidden="true" />
              {footerLink.label}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}