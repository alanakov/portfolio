import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stroke">
      <div className="container mx-auto px-4 py-8 flex items-center gap-4 justify-between">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Alana.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/alana-dev"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alana-dev/"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transition-colors duration-200"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
