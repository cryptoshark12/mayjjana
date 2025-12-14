import Link from "next/link";

export default function GlowButton({
  href,
  children,
  variant = "solid",
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  target?: "_blank" | "_self";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition shadow-sm focus:outline-none focus:ring-2 focus:ring-gold/40";
  const solid = "bg-gold text-night shadow-glow hover:brightness-110";
  const ghost =
    "border border-gold/35 bg-white/0 text-white hover:bg-gold/10";

  return (
    <Link href={href} target={target} className={`${base} ${variant === "solid" ? solid : ghost}`}>
      {children}
    </Link>
  );
}
