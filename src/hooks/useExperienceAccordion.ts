import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Experience } from "@/types";

export function useExperienceAccordion() {
  const { t } = useTranslation();
  const experiences: Experience[] = t("experiences", { returnObjects: true });
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null);

  function toggle(experienceId: string) {
    setOpenId((current) => (current === experienceId ? null : experienceId));
  }

  return { experiences, openId, toggle };
}
