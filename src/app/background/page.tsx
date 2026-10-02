import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { DisplayHeading } from "@/components/DisplayHeading";
import { About } from "@/components/About";
import { Trajectory } from "@/components/Trajectory";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Background — MD. Mehadi Hassan",
  description:
    "Background, trajectory and education of MD. Mehadi Hassan, Computer Science student at East West University.",
};

export default function BackgroundPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <section className="section" aria-labelledby="background-heading">
          <div className="editorial-grid">
            <p className="col-span-12 lg:col-span-3 font-body text-meta text-slate uppercase tracking-widest">
              Background
            </p>
            <div className="col-span-12 lg:col-span-9 lg:col-start-4">
              <DisplayHeading
                lines={["The longer", "version."]}
                size="lg"
                as="h1"
                id="background-heading"
              />
              <p className="mt-8 max-w-prose font-body text-body-lg text-slate">
                Where the work came from — the degree, the years behind it, the
                tools, and the direction things are heading.
              </p>
            </div>
          </div>
        </section>

        <About number="01" />
        <Trajectory number="02" />
        <Skills number="03" />
        <Education number="04" />
        <Contact number="05" />
      </main>
      <Footer />
    </>
  );
}