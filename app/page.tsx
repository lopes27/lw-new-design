import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <Projects />
      <WhyChooseUs />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}