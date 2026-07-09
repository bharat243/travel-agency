import CarCard from "./card"
import { CARS } from "./data"

export default function Fleet({ onBook }) {
  return (
    <section id="fleet" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold/80">Our Fleet</p>
          <h2 className="mt-3 text-balance font-display text-5xl font-extrabold uppercase tracking-wide text-cream sm:text-6xl">
            Choose Your Ride
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-blue sm:text-lg">
            From budget-friendly sedans to flagship SUVs — every vehicle is handpicked,
            immaculately maintained and ready for the road.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gold" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-9">
          {CARS.map((car) => (
            <CarCard key={car.name} car={car} onBook={() => onBook(car)} />
          ))}
        </div>
      </div>
    </section>
  )
}