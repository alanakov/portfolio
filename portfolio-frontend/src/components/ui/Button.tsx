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
  let baseClasses =
    "px-4 py-1 font-medium cursor-pointer relative overflow-hidden z-0";
  let variantClasses = "";
  let fillColor = "#fff";

  switch (variant) {
    case "red":
      variantClasses =
        "btn-fill border border-redPrimary text-white hover:text-white";
      fillColor = "var(--color-redPrimary)";
      break;
    case "blue":
      variantClasses =
        "btn-fill border border-bluePrimary text-white hover:text-white";
      fillColor = "var(--color-bluePrimary)";
      break;
    default:
      variantClasses =
        "btn-fill border border-white text-white hover:text-black";
      fillColor = "#fff";
      break;
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{
        ["--btn-fill-color" as any]: fillColor,
      }}
      {...props}
    >
      {children || "Button"}
    </button>
  );
}
