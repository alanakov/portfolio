import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-[3px] text-sm font-bold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-accent text-background pixel-shadow px-6 py-3.5",
        outline:
          "border border-border text-foreground/75 hover:border-accent hover:text-accent px-6 py-3.5",
        ghost: "text-foreground/70 hover:text-foreground",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: false,
    },
  }
);
