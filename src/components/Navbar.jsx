import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Eye, CalendarCheck } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Doctors' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-soft backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-lumen flex h-20 items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-ink-800" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-gold-500">
            <Eye size={18} strokeWidth={2} />
          </span>
          LUMEN <span className="hidden font-medium text-ink-400 sm:inline">Eye Care</span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-ink-800' : 'text-ink-400 hover:text-ink-800'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-teal-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/booking" className="btn-primary">
            <CalendarCheck size={16} />
            Book Appointment
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink-800 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-sand p-7 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-lg font-extrabold text-ink-800">LUMEN</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-800 shadow-card"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-4 font-display text-2xl font-semibold transition-colors ${
                          isActive ? 'bg-white text-teal-600 shadow-card' : 'text-ink-800'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link to="/booking" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
                <CalendarCheck size={16} />
                Book Appointment
              </Link>

              <div className="mt-auto pt-8 text-sm text-ink-400">
                <p>Open Mon–Sat, 9am–6pm</p>
                <p className="mt-1">+234 800 123 4567</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}