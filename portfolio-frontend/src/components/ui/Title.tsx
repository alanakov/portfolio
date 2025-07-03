export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-2xl font-medium flex items-center mb-4">
      <h3 className="text-redPrimary mr-1">#</h3>
      <h3 className="mr-4">{children}</h3>
      <span className="flex-1 h-px bg-redPrimary opacity-60"></span>
    </div>
  );
}
