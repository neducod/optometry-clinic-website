import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, Pause, Play } from 'lucide-react'

/**
 * TestimonialSlider
 * Drop-in, self-contained patient testimonial carousel.
 *
 * Props:
 *  - testimonials: [{ quote, name, role, rating }]
 *  - autoPlay: boolean (default true)
 *  - interval: ms between auto-advances (default 6000)
 *  - dark: renders on a dark ink background (default true)
 */
export default function TestimonialSlider({
  testimonials = defaultTestimonials,
  autoPlay = true,
  interval = 6000,
  dark = true,
}) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [playing, setPlaying] = useState(autoPlay)
  const timerRef = useRef(null)
  const liveRegionRef = useRef(null)
  const touchStartX = useRef(null)

  const count = testimonials.length
  const t = testimonials[index]

  const goTo = useCallback(
    (next) => {
      setDirection(next > index || (index === count - 1 && next === 0) ? 1 : -1)
      setIndex(((next % count) + count) % count)
    },
    [index, count]
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Autoplay
  useEffect(() => {
    if (!playing) return
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % count)
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [playing, interval, count])

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  // Respect reduced-motion: disable autoplay by default for those users
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) setPlaying(false)
  }, [])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  }

  const theme = dark
    ? {
        section: 'bg-ink-800 text-white',
        eyebrow: 'text-gold-500',
        quoteMark: 'text-teal-500',
        quoteText: 'text-sand-100',
        name: 'text-white',
        role: 'text-sand-100/60',
        navBtn: 'border-white/15 text-white hover:bg-white/10',
        dotActive: 'bg-teal-500',
        dotInactive: 'bg-white/20',
      }
    : {
        section: 'bg-sand text-ink-800',
        eyebrow: 'text-teal-600',
        quoteMark: 'text-teal-500',
        quoteText: 'text-ink-800',
        name: 'text-ink-800',
        role: 'text-ink-400',
        navBtn: 'border-ink-800/15 text-ink-800 hover:bg-ink-800/5',
        dotActive: 'bg-teal-500',
        dotInactive: 'bg-ink-800/15',
      }

  return (
    <section
      className={`${theme.section} py-24 sm:py-32`}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(autoPlay)}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className={`text-xs text-black font-semibold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
            Patient Stories
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Care our patients trust enough to talk about
          </h2>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            handleTouchEnd(e, touchStartX.current, next, prev)
            touchStartX.current = null
          }}
        >
          <Quote className={`mx-auto mb-6 ${theme.quoteMark}`} size={36} aria-hidden="true" />

          <div className="relative min-h-[220px] sm:min-h-[180px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className={`text-balance font-display text-xl font-medium leading-relaxed sm:text-2xl ${theme.quoteText}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-center gap-1" aria-hidden="true">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className={`mt-4 text-sm ${theme.role}`}>
                  <span className={`font-semibold ${theme.name}`}>{t.name}</span> — {t.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Screen-reader live announcement */}
          <p ref={liveRegionRef} className="sr-only" aria-live="polite">
            Showing testimonial {index + 1} of {count}: {t.name}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${theme.navBtn}`}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? `w-6 ${theme.dotActive}` : `w-1.5 ${theme.dotInactive}`
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${theme.navBtn}`}
            >
              <ChevronRight size={18} />
            </button>

            {autoPlay && (
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause autoplay' : 'Resume autoplay'}
                className={`ml-2 flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${theme.navBtn}`}
              >
                {playing ? <Pause size={15} /> : <Play size={15} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- swipe support ---------------------------------------------------
function handleTouchEnd(e, startX, next, prev) {
  if (startX == null) return
  const endX = e.changedTouches[0].clientX
  const delta = endX - startX
  if (Math.abs(delta) < 40) return
  if (delta < 0) next()
  else prev()
}

const defaultTestimonials = [
  {
    quote:
      'The cardiology team caught an arrhythmia my last two check-ups missed. I have never felt more looked after.',
    name: 'Grace Adeyemi',
    role: 'Cardiology patient',
    rating: 5,
  },
  {
    quote:
      'From admission to discharge, someone explained every step in plain language. That mattered more than I expected.',
    name: 'Tunde Bakare',
    role: 'Orthopedic surgery patient',
    rating: 5,
  },
  {
    quote:
      'My daughter is terrified of hospitals. The pediatric ward made her laugh within five minutes. Remarkable staff.',
    name: 'Chiamaka Eze',
    role: 'Parent, pediatric ward',
    rating: 5,
  },
  {
    quote:
      'Booked a specialist consult online, was seen on time, and had lab results back the same afternoon.',
    name: 'Daniel Okon',
    role: 'Outpatient consult',
    rating: 5,
  },
]