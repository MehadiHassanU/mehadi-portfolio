import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact — MD. Mehadi Hassan",
  description: "Get in touch with MD. Mehadi Hassan — Computer Science student exploring AI, data, and technology.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}