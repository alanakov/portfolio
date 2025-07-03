import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 m-60">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
