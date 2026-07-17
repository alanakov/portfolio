import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonStyles } from "./buttonVariants";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonStyles> {}

export default function LinkButton({
  variant,
  fullWidth,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={cn(buttonStyles({ variant, fullWidth }), className)} {...props}>
      {children}
    </a>
  );
}
