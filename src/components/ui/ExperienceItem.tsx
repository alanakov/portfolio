import { MapPin, Minus, Plus } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

interface ExperienceItemProps {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
  delay?: number;
}

export default function ExperienceItem({
  experience,
  isOpen,
  onToggle,
  delay = 0,
}: ExperienceItemProps) {
  const panelId = `experience-panel-${experience.id}`;

  function handleContentClick() {
    if (!isOpen) return;
    if (window.matchMedia("(max-width: 767px)").matches) {
      onToggle();
    }
  }

  return (
    <Reveal distance={16} delay={delay} className="relative mb-3.5">
      <span
        className={cn(
          "absolute -left-[30px] top-[22px] h-[9px] w-[9px] rounded-full border-2 border-background",
          isOpen ? "bg-accent" : "bg-foreground/30"
        )}
      />

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="pixel-shadow-sm flex w-full cursor-pointer items-center justify-between gap-5 rounded-[3px] border border-border bg-surface px-6 py-[22px] text-left max-md:flex-col max-md:items-stretch max-md:gap-3"
      >
        <span className="text-[15px] font-semibold">{experience.title}</span>
        <span className="flex shrink-0 items-center gap-5 max-md:w-full max-md:justify-between">
          <span className="text-xs text-foreground/40">{experience.period}</span>
          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-border text-accent">
            {isOpen ? <Minus size={12} /> : <Plus size={12} />}
          </span>
        </span>
      </button>

      <div id={panelId} className="accordion-panel" data-open={isOpen}>
        <div>
          <div
            onClick={handleContentClick}
            className="mt-0 rounded-b-lg border border-t-0 border-border-soft bg-surface-sunken px-6 py-5 text-[13.5px] leading-relaxed text-foreground/60 max-md:cursor-pointer"
          >
            <p className="m-0">{experience.description}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-foreground/45">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
