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
    <section id="contact" className="py-20 lg:py-32" aria-labelledby="contact-heading">
      <div className="editorial-grid">
        <SectionLabel number="09" label="CONTACT" className="col-span-12 lg:col-span-2" />

        <motion.div
          className="col-span-12 lg:col-span-5 lg:col-start-3 mt-8 lg:mt-0"
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

        <motion.div
          className="col-span-12 lg:col-span-5 lg:col-start-9 mt-12 lg:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <ul className="space-y-6" role="list">
            {contactLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 px-6 py-5 border border-border hover:border-accent hover:bg-silver/20 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 text-slate group-hover:text-accent transition-colors shrink-0" aria-hidden="true" />
                  <div className="flex-1">
                    <span className="font-body text-meta text-slate uppercase tracking-widest block mb-1">{link.label}</span>
                    <span className="font-body text-body text-charcoal">{link.description}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cool group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}