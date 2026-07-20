import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-md border border-border bg-surface-raised/50 px-2 py-1 text-[10px] font-medium tracking-wide text-foreground/60",
        className
      )}
    >
      {children}
    </span>
  );
}
