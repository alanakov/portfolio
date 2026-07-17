import { cn } from "@/lib/utils";

interface ContactFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  as?: "input" | "textarea";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  className?: string;
}

const fieldStyles =
  "rounded-md border bg-surface px-3.5 py-3 text-[13px] text-foreground outline-none placeholder:text-foreground/35 focus:border-accent";

export default function ContactField({
  id,
  label,
  placeholder,
  type = "text",
  as = "input",
  value,
  onChange,
  error,
  className,
}: ContactFieldProps) {
  return (
    <label htmlFor={id} className={cn("flex flex-col gap-2 text-xs text-foreground/50", className)}>
      {label}
      {as === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            fieldStyles,
            "min-h-[100px] resize-none",
            error ? "border-red-500" : "border-border"
          )}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(fieldStyles, error ? "border-red-500" : "border-border")}
        />
      )}
      {error && <span className="text-xs font-normal text-red-500">{error}</span>}
    </label>
  );
}
