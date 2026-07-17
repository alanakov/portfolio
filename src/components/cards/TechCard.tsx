import Reveal from "@/components/common/Reveal";
import type { Technology } from "@/types";

interface TechCardProps {
  technology: Technology;
  delay?: number;
}

export default function TechCard({ technology, delay = 0 }: TechCardProps) {
  return (
    <Reveal
      distance={14}
      delay={delay}
      className="pixel-shadow-sm flex flex-col items-center gap-3 rounded border border-border bg-surface px-2.5 py-5"
    >
      <span className="text-[11px] text-foreground/50">{technology.name}</span>
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[3px] border border-border">
        <img
          src={technology.image}
          alt={technology.name}
          className="h-6 w-6 object-contain"
          loading="lazy"
        />
      </div>
    </Reveal>
  );
}
