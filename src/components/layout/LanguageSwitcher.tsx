import { useTranslation } from "react-i18next";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t } = useTranslation();
  const { containerRef, isOpen, currentLanguage, toggleOpen, selectLanguage, languages } =
    useLanguageSwitcher();

  return (
    <div ref={containerRef} className={cn("relative self-start", className)}>
      <button
        type="button"
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t("common.language")}
        className="flex cursor-pointer items-center gap-1 border-l border-border-soft pl-5 text-foreground/50 hover:text-foreground"
      >
        {currentLanguage.code.toUpperCase()}
        <span className="text-[9px]">▾</span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-10 mt-2 w-32 rounded-md border border-border bg-surface py-1 shadow-lg"
        >
          {languages.map((language) => (
            <li key={language.code}>
              <button
                type="button"
                role="option"
                aria-selected={language.code === currentLanguage.code}
                onClick={() => selectLanguage(language.code)}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-xs hover:text-accent",
                  language.code === currentLanguage.code ? "text-accent" : "text-foreground/70"
                )}
              >
                <img
                  src={language.flag}
                  alt={language.flagAlt}
                  className="h-4 w-5 rounded-sm object-cover"
                />
                {language.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
