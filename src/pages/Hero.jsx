import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ScanEye, Phone, Eye } from 'lucide-react';

const Hero = () => {
  // Replace with your actual WhatsApp phone number (with country code, no + or spaces)
  const whatsappNumber = '2348000000000';
  const whatsappMessage = encodeURIComponent(
    'Hello, I would like to book an eye examination appointment.'
  );

  return (
    <section className="relative overflow-hidden bg-[#f8f9f5] font-sans text-gray-900 pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-24 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Left Column - Content & Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Emergency Contact Top Pill */}
          <a
            href="tel:08000000000"
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 hover:bg-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide mb-6 transition-all"
          >
            <Phone size={14} className="animate-pulse text-emerald-600" />
            <span>Emergency: +234 800 XXX XXXX</span>
          </a>

          {/* Subtitle Accent */}
          <div className="flex items-center gap-2 text-cyan-600 text-sm font-semibold tracking-wider uppercase mb-3">
            <Eye className="w-4 h-4 stroke-[2.5]" />
            <span>Optometry &amp; Eyewear Atelier</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1c0f13] sm:text-5xl lg:text-6xl">
            Precision Vision.
            <br />
            <span className="text-cyan-500">Elevated</span> Eyewear.
          </h1>

          {/* Subtext Description */}
          <p className="mt-6 max-w-lg text-balance text-base sm:text-lg leading-relaxed text-gray-600">
            LUMEN pairs clinical-grade diagnostics with a curated eyewear studio —
            so every exam ends not just with a prescription, but with frames worth wearing.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* WhatsApp Direct Booking Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-xs hover:shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>Book an Examination</span>
              <ArrowRight size={16} />
            </a>

            {/* Services Link */}
            <Link
              to="/services"
              className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-800 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-xs transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>

          {/* Social Proof / Patient Ratings */}
          <div className="mt-10 flex items-center gap-5 pt-4 border-t border-gray-200/80">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#f8f9f5] bg-gray-200 flex items-center justify-center text-xs text-gray-500"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 15}`}
                    alt={`Patient ${i}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1 text-xs font-medium text-gray-500">
                4.9 from 1,200+ reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Visual Card & Dynamic Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-md lg:max-w-lg items-center justify-center"
        >
          {/* Main Visual Image Card */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg border border-gray-200/80">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
              alt="Optometrist conducting a precision digital eye examination at LUMEN Eye Care"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Feature Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 left-4 sm:left-0 flex items-center gap-3.5 rounded-2xl bg-white border border-gray-100 px-5 py-4 shadow-xl"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100">
              <ScanEye size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">Digital Retina Mapping</p>
              <p className="text-xs text-gray-500">Included in every examination</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;