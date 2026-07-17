import type { ProjectContent } from "@/types";

export const PROJECTS_DATA: ProjectContent[] = [
  {
    id: "1",
    stack: ["Java", "MySQL"],
    image: "/assets/images/projects/text-adventure.png",
    githubUrl: "https://github.com/alanakov/text-adventure-back",
  },
  {
    id: "2",
    stack: ["Java", "Spring Boot", "React", "Tailwind"],
    image: "/assets/images/projects/misticazoo.png",
    githubUrl: "https://github.com/alanakov/misticazoo-front",
  },
  {
    id: "3",
    stack: ["Docker", "Express", "React", "TypeScript", "Tailwind"],
    image: "/assets/images/projects/gibiverse.png",
    githubUrl: "https://github.com/alanakov/gibiverse",
  },
  {
    id: "4",
    stack: ["React", "Tailwind", "TypeScript"],
    image: "/assets/images/projects/codecam.png",
    liveUrl: "https://codecam.org.br",
  },
];
