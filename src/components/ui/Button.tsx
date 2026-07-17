import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonStyles } from "./buttonVariants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export default function Button({
  variant,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonStyles({ variant, fullWidth }), className)} {...props}>
      {children}
    </button>
  );
}
