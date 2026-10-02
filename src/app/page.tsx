import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectIndex } from "@/components/ProjectIndex";
import { CuriosityTicker } from "@/components/CuriosityTicker";
import { Experience } from "@/components/Experience";
import { BeyondCode } from "@/components/BeyondCode";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getProjectSummaries } from "@/lib/projects";

/**
 * The homepage is an argument, not a CV. It leads with the work, states the
 * professional context that produced it, and stops. About, Trajectory, Skills
 * and Education live at /background — they were competing with the projects for
 * attention and, being lists of nouns, they were winning.
 */
export default function Home() {
  const projects = getProjectSummaries();
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <Hero />
        <ProjectIndex
          projects={featured.length > 0 ? featured : projects}
          label="01"
          footerLink={{
            href: "/work",
            label: `All ${projects.length} projects`,
          }}
        />
        <CuriosityTicker number="02" />
        <Experience number="03" />
        <BeyondCode number="04" />
        <Contact number="05" />
      </main>
      <Footer />
    </>
  );
}