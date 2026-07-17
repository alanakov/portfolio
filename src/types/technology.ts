export type TechnologyCategory = "frontend" | "backend" | "outros";

export interface Technology {
  name: string;
  image: string;
  category: TechnologyCategory;
}

export type TechnologyFilterLabelKey =
  | "technologies.filters.todas"
  | "technologies.filters.frontend"
  | "technologies.filters.backend"
  | "technologies.filters.outros";

export interface TechnologyFilter {
  key: "todas" | TechnologyCategory;
  labelKey: TechnologyFilterLabelKey;
}
