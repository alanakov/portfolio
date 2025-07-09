import Title from "../ui/Title";
import Input from "../ui/Input";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = t("contact.validation.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.validation.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.validation.emailInvalid");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.validation.subjectRequired");
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        "service_9z83y9v",
        "template_6e8qyu6",
        {
          name: formData.name,
          email: formData.email,
          message: formData.subject,
          time: new Date().toLocaleString(),
        },
        "NGA-o--8OhKWmC-Mr"
      );

      console.log("SUCCESS!", result.text);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "" });
    } catch (error) {
      console.log("FAILED...", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Title color="bluePrimary">{t("contact.title")}</Title>
      <div className="mt-20">
        <p className="max-w-lg mx-auto">{t("contact.description")}</p>
        <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
          <Input
            label={t("contact.form.name")}
            placeholder={t("contact.form.namePlaceholder")}
            value={formData.name}
            onChange={handleChange("name")}
            error={errors.name}
          />
          <Input
            label={t("contact.form.email")}
            placeholder={t("contact.form.emailPlaceholder")}
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            error={errors.email}
          />
          <Input
            label={t("contact.form.subject")}
            placeholder={t("contact.form.subjectPlaceholder")}
            as="textarea"
            className="min-h-[120px]"
            value={formData.subject}
            onChange={handleChange("subject")}
            error={errors.subject}
          />

          {submitStatus === "success" && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {t("contact.messages.success")}
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {t("contact.messages.error")}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded cursor-pointer relative overflow-hidden z-0 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "btn-fill border border-bluePrimary text-white hover:text-white"
            }`}
            style={
              !isLoading
                ? ({
                    ["--btn-fill-color"]: "var(--color-bluePrimary)",
                  } as React.CSSProperties)
                : undefined
            }
          >
            {isLoading ? t("contact.form.sending") : t("contact.form.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
