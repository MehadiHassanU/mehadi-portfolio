import { GitBranch, Link as LinkIcon, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16" role="contentinfo">
      <div className="editorial-grid">
        <div className="col-span-12 lg:col-span-4">
          <p className="font-display font-medium text-charcoal mb-2">MD. MEHADI HASSAN</p>
          <p className="font-body text-body text-slate">Computer Science · AI · Data · Business</p>
        </div>

        <div className="col-span-12 lg:col-span-4 flex items-center gap-6 mt-8 lg:mt-0">
          <a
            href="https://github.com/MehadiHassanU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cool hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/mehadihassanu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cool hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkIcon className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="mailto:uthomehedihasan@gmail.com"
            className="text-cool hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <div className="col-span-12 lg:col-span-4 text-right mt-8 lg:mt-0">
          <p className="font-body text-meta text-slate uppercase tracking-widest">
            © {new Date().getFullYear()} MD. Mehadi Hassan
          </p>
        </div>
      </div>
    </footer>
  );
}