import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProjectIndex } from "@/components/ProjectIndex";
import { Footer } from "@/components/Footer";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — MD. Mehadi Hassan",
  description: "Selected projects and work by MD. Mehadi Hassan, exploring AI, data, software, and business.",
};

export default function WorkPage() {
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
      <main id="main-content" className="flex-1 pt-20">
        <ProjectIndex projects={projects} label="01" headline="SELECTED WORK" id="work" />
      </main>
      <Footer />
    </>
  );
}