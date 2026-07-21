export interface LanguageOption {
  code: "pt" | "en";
  label: string;
  flag: string;
  flagAlt: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "pt", label: "PT-BR", flag: "/assets/images/flag-brazil.svg", flagAlt: "Bandeira do Brasil" },
  { code: "en", label: "EN-US", flag: "/assets/images/flag-usa.svg", flagAlt: "US Flag" },
];
