import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/ui/SectionHeading";
import TechFilterTabs from "@/components/ui/TechFilterTabs";
import TechCard from "@/components/cards/TechCard";
import Reveal from "@/components/common/Reveal";
import { useTechnologyFilter } from "@/hooks/useTechnologyFilter";
import { TECHNOLOGY_FILTERS } from "@/data/technologies";
import { SECTION_IDS } from "@/constants";

export default function Technologies() {
  const { t } = useTranslation();
  const { activeFilter, setActiveFilter, visibleTechnologies } = useTechnologyFilter();

  return (
    <section id={SECTION_IDS.technologies} className="pb-16">
      <Reveal>
        <SectionHeading>{t("sections.technologies")}</SectionHeading>
      </Reveal>

      <TechFilterTabs filters={TECHNOLOGY_FILTERS} active={activeFilter} onChange={setActiveFilter} />

      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-4">
        {visibleTechnologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} delay={index * 40} />
        ))}
      </div>
    </section>
  );
}
