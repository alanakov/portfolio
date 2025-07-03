import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AboutMe from "./sections/AboutMe";
import Home from "./sections/Home";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 px-4 md:px-10 lg:px-20 xl:px-60 py-10 md:py-20 lg:py-40">
        <div>
          <Home />
        </div>
        <div className="mx-20">
          <div className="mt-60">
            <AboutMe />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
