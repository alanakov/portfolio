import Button from "../ui/button";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mt-[-40px]">
      <div>
        <p>{t("home.greeting")}</p>
        <h2 className="font-semibold text-3xl">{t("home.name")}</h2>
        <h1 className="font-bold text-4xl text-redPrimary">
          {t("home.title")}
        </h1>
        <Button className="mt-6">{t("home.contact")}</Button>
      </div>
      <div>
        <img
          src="./assets/images/alana-home.png"
          alt="Alana Kovalski"
          className="w-96 h-96 object-cover"
        />
      </div>
    </div>
  );
}
