import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Eye, 
  Glasses, 
  Clock, 
  Phone,
  CheckCircle2,
  Shield,
  Sparkles
} from 'lucide-react';

const slidesData = [
  {
    id: 1,
    title: "Comprehensive Eye Care for the Whole Family",
    subtitle: "ADVANCED DIAGNOSTICS & OPTOMETRY",
    description: "Experience state-of-the-art vision testing, retinal imaging, and personalized ocular health assessments by certified specialists.",
    tag: "Next-Gen Technology",
    primaryCta: "Book Eye Exam",
    secondaryCta: "Our Services",
    accentIcon: Eye,
    bgGradient: "from-slate-900 via-sky-950 to-slate-900",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Patient Satisfaction", value: "99%" },
      { label: "Years Experience", value: "15+" }
    ]
  },
  {
    id: 2,
    title: "Designer Frames & Precision Lenses",
    subtitle: "BOUTIQUE EYEWEAR COLLECTION",
    description: "Discover handcrafted prescription glasses, premium anti-reflective coatings, and tailored contact lens fittings to match your style.",
    tag: "Curated Eyewear",
    primaryCta: "Explore Eyewear",
    secondaryCta: "View Brands",
    accentIcon: Glasses,
    bgGradient: "from-slate-900 via-indigo-950 to-slate-900",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Designer Brands", value: "40+" },
      { label: "Lens Warranty", value: "2 Yrs" }
    ]
  },
  {
    id: 3,
    title: "Specialized Pediatric & Myopia Control",
    subtitle: "PROTECTING YOUNG VISION",
    description: "Early detection and customized treatment plans to slow down myopia progression and safeguard your child's visual development.",
    tag: "Pediatric Eye Care",
    primaryCta: "Schedule Kids Exam",
    secondaryCta: "Learn About Myopia",
    accentIcon: Shield,
    bgGradient: "from-slate-900 via-teal-950 to-slate-900",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Myopia Control Rate", value: "Up to 60%" },
      { label: "Kid-Friendly Staff", value: "100%" }
    ]
  }
];

export default function OptometrySlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play feature (5-second intervals)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      nextSlide(); // Swipe left
    }
    if (touchStartX.current - touchEndX.current < -75) {
      prevSlide(); // Swipe right
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">

      {/* Main Slider Container */}
      <div 
        className="relative overflow-hidden rounded-b-2xl shadow-2xl bg-slate-950 border-x border-b border-slate-800 min-h-[550px] md:min-h-[600px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slidesData.map((slide, index) => {
          const Icon = slide.accentIcon;
          const isActive = index === current;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background with Dark Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-95`} />

              {/* Slide Content Grid */}
              <div className="relative h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
                
                {/* Left Column: Text Content */}
                <div className="lg:col-span-7 space-y-6 z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slide.tag}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                      {slide.title}
                    </h2>
                  </div>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-sky-500/25">
                      <Calendar className="w-4 h-4" />
                      {slide.primaryCta}
                    </button>
                    <button className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all">
                      {slide.secondaryCta}
                    </button>
                  </div>

                  {/* Highlights / Quick Stats */}
                  <div className="pt-6 border-t border-slate-800/80 flex items-center gap-8">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Image with Card Styling */}
                <div className="lg:col-span-5 relative hidden sm:block">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl group">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-64 lg:h-96 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700 text-sky-400 shadow-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-sky-500 text-white hover:text-slate-950 border border-slate-700/50 backdrop-blur-md transition-all transform hover:scale-110 focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-sky-500 text-white hover:text-slate-950 border border-slate-700/50 backdrop-blur-md transition-all transform hover:scale-110 focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current 
                  ? "w-8 bg-sky-400" 
                  : "w-2.5 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}