import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Reveal, PageShell } from '../components/Motion.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'

const team = [
  {
    name: 'Dr. Adaeze Nwosu, OD',
    role: 'Lead Optometrist',
    credentials: ['FAAO Fellow', 'Corneal Disease', 'Scleral Lens Specialist'],
    bio: 'Dr. Nwosu has practiced clinical optometry for 15 years, with a fellowship focus on corneal disease and complex contact lens fitting. She leads LUMEN\'s diagnostic program and personally oversees every scleral and Ortho-K fitting.',
    tone: 'teal',
  },
  {
    name: 'Dr. Michael Eze, OD',
    role: 'Pediatric Vision Specialist',
    credentials: ['Pediatric Optometry', 'Myopia Management', 'Vision Therapy'],
    bio: 'Michael\'s practice centers on children\'s vision — from early detection of amblyopia to long-term myopia control. He built LUMEN\'s sensory-friendly exam protocol used across the pediatric program.',
    tone: 'ink',
  },
  {
    name: 'Ivy Bassey',
    role: 'Eyewear Stylist & Optician',
    credentials: ['Licensed Optician', 'Frame Fitting', 'Luxury Eyewear Curation'],
    bio: 'Ivy curates LUMEN\'s designer eyewear wall and leads every styling consultation, pairing prescriptions with frames that actually suit how patients live and dress.',
    tone: 'teal',
  },
]

export default function Team() {
  return (
    <PageShell>
      <section className="pb-16 pt-20 sm:pt-28 md:pl-10">
        <div className="container-lumen">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The Practice</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-ink-800 sm:text-5xl">
              The people behind every prescription
            </h1>
            <p className="mt-5 text-lg text-ink-400">
              Three specialists, one shared standard: no exam ends until you understand exactly what we found.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-28 md:pl-10">
        <div className="container-lumen grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <article className="card-lumen flex h-full flex-col overflow-hidden">
                <div className="aspect-[4/5] w-full">
                  <ImagePlaceholder
                    alt={`Portrait of ${member.name}, ${member.role} at LUMEN Eye Care`}
                    className="h-full w-full"
                    tone={member.tone}
                  />
                  {/* <img src={team.image} alt="" /> */}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{member.role}</p>
                  <h2 className="mt-2 font-display text-xl font-bold text-ink-800">{member.name}</h2>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.credentials.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1 rounded-full bg-sand-200 px-3 py-1 text-[11px] font-semibold text-ink-600">
                        <GraduationCap size={12} className="text-teal-600" />
                        {c}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-400">{member.bio}</p>

                  <Link
                    to="/booking"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-ink-800/15 px-5 py-3 text-sm font-semibold text-ink-800 transition-all hover:border-teal-500 hover:text-teal-600"
                  >
                    Book with {member.name.split(',')[0].replace('Dr. ', '')}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  )
}