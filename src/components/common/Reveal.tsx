import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  delay?: number;
}

export default function Reveal({ children, className, distance, delay }: RevealProps) {
  const { ref, style } = useScrollReveal<HTMLDivElement>({ distance, delay });

  return (
    <div ref={ref} style={style} className={cn(className)}>
      {children}
    </div>
  );
}
