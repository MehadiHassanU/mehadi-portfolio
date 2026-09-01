"use client";

import { SectionLabel } from "./SectionLabel";

const curiosityItems = [
  "AI AGENTS",
  "DATA ANALYTICS",
  "MACHINE LEARNING",
  "AUTOMATION",
  "AI-POWERED PRODUCTS",
  "TECHNOLOGY ENTREPRENEURSHIP",
];

/**
 * News-style marquee band for the "Curious About" section.
 *
 * Layout: full-bleed horizontal band below a grid-aligned header row.
 * The track contains two identical halves; the CSS animation translates
 * the track by exactly -50%, producing a perfectly seamless loop.
 *
 * Edges: gradient fade masks (bg → transparent) ensure items dissolve
 * before reaching the viewport edge — no hard clipping, no overlap.
 */
export function CuriosityTicker() {
  return (
    <section id="curious" className="section" aria-labelledby="curious-heading">
      {/* Header row — aligned to the master editorial grid */}
      <div className="editorial-grid mb-12">
        <SectionLabel
          number="04"
          label="CURIOUS ABOUT"
          className="col-span-12 lg:col-span-3"
        />
        <p className="col-span-12 lg:col-span-9 lg:col-start-4 font-body text-body-lg text-slate leading-relaxed max-w-xl">
          Topics I'm actively exploring through coursework, experiments, and self-directed learning.
        </p>
      </div>

      {/* Full-bleed ticker band — spans the entire viewport width */}
      <div
        className="ticker-band relative w-full overflow-hidden border-y border-charcoal py-8 lg:py-10"
        role="marquee"
        aria-label="Areas of curiosity"
      >
        {/* Track: two identical halves for a seamless -50% loop.
            Inline animation bypasses any cascade conflicts. */}
        <div
          className="flex min-w-max items-center"
          style={{
            animation: "ticker-scroll 20s linear infinite",
            willChange: "transform",
          } as React.CSSProperties}
        >
          {[0, 1].map((half) => (
            <div
              key={half}
              className="flex items-center shrink-0"
              aria-hidden={half === 1}
            >
              {curiosityItems.map((item, index) => (
                <span key={`${half}-${index}`} className="flex items-center">
                  <span className="font-display text-display-md font-medium text-charcoal whitespace-nowrap px-6 lg:px-10">
                    {item}
                  </span>
                  <span
                    className="w-2 h-2 bg-accent shrink-0"
                    aria-hidden="true"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Edge fade masks — items dissolve into the background */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-swiss to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-swiss to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}