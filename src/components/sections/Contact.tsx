import { useTranslation } from "react-i18next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import Reveal from "@/components/common/Reveal";
import { useContactForm } from "@/hooks/useContactForm";
import { SECTION_IDS, SITE_CONFIG } from "@/constants";

export default function Contact() {
  const { t } = useTranslation();
  const contactForm = useContactForm();

  return (
    <section id={SECTION_IDS.contact} className="pb-16">
      <Reveal>
        <SectionHeading>{t("sections.contact")}</SectionHeading>
      </Reveal>

      <div className="mt-8.5 grid grid-cols-1 gap-14 md:grid-cols-2">
        <Reveal>
          <p className="m-0 mb-6.5 max-w-[380px] text-[14.5px] leading-relaxed text-foreground/60">
            {t("contact.description")}
          </p>
          <div className="flex flex-col gap-3 text-[13px]">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2.5 text-foreground/70 hover:text-accent"
            >
              <span className="h-2 w-2 rounded-full border border-current" />
              {SITE_CONFIG.email}
            </a>
            <a
              href={SITE_CONFIG.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-foreground/70 hover:text-accent"
            >
              <span className="h-2 w-2 rounded-full border border-current" />
              {t("contact.whatsapp")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm {...contactForm} />
        </Reveal>
      </div>
    </section>
  );
}
