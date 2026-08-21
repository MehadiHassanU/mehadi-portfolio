import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMeta {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured?: boolean;
  team?: string[];
  tech: string[];
  github?: string;
  demo?: string;
  description: string;
  problem: string;
  approach: string;
  implementation: string;
  outcome: string;
  learning: string;
  images: string[];
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs.readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): { meta: ProjectMeta; content: string } | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: data as ProjectMeta,
    content,
  };
}

export function getAllProjects(): Array<{ slug: string; meta: ProjectMeta }> {
  const slugs = getProjectSlugs();
  return slugs
    .map((slug) => {
      const project = getProjectBySlug(slug);
      if (!project) return null;
      return { slug, meta: project.meta };
    })
    .filter((p): p is { slug: string; meta: ProjectMeta } => p !== null)
    .sort((a, b) => parseInt(b.meta.year) - parseInt(a.meta.year));
}