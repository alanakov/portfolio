import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceItem from "@/components/ui/ExperienceItem";
import Reveal from "@/components/common/Reveal";
import { useExperienceAccordion } from "@/hooks/useExperienceAccordion";
import { SECTION_IDS } from "@/constants";

export default function Experiences() {
  const { t } = useTranslation();
  const { experiences, openId, toggle } = useExperienceAccordion();

  return (
    <section id={SECTION_IDS.experience} className="py-16">
      <Reveal>
        <SectionHeading>{t("sections.experiences")}</SectionHeading>
      </Reveal>

      <div className="relative mt-9.5 pl-7.5">
        <div className="absolute top-1.5 bottom-1.5 left-[5px] w-px bg-border-soft" />
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            isOpen={openId === experience.id}
            onToggle={() => toggle(experience.id)}
            delay={index * 80}
          />
        ))}
      </div>
    </section>
  );
}
