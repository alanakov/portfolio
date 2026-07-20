import { useTranslation } from "react-i18next";
import ContactField from "@/components/forms/ContactField";
import { cn } from "@/lib/utils";
import type { useContactForm } from "@/hooks/useContactForm";

type ContactFormProps = ReturnType<typeof useContactForm>;

export default function ContactForm({
  formData,
  errors,
  status,
  submitLabel,
  handleChange,
  handleSubmit,
}: ContactFormProps) {
  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4.5 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]"
    >
      <ContactField
        id="contact-name"
        label={t("contact.form.name")}
        placeholder={t("contact.form.namePlaceholder")}
        value={formData.name}
        onChange={handleChange("name")}
        error={errors.name}
      />
      <ContactField
        id="contact-email"
        label={t("contact.form.email")}
        placeholder={t("contact.form.emailPlaceholder")}
        type="email"
        value={formData.email}
        onChange={handleChange("email")}
        error={errors.email}
      />
      <ContactField
        id="contact-phone"
        label={t("contact.form.phone")}
        placeholder={t("contact.form.phonePlaceholder")}
        type="tel"
        value={formData.phone}
        onChange={handleChange("phone")}
        error={errors.phone}
      />
      <ContactField
        id="contact-subject"
        label={t("contact.form.subject")}
        placeholder={t("contact.form.subjectPlaceholder")}
        value={formData.subject}
        onChange={handleChange("subject")}
        error={errors.subject}
      />

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className={cn(
          "col-span-full justify-self-start rounded-[3px] px-6.5 py-3 text-[13.5px] font-bold text-background transition-colors",
          status === "sent" ? "bg-success" : "bg-accent",
          "pixel-shadow-sm disabled:cursor-not-allowed"
        )}
      >
        {submitLabel}
      </button>

      {status === "error" && (
        <p className="col-span-full m-0 text-xs text-red-400">{t("contact.messages.error")}</p>
      )}
    </form>
  );
}
