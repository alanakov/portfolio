import Title from "../ui/Title";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <Title>{t("aboutMe.title")}</Title>
        <div className="space-y-6">
          <p>{t("aboutMe.p1")}</p>
          <p>{t("aboutMe.p2")}</p>
          <p>{t("aboutMe.p3")}</p>
        </div>
      </div>
      <img
        className="w-50 mx-auto lg:mx-0"
        src="../assets/images/alana-about-me.png"
        alt="Alana Kovalski"
      />
    </div>
  );
}
