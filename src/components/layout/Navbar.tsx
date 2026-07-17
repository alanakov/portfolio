import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import NavItem from "./NavItem";
import { NAV_LINKS, SECTION_IDS, SITE_CONFIG } from "@/constants";
import { scrollToSection } from "@/utils/scroll";
import { useNavbar } from "@/hooks/useNavbar";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { t } = useTranslation();
  const { scrolled, isMobileMenuOpen, openMobileMenu, closeMobileMenu } = useNavbar();

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 flex items-center justify-between border-b transition-[background-color,padding,border-color] duration-[400ms]",
          scrolled
            ? "border-border-soft bg-surface/90 px-6 py-[18px] backdrop-blur-xl lg:px-16"
            : "border-transparent bg-surface/50 px-6 py-[26px] backdrop-blur-sm lg:px-16"
        )}
      >
        <button
          onClick={() => scrollToSection(SECTION_IDS.home)}
          className="cursor-pointer font-display text-[26px] tracking-wide"
        >
          {SITE_CONFIG.firstName}
          <span className="text-accent" style={{ textShadow: "0 0 10px rgba(220,50,50,0.6)" }}>
            _
          </span>
        </button>

        <nav className="hidden items-center gap-6 text-[13px] text-foreground/65 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.sectionId}
              sectionId={link.sectionId}
              className="cursor-pointer hover:text-foreground"
            >
              #{t(link.labelKey)}
            </NavItem>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          onClick={openMobileMenu}
          aria-label={t("navbar.home")}
          className="flex h-10 w-10 cursor-pointer items-center justify-center text-foreground lg:hidden"
        >
          <Menu size={22} />
        </button>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
