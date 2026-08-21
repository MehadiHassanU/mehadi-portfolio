"use client";

import { motion, useMotionValue, useTransform, useAnimationFrame } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

const curiosityItems = [
  "AI AGENTS",
  "DATA ANALYTICS",
  "MACHINE LEARNING",
  "AUTOMATION",
  "AI-POWERED PRODUCTS",
  "TECHNOLOGY ENTREPRENEURSHIP",
];

export function CuriosityTicker() {
  const x = useMotionValue(0);
  const speed = 20; // pixels per frame

  useAnimationFrame((t, dt) => {
    const width = document.querySelector(".ticker-track")?.scrollWidth || 0;
    const containerWidth = document.querySelector(".ticker-container")?.clientWidth || 0;
    if (width > containerWidth) {
      x.set((x.get() - speed * (dt / 1000)) % (width / 2));
    }
  });

  const xTransformed = useTransform(x, (latest) => `translateX(${latest}px)`) as unknown as React.CSSProperties["transform"];

  return (
    <section id="curious" className="py-20 lg:py-32 overflow-hidden" aria-labelledby="curious-heading">
      <div className="editorial-grid">
        <SectionLabel number="04" label="CURRENTLY CURIOUS ABOUT" className="col-span-12 lg:col-span-2" />

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ticker-container relative">
            <div
              className="ticker-track flex gap-8 lg:gap-16 whitespace-nowrap will-change-transform"
              style={{ transform: xTransformed }}
              aria-label="Areas of curiosity"
            >
              {/* Duplicate items for seamless loop */}
              {curiosityItems.map((item, index) => (
                <motion.span
                  key={`${item}-1`}
                  className="font-display text-display-lg font-medium text-charcoal white-space-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  style={{ willChange: "transform" }}
                >
                  {item}
                </motion.span>
              ))}
              {curiosityItems.map((item, index) => (
                <motion.span
                  key={`${item}-2`}
                  className="font-display text-display-lg font-medium text-charcoal/30 white-space-nowrap"
                  style={{ willChange: "transform" }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Fade masks on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-swiss to-transparent pointer-events-none" aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-swiss to-transparent pointer-events-none" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}