import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "MD. Mehadi Hassan — Computer Science, AI, Data & Technology";
const description =
  "MD. Mehadi Hassan is a Computer Science student at East West University exploring Artificial Intelligence, Data Science, software development, and technology entrepreneurship.";

/**
 * Absolute OG/Twitter URLs need a real origin. Prefer an explicit
 * NEXT_PUBLIC_SITE_URL, then Vercel's build-time VERCEL_URL, then localhost so a
 * local preview still resolves instead of emitting the invalid "http://localhost:0"
 * that Next produces when metadataBase is undefined at build time.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);

if (process.env.NODE_ENV === "production" && siteUrl === null) {
  console.warn(
    "[metadata] NEXT_PUBLIC_SITE_URL is not set, so social cards will point at " +
      "http://localhost:3000. Set NEXT_PUBLIC_SITE_URL in the deployment environment."
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "MD. Mehadi Hassan",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-charcoal focus:text-swiss font-body text-meta uppercase"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}