interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "red" | "blue";
  children?: React.ReactNode;
}

export default function Button({
  variant = "default",
  children,
  className = "",
  ...props
}: ButtonProps) {
  let baseClasses = "px-4 py-1 font-medium transition-colors cursor-pointer";
  let variantClasses = "";
  let fillColor = "#fff";

  switch (variant) {
    case "red":
      variantClasses =
        "border-1 border-redPrimary text-white hover:bg-redPrimary hover:text-white";
      fillColor = "var(--color-redPrimary)";
      break;
    case "blue":
      variantClasses =
        "border-1 border-bluePrimary text-white hover:bg-bluePrimary hover:text-white";
      fillColor = "var(--color-bluePrimary)";
      break;
    default:
      variantClasses =
        "border-1 border-white text-white hover:bg-white hover:text-black";
      fillColor = "#fff";
      break;
  }

  return (
    <button
      className={`btn-fill ${baseClasses} ${variantClasses} ${className}`}
      style={{
        ["--btn-fill-color" as any]: fillColor,
      }}
      {...props}
    >
      {children || "Button"}
    </button>
  );
}
