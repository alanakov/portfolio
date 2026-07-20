import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendContactMessage } from "@/services/contactService";
import { formatPhoneNumber, isValidPhoneNumber } from "@/utils/phone";

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

export type ContactFormErrors = Partial<ContactFormState>;
export type ContactSubmitStatus = "idle" | "sending" | "sent" | "error";

const INITIAL_FORM_STATE: ContactFormState = { name: "", email: "", phone: "", subject: "" };
const SENT_STATUS_RESET_DELAY_MS = 2200;

function isValidEmail(value: string): boolean {
  return /\S+@\S+\.\S+/.test(value);
}

export function useContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactSubmitStatus>("idle");

  function handleChange(field: keyof ContactFormState) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const rawValue = event.target.value;
      const nextValue = field === "phone" ? formatPhoneNumber(rawValue) : rawValue;
      setFormData((prev) => ({ ...prev, [field]: nextValue }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  function validate(): boolean {
    const nextErrors: ContactFormErrors = {};

    if (!formData.name.trim()) nextErrors.name = t("contact.validation.nameRequired");

    if (!formData.email.trim()) {
      nextErrors.email = t("contact.validation.emailRequired");
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = t("contact.validation.emailInvalid");
    }

    if (!formData.subject.trim()) nextErrors.subject = t("contact.validation.subjectRequired");

    if (formData.phone.trim() && !isValidPhoneNumber(formData.phone)) {
      nextErrors.phone = t("contact.validation.phoneInvalid");
    }

    setErrors(nextErrors);
    return Object.values(nextErrors).every((error) => !error);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending" || status === "sent") return;
    if (!validate()) return;

    setStatus("sending");

    try {
      await sendContactMessage(formData);
      setStatus("sent");
      setFormData(INITIAL_FORM_STATE);
      setTimeout(() => setStatus("idle"), SENT_STATUS_RESET_DELAY_MS);
    } catch (error) {
      console.error("Failed to send contact message:", error);
      setStatus("error");
    }
  }

  const submitLabel =
    status === "sending"
      ? t("contact.form.sending")
      : status === "sent"
        ? t("contact.form.sent")
        : t("contact.form.submit");

  return { formData, errors, status, submitLabel, handleChange, handleSubmit };
}
