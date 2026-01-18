import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import ArtsDisciplines from "@/components/ArtsDisciplines";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import HowToHelp from "@/components/HowToHelp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Modernismo Humanista - Home Page
 * Página principal que integra todas las secciones de la fundación
 * Paleta: Verde oliva, terracota, crema y tonos cálidos
 * Tipografía: Playfair Display (títulos) + Lato (body)
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhatWeDo />
        <ArtsDisciplines />
        <Testimonials />
        <Projects />
        <HowToHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
