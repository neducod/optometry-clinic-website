// import { useEffect, useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Menu, X, Eye, CalendarCheck } from 'lucide-react'

// const links = [
//   { to: '/', label: 'Home' },
//   { to: '/services', label: 'Services' },
//   { to: '/team', label: 'Doctors' },
//   { to: '/contact', label: 'Contact' },
// ]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12)
//     onScroll()
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [open])

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white/80 shadow-soft backdrop-blur-lg' : 'bg-transparent'
//       }`}
//     >
//       <nav className="container-lumen flex h-20 items-center justify-between" aria-label="Primary">
//         <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-ink-800" onClick={() => setOpen(false)}>
//           <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-gold-500">
//             <Eye size={18} strokeWidth={2} />
//           </span>
//           LUMEN <span className="hidden font-medium text-ink-400 sm:inline">Eye Care</span>
//         </Link>

//         <ul className="hidden items-center gap-9 lg:flex">
//           {links.map((l) => (
//             <li key={l.to}>
//               <NavLink
//                 to={l.to}
//                 className={({ isActive }) =>
//                   `relative py-2 text-sm font-medium tracking-wide transition-colors ${
//                     isActive ? 'text-ink-800' : 'text-ink-400 hover:text-ink-800'
//                   }`
//                 }
//               >
//                 {({ isActive }) => (
//                   <>
//                     {l.label}
//                     {isActive && (
//                       <motion.span
//                         layoutId="nav-underline"
//                         className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-teal-500"
//                       />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         <div className="hidden lg:block lg:p-10">
//           <Link to="/booking" className="btn-primary hover:text-teal-600">
//             {/* <CalendarCheck size={16} /> */}
//             Book an Appointment
//           </Link>
//         </div>

//         <button
//           className="flex h-11 w-11 items-center justify-center rounded-full text-ink-800 lg:hidden"
//           onClick={() => setOpen(true)}
//           aria-label="Open menu"
//           aria-expanded={open}
//         >
//           <Menu size={24} />
//         </button>
//       </nav>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 z-[60] lg:hidden"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
//               onClick={() => setOpen(false)}
//             />
//             <motion.div
//               className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-sand p-7 shadow-2xl"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 28, stiffness: 260 }}
//             >
//               <div className="mb-10 flex items-center justify-between">
//                 <span className="font-display text-lg font-extrabold text-ink-800">LUMEN</span>
//                 <button
//                   onClick={() => setOpen(false)}
//                   aria-label="Close menu"
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-800 shadow-card"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               <ul className="flex flex-col gap-1">
//                 {links.map((l) => (
//                   <li key={l.to}>
//                     <NavLink
//                       to={l.to}
//                       onClick={() => setOpen(false)}
//                       className={({ isActive }) =>
//                         `block rounded-xl px-4 py-4 font-display text-2xl font-semibold transition-colors ${
//                           isActive ? 'bg-white text-teal-600 shadow-card' : 'text-ink-800'
//                         }`
//                       }
//                     >
//                       {l.label}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>

//               <Link to="/booking" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
//                 <CalendarCheck size={16} />
//                 Book Appointment
//               </Link>

//               <div className="mt-auto pt-8 text-sm text-ink-400">
//                 <p>Open Mon–Sat, 9am–6pm</p>
//                 <p className="mt-1">+234 800 123 4567</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Home', to: '/', color: 'bg-emerald-500' },
  { name: 'Services', to: '/services', color: 'bg-sky-300' },
  { name: 'Doctors', to: '/team', color: 'bg-pink-500' },
  { name: 'Contact', to: '/contact', color: 'bg-orange-300' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
//bg-[#5B6FB4] bg-[#f8f9f5 bg-slate-900/60
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 font-mono text-sm ${
        scrolled
          ? 'bg-[#5B6FB4]/80 shadow-xs backdrop-blur-lg border-b border-gray-200/60 py-3'
          : 'bg-[#f8f9f5] border-b border-gray-200/60 py-4'
      }`}
    >
      <nav aria-label="Primary" className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)} 
          className="flex items-center gap-2 text-[#1c0f13] focus:outline-none"
        >
          <div className="flex items-center justify-center">
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="4" r="2.5" />
              <path d="M19 9h-3.2l-1.8 4.5 2.5 5.5h-2.5l-2-4.4-2 4.4H7.5l2.5-5.5L8.2 9H5v2H3V7h18v4h-2z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter lowercase">
            teak
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 bg-white/70 px-5 py-2.5 rounded-sm shadow-xs border border-gray-100/80">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative flex items-center gap-2 font-medium text-xs tracking-tight transition-colors py-1 ${
                    isActive ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`w-2.5 h-2.5 rounded-xs ${item.color} inline-block`} />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#1c0f13]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/login"
            className="text-gray-600 hover:text-gray-900 text-xs font-medium tracking-tight transition-colors"
          >
            Log in
          </Link>

          <Link
            to="/booking"
            className="bg-[#1c0f13] hover:bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-2 transition-all group"
          >
            <span>Book an appointment</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Hamburger Toggle (Mobile/Tablet) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-[#1c0f13] hover:text-gray-600 focus:outline-none p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Slide-Over Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#1c0f13]/40 backdrop-blur-xs"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Panel */}
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-[#f8f9f5] p-6 shadow-2xl border-l border-gray-200"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xl font-black tracking-tighter text-[#1c0f13] lowercase">
                  teak
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1c0f13] shadow-xs border border-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3 bg-white/80 p-4 rounded-lg border border-gray-100 shadow-xs mb-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md font-medium text-xs tracking-tight transition-colors ${
                        isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                      }`
                    }
                  >
                    <span className={`w-2.5 h-2.5 rounded-xs ${item.color} inline-block`} />
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-900 text-xs font-medium tracking-tight px-3 py-2"
                >
                  Log in
                </Link>

                <Link
                  to="/booking"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#1c0f13] hover:bg-black text-white text-xs font-medium px-5 py-3 rounded-full flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <span>Book an appointment</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-200/60 text-xs text-gray-500">
                <p className="font-medium text-gray-700">Open Mon–Sat, 9am–6pm</p>
                <p className="mt-1">+234 800 123 4567</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;