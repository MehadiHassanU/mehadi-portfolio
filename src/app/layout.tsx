import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD. Mehadi Hassan — Computer Science, AI, Data & Technology",
  description: "MD. Mehadi Hassan is a Computer Science student at East West University exploring Artificial Intelligence, Data Science, software development, and technology entrepreneurship.",
  openGraph: {
    title: "MD. Mehadi Hassan — Computer Science, AI, Data & Technology",
    description: "MD. Mehadi Hassan is a Computer Science student at East West University exploring Artificial Intelligence, Data Science, software development, and technology entrepreneurship.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
