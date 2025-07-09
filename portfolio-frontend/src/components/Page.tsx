import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 px-4 md:px-10 lg:px-20 xl:px-60 py-10 md:py-20 lg:py-40">
        <div id="home">
          <Home />
        </div>
        <div className="mx-2 md:mx-8 lg:mx-20">
          <div className="mt-20 md:mt-32 lg:mt-60">
            <div id="about-me" className="mb-32 md:mb-40 lg:mb-48">
              <AboutMe />
            </div>
            <div id="experiences" className="mb-32 md:mb-40 lg:mb-48">
              <Experiences />
            </div>
            <div id="projects" className="mb-32 md:mb-40 lg:mb-48">
              <Projects />
            </div>
            <div id="technologies" className="mb-32 md:mb-40 lg:mb-48">
              <Technologies />
            </div>
            <div id="contact">
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
