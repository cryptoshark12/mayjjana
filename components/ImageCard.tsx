import Image from "next/image";

export default function ImageCard({
  src,
  alt,
  title,
  subtitle,
}: {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-obsidian/50 overflow-hidden">
      <div className="relative h-44">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>
      {(title || subtitle) && (
        <div className="p-5">
          {title && <div className="text-gold font-semibold">{title}</div>}
          {subtitle && <div className="mt-1 text-sm text-white/70">{subtitle}</div>}
        </div>
      )}
    </div>
  );
}
