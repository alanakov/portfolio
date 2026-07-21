import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { TechnologyFilter } from "@/types";

interface TechFilterTabsProps {
  filters: TechnologyFilter[];
  active: TechnologyFilter["key"];
  onChange: (key: TechnologyFilter["key"]) => void;
}

export default function TechFilterTabs({ filters, active, onChange }: TechFilterTabsProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-7 flex gap-7 border-b border-border-soft pb-4 text-[13.5px] max-md:grid max-md:grid-cols-2">
      {filters.map((filter) => {
        const isActive = filter.key === active;
        return (
          <button
            key={filter.key}
            onClick={() => onChange(filter.key)}
            className={cn(
              "relative -mb-[17px] cursor-pointer pb-4 hover:text-foreground max-md:mb-0 max-md:w-full max-md:text-center",
              isActive ? "text-foreground" : "text-foreground/50"
            )}
          >
            {t(filter.labelKey)}
            {isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />}
          </button>
        );
      })}
    </div>
  );
}
