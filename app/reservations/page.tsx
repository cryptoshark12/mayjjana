import Section from "@/components/Section";
import { site } from "@/lib/site";

export default function ReservationsPage({ searchParams }: { searchParams?: { sent?: string } }) {
  const sent = searchParams?.sent === "1";
  return (
    <main>
      <Section title="Reservations" subtitle="Request a table or lounge seating">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-obsidian/50 p-6">
            <h3 className="text-lg font-semibold">Reservation Request</h3>
            <p className="mt-2 text-white/70 text-sm">
              Submit your details and we’ll confirm as soon as possible.
            </p>

            {sent ? (
              <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm text-white/80">
                ✅ Sent! We received your request.
              </div>
            ) : null}

            <form className="mt-6 grid gap-3" action="/api/contact" method="post">
              <input name="type" defaultValue="Reservation" hidden />
              <input name="name" placeholder="Name" className="rounded-xl bg-night/60 border border-white/10 p-3" required />
              <input name="phone" placeholder="Phone" className="rounded-xl bg-night/60 border border-white/10 p-3" required />
              <input name="date" type="date" className="rounded-xl bg-night/60 border border-white/10 p-3" required />
              <input name="time" type="time" className="rounded-xl bg-night/60 border border-white/10 p-3" required />
              <input name="guests" type="number" min={1} placeholder="Guests" className="rounded-xl bg-night/60 border border-white/10 p-3" required />
              <textarea name="message" placeholder="Notes (birthday, seating preference, etc.)" className="rounded-xl bg-night/60 border border-white/10 p-3 min-h-[120px]" />
              <button className="rounded-2xl bg-gold text-night px-5 py-3 font-medium shadow-glow hover:brightness-110">
                Send Request
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-obsidian/50 p-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-white/70 text-sm">
              For faster confirmation, call us directly.
            </p>
            <div className="mt-5 space-y-3 text-white/75 text-sm">
              <div>📍 {site.address}</div>
              <div>
                📞 <a className="text-gold hover:underline" href={`tel:${site.phone.replace(/[^0-9+]/g,"")}`}>{site.phone}</a>
              </div>
              <div>
                📧 <a className="text-gold hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="text-white/60">
                Note: Lounge offerings are for adults only where required by law.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
