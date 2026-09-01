"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";
import { Mail, Link, GitBranch, ArrowRight } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:uthomehedihasan@gmail.com",
      icon: Mail,
      description: "uthomehedihasan@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mehadihassanu",
      icon: Link,
      description: "linkedin.com/in/mehadihassanu",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/MehadiHassanU",
      icon: GitBranch,
      description: "github.com/MehadiHassanU",
      external: true,
    },
  ];

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) + heading (cols 4–12) */}
        <SectionLabel
          number="09"
          label="CONTACT"
          className="col-span-12 lg:col-span-3"
        />

        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading lines={["HAVE AN IDEA?", "LET'S TALK."]} size="lg" stagger={0.1} className="mb-6" />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl">
            Whether you're interested in a project, collaboration, technology, research, or simply want to connect — I'd be happy to hear from you.
          </p>
        </motion.div>

        {/* Row 2: contact link cards (cols 4–12) */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {contactLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="swiss-card group flex items-center gap-4 px-6 py-5 h-full"
                  aria-label={link.label}
                >
                  <span className="w-11 h-11 border border-charcoal flex items-center justify-center shrink-0 text-slate group-hover:bg-accent group-hover:border-accent group-hover:text-swiss transition-colors">
                    <link.icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="font-body text-meta text-slate uppercase block mb-1">{link.label}</span>
                    <span className="font-body text-body-sm text-charcoal break-all">{link.description}</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}