"use client";

import { motion } from "motion/react";

interface DisplayHeadingProps {
  lines: string[];
  size?: "xl" | "lg" | "md";
  className?: string;
  stagger?: number;
  /**
   * Set this to the same value as the parent <section>'s aria-labelledby so the
   * reference resolves -- every section previously pointed at an id that did
   * not exist.
   */
  id?: string;
  /**
   * Render a real heading element. Sections use this for the document outline
   * and SEO; the hero is the page's single h1.
   */
  as?: "div" | "h1" | "h2" | "h3";
}

export function DisplayHeading({
  lines,
  size = "xl",
  className = "",
  stagger = 0.12,
  id,
  as = "div",
}: DisplayHeadingProps) {
  const sizeClasses = {
    xl: "text-display-xl",
    lg: "text-display-lg",
    md: "text-display-md",
  };

  // motion exposes one component per HTML tag (motion.h1, motion.h2, ...).
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      id={id}
      className={`${sizeClasses[size]} font-display font-medium text-charcoal leading-[0.95] ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          className="block overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: "100%" },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {line}
        </motion.span>
      ))}
    </MotionTag>
  );
}