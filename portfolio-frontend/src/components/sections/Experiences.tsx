import Title from "../ui/Title";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();
  const experiences = t("experiences", { returnObjects: true });
  return (
    <div className="flex flex-col gap-8">
      <Title hash={false}>experiências</Title>
      <Accordion type="single" collapsible className="w-full">
        {experiences.map((exp: any) => (
          <AccordionItem
            key={exp.id}
            value={exp.id}
            className="border border-stroke mb-2 bg-backgroundSecondary"
          >
            <AccordionTrigger className="px-6 py-4 text-base font-semibold bg-transparent cursor-pointer">
              <span>{exp.title}</span>
              <span className="ml-auto text-sm font-normal text-right min-w-[100px]">
                {exp.period}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              {exp.description}
              <div className="mt-4 flex items-center gap-2 text-xs ">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
