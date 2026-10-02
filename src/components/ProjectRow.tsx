"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

interface ProjectRowProps {
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
  className?: string;
}

export function ProjectRow({
  number,
  slug,
  title,
  subtitle,
  description,
  category,
  year,
  tech,
  github,
  featured = false,
  className = "",
}: ProjectRowProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={`swiss-card ${featured ? "bg-silver/30" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby={`project-${number}`}
    >
      {/* Card header strip */}
      <div className="flex items-center justify-between border-b border-charcoal px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="font-display text-body font-medium text-charcoal/20">
            {number}
          </span>
          <span className="w-8 h-[3px] bg-accent" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-body text-meta text-slate uppercase">{category}</span>
          <span className="w-px h-4 bg-silver" aria-hidden="true" />
          <span className="font-body text-meta text-slate uppercase">{year}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 py-8">
        {/* Title & description */}
        <div className="lg:col-span-7">
          <h3
            id={`project-${number}`}
            className="font-display text-section font-medium text-charcoal mb-1"
          >
            <Link href={`/work/${slug}`} className="hover:text-accent transition-colors">
              {title}
            </Link>
          </h3>
          <p className="font-body text-body-sm text-slate mb-4">{subtitle}</p>
          <p className="font-body text-body-sm text-slate leading-relaxed max-w-lg">{description}</p>
        </div>

        {/* Tech + links */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:items-end">
          <div className="flex flex-wrap lg:justify-end gap-2">
            {tech.map((t) => (
              <span key={t} className="swiss-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end mt-auto">
            <Link
              href={`/work/${slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-charcoal text-swiss font-body text-meta uppercase hover:bg-accent transition-colors"
              aria-label={`Read the ${title} case study`}
            >
              <span>Case Study</span>
              <motion.span
                animate={prefersReducedMotion ? false : { x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            </Link>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-charcoal text-charcoal font-body text-meta uppercase hover:border-accent hover:text-accent transition-colors"
                aria-label={`View ${title} on GitHub`}
              >
                <span>Code</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}