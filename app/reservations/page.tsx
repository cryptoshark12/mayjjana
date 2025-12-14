import Section from "@/components/Section";
import { site } from "@/lib/site";

/**
 * Next.js 15 FIX:
 * searchParams must be typed as a Promise and awaited
 */
export default async function ReservationsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const sent = params?.sent === "1";

  return (
    <main>
      <Section title="Reservations" subtitle="Request a table or lounge seating">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* FORM */}
          <div className="rounded-2xl border border-white/10 bg-obsidian/50 p-6">
            <h3 className="text-lg font-semibold">Reservation Request</h3>
            <p className="mt-2 text-white/70 text-sm">
              Submit your details and we’ll confirm as soon as possible.
            </p>

            {sent && (
              <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm text-white/80">
                ✅ Your request has been sent successfully.
              </div>
            )}

            <form
              className="mt-6 grid gap-3"
              action="/api/contact"
              method="post"
            >
              <input type="hidden" name="type" value="Reservation" />

              <input
                name="name"
                placeholder="Name"
                required
                className="rounded-xl bg-night/60 border border-white/10 p-3"
              />

              <input
                name="phone"
                placeholder="Phone"
                required
                className="rounded-xl bg-night/60 border border-white/10 p-3"
              />

              <input
                name="date"
                type="date"
                required
                className="rounded-xl bg-night/60 border border-white/10 p-3"
              />

              <input
                name="time"
                type="time"
                required
                className="rounded-xl bg-night/60 border border-white/10 p-3"
              />

              <input
                name="guests"
                type="number"
                min={1}
                placeholder="Guests"
                required
                className="rounded-xl bg-night/60 border border-white/10 p-3"
              />

              <textarea
                name="message"
                placeholder="Notes (birthday, seating preference, etc.)"
                className="rounded-xl bg-night/60 border border-white/10 p-3 min-h-[120px]"
              />

              <button
                type="submit"
                className="rounded-2xl bg-gold text-night px-5 py-3 font-medium shadow-glow hover:brightness-110"
              >
                Send Request
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="rounded-2xl border border-white/10 bg-obsidian/50 p-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-white/70 text-sm">
              For faster confirmation, contact us directly.
            </p>

            <div className="mt-5 space-y-3 text-white/75 text-sm">
              <div>📍 {site.address}</div>

              <div>
                📞{" "}
                <a
                  className="text-gold hover:underline"
                  href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                >
                  {site.phone}
                </a>
              </div>

              <div>
                📧{" "}
                <a
                  className="text-gold hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>

              <div className="text-white/60">
                Lounge offerings are for adults only where required by law.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
