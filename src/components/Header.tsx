"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GitBranch, Link as LinkIcon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#research", label: "Research" },
  { href: "/#beyond", label: "Beyond Code" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-swiss/95 backdrop-blur-sm border-b border-charcoal" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 h-16 lg:h-20 flex items-center justify-between gap-8"
        aria-label="Main navigation"
      >
        {/* Logo / Name — single line, never wraps */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group"
          aria-label="MD. Mehadi Hassan — Home"
        >
          <span className="w-3 h-3 bg-accent shrink-0" aria-hidden="true" />
          <span className="font-body text-meta text-charcoal uppercase font-medium whitespace-nowrap group-hover:text-accent transition-colors">
            MD. MEHADI HASSAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-meta text-slate uppercase hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all hover:after:w-full whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Social */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href="https://github.com/MehadiHassanU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cool hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/mehadihassanu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cool hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkIcon className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-charcoal hover:text-accent transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-swiss flex flex-col items-center justify-center gap-12 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              className="absolute top-6 right-6 p-2 text-charcoal hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center gap-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-display text-display-md font-medium text-charcoal hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-8 pt-8">
              <a
                href="https://github.com/MehadiHassanU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="w-7 h-7" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/mehadihassanu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkIcon className="w-7 h-7" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}