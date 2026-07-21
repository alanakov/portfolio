const NAVBAR_OFFSET = 80;

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;

  document.body.style.overflow = "";

  const elementPosition = element.offsetTop - NAVBAR_OFFSET;
  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
}
