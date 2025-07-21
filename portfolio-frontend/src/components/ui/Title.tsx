export default function Title({
  children,
  hash = true,
  className = "",
  color = "redPrimary",
}: {
  children: React.ReactNode;
  hash?: boolean;
  className?: string;
  color?: "redPrimary" | "bluePrimary";
}) {
  return (
    <div className={`text-2xl font-medium flex items-center mb-4 ${className}`}>
      {hash && <h3 className={`text-${color} mr-1`}>#</h3>}
      <h3 className="mr-4 text-white">{children}</h3>
      <span className={`flex-1 h-px bg-${color} opacity-60`} />
    </div>
  );
}
