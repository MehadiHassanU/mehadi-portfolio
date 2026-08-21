import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudy } from "@/components/CaseStudy";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.meta.title} — MD. Mehadi Hassan`,
    description: project.meta.description,
    openGraph: {
      title: `${project.meta.title} — MD. Mehadi Hassan`,
      description: project.meta.description,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <CaseStudy meta={project.meta} slug={resolvedParams.slug} />
      </main>
      <Footer />
    </>
  );
}