import { ShieldCheck, BadgeIndianRupee, Sparkles, Zap } from "lucide-react"
import { FEATURES } from "./data"

const ICONS = [ShieldCheck, BadgeIndianRupee, Sparkles, Zap]

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold/80">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-balance font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-wide text-cream sm:text-6xl">
              A ride you can
              <span className="block text-gold">truly trust</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-blue sm:text-lg">
              We treat every journey as if our own family were on board. That means clean cars,
              honest pricing and drivers who genuinely care about getting you there safely.
            </p>

            <div className="mt-8 rounded-3xl border border-gold/25 bg-gold/[0.06] p-6">
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-cream">
                Doorstep pickup &amp; drop
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-blue">
                We come to you and take you exactly where you need to be — no detours, no excuses.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f, i) => {
              const Icon = ICONS[i]
              return (
                <div
                  key={f.title}
                  className="group rounded-[26px] border border-hairline bg-gradient-to-b from-surface-2 to-surface p-7 transition duration-300 hover:-translate-y-1.5 hover:border-gold/50"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-primary-foreground shadow-[0_12px_28px_-10px_rgba(242,169,59,0.85)]">
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-cream">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-blue">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}