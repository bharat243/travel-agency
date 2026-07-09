import { MessageCircle, ArrowRight, Star, ShieldCheck, Clock } from "lucide-react"
import { STATS } from "./data"

export default function Hero({ onInquire }) {
  return (
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-40 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/cars/hero-suv.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-soft/70 via-ink-soft/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent,rgba(8,13,24,0.85))]" />
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[130px]" />
        <div className="absolute -right-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-gold/[0.07] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Outstation · Airport · Local · Weddings
          </span>

          <h1 className="mt-8 text-balance font-display text-6xl font-extrabold uppercase leading-[0.92] tracking-wide text-cream sm:text-7xl lg:text-[6.5rem]">
            Drive in Comfort,
            <span className="mt-2 block text-gold">Arrive in Style</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-blue sm:text-xl">
            Premium, immaculately maintained cars paired with trusted chauffeurs. Book your next
            journey in seconds — anywhere across the region, at any hour.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onInquire}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-9 py-4.5 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_18px_44px_-12px_rgba(242,169,59,0.8)] transition hover:-translate-y-0.5 hover:bg-gold-soft active:translate-y-0 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
              Inquire on WhatsApp
            </button>

            <a
              href="#fleet"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-hairline bg-white/5 px-9 py-4.5 text-sm font-bold uppercase tracking-[0.12em] text-cream backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/10 sm:w-auto"
            >
              View Our Fleet
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.4} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] font-medium text-muted-blue">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> Verified drivers
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold text-gold" /> 4.9 rated service
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> 24/7 availability
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border border-hairline bg-surface/40 backdrop-blur-md sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-1.5 px-6 py-8 text-center ${
                i !== 0 ? "border-l border-hairline" : ""
              } ${i === 2 ? "border-l" : ""} max-sm:[&:nth-child(3)]:border-l-0 max-sm:[&:nth-child(n+3)]:border-t max-sm:border-hairline`}
            >
              <span className="font-display text-4xl font-extrabold text-gold sm:text-5xl">
                {s.value}
                {s.label.includes("rating") && <span className="text-2xl">★</span>}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-blue">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}