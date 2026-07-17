import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import IconButton from "@/components/ui/IconButton";
import Reveal from "@/components/common/Reveal";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useProjects } from "@/hooks/useProjects";
import { SECTION_IDS } from "@/constants";
import type { Project } from "@/types";

export default function Projects() {
  const { t } = useTranslation();
  const projects = useProjects();
  const { trackRef, scrollPrev, scrollNext } = useHorizontalScroll<HTMLDivElement>();
  const { ref: revealRef, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id={SECTION_IDS.projects} className="py-16">
      <Reveal className="flex items-center justify-between gap-5">
        <SectionHeading className="flex-1">{t("sections.projects")}</SectionHeading>
        <div className="flex shrink-0 gap-2">
          <IconButton onClick={scrollPrev} aria-label="Previous">
            <ChevronLeft size={16} />
          </IconButton>
          <IconButton onClick={scrollNext} aria-label="Next">
            <ChevronRight size={16} />
          </IconButton>
        </div>
      </Reveal>

      <div
        ref={(node) => {
          trackRef.current = node;
          revealRef.current = node;
        }}
        className="scrollbar-hide mt-9.5 flex snap-x snap-mandatory gap-5.5 overflow-x-auto overscroll-x-contain pb-3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setActiveProject(project)}
            isVisible={isVisible}
            delay={index * 90}
          />
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
