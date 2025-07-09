import { useState } from "react";
import CardTechnology from "./CardTechnology";

const tabs = [
  { label: "todas", value: "all" },
  { label: "frontend", value: "frontend" },
  { label: "backend", value: "backend" },
  { label: "outros", value: "others" },
];

const technologies = [
  {
    name: "React",
    percent: 40,
    image: "./assets/images/technologies/react.svg",
    category: "frontend",
  },
  {
    name: "Tailwind",
    percent: 60,
    image: "./assets/images/technologies/tailwind.svg",
    category: "frontend",
  },
  {
    name: "shadcn",
    percent: 30,
    image: "./assets/images/technologies/shadcn.png",
    category: "frontend",
  },
  {
    name: "JavaScript",
    percent: 50,
    image: "./assets/images/technologies/javascript.svg",
    category: "frontend",
  },
  {
    name: "TypeScript",
    percent: 40,
    image: "./assets/images/technologies/typescript.svg",
    category: "frontend",
  },
  {
    name: "CSS",
    percent: 80,
    image: "./assets/images/technologies/css.svg",
    category: "frontend",
  },
  {
    name: "HTML",
    percent: 100,
    image: "./assets/images/technologies/html.svg",
    category: "frontend",
  },
  {
    name: "Express",
    percent: 40,
    image: "/assets/images/technologies/express.png",
    category: "backend",
  },
  {
    name: "Nest",
    percent: 10,
    image: "/assets/images/technologies/nest.svg",
    category: "backend",
  },
  {
    name: "Java",
    percent: 20,
    image: "/assets/images/technologies/java.svg",
    category: "backend",
  },
  {
    name: "Spring Boot",
    percent: 20,
    image: "/assets/images/technologies/spring-boot.svg",
    category: "backend",
  },
  {
    name: "MySQL",
    percent: 40,
    image: "/assets/images/technologies/mysql.svg",
    category: "backend",
  },
  {
    name: "Docker",
    percent: 20,
    image: "/assets/images/technologies/docker.svg",
    category: "others",
  },
  {
    name: "Git",
    percent: 60,
    image: "/assets/images/technologies/git.svg",
    category: "others",
  },
  {
    name: "Figma",
    percent: 60,
    image: "/assets/images/technologies/figma.svg",
    category: "others",
  },
  {
    name: "PHP",
    percent: 20,
    image: "/assets/images/technologies/php.svg",
    category: "backend",
  },
];

export default function TabTechnologies() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === selected);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex gap-6 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelected(tab.value)}
            className={`bg-none border-none font-mono cursor-pointer px-0 py-1 text-lg transition-colors border-b-2 ${selected === tab.value ? "text-redPrimary border-redPrimary underline underline-offset-8 decoration-2 decoration-redPrimary" : "text-white border-transparent"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filtered.map((tech) => (
          <CardTechnology key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}
