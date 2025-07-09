interface InputProps {
  label: string;
  placeholder: string;
  className?: string;
  type?: string;
  as?: "input" | "textarea";
  error?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Input({
  label,
  placeholder,
  className = "",
  type = "text",
  as = "input",
  error,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1 mb-4 ${className}`}>
      <label className="font-medium text-sm text-white mb-1">{label}</label>
      {as === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`rounded px-3 py-2 bg-backgroundSecondary text-white border resize-none min-h-[100px] ${
            error ? "border-red-500" : "border-stroke focus:border-bluePrimary"
          } focus:outline-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`rounded px-3 py-2 bg-backgroundSecondary text-white border ${
            error ? "border-red-500" : "border-stroke focus:border-bluePrimary"
          } focus:outline-none`}
        />
      )}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
