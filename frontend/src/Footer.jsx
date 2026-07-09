import { MessageCircle, Phone, MapPin, Clock } from "lucide-react"
import { PHONE_NUMBER, PHONE_DISPLAY } from "./data"

function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-28 border-t border-hairline bg-ink-soft/70">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3.5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/60 bg-surface text-gold shadow-[0_0_24px_-6px_rgba(242,169,59,0.6)]">
              <span className="font-display text-2xl font-extrabold leading-none">श्री</span>
            </span>
            <div>
              <p className="font-display text-2xl font-bold uppercase tracking-wide text-cream">
                Jai Shree Ram 
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-muted-blue">
                Outstation · Airport · Local · Weddings
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-blue">
            Your trusted travel partner for comfortable, safe and affordable journeys. Clean cars,
            professional drivers and transparent pricing — every single trip.
          </p>

          <div className="mt-7 flex items-center gap-3">
            {[
              { Icon: MessageCircle, href: `https://wa.me/${PHONE_NUMBER}`, label: "WhatsApp" },
              { Icon: Phone, href: `tel:+${PHONE_NUMBER}`, label: "Call" },
              { Icon: Instagram, href: "https://www.instagram.com/jsr_tour.travels?igsh=MTQ3NmVoaGF5YzhnZw==", label: "Instagram" },
              { Icon: Facebook, href: "https://facebook.com/jaishreeshyamtravels", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-ink text-cream transition hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">Explore</h4>
          <ul className="mt-5 space-y-3.5 text-sm text-muted-blue">
            {[
              { label: "Our Fleet", href: "#fleet" },
              { label: "Why Choose Us", href: "#why" },
              { label: "How It Works", href: "#how" },
              { label: "Book a Trip", href: `https://wa.me/${PHONE_NUMBER}` },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition hover:text-cream">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">Get in Touch</h4>
          <ul className="mt-5 space-y-3.5 text-sm text-muted-blue">
            <li>
              <a href={`tel:+${PHONE_NUMBER}`} className="font-mono transition hover:text-cream">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> Available 24 / 7
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Rewari · Delhi NCR &amp; beyond
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline px-5 py-6 text-center">
        <p className="font-mono text-[11px] text-muted-blue">
          © {new Date().getFullYear()} Shree Shyam Car Rentals · All rights reserved
        </p>
      </div>
    </footer>
  )
}