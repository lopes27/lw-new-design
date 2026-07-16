 import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Resurface from "@/components/Resurface";
import Services from "@/components/Services";
import Finishes from "@/components/Finishes";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-shell min-h-screen text-[#191713]">
      <Header />
      <Hero />

      <div className="site-flow">
        <BeforeAfter />
        <Resurface />
        <Services />
        <Finishes />
        <Projects />
        <WhyChooseUs />
        <Process />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}