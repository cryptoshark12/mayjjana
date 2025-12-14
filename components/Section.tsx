export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {subtitle ? <p className="text-white/70">{subtitle}</p> : null}
      </div>
      <div className="mt-7">{children}</div>
    </section>
  );
}
