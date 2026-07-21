import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import NavItem from "./NavItem";
import { FOOTER_LINKS, SECTION_IDS, SITE_CONFIG } from "@/constants";
import { scrollToSection } from "@/utils/scroll";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="pb-16 text-center text-xs text-foreground/35">
        <button
          onClick={() => scrollToSection(SECTION_IDS.home)}
          className="cursor-pointer hover:text-accent"
        >
          {t("common.backToTop")}
        </button>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-border-soft px-6 py-9 text-[12.5px] text-foreground/55 lg:px-16">
        <nav className="flex flex-col gap-2">
          {FOOTER_LINKS.map((link) => (
            <NavItem
              key={link.sectionId}
              sectionId={link.sectionId}
              className="cursor-pointer text-left hover:text-foreground"
            >
              {t(link.labelKey)}
            </NavItem>
          ))}
        </nav>

        <div className="flex flex-col items-end gap-3">
          <span>{t("footer.mediaLabel")}</span>
          <div className="flex gap-2.5">
            <IconButton
              as="a"
              size="sm"
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={12} />
            </IconButton>
            <IconButton
              as="a"
              size="sm"
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={12} />
            </IconButton>
            <IconButton as="a" size="sm" href={`mailto:${SITE_CONFIG.email}`} aria-label="E-mail">
              <Mail size={12} />
            </IconButton>
          </div>
        </div>
      </footer>
    </>
  );
}
