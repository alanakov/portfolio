import Card from "../ui/Card";
import Title from "../ui/Title";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });

  return (
    <div>
      <Title>projetos</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 mt-8 justify-center">
        {projects.map((project: any) => (
          <Card
            key={project.id}
            image={project.image}
            technologies={project.technologies}
            title={project.title}
            description={project.description}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}