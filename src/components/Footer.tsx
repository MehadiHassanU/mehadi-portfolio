import { GitBranch, Link as LinkIcon, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-charcoal" role="contentinfo">
      {/* Red accent strip */}
      <div className="h-1 bg-accent" aria-hidden="true" />

      <div className="editorial-grid py-10 lg:py-12 items-center">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
            <p className="font-body text-meta text-charcoal uppercase font-medium">MD. MEHADI HASSAN</p>
          </div>
          <p className="font-body text-body-sm text-slate">Computer Science · AI · Data · Business</p>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:col-start-8 flex items-center gap-4 mt-6 lg:mt-0">
          <a
            href="https://github.com/MehadiHassanU"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-charcoal flex items-center justify-center text-slate hover:bg-accent hover:border-accent hover:text-swiss transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/mehadihassanu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-charcoal flex items-center justify-center text-slate hover:bg-accent hover:border-accent hover:text-swiss transition-colors"
            aria-label="LinkedIn"
          >
            <LinkIcon className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="tel:+8801870200163"
            className="w-10 h-10 border border-charcoal flex items-center justify-center text-slate hover:bg-accent hover:border-accent hover:text-swiss transition-colors"
            aria-label="Phone"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="mailto:utshomehedihasan@gmail.com"
            className="w-10 h-10 border border-charcoal flex items-center justify-center text-slate hover:bg-accent hover:border-accent hover:text-swiss transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:text-right mt-6 lg:mt-0">
          <p className="font-body text-meta text-slate uppercase">
            © {new Date().getFullYear()} MD. Mehadi Hassan
          </p>
        </div>
      </div>
    </footer>
  );
}