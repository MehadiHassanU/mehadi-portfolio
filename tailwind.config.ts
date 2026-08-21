import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--swiss-charcoal)",
        graphite: "var(--graphite)",
        slate: "var(--slate-gray)",
        cool: "var(--cool-gray)",
        silver: "var(--silver-gray)",
        swiss: "var(--swiss-white)",
        accent: "var(--swiss-red)",
      },
      fontFamily: {
        display: ["var(--font-inter)"],
        body: ["var(--font-inter)"],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "12px",
        "space-4": "16px",
        "space-5": "20px",
        "space-6": "24px",
        "space-7": "28px",
        "space-8": "32px",
        "space-9": "36px",
        "space-10": "40px",
        "space-11": "44px",
        "space-12": "48px",
        "space-13": "52px",
        "space-14": "56px",
        "space-15": "60px",
        "space-16": "64px",
      },
      fontSize: {
        // Fluid type scale using clamp
        "display-xl": ["clamp(4rem, 8vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-lg": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-md": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "500" }],
        "section": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["clamp(1.125rem, 1.5vw, 1.25rem)", { lineHeight: "1.6", letterSpacing: "0" }],
        "body": ["clamp(1rem, 1.25vw, 1.125rem)", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-sm": ["clamp(0.875rem, 1vw, 1rem)", { lineHeight: "1.6", letterSpacing: "0" }],
        "meta": ["clamp(0.75rem, 0.875vw, 0.875rem)", { lineHeight: "1.5", letterSpacing: "0.15em", textTransform: "uppercase" }],
      },
    },
  },
  plugins: [],
};

export default config;