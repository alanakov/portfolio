import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import NavItem from "./NavItem";
import Backdrop from "./Backdrop";
import { NAV_LINKS } from "@/constants";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  useEscapeKey(onClose, isOpen);
  useLockBodyScroll(isOpen);

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-40 overflow-hidden lg:hidden",
        isOpen ? "" : "pointer-events-none"
      )}
    >
      <Backdrop isVisible={isOpen} onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
        className={cn(
          "absolute top-0 right-0 z-50 flex h-full w-72 max-w-[80vw] flex-col gap-8 border-l border-border bg-surface p-8 shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={onClose}
          aria-label={t("common.language")}
          className="self-end cursor-pointer text-foreground/60 hover:text-accent"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.sectionId}
              sectionId={link.sectionId}
              onNavigate={onClose}
              className="cursor-pointer text-left text-lg font-semibold text-foreground hover:text-accent"
            >
              <span className="mr-1 text-accent">#</span>
              {t(link.labelKey)}
            </NavItem>
          ))}

          <LanguageSwitcher />
        </nav>
      </div>
    </div>
  );
}
