"use client";

import { HeroName } from "./HeroName";
import { HeroHeadline } from "./HeroHeadline";
import { HeroSupportingCopy } from "./HeroSupportingCopy";
import { HeroAcademicMeta } from "./HeroAcademicMeta";
import { HeroCTAs } from "./HeroCTAs";
import { HeroSocial } from "./HeroSocial";
import { HeroScrollIndicator } from "./HeroScrollIndicator";
import { useReducedMotion } from "motion/react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const heroLines = [
    "COMPUTER SCIENCE",
    "STUDENT EXPLORING",
    "THE INTERSECTION OF",
    "AI, DATA & BUSINESS.",
  ];

  const nameLines = ["MD. MEHADI", "HASSAN"];

  const supportingCopy =
    "Curious about emerging technologies, driven by the possibilities they create, and constantly building to understand how technology can solve meaningful real-world problems.";

  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20" aria-labelledby="hero-heading">
      {/* Decorative grid texture — the only intentional absolute layer */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--cool-gray) 1px, transparent 1px), linear-gradient(90deg, var(--cool-gray) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="editorial-grid relative z-10 py-16 lg:py-24">
        {/* Row 0: structural rule */}
        <div className="col-span-12 flex items-center gap-4 mb-12" aria-hidden="true">
          <span className="w-12 h-3 bg-accent shrink-0" />
          <span className="flex-1 h-px bg-charcoal" />
          <span className="font-body text-meta text-slate uppercase whitespace-nowrap">Portfolio — 2026</span>
        </div>

        {/* Row 1: name (cols 1–4) + headline (cols 5–12) */}
        <HeroName nameLines={nameLines} prefersReducedMotion={prefersReducedMotion} />
        <HeroHeadline heroLines={heroLines} prefersReducedMotion={prefersReducedMotion} />

        {/* Row 3: description + CTAs share one grid cell (cols 5–8) so the
            buttons sit cleanly levelled under the copy in the lower-left,
            while the academic card starts on the same row at cols 9–12. */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-5 lg:row-start-3 flex flex-col self-start">
          <HeroSupportingCopy
            supportingCopy={supportingCopy}
            prefersReducedMotion={prefersReducedMotion}
          />
          <HeroCTAs prefersReducedMotion={prefersReducedMotion} />
        </div>
        <HeroAcademicMeta prefersReducedMotion={prefersReducedMotion} />

        {/* Row 4: social, full width with top rule */}
        <HeroSocial prefersReducedMotion={prefersReducedMotion} />
      </div>

      <HeroScrollIndicator prefersReducedMotion={prefersReducedMotion} />
    </section>
  );
}