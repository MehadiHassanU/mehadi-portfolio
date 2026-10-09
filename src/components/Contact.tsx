"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";
import { Mail, Link, GitBranch, Phone } from "lucide-react";

/**
 * `number` is a prop rather than a literal because these sections now appear on
 * more than one route. Hard-coding it is how the numbering drifted out of sync
 * with page order the first time.
 */
export function Contact({ number }: { number: string }) {
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:utshomehedihasan@gmail.com",
      icon: Mail,
      description: "utshomehedihasan@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mehadihassanu",
      icon: Link,
      description: "linkedin.com/in/mehadihassanu",
      external: true,
    },
    {
      label: "Phone",
      href: "tel:+8801870200163",
      icon: Phone,
      description: "+880 1870 200 163",
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
          number={number}
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
          <DisplayHeading
            id="contact-heading"
            as="h2"
            lines={["HAVE AN IDEA?", "LET'S TALK."]}
            size="lg"
            stagger={0.1}
            className="mb-6"
          />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl">
            Whether you&apos;re interested in a project, collaboration, technology, research, or simply want to connect — I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        {/*
          Two columns, not four — and only from xl up.

          The longest value here is "utshomehedihasan@gmail.com", which needs 200px
          at 14px Inter. Four cards inside a 9-column span give only 177px of
          content width at 1440 — 23px short — and no amount of padding trimming
          closes that gap without making the cards look pinched.

          Two columns yield 270px of content at 1440 and at xl. At lg (1024) they
          yield only 174px, which is still 26px short, so the second column waits
          for xl and narrower viewports get a single full-measure box. Every
          address therefore sits on one line at every breakpoint.

          break-words stays as a safety net: it only engages if a value is ever
          genuinely too long, and then it breaks at a word rather than at an
          arbitrary character the way break-all did.
        */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6" role="list">
            {contactLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="swiss-card group flex items-center gap-4 sm:gap-6 border-2 border-charcoal px-5 sm:px-8 py-6 sm:py-7 h-full"
                >
                  <span className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-charcoal flex items-center justify-center shrink-0 text-slate transition-colors group-hover:bg-accent group-hover:border-accent group-hover:text-swiss">
                    <link.icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
                    <span className="font-body text-meta text-slate uppercase block mb-2">
                      {link.label}
                    </span>
                    <span className="font-body text-body-sm text-charcoal break-words block">
                      {link.description}
                    </span>
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