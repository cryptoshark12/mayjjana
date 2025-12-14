import Section from "@/components/Section";
import GlowButton from "@/components/GlowButton";
import ImageCard from "@/components/ImageCard";
import { menuSections } from "@/lib/menuData";
import { site } from "@/lib/site";

const menuImgs: Record<string, string> = {
  Appetizers: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&w=1400&q=80",
  Salads: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1400&q=80",
  Sides: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1400&q=80",
  Manakish: "https://images.unsplash.com/photo-1604908554020-0e4a8e1b0c88?auto=format&fit=crop&w=1400&q=80",
  Mains: "https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=1400&q=80",
  "Burgers & Wraps": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80",
  Juices: "https://images.unsplash.com/photo-1524594157360-2d2b56b4c3c5?auto=format&fit=crop&w=1400&q=80",
  Shakes: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1400&q=80",
  "Cold Beverages": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1400&q=80",
  "Hot Beverages": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80",
  Desserts: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1400&q=80",
  Shisha: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1400&q=80",
};

export default function MenuPage() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}`;
  return (
    <main>
      <Section title="Menu" subtitle="Luxury flavors • Middle Eastern classics • Lounge vibes">
        <div className="flex flex-col sm:flex-row gap-3">
          <GlowButton href="/reservations">Reserve</GlowButton>
          <GlowButton href="/menu.pdf" target="_blank" variant="ghost">Download Menu PDF</GlowButton>
          <GlowButton href={mapsUrl} target="_blank" variant="ghost">Directions</GlowButton>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuSections.map((sec) => (
            <ImageCard
              key={sec.title}
              src={menuImgs[sec.title] || menuImgs["Mains"]}
              alt={sec.title}
              title={sec.title}
              subtitle={sec.subtitle}
            />
          ))}
        </div>
      </Section>

      {menuSections.map((sec) => (
        <Section key={sec.title} title={sec.title} subtitle={sec.subtitle}>
          <div className="rounded-2xl border border-white/10 bg-obsidian/50 p-6">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {sec.items.map((item) => (
                <li key={item.name} className="flex flex-col">
                  <span className="text-white/90">{item.name}</span>
                  {item.note ? <span className="text-white/60 text-xs mt-1">{item.note}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <Section title="Reservations" subtitle="Book a table or lounge seating">
        <div className="rounded-2xl border border-white/10 bg-obsidian/50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-white/80 text-sm">
            For faster confirmation, call <a className="text-gold hover:underline" href={`tel:${site.phone.replace(/[^0-9+]/g,"")}`}>{site.phone}</a>.
          </div>
          <GlowButton href="/reservations">Request Reservation</GlowButton>
        </div>
      </Section>
    </main>
  );
}
