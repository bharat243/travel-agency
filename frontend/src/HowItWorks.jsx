import { MessageCircle } from "lucide-react"

const STEPS = [
  { step: "01", title: "Pick your car", desc: "Browse the fleet and choose the vehicle that fits your trip and budget." },
  { step: "02", title: "Share trip details", desc: "Tell us your pickup, destination, date and time in the quick booking form." },
  { step: "03", title: "Confirm on WhatsApp", desc: "Your details reach us instantly on WhatsApp and we confirm within minutes." },
]

export default function HowItWorks({ onInquire }) {
  return (
    <section id="how" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[36px] border border-hairline bg-gradient-to-br from-surface-2 to-surface p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold/80">
              How It Works
            </p>
            <h2 className="mt-3 text-balance font-display text-5xl font-extrabold uppercase tracking-wide text-cream sm:text-6xl">
              Booked in three steps
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="relative text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-ink font-display text-2xl font-extrabold text-gold">
                  {s.step}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-cream">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-blue">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={onInquire}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-9 py-4.5 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_18px_44px_-12px_rgba(242,169,59,0.8)] transition hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
              Start Your Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}