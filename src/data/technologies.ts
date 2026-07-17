import type { Technology, TechnologyFilter } from "@/types";

export const TECHNOLOGIES: Technology[] = [
  { name: "HTML", image: "/assets/images/technologies/html.svg", category: "frontend" },
  { name: "CSS", image: "/assets/images/technologies/css.svg", category: "frontend" },
  { name: "JavaScript", image: "/assets/images/technologies/javascript.svg", category: "frontend" },
  { name: "TypeScript", image: "/assets/images/technologies/typescript.svg", category: "frontend" },
  { name: "React", image: "/assets/images/technologies/react.svg", category: "frontend" },
  { name: "Tailwind", image: "/assets/images/technologies/tailwind.svg", category: "frontend" },
  { name: "shadcn/ui", image: "/assets/images/technologies/shadcn.png", category: "frontend" },
  { name: "Node.js", image: "/assets/images/technologies/nest.svg", category: "backend" },
  { name: "Java", image: "/assets/images/technologies/java.svg", category: "backend" },
  { name: "Spring Boot", image: "/assets/images/technologies/spring-boot.svg", category: "backend" },
  { name: "Express", image: "/assets/images/technologies/express.png", category: "backend" },
  { name: "MySQL", image: "/assets/images/technologies/mysql.svg", category: "backend" },
  { name: "PHP", image: "/assets/images/technologies/php.svg", category: "backend" },
  { name: "Docker", image: "/assets/images/technologies/docker.svg", category: "outros" },
  { name: "Git", image: "/assets/images/technologies/git.svg", category: "outros" },
  { name: "Figma", image: "/assets/images/technologies/figma.svg", category: "outros" },
];

export const TECHNOLOGY_FILTERS: TechnologyFilter[] = [
  { key: "todas", labelKey: "technologies.filters.todas" },
  { key: "frontend", labelKey: "technologies.filters.frontend" },
  { key: "backend", labelKey: "technologies.filters.backend" },
  { key: "outros", labelKey: "technologies.filters.outros" },
];
