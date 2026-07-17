import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonStyles = cva(
  "inline-flex items-center justify-center rounded-full border border-border text-foreground/60 transition-colors hover:border-accent hover:text-accent",
  {
    variants: {
      size: {
        sm: "w-[26px] h-[26px]",
        md: "w-[34px] h-[34px]",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
);

type BaseProps = VariantProps<typeof iconButtonStyles> & {
  className?: string;
  children: React.ReactNode;
  "aria-label": string;
};

type IconLinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type IconBtnProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

export type IconButtonProps = IconLinkProps | IconBtnProps;

export default function IconButton({
  as = "button",
  size,
  shape,
  className,
  children,
  ...props
}: IconButtonProps) {
  const styles = cn(iconButtonStyles({ size, shape }), className);

  if (as === "a") {
    return (
      <a className={styles} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
