import type { ReactNode } from "react";
import { scrollToSection } from "@/utils/scroll";

interface NavItemProps {
  sectionId: string;
  className: string;
  onNavigate?: () => void;
  children: ReactNode;
}

export default function NavItem({ sectionId, className, onNavigate, children }: NavItemProps) {
  function handleClick() {
    scrollToSection(sectionId);
    onNavigate?.();
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
