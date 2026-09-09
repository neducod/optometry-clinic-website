import React from 'react';

const Hero = () => {
  // Replace with your actual WhatsApp phone number (with country code, no + or spaces)
  const whatsappNumber = '2348000000000'; 
  const whatsappMessage = encodeURIComponent(
    'Hello, I would like to book an eye examination appointment.'
  );

  return (
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
  );
};

export default Hero;