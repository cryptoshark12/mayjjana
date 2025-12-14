import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const igUrl = `https://www.instagram.com/${site.instagram}/`;
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}`;

  return (
    <footer className="border-t border-white/10 bg-obsidian/40">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="text-lg font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-white/70">{site.address}</p>
          <p className="mt-2 text-sm text-white/70">
            <a className="text-gold hover:underline" href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}>
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-white/70">
            <a className="text-gold hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/90">Hours</div>
          <ul className="mt-3 space-y-1 text-sm text-white/70">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.open} – {h.close}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/90">Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-gold hover:underline" href="/menu">View Menu</Link></li>
            <li><Link className="text-gold hover:underline" href="/reservations">Reservations</Link></li>
            <li><Link className="text-gold hover:underline" href={igUrl} target="_blank">Instagram</Link></li>
            <li><Link className="text-gold hover:underline" href={mapsUrl} target="_blank">Google Maps</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Mayjjana Restaurant & Lounge. All rights reserved.
      </div>
    </footer>
  );
}
