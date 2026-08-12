import { Link } from 'react-router-dom'
// import { Eye, Instagram, Facebook, Twitter, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

const hours = [
  ['Monday – Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '10:00 AM – 4:00 PM'],
  ['Sunday', 'Closed'],
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <>
    <footer className="border-t border-ink-800/[0.06] bg-ink-800 text-sand-100">
      <div className="container-lumen grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-ink-900">
              <Eye size={18} />
            </span>
            LUMEN Eye Care
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/60">
            A precision optometry studio dedicated to clarity, comfort, and considered eyewear.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
              
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sand-100/70 transition-colors hover:bg-teal-500 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-500">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-sand-100/70">
            <li><Link to="/services" className="transition-colors hover:text-white">Our Services</Link></li>
            <li><Link to="/team" className="transition-colors hover:text-white">Meet the Doctors</Link></li>
            <li><Link to="/booking" className="transition-colors hover:text-white">Book an Appointment</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-white">Contact & Directions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-500">Clinic Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-sand-100/70">
            {hours.map(([d, h]) => (
              <li key={d} className="flex justify-between gap-4">
                <span>{d}</span>
                <span className="text-sand-100/90">{h}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-5 space-y-2.5 text-sm text-sand-100/70">
            <li className="flex items-center gap-2"><Phone size={14} className="text-teal-400" /> +234 800 123 4567</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-teal-400" /> hello@lumeneyecare.example</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-teal-400" /> Abuja, FCT, Nigeria</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest2 text-gold-500">Vision Notes</h3>
          <p className="mt-5 text-sm leading-relaxed text-sand-100/60">
            Seasonal eye-care tips and appointment openings, sent occasionally.
          </p>
          {sent ? (
            <p className="mt-4 rounded-xl bg-white/5 px-4 py-3 text-sm text-teal-400">You're on the list — thank you.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-sand-100/40 focus:border-teal-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white transition-colors hover:bg-teal-600"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lumen flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand-100/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} LUMEN Eye Care. All rights reserved.</p>
          <p>Designed as a portfolio demonstration — not a real medical practice.</p>
        </div>
      </div>
    </footer>
    </>
  )
}