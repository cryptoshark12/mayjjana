import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Navbar() {
  const igUrl = `https://www.instagram.com/${site.instagram}/`;
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}`;
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Mayjjana logo" width={40} height={40} className="rounded-xl" />
          <div className="leading-tight">
            <div className="font-semibold">Mayjjana</div>
            <div className="text-xs text-white/60 -mt-0.5">Restaurant & Lounge</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link className="hover:text-white" href="/menu">Menu</Link>
          <Link className="hover:text-white" href="/gallery">Gallery</Link>
          <Link className="hover:text-white" href="/reservations">Reservations</Link>
          <Link className="hover:text-white" href={mapsUrl} target="_blank">Directions</Link>
          <Link className="hover:text-white" href={igUrl} target="_blank">Instagram</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex rounded-2xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5"
            href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
          >
            Call
          </a>
          <Link
            className="inline-flex rounded-2xl bg-gold text-night px-4 py-2 text-sm font-medium shadow-glow hover:brightness-110"
            href="/reservations"
          >
            Reserve
          </Link>
        </div>
      </div>

      <div className="md:hidden px-6 pb-4 flex gap-4 text-sm text-white/75">
        <Link href="/menu">Menu</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/reservations">Reserve</Link>
      </div>
    </header>
  );
}
