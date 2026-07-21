import { useMemo, useState } from "react";
import { TECHNOLOGIES } from "@/data/technologies";
import type { Technology, TechnologyFilter } from "@/types";

const ALL_FILTER_KEY: TechnologyFilter["key"] = "todas";

export function useTechnologyFilter() {
  const [activeFilter, setActiveFilter] = useState<TechnologyFilter["key"]>(ALL_FILTER_KEY);

  const visibleTechnologies: Technology[] = useMemo(
    () =>
      activeFilter === ALL_FILTER_KEY
        ? TECHNOLOGIES
        : TECHNOLOGIES.filter((technology) => technology.category === activeFilter),
    [activeFilter]
  );

  return { activeFilter, setActiveFilter, visibleTechnologies };
}
