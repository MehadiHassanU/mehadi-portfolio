"use client";

import Link from "next/link";
import { ArrowRight, GitBranch, Link as LinkIcon, MousePointer } from "lucide-react";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { DisplayHeading } from "./DisplayHeading";
import { MetadataBlock } from "./MetadataBlock";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const heroLines = [
    "COMPUTER SCIENCE",
    "STUDENT EXPLORING",
    "THE INTERSECTION OF",
    "AI, DATA & BUSINESS.",
  ];

  const nameLines = ["MD.", "MEHADI HASSAN"];

  const supportingCopy =
    "Curious about emerging technologies, driven by the possibilities they create, and constantly building to understand how technology can solve meaningful real-world problems.";

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--cool-gray) 1px, transparent 1px), linear-gradient(90deg, var(--cool-gray) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="editorial-grid relative z-10 py-16 lg:py-24">
        <HeroName nameLines={nameLines} prefersReducedMotion={prefersReducedMotion} />
        <HeroHeadline heroLines={heroLines} prefersReducedMotion={prefersReducedMotion} />
        <HeroSupportingCopy supportingCopy={supportingCopy} prefersReducedMotion={prefersReducedMotion} />
        <HeroAcademicMeta prefersReducedMotion={prefersReducedMotion} />
        <HeroCTAs prefersReducedMotion={prefersReducedMotion} />
        <HeroSocial prefersReducedMotion={prefersReducedMotion} />
        <HeroScrollIndicator prefersReducedMotion={prefersReducedMotion} />
      </div>
    </section>
  );
}