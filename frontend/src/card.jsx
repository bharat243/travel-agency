import { Users, Briefcase, ArrowRight } from "lucide-react"

export default function CarCard({ car, onBook }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-hairline bg-gradient-to-b from-surface-2 to-surface shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_36px_70px_-24px_rgba(242,169,59,0.28)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-md">
          {car.type}
        </span>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 font-mono text-[11px] font-semibold text-cream backdrop-blur-md">
            <Users className="h-3.5 w-3.5 text-gold" /> {car.seats}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 font-mono text-[11px] font-semibold text-cream backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5 text-gold" /> {car.luggage}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-cream sm:text-[28px]">
            {car.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-blue">{car.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {car.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline bg-white/5 px-3 py-1 text-[11px] font-medium text-muted-blue"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between rounded-2xl border border-hairline bg-ink/40 px-5 py-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-blue">
              Starting fare
            </p>
            <p className="mt-1 font-mono text-xl font-semibold text-gold">
              {car.price}
              <span className="ml-1 text-xs font-medium text-muted-blue">/ km</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onBook}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gold px-5 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_14px_34px_-12px_rgba(242,169,59,0.8)] transition hover:bg-gold-soft active:scale-[0.98]"
        >
          Book Now
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.5} />
        </button>
      </div>
    </article>
  )
}