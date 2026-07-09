import { useEffect, useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { PHONE_NUMBER } from "./data"

const NAV_LINKS = [
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/20 bg-ink-soft/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3.5">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/60 bg-surface text-gold shadow-[0_0_24px_-6px_rgba(242,169,59,0.6)]"
            aria-hidden="true"
          >
            <span className="font-display text-2xl font-extrabold leading-none">श्री</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.34em] text-gold/80 sm:block">
              Blessed Journeys
            </span>
            <span className="mt-1 whitespace-nowrap font-display text-xl font-extrabold uppercase tracking-wide text-cream sm:text-[26px]">
              Jai Shree <span className="text-gold">Ram</span>
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[13px] font-semibold uppercase tracking-[0.14em] text-muted-blue transition hover:text-cream"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_12px_30px_-10px_rgba(242,169,59,0.8)] transition hover:-translate-y-0.5 hover:bg-gold-soft active:translate-y-0"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface/70 text-cream transition hover:border-gold/40 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-ink-soft/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-blue transition hover:bg-surface hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}