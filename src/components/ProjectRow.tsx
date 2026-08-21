"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";

interface ProjectRowProps {
  number: string;
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
    <article
      className={`group relative py-12 lg:py-16 border-t border-border ${featured ? "bg-silver/20" : ""} ${className}`}
      aria-labelledby={`project-${number}`}
    >
      <div className="editorial-grid">
        {/* Number */}
        <motion.span
          className="col-span-12 lg:col-span-1 font-display text-display-lg font-medium text-charcoal/30 group-hover:text-accent transition-colors"
          animate={prefersReducedMotion ? false : { x: [0, 8, 0] }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {number}
        </motion.span>

        {/* Title & Subtitle */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-2 pt-4 lg:pt-0">
          <h3
            id={`project-${number}`}
            className="font-display text-section font-medium text-charcoal group-hover:text-accent transition-colors mb-2"
          >
            {title}
          </h3>
          <p className="font-body text-body text-slate mb-4">{subtitle}</p>
          <p className="font-body text-body-sm text-slate leading-relaxed max-w-xs">{description}</p>
        </div>

        {/* Metadata */}
        <div className="col-span-12 lg:col-span-3 lg:col-start-7 pt-8 lg:pt-0 text-right">
          <div className="font-body text-meta text-slate uppercase tracking-widest mb-2">{category}</div>
          <div className="font-body text-meta text-slate uppercase tracking-widest mb-4">{year}</div>
          <div className="flex flex-wrap justify-end gap-2 text-body-sm text-cool">
            {tech.map((t) => (
              <span key={t} className="px-2 py-1 border border-border hover:border-accent hover:text-accent transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow & Link */}
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 pt-8 lg:pt-0">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-meta text-slate uppercase tracking-widest hover:text-accent transition-colors group"
              aria-label={`View ${title} on GitHub`}
            >
              <span>VIEW CODE</span>
              <motion.span
                className="group-hover:translate-x-1 transition-transform"
                animate={prefersReducedMotion ? false : { x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            </a>
          )}
        </div>

        {/* Thin rule between projects */}
        {!featured && (
          <hr className="col-span-12 lg:col-start-2 thin-rule mt-12 lg:mt-0" aria-hidden="true" />
        )}
      </div>
    </article>
  );
}