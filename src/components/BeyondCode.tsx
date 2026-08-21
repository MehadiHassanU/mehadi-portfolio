"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";
import { ThinRule } from "./ThinRule";

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
    <section id="beyond" className="py-20 lg:py-32" aria-labelledby="beyond-heading">
      <div className="editorial-grid">
        <SectionLabel number="08" label="BEYOND CODE" className="col-span-12 lg:col-span-2" />

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading lines={["THERE'S MORE", "THAN CODE."]} size="lg" stagger={0.1} className="mb-6" />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl mb-16">
            Technology is a big part of what I do, but it isn't all I am.
          </p>
        </motion.div>

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {beyondCategories.map((cat, index) => (
            <motion.article
              key={cat.label}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="font-display text-section font-medium text-charcoal">{cat.label}</h3>
              <p className="font-body text-body text-slate leading-relaxed">{cat.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}