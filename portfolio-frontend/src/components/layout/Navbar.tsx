import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "pt"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 px-4 lg:px-20 bg-background">
      <div className="flex items-center">
        <label className="text-2xl font-bold">Alana</label>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <a href="#home" className="flex hover:text-white transition-colors">
          <p className="text-redPrimary">#</p>
          {t("navbar.home")}
        </a>
        <a href="#about-me" className="flex hover:text-white transition-colors">
          <p className="text-redPrimary">#</p>
          {t("navbar.about")}
        </a>
        <a href="#projects" className="flex hover:text-white transition-colors">
          <p className="text-redPrimary">#</p>
          {t("navbar.projects")}
        </a>
        <a href="#contact" className="flex hover:text-white transition-colors">
          <p className="text-redPrimary">#</p>
          {t("navbar.contact")}
        </a>
        <div className="flex items-center gap-8">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="border-none cursor-pointer font-semibold ">
              <div className="flex items-center gap-2">
                <img
                  src={
                    selectedLanguage === "pt"
                      ? "/assets/images/flag-brazil.svg"
                      : "/assets/images/flag-usa.svg"
                  }
                  alt={
                    selectedLanguage === "pt" ? "Bandeira do Brasil" : "US Flag"
                  }
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span>{selectedLanguage === "pt" ? "PT-BR" : "EN-US"}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="cursor-pointer hover:text-white"
                value="pt"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/flag-brazil.svg"
                    alt="Bandeira do Brasil"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  PT-BR
                </div>
              </SelectItem>
              <SelectItem
                className="cursor-pointer hover:text-white"
                value="en"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/flag-usa.svg"
                    alt="US Flag"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  EN-US
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Mobile menu button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Abrir menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>
      {/* Mobile drawer menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background-secondary z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col p-8 gap-8`}
        style={{ minWidth: "16rem" }}
      >
        <button
          className="self-end mb-4 text-2xl text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          &times;
        </button>
        <a
          href="#home"
          className="text-xl font-semibold hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-redPrimary">#</span>
          {t("navbar.home")}
        </a>
        <a
          href="#about-me"
          className="text-xl font-semibold hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-redPrimary">#</span>
          {t("navbar.about")}
        </a>
        <a
          href="#projects"
          className="text-xl font-semibold hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-redPrimary">#</span>
          {t("navbar.projects")}
        </a>
        <a
          href="#contact"
          className="text-xl font-semibold hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-redPrimary">#</span>
          {t("navbar.contact")}
        </a>
        <div className="flex items-center gap-4 mt-4">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="border-none cursor-pointer font-semibold ">
              <div className="flex items-center gap-2">
                <img
                  src={
                    selectedLanguage === "pt"
                      ? "/assets/images/flag-brazil.svg"
                      : "/assets/images/flag-usa.svg"
                  }
                  alt={
                    selectedLanguage === "pt" ? "Bandeira do Brasil" : "US Flag"
                  }
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span>{selectedLanguage === "pt" ? "PT-BR" : "EN-US"}</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                className="cursor-pointer hover:text-white"
                value="pt"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/flag-brazil.svg"
                    alt="Bandeira do Brasil"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  PT-BR
                </div>
              </SelectItem>
              <SelectItem
                className="cursor-pointer hover:text-white"
                value="en"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/flag-usa.svg"
                    alt="US Flag"
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  EN-US
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  );
}
