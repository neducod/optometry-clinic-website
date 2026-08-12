import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ScanEye, Glasses, Sparkles, Users, Droplet, Clock, Tag, Check, ArrowRight } from 'lucide-react'
import { Reveal, PageShell } from '../components/Motion.jsx'

const services = [
  {
    icon: ScanEye,
    title: 'Comprehensive Eye Examinations',
    duration: '45–60 min',
    from: '₦25,000',
    summary: 'A full diagnostic workup that goes beyond a standard vision test.',
    includes: [
      'Digital retina mapping',
      'Glaucoma & pressure screening',
      'Visual acuity & refraction',
      'Personalized report with imaging',
    ],
  },
  {
    icon: Glasses,
    title: 'Custom Contact Lens Fitting',
    duration: '60–75 min',
    from: '₦40,000',
    summary: 'Scleral and Ortho-K lenses mapped to your exact corneal profile.',
    includes: [
      'Corneal topography mapping',
      'Scleral lens fitting',
      'Overnight Ortho-K fitting',
      'Two follow-up adjustments',
    ],
  },
  {
    icon: Sparkles,
    title: 'Luxury & Designer Eyewear Styling',
    duration: '30–45 min',
    from: 'Complimentary with exam',
    summary: 'One-on-one styling from LUMEN\'s curated designer eyewear collection.',
    includes: [
      'Face-shape & lifestyle consultation',
      'Access to 32 designer houses',
      'Lens coating & tint guidance',
      'Precision frame adjustment',
    ],
  },
  {
    icon: Users,
    title: 'Pediatric & Geriatric Eye Care',
    duration: '30–50 min',
    from: '₦20,000',
    summary: 'Age-adapted exam pathways for growing eyes and aging ones alike.',
    includes: [
      'Myopia progression tracking (children)',
      'Cataract & macular screening (seniors)',
      'Sensory-friendly exam environment',
      'Family vision history review',
    ],
  },
  {
    icon: Droplet,
    title: 'Dry Eye Therapy & Myopia Management',
    duration: '40–60 min',
    from: '₦30,000',
    summary: 'Ongoing therapy programs for chronic dry eye and progressive myopia.',
    includes: [
      'Meibomian gland evaluation',
      'In-clinic thermal therapy',
      'Myopia control lens options',
      'Quarterly progress reviews',
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <PageShell>
      <section className="pb-16 pt-20 sm:pt-28">
        <div className="container-lumen">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What We Offer</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-ink-800 sm:text-5xl">
              Care built around precision
            </h1>
            <p className="mt-5 text-lg text-ink-400">
              Every service starts with diagnostics, not guesswork. Select a specialty to see what's included.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-lumen grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
          {/* Tab list */}
          <Reveal>
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {services.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:shrink lg:w-full ${
                    active === i
                      ? 'border-teal-500 bg-white shadow-card'
                      : 'border-ink-800/[0.06] bg-white/40 hover:border-ink-800/15'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      active === i ? 'bg-teal-500 text-white' : 'bg-ink-800/5 text-ink-800'
                    }`}
                  >
                    <item.icon size={18} />
                  </span>
                  <span className={`whitespace-nowrap text-sm font-semibold lg:whitespace-normal ${active === i ? 'text-ink-800' : 'text-ink-400'}`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="card-lumen p-8 sm:p-12"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-800 text-gold-500">
                <s.icon size={26} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink-800 sm:text-3xl">{s.title}</h2>
              <p className="mt-3 max-w-xl text-ink-400">{s.summary}</p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-ink-800">
                  <Clock size={16} className="text-teal-600" />
                  <span className="font-medium">{s.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-800">
                  <Tag size={16} className="text-teal-600" />
                  <span className="font-medium">Starting at {s.from}</span>
                </div>
              </div>

              <div className="mt-8 border-t border-ink-800/[0.06] pt-8">
                <p className="text-sm font-semibold uppercase tracking-widest2 text-ink-400">What's included</p>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-800">
                      <Check size={16} className="mt-0.5 shrink-0 text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/booking" className="btn-primary mt-10">
                Book This Service
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageShell>
  )
}