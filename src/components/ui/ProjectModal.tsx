import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import Badge from "@/components/ui/Badge";
import LinkButton from "@/components/ui/LinkButton";
import IconButton from "@/components/ui/IconButton";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

interface CaseStudyBlockProps {
  tag: string;
  caption: string;
  children: React.ReactNode;
  italic?: boolean;
}

function CaseStudyBlock({ tag, caption, children, italic }: CaseStudyBlockProps) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded border border-border px-1.5 py-0.5 text-[10.5px] font-bold tracking-wide text-accent">
          {tag}
        </span>
        <span className="text-[13px] text-foreground/40">{caption}</span>
      </div>
      <p className={`m-0 text-[13.5px] leading-relaxed text-foreground/60 ${italic ? "italic" : ""}`}>
        {children}
      </p>
    </div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useTranslation();
  const isOpen = Boolean(project);

  useEscapeKey(onClose, isOpen);
  useLockBodyScroll(isOpen);

  if (!project) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="animate-overlay-in fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-6 backdrop-blur-md"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="animate-modal-in max-h-[85vh] w-full max-w-[720px] overflow-y-auto rounded border border-border bg-surface-sunken"
        style={{ boxShadow: "8px 8px 0 rgba(0,0,0,0.5)" }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border-soft bg-surface px-7 py-5.5">
          <div>
            <div className="mb-0.5 font-display text-base tracking-[0.15em] text-foreground/40">
              &gt; {t("projectModal.eyebrow")}
            </div>
            <div id="project-modal-title" className="font-display text-[32px]">
              {project.title}
            </div>
          </div>
          <IconButton onClick={onClose} aria-label={t("projectModal.eyebrow")}>
            <X size={16} />
          </IconButton>
        </div>

        <div className="p-7.5">
          <p className="mb-6.5 text-[14.5px] leading-relaxed text-foreground/65">
            {project.overview}
          </p>

          <div className="mb-7.5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} className="text-[10.5px]">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-5.5">
            <CaseStudyBlock tag="SITUATION" caption={t("projectModal.situationCaption")}>
              {project.situation}
            </CaseStudyBlock>
            <CaseStudyBlock tag="TASK" caption={t("projectModal.taskCaption")}>
              {project.task}
            </CaseStudyBlock>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded border border-border px-1.5 py-0.5 text-[10.5px] font-bold tracking-wide text-accent">
                  ACTION
                </span>
                <span className="text-[13px] text-foreground/40">
                  {t("projectModal.actionCaption")}
                </span>
              </div>
              <p className="m-0 mb-2 text-[13.5px] leading-relaxed text-foreground/60">
                {project.action}
              </p>
              <p className="m-0 text-[13.5px] italic leading-relaxed text-foreground/50">
                {t("projectModal.challengePrefix")}: {project.challenge}
              </p>
            </div>
            <CaseStudyBlock tag="RESULT" caption={t("projectModal.resultCaption")}>
              {project.result}
            </CaseStudyBlock>
          </div>

          <div className="mt-7.5 rounded-lg border border-accent/30 bg-accent/[0.08] px-6 py-5.5">
            <div className="mb-2.5 text-[13px] font-bold text-accent-soft">
              {t("projectModal.learningsTitle")}
            </div>
            <p className="m-0 text-[13.5px] leading-relaxed text-foreground/65">
              {project.learnings}
            </p>
          </div>

          <div className="mt-6.5 flex gap-3">
            {project.liveUrl && (
              <LinkButton
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="flex-1 py-2.5 text-[13px] shadow-none"
              >
                {t("projectModal.liveCta")}
              </LinkButton>
            )}
            {project.githubUrl && (
              <LinkButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="flex-1 py-2.5 text-[13px]"
              >
                {t("projectModal.githubCta")}
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
