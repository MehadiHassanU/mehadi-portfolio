import { Header } from "@/components/Header";
import { ProjectIndex } from "@/components/ProjectIndex";
import { Footer } from "@/components/Footer";

const projects = [
  {
    number: "01",
    title: "APPARELSYNC",
    subtitle: "Retail POS & CRM",
    description:
      "A full-stack point-of-sale and customer relationship management system built for a Bangladeshi apparel retailer.",
    category: "Full-Stack Application",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/MehadiHassanU/apparelsync",
    featured: true,
  },
  {
    number: "02",
    title: "DIAMOND PRICE PREDICTOR",
    subtitle: "Data Science / Machine Learning",
    description:
      "A machine learning project exploring how different diamond characteristics influence market price and using those patterns to predict diamond values.",
    category: "Machine Learning",
    year: "2025",
    tech: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Jupyter"],
    github: "https://github.com/MehadiHassanU/diamond-price-predictor",
  },
  {
    number: "03",
    title: "BRANCH PREDICTOR",
    subtitle: "Computer Architecture",
    description:
      "An exploration of branch prediction mechanisms and how processors use historical branch behavior to improve instruction execution.",
    category: "Computer Architecture",
    year: "2025",
    tech: ["C++", "Simulation", "Algorithm Design"],
    github: "https://github.com/MehadiHassanU/branch-predictor",
  },
  {
    number: "04",
    title: "HOTEL MANAGEMENT SYSTEM",
    subtitle: "Java / Software Development",
    description:
      "A Java-based application developed to explore object-oriented programming, application logic, and management workflows.",
    category: "Software Development",
    year: "2024",
    tech: ["Java", "OOP", "Swing", "JDBC"],
    github: "https://github.com/MehadiHassanU/hotel-management",
  },
  {
    number: "05",
    title: "CONTACT MANAGEMENT SYSTEM",
    subtitle: "C / Programming Fundamentals",
    description:
      "A programming project focused on implementing a practical contact management workflow while strengthening programming fundamentals and data handling.",
    category: "Systems Programming",
    year: "2024",
    tech: ["C", "Data Structures", "File I/O"],
    github: "https://github.com/MehadiHassanU/contact-management",
  },
  {
    number: "06",
    title: "GRAPH ANALYSIS",
    subtitle: "Discrete Mathematics / Algorithms",
    description:
      "A project exploring graph representation and algorithmic concepts through randomly generated undirected graphs and adjacency matrices.",
    category: "Algorithms",
    year: "2023",
    tech: ["Python", "NetworkX", "Graph Theory", "Adjacency Matrices"],
    github: "https://github.com/MehadiHassanU/graph-analysis",
  },
];

export const metadata = {
  title: "Work — MD. Mehadi Hassan",
  description: "Selected projects and work by MD. Mehadi Hassan, exploring AI, data, software, and business.",
};

export default function WorkPage() {
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