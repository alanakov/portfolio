import { GithubIcon, GlobeIcon } from "lucide-react";

interface CardProps {
  image: string;
  technologies: string;
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Card = ({ image, technologies, title, description, liveUrl, githubUrl }: CardProps) => {
  return (
    <div className="bg-backgroundSecondary text-white w-full max-w-[300px] mx-auto border border-stroke flex flex-col h-full">
      <div>
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>

      <div className="border-t border-b border-stroke py-2 px-2 text-xs text-gray-300">
        {technologies}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="pt-2">
          <div className="text-xl font-bold">{title}</div>
          <div className="text-sm text-gray-400">{description}</div>
        </div>

        <div className="mt-auto pt-4 flex gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill border border-white text-white hover:text-black px-3 py-1 rounded text-sm flex items-center gap-1 relative overflow-hidden z-0"
              style={{
                ["--btn-fill-color" as any]: "#fff",
              }}
            >
              <GlobeIcon className="w-4 h-4" />
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill border border-white text-white hover:text-black px-3 py-1 rounded text-sm flex items-center gap-1 relative overflow-hidden z-0"
              style={{
                ["--btn-fill-color" as any]: "#fff",
              }}
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
