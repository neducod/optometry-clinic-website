import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, ScanEye, Glasses, Baby, Star,
  ChevronLeft, ChevronRight, Quote,
} from 'lucide-react'
import { Reveal, PageShell, stagger, staggerItem } from '../components/Motion.jsx'
import ApertureMark from '../components/ApertureMark.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'

import OptometrySlider from '../components/Slideshow.jsx'




const stats = [
  { value: '15+', label: 'Years of Clinical Experience' },
  { value: '10k+', label: 'Patients Served' },
  { value: '4.9★', label: 'Average Patient Rating' },
  { value: '32', label: 'Designer Eyewear Houses' },
]

const features = [
  {
    icon: ScanEye,
    title: 'Precision Diagnostics',
    desc: 'Digital retina mapping and glaucoma screening using clinical-grade imaging for an exact reading of eye health.',
  },
  {
    icon: Glasses,
    title: 'Custom Lens Fitting',
    desc: 'Scleral and Ortho-K lenses fitted to the individual curvature of your eye — for comfort standard lenses can\'t match.',
  },
  {
    icon: Baby,
    title: 'Care for Every Age',
    desc: 'Gentle, thorough vision care pathways designed separately for growing eyes and aging ones.',
  },
]

const testimonials = [
  {
    quote: 'The retina mapping caught something my last three check-ups missed. I\'ve never felt more looked after.',
    name: 'Amara O.',
    role: 'Patient since 2022',
    rating: 5,
  },
  {
    quote: 'Booked online in two minutes, seen on time, and walked out with frames I actually love. Rare combination.',
    name: 'Daniel K.',
    role: 'Patient since 2023',
    rating: 5,
  },
  {
    quote: 'My son is terrified of clinics. Dr. Adaeze made his exam feel like a game. He asks to go back.',
    name: 'Funmilayo A.',
    role: 'Parent, pediatric care',
    rating: 5,
  },
]

function TrustBar() {
  return (
    <section className="border-y border-ink-800/[0.06] bg-white">
      <div className="container-lumen">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 divide-x divide-ink-800/[0.06] py-10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div variants={staggerItem} key={s.label} className="px-4 text-center sm:px-6">
              <p className="font-display text-3xl font-extrabold text-ink-800 sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs font-medium leading-snug text-ink-400 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-ink-800 py-24 text-white sm:py-32">
      <div className="container-lumen">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-500">Patient Voices</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Trusted with the way people see the world</h2>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto mb-6 text-teal-500" size={36} />
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-balance font-display text-xl font-medium leading-relaxed text-sand-100 sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="mt-4 text-sm text-sand-100/60">
              <span className="font-semibold text-white">{t.name}</span> — {t.role}
            </p>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-teal-500' : 'w-1.5 bg-white/20'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-iris-gradient" />
        <div className="container-lumen relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Optometry &amp; Eyewear Atelier</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
              Precision Vision.
              <br />
              <span className="text-teal-500">Elevated</span> Eyewear.
            </h1>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-400">
              LUMEN pairs clinical-grade diagnostics with a curated eyewear studio —
              so every exam ends not just with a prescription, but with frames worth wearing.
            </p>
            <div className="mt-9 flex  gap-4 sm:flex-row">
              <Link to="/booking" className="btn-primary text-teal-500 ">
                Book an Examination
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary text-teal-800">
                Explore Services
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-sand">
                    <ImagePlaceholder alt={`Portrait of LUMEN patient ${i + 1}`} className="h-full w-full" tone="teal" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-ink-400">4.9 from 1,200+ reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center"
          >
            <ApertureMark size={440} className="absolute inset-0 m-auto" />
            <div className="relative aspect-[4/5] w-3/5 overflow-hidden rounded-3xl shadow-glow">
              <ImagePlaceholder
                alt="Optometrist conducting a precision digital eye examination at LUMEN Eye Care"
                className="h-full w-full"
                tone="ink"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card sm:left-0"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <ScanEye size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-800">Digital Retina Mapping</p>
                <p className="text-xs text-ink-400">Included in every exam</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustBar />

      {/* FEATURE GRID */}
      <section className="py-24 sm:py-32 flex flex-col justify-between itmes-center md:pl-10">
        <div className="container-lumen">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Core Specialties</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-800 sm:text-4xl">
              Three disciplines, one uninterrupted standard of care
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="card-lumen group h-full p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-800 text-gold-500 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-white">
                    <f.icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink-800">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{f.desc}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 transition-transform group-hover:translate-x-1">
                    Learn more <ArrowUpRight size={15} />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR HIGHLIGHT */}
      <section className="py-24 sm:py-32">
        <div className="container-lumen">
          <div className="grid grid-cols-1 items-center gap-12 rounded-3xl bg-white p-8 shadow-card sm:p-12 lg:grid-cols-2 lg:p-16">
            <Reveal>
              <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
                <ImagePlaceholder
                  alt="Portrait of Dr. Adaeze Nwosu, Lead Optometrist at LUMEN Eye Care"
                  className="h-full w-full"
                  tone="teal"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">Lead Optometrist</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink-800 sm:text-4xl">Dr. Adaeze Nwosu, OD</h2>
              <p className="mt-5 max-w-md text-ink-400">
                With 15 years in clinical optometry and a fellowship in corneal disease,
                Dr. Nwosu leads LUMEN's diagnostic program and personally oversees every
                complex fitting.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['FAAO Fellow', 'Corneal Disease', 'Scleral Lens Specialist'].map((tag) => (
                  <span key={tag} className="rounded-full bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-700">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/team" className="btn-secondary mt-8 justify-center items-center btn-primary mt-8 cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition shadow-md w-60">
                Meet the Full Team
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <OptometrySlider/>


      {/* CLOSING CTA */}
      <section className="py-24 sm:py-32">
        <Reveal className="container-lumen text-center flex justify-center flex-col items-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ink-800 sm:text-4xl">
            Your eyes deserve more than a five-minute glance.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-400">
            Reserve a comprehensive examination and leave with clarity — in your prescription, and in your frames.
          </p>
          <Link to="/booking" className="justify-center items-center btn-primary mt-8 cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition shadow-md w-60">
            Book an Examination
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </PageShell>
  )
}