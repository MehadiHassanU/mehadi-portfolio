"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

const beyondCategories = [
  {
    label: "MUSIC",
    description: "Singing, listening to music, and discovering new sounds.",
  },
  {
    label: "CARS",
    description: "Car reviews, automotive design, engineering, and the stories behind interesting machines.",
  },
  {
    label: "TRAVEL",
    description: "Travel vlogs, discovering new places, and imagining future destinations.",
  },
  {
    label: "IDEAS",
    description: "Business ideas, product concepts, and the occasional late-night thought that might turn into something worth building.",
  },
];

export function BeyondCode() {
  return (
    <section id="beyond" className="section" aria-labelledby="beyond-heading">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) + heading (cols 4–12) */}
        <SectionLabel
          number="08"
          label="BEYOND CODE"
          className="col-span-12 lg:col-span-3"
        />

        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading lines={["THERE'S MORE", "THAN CODE."]} size="lg" stagger={0.1} className="mb-6" />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl">
            Technology is a big part of what I do, but it isn't all I am.
          </p>
        </motion.div>

        {/* Row 2: category cards (cols 4–12) */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {beyondCategories.map((cat, index) => (
            <motion.article
              key={cat.label}
              className="swiss-card-soft flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="px-5 py-4 border-b border-silver-gray flex items-center justify-between">
                <h3 className="font-body text-meta text-charcoal uppercase font-medium">{cat.label}</h3>
                <span className="font-display text-body font-medium text-charcoal/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="px-5 py-5 font-body text-body-sm text-slate leading-relaxed flex-1">
                {cat.description}
              </p>
              <div className="h-[3px] bg-accent mt-auto" aria-hidden="true" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}