import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{/* Conteúdo principal vai aqui */}</main>
      <Footer />
    </div>
  );
}

export default App;
