import { Link } from 'react-router-dom'
import { useState } from 'react'

const hours = [
  ['Monday – Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '10:00 AM – 4:00 PM'],
  ['Sunday', 'Closed'],
]

export default function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <footer className="w-full bg-[#5B6FB4] text-white/90 font-sans pt-16 pb-8 px-6 sm:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Brand Statement & Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-20">
          
          {/* Column 1: Brand Statement */}
          <div className="pr-4">
            <h2 className="text-xl sm:text-2xl font-normal text-white/95 leading-snug">
              Precision optometry rooted in clarity and considered eyewear.
            </h2>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-white/90 mb-4 tracking-wide font-medium">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Meet the Doctors
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-white transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinic Hours */}
          <div>
            <h3 className="font-serif text-lg text-white/90 mb-4 tracking-wide font-medium">
              Clinic Hours
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light">
              {hours.map(([d, h]) => (
                <li key={d} className="flex justify-between max-w-xs gap-4">
                  <span>{d}</span>
                  <span className="text-white/60">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect / Socials */}
          <div>
            <h3 className="font-serif text-lg text-white/90 mb-4 tracking-wide font-medium">
              Connect
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Graphic Logo & Newsletter Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-8 border-t border-white/10">
          
          {/* Large Abstract Eye/Logo SVG Graphic matching the knot/emblem style */}
          <div className="lg:col-span-5 flex justify-start items-center">
            <svg
              className="w-36 h-36 sm:w-44 sm:h-44 text-white/90 stroke-current fill-none"
              viewBox="0 0 100 100"
              strokeWidth="2.5"
            >
              {/* Overlapping Infinity / Eye Icon design */}
              <path d="M20 50 C20 30, 40 30, 50 50 C60 70, 80 70, 80 50 C80 30, 60 30, 50 50 C40 70, 20 70, 20 50 Z" />
              <circle cx="50" cy="50" r="12" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-7 w-full max-w-xl">
            <p className="text-sm text-white/90 font-light mb-6">
              Sign up to receive eye-care tips and access to our latest appointment openings.
            </p>

            {sent ? (
              <p className="text-sm text-white/90 py-2 border-b border-white/30">
                You're on the list — thank you.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/40 pb-2 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/40 pb-2 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <p className="text-[11px] text-white/60 leading-tight pt-1">
                  By subscribing you are consenting to receive communications from LUMEN Eye Care and accept our{' '}
                  <Link to="/privacy" className="underline hover:text-white">
                    Privacy Policy
                  </Link>
                  . You can unsubscribe at any time.
                </p>

                <button
                  type="submit"
                  className="flex items-center gap-2 text-sm font-light text-white/90 hover:text-white pt-2 transition-colors group cursor-pointer"
                >
                  <span className="text-xs">●</span>
                  <span className="group-hover:underline">Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Legal Sub-bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/50 pt-16 font-light">
          <div>
            &copy; PORTFOLIO DEMO, {new Date().getFullYear()}. Josephine Jerome.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white/80 transition-colors">
              Terms
            </Link>
          </div>
          <div>Site by S/A</div>
        </div>

      </div>
    </footer>
  )
}