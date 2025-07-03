import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
      <div className="w-full md:w-auto text-center md:text-left">
        <p>{t("home.greeting")}</p>
        <h2 className="font-semibold text-3xl md:text-4xl">{t("home.name")}</h2>
        <h1 className="font-bold text-4xl md:text-5xl text-redPrimary">
          {t("home.title").split(" ").slice(0, -1).join(" ")}
          <br />
          {t("home.title").split(" ").slice(-1)}
        </h1>
        <Button className="mt-6">{t("home.contact")}</Button>
      </div>
      <div className=" flex justify-center md:block">
        <div className="w-60 md:w-96 aspect-square rounded-full overflow-hidden flex items-center justify-center bg-background-secondary">
          <img
            src="./assets/images/alana-home.png"
            alt="Alana Kovalski"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
