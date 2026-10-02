/**
 * Skills data lives here rather than inside Skills.tsx because Skills.tsx is a
 * client component, and a server component (the CV page) cannot import plain
 * values out of a "use client" module. One list, two consumers.
 */
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Data & AI",
    skills: [
      "Data Analytics",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Visualization",
    ],
  },
  {
    category: "Development",
    skills: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
  },
  {
    category: "Engineering",
    skills: ["Git", "GitHub", "Testing", "CI/CD", "REST/API Concepts"],
  },
];