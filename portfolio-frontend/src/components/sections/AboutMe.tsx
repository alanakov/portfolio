import Title from "../ui/Title";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:items-start gap-8 lg:gap-16 w-full">
      <div className="flex flex-col gap-4 w-full max-w-2xl lg:w-1/2">
        <Title>{t("aboutMe.title")}</Title>
        <div className="space-y-6">
          <p>{t("aboutMe.p1")}</p>
          <p>{t("aboutMe.p2")}</p>
          <p>{t("aboutMe.p3")}</p>
        </div>
      </div>
      <img
        className="w-40 sm:w-52 md:w-60 max-w-xs mx-auto lg:mx-0"
        src="../assets/images/alana-about-me.png"
        alt="Alana Kovalski"
      />
    </div>
  );
}
