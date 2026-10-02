"use client";

/**
 * Calls window.print(), which browsers offer to save as PDF. The CV is a page
 * rather than a file so it never needs to be uploaded, and so it stays correct:
 * the published PDF in this project history carried a home address and an
 * out-of-date role, and a stale file on disk is exactly how that keeps
 * happening.
 *
 * Hidden from print output by .no-print in src/app/cv/print.css.
 */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-3 border border-charcoal px-5 py-3 font-body text-meta uppercase tracking-widest text-charcoal hover:bg-charcoal hover:text-swiss transition-colors cursor-pointer"
    >
      Print / Save as PDF
    </button>
  );
}