import { useTranslation } from "react-i18next";
import { PROJECTS_DATA } from "@/data/projects";
import type { Project, ProjectTranslation } from "@/types";

export function useProjects(): Project[] {
  const { t } = useTranslation();
  const translations: ProjectTranslation[] = t("projects", { returnObjects: true });
  const translationById = new Map(translations.map((translation) => [translation.id, translation]));

  return PROJECTS_DATA.map((content) => ({
    ...content,
    ...translationById.get(content.id)!,
  }));
}
