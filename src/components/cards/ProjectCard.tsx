import { useTranslation } from "react-i18next";
import Badge from "@/components/ui/Badge";
import LinkButton from "@/components/ui/LinkButton";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
  isVisible: boolean;
  delay?: number;
}

function stopPropagation(event: React.MouseEvent) {
  event.stopPropagation();
}

export default function ProjectCard({ project, onOpen, isVisible, delay = 0 }: ProjectCardProps) {
  const { t } = useTranslation();

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .8s cubic-bezier(.16,1,.3,1) ${delay}ms`,
  };

  return (
    <div
      style={style}
      className="w-[340px] shrink-0 snap-start overflow-hidden rounded-lg border border-border bg-surface"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") onOpen();
        }}
        className="pixel-shadow flex h-full cursor-pointer flex-col text-left outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <div className="relative flex h-[168px] flex-col overflow-hidden bg-surface-raised max-md:h-[134px]">
          <div className="flex h-[26px] shrink-0 items-center gap-1.5 bg-black/35 px-2.5 max-md:h-[22px]">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="ml-1.5 truncate text-[9px] text-white/45">
              {project.title.toLowerCase()}.png
            </span>
          </div>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full min-h-0 w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 px-5 pt-5 pb-6 max-md:gap-2.5 max-md:px-4 max-md:pt-4 max-md:pb-5">
          <div className="flex flex-wrap gap-1.5 max-md:gap-1">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-0.5 text-[19px] leading-tight font-bold">{project.title}</div>

          <div className="line-clamp-3 text-[13px] leading-relaxed text-foreground/55">
            {project.description}
          </div>

          <div className="mt-auto flex flex-col gap-2.5 pt-1">
            <div className="flex gap-2.5 max-md:gap-2">
              {project.liveUrl && (
                <LinkButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stopPropagation}
                  variant="primary"
                  className="flex-1 px-0 py-2.5 text-[12.5px] shadow-none max-md:py-2"
                >
                  Live ⟷
                </LinkButton>
              )}
              {project.githubUrl && (
                <LinkButton
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={stopPropagation}
                  variant="outline"
                  className="flex-1 px-0 py-2.5 text-[12.5px] max-md:py-2"
                >
                  GitHub
                </LinkButton>
              )}
            </div>

            <div className="text-center text-[11px] text-foreground/35">
              {t("projectModal.caseStudyHint")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
