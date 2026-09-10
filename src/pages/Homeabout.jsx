import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Award, 
  Users, 
  PhoneCall, 
  ArrowRight, 
  Activity, 
  Clock, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';

export default function HospitalAboutUs() {
  const stats = [
    { label: "Patients Treated Yearly", value: "250,000+" },
    { label: "Board-Certified Specialists", value: "450+" },
    { label: "Emergency Response Time", value: "< 8 Mins" },
    { label: "Years of Excellence", value: "35+" }
  ];

  const specialties = [
    { title: "Cardiology & Vascular", desc: "Advanced cardiac care, non-invasive imaging, and emergency intervention." },
    { title: "Oncology Center", desc: "Comprehensive cancer therapy, precision medicine, and supportive care." },
    { title: "Neurology & Spine", desc: "Cutting-edge neurological treatments and minimally invasive spine surgery." },
    { title: "Pediatric Care", desc: "Dedicated emergency and specialized treatment for infants and children." },
    { title: "Orthopedics & Sports", desc: "Joint replacement, fracture management, and physical rehabilitation." },
    { title: "24/7 Emergency Services", desc: "Level 1 Trauma capabilities with rapid care routing and dedicated triage." }
  ];

  const coreValues = [
    { title: "Patient-Centered Care", desc: "We put you and your family at the heart of every decision we make." },
    { title: "Clinical Excellence", desc: "Delivering world-class healthcare through evidence-based medicine." },
    { title: "Compassion & Respect", desc: "Treating every individual with dignity, empathy, and cultural care." },
    { title: "Innovation & Research", desc: "Pioneering new treatments and technologies to improve patient outcomes." }
  ];

  return (
    <div className="bg-[#5B6FB4]  text-slate-100 min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-[#5B6FB4] py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-widest mb-6">
              <Activity className="w-3.5 h-3.5" />
              Compassionate Care, World-Class Medicine
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Dedicated to restoring health and inspiring hope.
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              For over three decades, St. Jude Regional Health Center has combined advanced medical research with deep personal empathy to serve our local and global community.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#doctors" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors duration-200"
              >
                Find a Doctor
              </a>
              <a 
                href="tel:911" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-semibold hover:bg-slate-700 transition-colors duration-200"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                Emergency Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="border-b border-slate-800 bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION & STORY SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black tracking-tight sm:text-4xl">
              Setting the standard for modern healthcare.
            </h2>
            <p className="mt-6 text-slate-800 leading-relaxed">
              Founded with the mission to bring accessible, elite-tier clinical services to all, St. Jude Regional Health Center integrates cutting-edge clinical research, smart technologies, and personalized patient care plans.
            </p>
            <p className="mt-4 text-slate-800 leading-relaxed">
              Our multidisciplinary care teams prioritize early detection, accurate diagnosis, and empathetic support at every phase of treatment.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Recognized Top 50 National Health Center",
                "Fully Accredited Level 1 Trauma Facility",
                "Dedicated International Patient Care Desk"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video lg:aspect-square rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden relative flex items-center justify-center text-slate-500">
              <div className="text-center p-6">
                <Users className="w-12 h-12 mx-auto mb-3 text-slate-600" />
                <p className="text-sm font-medium">Image Placeholder: Care Team & Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-slate-900 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Centers of Medical Excellence
            </h2>
            <p className="mt-4 text-slate-400">
              Comprehensive care backed by specialized departments and state-of-the-art diagnostics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                <a href="#learn-more" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* --- OUR CORE VALUES --- */}
      <section className="py-20 bg-[#5B6FB4] ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-black tracking-tight sm:text-4xl">
              Guided by Core Values
            </h2>
            <p className="mt-4 text-slate-800">
              Our culture shapes how we care for every patient and support every family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-800">
                <Heart className="w-6 h-6 text-emerald-400 mb-4" />
                <h3 className="text-base font-semibold text-black mb-2">{value.title}</h3>
                <p className="text-sm text-slate-800 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16  border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Need immediate care or a specialist consultation?</h2>
            <p className="mt-2 text-slate-400 text-sm">Our patient support team is available 24/7 to assist with appointments and medical routing.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors">
              Book Appointment
            </button>
            <button className="px-6 py-3 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 font-semibold hover:bg-slate-700 transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              Get Directions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}