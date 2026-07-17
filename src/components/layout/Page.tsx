import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScanlineOverlay from "@/components/common/ScanlineOverlay";
import SocialRail from "@/components/common/SocialRail";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScanlineOverlay />
      <SocialRail />

      <Navbar />

      <Hero />

      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16 xl:pl-30">
        <AboutMe />
        <Experiences />
        <Projects />
        <Technologies />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
