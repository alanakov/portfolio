import { useTranslation } from "react-i18next";
import { buttonStyles } from "@/components/ui/buttonVariants";
import NavItem from "@/components/layout/NavItem";
import Reveal from "@/components/common/Reveal";
import { SECTION_IDS, SITE_CONFIG } from "@/constants";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id={SECTION_IDS.home}
      className="grid grid-cols-1 items-center gap-10 px-6 pt-[clamp(80px,10vh,120px)] pb-16 sm:px-10 md:grid-cols-[minmax(280px,1fr)_auto] md:gap-14 lg:px-16 xl:pl-28"
    >
      <Reveal delay={0}>
        <div className="mb-5.5 flex items-center gap-2 text-xs tracking-[0.12em] text-foreground/45">
          <span className="text-accent">//</span> {t("home.greeting").toUpperCase()}
        </div>
        <h1 className="m-0 mb-1.5 font-display text-[clamp(56px,8.5vw,92px)] leading-[0.95] tracking-wide">
          {t("home.name")}
        </h1>
        <h2
          className="m-0 mb-8.5 text-[clamp(26px,4vw,40px)] font-bold leading-[1.1] text-accent"
          style={{ textShadow: "0 0 18px rgba(220,50,50,0.4)" }}
        >
          {t("home.title")}
          <span className="animate-cursor-blink ml-1.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.12em] bg-accent align-middle" />
        </h2>
        <p className="m-0 mb-9 max-w-[480px] text-[15px] leading-relaxed text-foreground/60">
          {t("home.description")}
        </p>
        <div className="flex flex-wrap items-center gap-4.5">
          <NavItem sectionId={SECTION_IDS.contact} className={buttonStyles()}>
            {t("home.contact")}
          </NavItem>
          <div className="flex items-center gap-2.5 text-xs text-foreground/50">
            <span className="animate-blink h-2 w-2 rounded-full bg-success" />
            {t("common.available")}
          </div>
        </div>
      </Reveal>

      <Reveal delay={150} className="relative h-[220px] w-[220px] shrink-0 justify-self-center">
        <div className="animate-float absolute inset-0 rounded-full border border-border" />
        <div className="absolute inset-4 overflow-hidden rounded-full">
          <img
            src="/assets/images/alana-home.png"
            alt={SITE_CONFIG.name}
            className="h-full w-full object-cover grayscale contrast-[1.1]"
          />
        </div>
        <div className="absolute -right-1 -bottom-2 rounded-md border border-border bg-surface px-2.5 py-1.5 text-[10px] text-foreground/60">
          React · TS
        </div>
      </Reveal>
    </section>
  );
}
