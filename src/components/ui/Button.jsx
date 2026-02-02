export function Button({ variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-[var(--brand)] text-white hover:brightness-110 hover:-translate-y-0.5"
      : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:-translate-y-0.5";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
