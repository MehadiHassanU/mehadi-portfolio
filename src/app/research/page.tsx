import { Header } from "@/components/Header";
import { Research } from "@/components/Research";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Research & Experiments — MD. Mehadi Hassan",
  description: "Technical explorations, experiments, and data-driven projects by MD. Mehadi Hassan.",
};

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <Research />
      </main>
      <Footer />
    </>
  );
}