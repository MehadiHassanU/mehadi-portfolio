"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

const skillCategories = [
  {
    category: "PROGRAMMING",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "DATA & AI",
    skills: ["Data Analytics", "Machine Learning", "Artificial Intelligence", "Data Visualization"],
  },
  {
    category: "DEVELOPMENT",
    skills: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
  },
  {
    category: "ENGINEERING",
    skills: ["Git", "GitHub", "Testing", "CI/CD", "REST/API Concepts"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32" aria-labelledby="skills-heading">
      <div className="editorial-grid">
        <SectionLabel number="06" label="SKILLS" className="col-span-12 lg:col-span-2" />

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              >
                <h4 className="font-body text-meta text-slate uppercase tracking-widest mb-4">{cat.category}</h4>
                <ul className="space-y-3" role="list">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="font-body text-body text-charcoal border-b border-border/50 pb-3 last:border-0"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.08 + skillIndex * 0.03 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}