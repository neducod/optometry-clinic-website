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





const Hero = () => {
  // Replace with your actual WhatsApp phone number (with country code, no + or spaces)
  const whatsappNumber = '2348000000000'; 
  const whatsappMessage = encodeURIComponent(
    'Hello, I would like to book an eye examination appointment.'
  );
}







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
      {/* <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-24">
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
      </section> */}

<section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden font-sans">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000" // High quality optometry / eye clinic image
          alt="Optometry Clinic Eye Exam"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Soft dark & light overlay for high legibility matching the inspiration image style */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40 sm:bg-slate-900/50 backdrop-blur-[1px]" />
      </div>

      {/* Slider Nav Controls Inspiration (Left/Right Arrows for aesthetic slider feel) */}
      <button 
        aria-label="Previous Slide" 
        className="hidden md:flex absolute left-4 z-20 w-10 h-10 items-center justify-center bg-black/20 hover:bg-black/50 text-white/70 hover:text-white transition-all rounded-xs backdrop-blur-xs"
      >
        ❮
      </button>
      <button 
        aria-label="Next Slide" 
        className="hidden md:flex absolute right-4 z-20 w-10 h-10 items-center justify-center bg-black/20 hover:bg-black/50 text-white/70 hover:text-white transition-all rounded-xs backdrop-blur-xs"
      >
        ❯
      </button>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        
        {/* Emergency Contact Top Pill */}
        <a
          href="tel:08000000000"
          className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-6 backdrop-blur-md transition-all"
        >
          <span className="animate-pulse">📞</span>
          <span>Emergency: 0800 XXX XXXX</span>
        </a>

        {/* Eye Clinic Watermark / Subtitle Icon Accent */}
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          <span>Welcome To Clear Vision Optometry</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight mb-4 max-w-3xl drop-shadow-md">
          Quality Healthcare You Can Trust
        </h1>

        {/* Description Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-normal max-w-2xl mb-8 leading-relaxed drop-shadow-sm">
          Compassionate healthcare services for you and your family, delivered by experienced medical professionals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* WhatsApp Action Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
          > 
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Book an Appointment</span>
          </a> 

          {/* Services Button */}
          <a
            href="#services"
            className="w-full sm:w-auto bg-[#00a8cc] hover:bg-[#008cae] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>Our Services</span>
            <span className="text-xs">→</span>
          </a>
        </div>
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