import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <h2 className="m-0 whitespace-nowrap text-2xl font-bold">{children}</h2>
      <div className="ml-3.5 flex flex-1 items-center">
        <div className="heading-rule h-px flex-1" />
        <div className="ml-2 h-[7px] w-[7px] shrink-0 bg-accent" />
      </div>
    </div>
  );
}
