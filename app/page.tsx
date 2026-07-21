import Header from "@/components/Header";
import ProjectSizes from "@/components/ProjectSizes";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Nuancier from "@/components/Nuancier";
import PopularFinishes from "@/components/PopularFinishes";
import Projects from "@/components/Projects";
// import Services from "@/components/Services";

import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ScrollFX";

export default function Home() {
  return (
    <main className="site-shell min-h-screen text-[#191713]">
      <ScrollFX />
      <Header />
      <Hero />

<div className="site-flow">
  <BeforeAfter />

  <PopularFinishes />

  <Nuancier />

  <Projects />

  <Process />

  <ProjectSizes />

  {/* <Services /> */}

  <CTA />

  <Footer />
</div>
    </main>
  );
}