import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";

export function useNavbar() {
  const scrolled = useScrolled();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return {
    scrolled,
    isMobileMenuOpen,
    openMobileMenu: () => setIsMobileMenuOpen(true),
    closeMobileMenu: () => setIsMobileMenuOpen(false),
  };
}
