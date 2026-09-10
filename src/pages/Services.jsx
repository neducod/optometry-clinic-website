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
    accentColor: 'bg-emerald-300',
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
    accentColor: 'bg-sky-300',
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
    accentColor: 'bg-pink-300',
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
    accentColor: 'bg-amber-300',
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
    accentColor: 'bg-teal-300',
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
      <div className="bg-[#f8f9f5] text-black min-h-screen">
        <section className="pb-12 pt-20 sm:pt-28 md:pl-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-black/70 font-medium">What We Offer</p>
              <h1 className="mt-3 font-serif text-4xl font-normal text-black sm:text-5xl leading-tight">
                Care built around precision
              </h1>
              <p className="mt-4 text-base text-black/80 leading-relaxed font-light">
                Every service starts with diagnostics, not guesswork. Select a specialty to see what's included.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-28 md:pl-10">
          <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
            {/* Navigation Tabs */}
            <Reveal>
              <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                {services.map((item, i) => {
                  const isActive = active === i
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActive(i)}
                      className={`flex shrink-0 items-center gap-3.5 rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:shrink lg:w-full ${
                        isActive
                          ? 'border-white/40 bg-white/10 shadow-sm backdrop-blur-md'
                          : 'border-white/10 bg-transparent hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-xs ${item.accentColor}`} />
                      <span className={`whitespace-nowrap text-sm tracking-wide lg:whitespace-normal ${isActive ? 'font-medium text-black' : 'text-black/70'}`}>
                        {item.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </Reveal>

            {/* Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-md sm:p-12 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-xs ${s.accentColor}`} />
                  <s.icon className="h-6 w-6 text-black/90" />
                </div>

                <h2 className="mt-6 font-serif text-3xl font-normal text-black sm:text-4xl">{s.title}</h2>
                <p className="mt-3 max-w-xl text-black/80 text-base font-light leading-relaxed">{s.summary}</p>

                <div className="mt-8 flex flex-wrap gap-8 text-black/90">
                  <div className="flex items-center gap-2 text-sm font-light">
                    <Clock size={16} className="text-black/60" />
                    <span>{s.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-light">
                    <Tag size={16} className="text-black/60" />
                    <span>Starting at {s.from}</span>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-black/60">What's included</p>
                  <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-black/90 font-light">
                        <Check size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/booking"
                  className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-black px-7 py-3.5 text-xs tracking-wider uppercase font-medium text-white transition hover:bg-black/80"
                >
                  Book This Service
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </PageShell>
  )
}