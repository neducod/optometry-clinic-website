import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ScanEye, Glasses, Sparkles, Users, Droplet, Check, ChevronRight, ChevronLeft,
  CalendarDays, Clock, User, Mail, Phone, Shield, MessageSquare, CheckCircle2,
} from 'lucide-react'
import { Reveal, PageShell } from '../components/Motion.jsx'

const serviceOptions = [
  { id: 'exam', label: 'Comprehensive Eye Examination', icon: ScanEye, duration: '45–60 min' },
  { id: 'lens', label: 'Custom Contact Lens Fitting', icon: Glasses, duration: '60–75 min' },
  { id: 'style', label: 'Designer Eyewear Styling', icon: Sparkles, duration: '30–45 min' },
  { id: 'family', label: 'Pediatric / Geriatric Care', icon: Users, duration: '30–50 min' },
  { id: 'dryeye', label: 'Dry Eye Therapy', icon: Droplet, duration: '40–60 min' },
]

const doctorOptions = [
  { id: 'adaeze', name: 'Dr. Adaeze Nwosu', role: 'Lead Optometrist' },
  { id: 'michael', name: 'Dr. Michael Eze', role: 'Pediatric Vision Specialist' },
  { id: 'ivy', name: 'Ivy Bassey', role: 'Eyewear Stylist & Optician' },
  { id: 'any', name: 'No Preference', role: 'First available specialist' },
]

const days = ['Mon 17', 'Tue 18', 'Wed 19', 'Thu 20', 'Fri 21', 'Sat 22']
const times = ['9:00 AM', '10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:00 PM']

const steps = ['Service', 'Practitioner', 'Date & Time', 'Your Details']

function StepIndicator({ current }) {
  return (
    <ol className="flex items-center justify-between gap-2">
      {steps.map((label, i) => (
        <li key={label} className="flex flex-1 items-center gap-2">
          <div className="flex flex-col items-center gap-2 sm:flex-1">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${
                i < current
                  ? 'bg-teal-500 text-white'
                  : i === current
                  ? 'bg-ink-800 text-white'
                  : 'bg-sand-300 text-ink-400'
              }`}
            >
              {i < current ? <Check size={16} /> : i + 1}
            </div>
            <span className={`hidden text-center text-xs font-medium sm:block ${i <= current ? 'text-ink-800' : 'text-ink-400'}`}>
              {label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-[2px] flex-1 rounded-full transition-colors duration-500 ${i < current ? 'bg-teal-500' : 'bg-sand-300'}`} />
          )}
        </li>
      ))}
    </ol>
  )
}

function SummaryCard({ data }) {
  const service = serviceOptions.find((s) => s.id === data.service)
  const doctor = doctorOptions.find((d) => d.id === data.doctor)

  const rows = [
    { icon: service?.icon || ScanEye, label: 'Service', value: service?.label },
    { icon: User, label: 'Practitioner', value: doctor?.name },
    { icon: CalendarDays, label: 'Date', value: data.day },
    { icon: Clock, label: 'Time', value: data.time },
  ].filter((r) => r.value)

  return (
    <div className="card-lumen sticky top-28 p-7">
      <p className="eyebrow">Your Booking</p>
      <h3 className="mt-2 font-display text-lg font-bold text-ink-800">Live Summary</h3>

      {rows.length === 0 ? (
        <p className="mt-6 text-sm text-ink-400">Your selections will appear here as you go.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {rows.map((r) => (
            <motion.li
              key={r.label}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <r.icon size={15} />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{r.label}</p>
                <p className="text-sm font-semibold text-ink-800">{r.value}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      )}

      <div className="mt-7 rounded-xl bg-sand-200 p-4 text-xs leading-relaxed text-ink-400">
        No payment is required to book. A member of our team will confirm your appointment by phone or email within 24 hours.
      </div>
    </div>
  )
}

export default function Booking() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({
    service: '',
    doctor: '',
    day: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    insurance: '',
    notes: '',
  })

  const canProceed = useMemo(() => {
    if (step === 0) return !!data.service
    if (step === 1) return !!data.doctor
    if (step === 2) return !!data.day && !!data.time
    if (step === 3) return !!data.name && !!data.email && !!data.phone
    return true
  }, [step, data])

  const update = (key, value) => setData((d) => ({ ...d, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canProceed) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <PageShell>
        <section className="flex min-h-[70vh] items-center justify-center py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="container-lumen max-w-lg text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 14 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 text-teal-500"
            >
              <CheckCircle2 size={40} strokeWidth={1.5} />
            </motion.div>
            <h1 className="mt-8 font-display text-3xl font-bold text-ink-800 sm:text-4xl">Appointment Requested</h1>
            <p className="mt-4 text-ink-400">
              Thank you, {data.name.split(' ')[0] || 'there'}. We've received your request for{' '}
              <span className="font-semibold text-ink-800">{serviceOptions.find((s) => s.id === data.service)?.label}</span>{' '}
              on <span className="font-semibold text-ink-800">{data.day}</span> at{' '}
              <span className="font-semibold text-ink-800">{data.time}</span>. A confirmation email is on its way to {data.email}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setStep(0)
                setData({ service: '', doctor: '', day: '', time: '', name: '', email: '', phone: '', insurance: '', notes: '' })
              }}
              className="btn-primary mt-9"
            >
              Book Another Appointment
            </button>
          </motion.div>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <section className="pb-28 pt-20 sm:pt-28">
        <div className="container-lumen">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Book Your Visit</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-ink-800 sm:text-5xl">
              Reserve your appointment
            </h1>
            <p className="mt-5 text-lg text-ink-400">Four short steps. Takes about two minutes.</p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="card-lumen p-6 sm:p-8">
                <StepIndicator current={step} />

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-10"
                    >
                      {step === 0 && (
                        <div>
                          <h2 className="font-display text-xl font-bold text-ink-800">Select a service</h2>
                          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {serviceOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt.id}
                                onClick={() => update('service', opt.id)}
                                className={`flex items-center gap-3.5 rounded-xl border p-4 text-left transition-all ${
                                  data.service === opt.id
                                    ? 'border-teal-500 bg-teal-50/50 ring-1 ring-teal-500'
                                    : 'border-ink-800/[0.08] hover:border-ink-800/20'
                                }`}
                              >
                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${data.service === opt.id ? 'bg-teal-500 text-white' : 'bg-sand-200 text-ink-800'}`}>
                                  <opt.icon size={17} />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-ink-800">{opt.label}</span>
                                  <span className="block text-xs text-ink-400">{opt.duration}</span>
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 1 && (
                        <div>
                          <h2 className="font-display text-xl font-bold text-ink-800">Choose your practitioner</h2>
                          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {doctorOptions.map((opt) => (
                              <button
                                type="button"
                                key={opt.id}
                                onClick={() => update('doctor', opt.id)}
                                className={`rounded-xl border p-4 text-left transition-all ${
                                  data.doctor === opt.id
                                    ? 'border-teal-500 bg-teal-50/50 ring-1 ring-teal-500'
                                    : 'border-ink-800/[0.08] hover:border-ink-800/20'
                                }`}
                              >
                                <span className="block text-sm font-semibold text-ink-800">{opt.name}</span>
                                <span className="block text-xs text-ink-400">{opt.role}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <h2 className="font-display text-xl font-bold text-ink-800">Pick a date &amp; time</h2>
                          <p className="mt-1 text-sm text-ink-400">Slots shown in your local time.</p>

                          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
                            {days.map((d) => (
                              <button
                                type="button"
                                key={d}
                                onClick={() => update('day', d)}
                                className={`shrink-0 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                                  data.day === d
                                    ? 'border-teal-500 bg-teal-500 text-white'
                                    : 'border-ink-800/[0.08] text-ink-800 hover:border-ink-800/20'
                                }`}
                              >
                                {d}
                              </button>
                            ))}
                          </div>

                          <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                            {times.map((t) => (
                              <button
                                type="button"
                                key={t}
                                onClick={() => update('time', t)}
                                className={`rounded-xl border px-3 py-3 text-sm font-medium transition-all ${
                                  data.time === t
                                    ? 'border-teal-500 bg-teal-50 text-teal-700 ring-1 ring-teal-500'
                                    : 'border-ink-800/[0.08] text-ink-800 hover:border-ink-800/20'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div>
                          <h2 className="font-display text-xl font-bold text-ink-800">Your details</h2>
                          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <label className="block">
                              <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-600"><User size={13} /> Full name</span>
                              <input
                                required
                                value={data.name}
                                onChange={(e) => update('name', e.target.value)}
                                className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                                placeholder="Jane Doe"
                              />
                            </label>
                            <label className="block">
                              <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-600"><Mail size={13} /> Email address</span>
                              <input
                                required
                                type="email"
                                value={data.email}
                                onChange={(e) => update('email', e.target.value)}
                                className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                                placeholder="jane@email.com"
                              />
                            </label>
                            <label className="block">
                              <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-600"><Phone size={13} /> Phone number</span>
                              <input
                                required
                                type="tel"
                                value={data.phone}
                                onChange={(e) => update('phone', e.target.value)}
                                className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                                placeholder="+234 800 000 0000"
                              />
                            </label>
                            <label className="block">
                              <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-600"><Shield size={13} /> Insurance provider (optional)</span>
                              <input
                                value={data.insurance}
                                onChange={(e) => update('insurance', e.target.value)}
                                className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                                placeholder="e.g. AXA Mansard"
                              />
                            </label>
                            <label className="block sm:col-span-2">
                              <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-ink-600"><MessageSquare size={13} /> Notes for the clinic (optional)</span>
                              <textarea
                                value={data.notes}
                                onChange={(e) => update('notes', e.target.value)}
                                rows={3}
                                className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                                placeholder="Anything we should know before your visit?"
                              />
                            </label>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-10 flex items-center justify-between border-t border-ink-800/[0.06] pt-6">
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-400 transition-colors hover:text-ink-800 disabled:opacity-0"
                    >
                      <ChevronLeft size={16} /> Back
                    </button>

                    {step < steps.length - 1 ? (
                      <button
                        type="button"
                        disabled={!canProceed}
                        onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                        className="btn-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                      >
                        Continue <ChevronRight size={16} />
                      </button>
                    ) : (
                      <button type="submit" disabled={!canProceed} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">
                        Confirm Appointment <Check size={16} />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <Reveal delay={0.15}>
              <SummaryCard data={data} />
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  )
}