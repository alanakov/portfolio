export const SECTION_IDS = {
  home: "home",
  about: "about",
  technologies: "technologies",
  experience: "experience",
  projects: "projects",
  contact: "contact",
} as const;

export const NAV_LINKS = [
  { sectionId: SECTION_IDS.home, labelKey: "navbar.home" },
  { sectionId: SECTION_IDS.about, labelKey: "navbar.about" },
  { sectionId: SECTION_IDS.technologies, labelKey: "navbar.technologies" },
  { sectionId: SECTION_IDS.experience, labelKey: "navbar.experience" },
  { sectionId: SECTION_IDS.projects, labelKey: "navbar.projects" },
  { sectionId: SECTION_IDS.contact, labelKey: "navbar.contact" },
] as const;

export const FOOTER_LINKS = NAV_LINKS;
