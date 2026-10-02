import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProjectIndex } from "@/components/ProjectIndex";
import { Footer } from "@/components/Footer";
import { getProjectSummaries } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Academic Projects — MD. Mehadi Hassan",
  description:
    "Academic projects by MD. Mehadi Hassan, spanning full-stack application development, machine learning, computer architecture, and algorithms.",
};

export default function WorkPage() {
  const projects = getProjectSummaries();

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <ProjectIndex projects={projects} label="01" headline="ACADEMIC PROJECTS" id="work" />
      </main>
      <Footer />
    </>
  );
}