import Section from "@/components/Section";
import ImageCard from "@/components/ImageCard";
import GlowButton from "@/components/GlowButton";
import { site } from "@/lib/site";

const galleries = [
  {
    title: "Food & Plates",
    subtitle: "Appetizers, manakish, mains, desserts",
    images: [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    title: "Juices & Desserts",
    subtitle: "Fresh blends and sweet finishes",
    images: [
      "https://images.unsplash.com/photo-1524594157360-2d2b56b4c3c5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    title: "Lounge Vibes",
    subtitle: "Shisha atmosphere • premium nights",
    images: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1528143350834-1f2bfaed5c68?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export default function GalleryPage() {
  const igUrl = `https://www.instagram.com/${site.instagram}/`;
  return (
    <main>
      <Section title="Gallery" subtitle="Luxury dark vibes • Middle Eastern culture • Lounge energy">
        <div className="flex gap-3 flex-col sm:flex-row">
          <GlowButton href="/reservations">Reserve</GlowButton>
          <GlowButton href={igUrl} target="_blank" variant="ghost">View on Instagram</GlowButton>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleries.flatMap((g) =>
            g.images.map((src, idx) => (
              <ImageCard
                key={`${g.title}-${idx}`}
                src={src}
                alt={g.title}
                title={idx === 0 ? g.title : undefined}
                subtitle={idx === 0 ? g.subtitle : undefined}
              />
            ))
          )}
        </div>
      </Section>
    </main>
  );
}
