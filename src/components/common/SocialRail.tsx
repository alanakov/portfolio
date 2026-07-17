import { Github, Linkedin } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import { SITE_CONFIG } from "@/constants";

export default function SocialRail() {
  return (
    <div className="pointer-events-none fixed inset-y-0 left-0 z-20 hidden lg:block">
      <div className="fixed top-1/2 left-7 z-20 flex -translate-y-1/2 flex-col gap-4">
        <IconButton
          as="a"
          shape="square"
          href={SITE_CONFIG.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="pointer-events-auto"
        >
          <Github size={16} />
        </IconButton>
        <IconButton
          as="a"
          shape="square"
          href={SITE_CONFIG.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="pointer-events-auto"
        >
          <Linkedin size={16} />
        </IconButton>
      </div>
      <div className="fixed top-[100px] bottom-[100px] left-[44px] z-[19] w-px bg-border-soft" />
    </div>
  );
}
