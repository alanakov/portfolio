import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/common/Reveal";
import { SECTION_IDS, SITE_CONFIG } from "@/constants";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section
      id={SECTION_IDS.about}
      className="grid grid-cols-1 items-stretch gap-10 py-16 md:grid-cols-2 md:gap-14"
    >
      <Reveal delay={120}>
        <SectionHeading>{t("aboutMe.title")}</SectionHeading>
        <div className="mt-8.5 max-w-[520px] text-[15px] leading-[1.85] text-foreground/68">
          <p className="m-0 mb-4.5">{t("aboutMe.p1")}</p>
          <p className="m-0 mb-4.5">{t("aboutMe.p2")}</p>
          <p className="m-0">{t("aboutMe.p3")}</p>
        </div>
      </Reveal>

      <Reveal className="hidden overflow-hidden rounded-lg border border-border-soft md:order-first md:flex md:h-full md:flex-col">
        <div className="flex h-[30px] shrink-0 items-center gap-1.5 border-b border-border-soft bg-surface-raised px-3">
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="ml-2 text-[10px] text-foreground/40">{t("aboutMe.imageLabel")}</span>
        </div>
        <div className="flex flex-1 items-center justify-center bg-surface-sunken p-4">
          <img
            src="/assets/images/alana-about-me.png"
            alt={SITE_CONFIG.name}
            className="max-h-full max-w-full object-contain grayscale contrast-[1.05]"
          />
        </div>
      </Reveal>
    </section>
  );
}
