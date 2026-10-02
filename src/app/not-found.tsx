import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Page Not Found — MD. Mehadi Hassan",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <section className="min-h-[70vh] flex items-center">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 py-20">
              <div className="swiss-frame p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-3 bg-accent" aria-hidden="true" />
                <p className="font-body text-meta text-slate uppercase tracking-widest">Error 404</p>
              </div>
              <h1 className="font-display text-display-lg font-medium text-charcoal mb-6">
                PAGE NOT FOUND.
              </h1>
              <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl mb-12">
                The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-6 py-4 border border-border text-charcoal font-body text-meta uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                >
                  BACK HOME
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-3 px-6 py-4 border border-border text-charcoal font-body text-meta uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                >
                  VIEW WORK
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}