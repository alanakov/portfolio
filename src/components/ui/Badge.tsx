import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded border border-border px-1.5 py-1 text-[10px] tracking-wide text-foreground/50",
        className
      )}
    >
      {children}
    </span>
  );
}
