import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "pt"
  );

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 mx-40">
      <div className="flex items-center">
        <label className="text-2xl font-bold">Alana</label>
      </div>
      <div className="flex items-center gap-8">
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
    </nav>
  );
}
