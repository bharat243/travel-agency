import { useEffect, useMemo, useState } from "react"
import { GraduationCap, ShieldCheck, BriefcaseBusiness, Star } from "lucide-react"
import { EXPERIENCE_PHOTOS } from "./data"

const EXPERIENCE_POINTS = [
  {
    Icon: Star,
    title: "15+ Years of Trusted Service",
    desc: "For more than a decade, we have been serving families, business travellers and outstation guests with punctual, dependable and comfortable rides.",
  },
  {
    Icon: BriefcaseBusiness,
    title: "Professional & Business-Class Conduct",
    desc: "Our service is built on discipline, clean presentation, route knowledge and a guest-first attitude — ideal for airport transfers, events and premium travel needs.",
  },
  {
    Icon: GraduationCap,
    title: "Well-Spoken, Well-Educated Drivers",
    desc: "We value courteous behaviour, clear communication and professional etiquette so that every trip feels safe, respectful and well managed.",
  },
  {
    Icon: ShieldCheck,
    title: "Reliable for Family, Corporate & Wedding Travel",
    desc: "From local city travel to special occasions and long-distance journeys, we focus on safety, cleanliness, transparent pricing and timely service.",
  },
]

export default function ExperienceSection() {
  const photos = useMemo(() => EXPERIENCE_PHOTOS ?? [], [])
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    if (photos.length <= 4) return

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % photos.length)
    }, 2600)

    return () => clearInterval(interval)
  }, [photos.length])

  const visiblePhotos =
    photos.length <= 4
      ? photos
      : Array.from({ length: 4 }, (_, i) => photos[(startIndex + i) % photos.length])

  return (
    <section id="experience" className="relative scroll-mt-28 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          {/* Left Content */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-gold/80">
              Experience & Trust
            </p>

            <h2 className="mt-3 text-balance font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-wide text-cream sm:text-6xl">
              Years of experience,
              <span className="block text-gold">built on trust</span>
            </h2>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-blue sm:text-lg">
              At <span className="font-semibold text-cream"> Jai Shree Ram Tour & Travels </span>, we
              believe a good journey is not just about the vehicle — it is about punctuality,
              professionalism, respectful behaviour and the confidence that your family, guests or
              clients are in safe hands. With years of on-road experience, we focus on comfort,
              clear communication and dependable service from pickup to drop.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {EXPERIENCE_POINTS.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-[26px] border border-hairline bg-gradient-to-b from-surface-2 to-surface p-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.85)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-primary-foreground shadow-[0_12px_28px_-10px_rgba(242,169,59,0.85)]">
                    <Icon className="h-5 w-5" strokeWidth={2.3} />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-cream">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-blue">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Photo Rail */}
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[34px] border border-hairline bg-gradient-to-b from-surface-2 to-surface p-5 shadow-[0_24px_60px_-26px_rgba(0,0,0,0.9)] sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-bold uppercase tracking-wide text-cream sm:text-3xl">
                    Our Journey
                  </p>
                  <p className="mt-1 text-sm text-muted-blue">
                    Real moments from our service, travel experience and customer journeys.
                  </p>
                </div>

                <div className="hidden rounded-full border border-gold/25 bg-gold/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold sm:block">
                  Live Showcase
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {visiblePhotos.map((photo, idx) => (
                  <div
                    key={`${photo.src}-${startIndex}-${idx}`}
                    className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-ink/50"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt || `Experience ${idx + 1}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                    {photo.caption ? (
                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <div className="rounded-2xl border border-white/10 bg-ink/65 px-3 py-2 backdrop-blur-md">
                          <p className="text-[11px] font-medium leading-relaxed text-cream/90">
                            {photo.caption}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-xs leading-relaxed text-muted-blue">
                  Premium service, dependable drivers and years of trusted local travel experience.
                </p>

                {photos.length > 4 && (
                  <div className="flex items-center gap-2">
                    {photos.map((_, i) => {
                      const isActive = i === startIndex
                      return (
                        <span
                          key={i}
                          className={`h-2 rounded-full transition-all ${
                            isActive ? "w-6 bg-gold" : "w-2 bg-white/20"
                          }`}
                        />
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}