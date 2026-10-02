import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrintButton } from "@/components/PrintButton";
import { getProjectSummaries } from "@/lib/projects";
import { skillCategories } from "@/lib/skills";
import "./print.css";

export const metadata: Metadata = {
  title: "CV — MD. Mehadi Hassan",
  description:
    "Curriculum vitae of MD. Mehadi Hassan — IT Executive, founder, and Computer Science & Engineering student at East West University.",
};

const experience = [
  {
    role: "Founder",
    company: "Synistic Media LTD",
    period: "Present",
    detail:
      "Technology venture working across digital marketing, data-driven customer acquisition and the commercial application of software.",
  },
  {
    role: "IT Executive (part-time)",
    company: "Farabi General Hospital LTD",
    period: "Feb 2024 – Present",
    detail:
      "Maintain hardware and software functionality, troubleshoot for clinical and administrative staff to minimise downtime, and support data security, system updates and IT protocol compliance.",
  },
];

export default function CvPage() {
  const projects = getProjectSummaries();

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20 pb-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          {/* Identity */}
          <header className="print-block">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[3px] bg-accent shrink-0" aria-hidden="true" />
              <span className="font-body text-meta text-slate uppercase tracking-widest">
                Curriculum Vitae
              </span>
            </div>
            <h1 className="font-display text-display-lg font-medium text-charcoal leading-[0.95]">
              MD. Mehadi Hassan
            </h1>
            <p className="mt-4 font-body text-body-lg text-slate">
              Computer Science &amp; Engineering student, major in Data Science.
              Building software that runs in production and models that hold up to
              a metric.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 font-body text-body-sm">
              <div className="flex gap-3">
                <dt className="text-cool uppercase shrink-0 w-20">Email</dt>
                <dd>
                  <a
                    href="mailto:uthomehedihasan@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    uthomehedihasan@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-cool uppercase shrink-0 w-20">Phone</dt>
                <dd>
                  <a href="tel:+8801870200163" className="hover:text-accent transition-colors">
                    +880 1870 200 163
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-cool uppercase shrink-0 w-20">GitHub</dt>
                <dd>
                  <a
                    href="https://github.com/MehadiHassanU"
                    className="hover:text-accent transition-colors"
                  >
                    github.com/MehadiHassanU
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-cool uppercase shrink-0 w-20">LinkedIn</dt>
                <dd>
                  <a
                    href="https://linkedin.com/in/mehadihassanu"
                    className="hover:text-accent transition-colors"
                  >
                    linkedin.com/in/mehadihassanu
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <PrintButton />
            </div>
          </header>

          {/* Education */}
          <section className="mt-16 print-block" aria-labelledby="cv-education">
            <h2
              id="cv-education"
              className="font-body text-meta text-charcoal uppercase font-medium tracking-widest border-b-2 border-charcoal pb-2 mb-6"
            >
              Education
            </h2>
            <div className="space-y-5 font-body text-body-sm">
              <div>
                <p className="font-medium text-charcoal text-body">
                  B.Sc. Computer Science &amp; Engineering — Major in Data Science
                </p>
                <p className="text-slate">East West University · 2023 – Ongoing</p>
                <p className="text-slate">
                  GPA 4.92 / 5.00 · Expected graduation mid-2027 · IELTS 7.5 (no
                  band below 6.5)
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mt-12 print-block" aria-labelledby="cv-experience">
            <h2
              id="cv-experience"
              className="font-body text-meta text-charcoal uppercase font-medium tracking-widest border-b-2 border-charcoal pb-2 mb-6"
            >
              Experience
            </h2>
            <div className="space-y-5 font-body text-body-sm">
              {experience.map((item) => (
                <div key={item.company}>
                  <p className="font-medium text-charcoal text-body">
                    {item.role} — {item.company}
                  </p>
                  <p className="text-slate">{item.period}</p>
                  <p className="text-graphite mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          

          {/* Projects */}
          <section className="mt-12 print-block" aria-labelledby="cv-projects">
            <h2
              id="cv-projects"
              className="font-body text-meta text-charcoal uppercase font-medium tracking-widest border-b-2 border-charcoal pb-2 mb-6"
            >
              Projects
            </h2>
            <ul className="space-y-3 font-body text-body-sm">
              {projects.map((project) => (
                <li key={project.slug}>
                  <span className="font-medium text-charcoal">
                    {project.title}
                  </span>
                  <span className="text-slate"> — {project.subtitle}</span>
                  <span className="text-cool">
                    {" "}
                    · {project.tech.slice(0, 4).join(", ")} · {project.year}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="mt-12 print-block" aria-labelledby="cv-skills">
            <h2
              id="cv-skills"
              className="font-body text-meta text-charcoal uppercase font-medium tracking-widest border-b-2 border-charcoal pb-2 mb-6"
            >
              Skills
            </h2>
            <dl className="space-y-3 font-body text-body-sm">
              {skillCategories.map((group) => (
                <div key={group.category} className="flex gap-3">
                  <dt className="text-cool uppercase shrink-0 w-32">{group.category}</dt>
                  <dd className="text-graphite">{group.skills.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}