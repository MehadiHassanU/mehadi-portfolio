import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { CaseStudy } from "@/components/CaseStudy";
import { Footer } from "@/components/Footer";
import { getAllProjects, getProjectBySlug, getProjectSummaries } from "@/lib/projects";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found — MD. Mehadi Hassan" };
  }

  const { meta } = project;
  const title = `${meta.title} — MD. Mehadi Hassan`;
  const description = meta.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Projects are sorted newest first. Summaries carry the index numbering and
  // the display case, so the next-project link matches the index exactly.
  const allProjects = getProjectSummaries();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : undefined;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <CaseStudy
          meta={project.meta}
          slug={slug}
          number={String(currentIndex + 1).padStart(2, "0")}
          nextProject={
            nextProject
              ? {
                  slug: nextProject.slug,
                  title: nextProject.title,
                  subtitle: nextProject.subtitle,
                }
              : undefined
          }
        />
      </main>
      <Footer />
    </>
  );
}
