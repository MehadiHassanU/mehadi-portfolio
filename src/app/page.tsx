import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Trajectory } from "@/components/Trajectory";
import { ProjectIndex } from "@/components/ProjectIndex";
import { Research } from "@/components/Research";
import { CuriosityTicker } from "@/components/CuriosityTicker";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { BeyondCode } from "@/components/BeyondCode";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects().map(({ slug, meta }, index) => ({
    number: String(index + 1).padStart(2, "0"),
    slug,
    title: meta.title.toUpperCase(),
    subtitle: meta.subtitle,
    description: meta.description,
    category: meta.category,
    year: meta.year,
    tech: meta.tech,
    github: meta.github,
    featured: meta.featured,
  }));

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <Hero />
        <About />
        <Trajectory />
        <ProjectIndex projects={projects} />
        <Research />
        <CuriosityTicker />
        <Experience />
        <Skills />
        <Education />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}