"use client";

import { motion } from "motion/react";

interface DisplayHeadingProps {
  lines: string[];
  size?: "xl" | "lg" | "md";
  className?: string;
  stagger?: number;
}

export function DisplayHeading({ lines, size = "xl", className = "", stagger = 0.12 }: DisplayHeadingProps) {
  const sizeClasses = {
    xl: "text-display-xl",
    lg: "text-display-lg",
    md: "text-display-md",
  };

  return (
    <motion.div
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
    </motion.div>
  );
}