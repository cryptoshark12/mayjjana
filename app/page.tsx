import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ImageCard from "@/components/ImageCard";
import GlowButton from "@/components/GlowButton";
import { site } from "@/lib/site";

const heroImages = {
  appetizers: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1400&q=80",
  mains: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
  lounge: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80",
};

export default function HomePage() {
  const igUrl = `https://www.instagram.com/${site.instagram}/`;
  return (
    <main>
      <Hero />

      <Section title="Signature Experience" subtitle="Dining meets lounge luxury">
        <div className="grid md:grid-cols-3 gap-4">
          <ImageCard
            src={heroImages.appetizers}
            alt="Appetizers"
            title="Appetizers & Manakish"
            subtitle="Fresh dips, falafel, kibbeh, and oven-baked favorites."
          />
          <ImageCard
            src={heroImages.mains}
            alt="Mains"
            title="Plates & Grills"
            subtitle="Tawook, kafta, tandoori, seafood, pasta, and more."
          />
          <ImageCard
            src={heroImages.lounge}
            alt="Lounge"
            title="Shisha Lounge"
            subtitle="Premium vibes, smooth nights, and signature mixes."
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <GlowButton href="/menu">Explore Menu</GlowButton>
          <GlowButton href="/reservations" variant="ghost">Reserve</GlowButton>
          <GlowButton href={igUrl} target="_blank" variant="ghost">Instagram</GlowButton>
        </div>
      </Section>

      <Section title="Find Us" subtitle="Easy access • Burlington">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-obsidian/50">
          <iframe
            title="Mayjjana map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full"
            src="https://www.google.com/maps?q=4490%20Fairview%20St,%20Burlington,%20ON%20L7L%205P9&output=embed"
          />
        </div>
      </Section>

      <Section title="Hours" subtitle="Open daily">
        <div className="rounded-2xl border border-white/10 bg-obsidian/50 p-6">
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2 text-sm text-white/75">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between">
                <span>{h.day}</span>
                <span className="text-white/60">{h.open} – {h.close}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}
