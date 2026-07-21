import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { LANGUAGES } from "@/data/languages";

export function useLanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language) ?? LANGUAGES[0];

  function toggleOpen() {
    setIsOpen((open) => !open);
  }

  function selectLanguage(code: string) {
    i18n.changeLanguage(code);
    setIsOpen(false);
  }

  return { containerRef, isOpen, currentLanguage, toggleOpen, selectLanguage, languages: LANGUAGES };
}
