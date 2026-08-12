import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Send, ParkingSquare, TramFront, CheckCircle2 } from 'lucide-react'
import { Reveal, PageShell } from '../components/Motion.jsx'

const reasons = ['General Enquiry', 'Book an Appointment', 'Insurance Question', 'Feedback / Complaint', 'Press']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: reasons[0], message: '' })
  const [sent, setSent] = useState(false)

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <PageShell>
      <section className="pb-16 pt-20 sm:pt-28">
        <div className="container-lumen">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Get in Touch</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-ink-800 sm:text-5xl">
              We'd love to hear from you
            </h1>
            <p className="mt-5 text-lg text-ink-400">
              Questions about a service, insurance, or your visit — reach us any way that's easiest.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-lumen grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px]">
          {/* Form */}
          <Reveal>
            <div className="card-lumen p-6 sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-16 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-500">
                    <CheckCircle2 size={32} />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-bold text-ink-800">Message sent</h2>
                  <p className="mt-2 max-w-sm text-ink-400">
                    Thanks, {form.name.split(' ')[0]}. Our team typically replies within one business day.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', reason: reasons[0], message: '' }) }} className="btn-secondary mt-8">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="font-display text-xl font-bold text-ink-800">Send us a message</h2>
                  <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-ink-600">Full name</span>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                        placeholder="Jane Doe"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-ink-600">Email address</span>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                        placeholder="jane@email.com"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-ink-600">Phone number</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                        placeholder="+234 800 000 0000"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold text-ink-600">Reason for enquiry</span>
                      <select
                        value={form.reason}
                        onChange={(e) => update('reason', e.target.value)}
                        className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                      >
                        {reasons.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-xs font-semibold text-ink-600">Message</span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        className="w-full rounded-xl border border-ink-800/[0.12] bg-white px-4 py-3 text-sm focus:border-teal-500 focus:outline-none"
                        placeholder="How can we help?"
                      />
                    </label>
                  </div>
                  <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
                    Send Message
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info column */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="card-lumen p-7">
                <h3 className="font-display text-lg font-bold text-ink-800">Contact Information</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600"><Phone size={16} /></span>
                    <span className="font-medium text-ink-800">+234 800 123 4567</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600"><Mail size={16} /></span>
                    <span className="font-medium text-ink-800">hello@lumeneyecare.example</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600"><Clock size={16} /></span>
                    <span className="font-medium text-ink-800">
                      Mon–Fri 9am–6pm<br />Sat 10am–4pm · Sun Closed
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600"><MapPin size={16} /></span>
                    <span className="font-medium text-ink-800">12 Gimbiya Street, Area 11, Garki, Abuja, FCT</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card-lumen overflow-hidden">
                <div
                  role="img"
                  aria-label="Map showing the location of LUMEN Eye Care in Abuja, FCT"
                  className="relative flex h-56 items-center justify-center bg-[linear-gradient(135deg,#0B192C_0%,#1B8F82_140%)]"
                >
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-ink-900 shadow-lg">
                    <MapPin size={20} />
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-ink-400">Interactive map embed placeholder — replace with a live Google Maps iframe in production.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card-lumen p-7">
                <h3 className="font-display text-lg font-bold text-ink-800">Getting Here</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <ParkingSquare size={16} className="mt-0.5 shrink-0 text-teal-600" />
                    <span className="text-ink-400">Complimentary on-site parking for patients, accessible from Gimbiya Street.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TramFront size={16} className="mt-0.5 shrink-0 text-teal-600" />
                    <span className="text-ink-400">Five-minute walk from the Area 11 transit stop.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  )
}