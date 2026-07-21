import { cn } from "@/lib/utils";

interface BackdropProps {
  isVisible: boolean;
  onClick: () => void;
}

export default function Backdrop({ isVisible, onClick }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "absolute inset-0 bg-background backdrop-blur-sm transition-opacity duration-300 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    />
  );
}
