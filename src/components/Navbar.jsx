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

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', color: 'bg-emerald-500' },
    { name: 'Services', color: 'bg-sky-300' },
    { name: 'Doctors', color: 'bg-pink-500' },
    { name: 'Contact', color: 'bg-orange-300' },
  ];

  return (
    <nav className="relative w-full bg-[#f8f9f5] border-b border-gray-200/60 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center text-[#1c0f13]">
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="4" r="2.5" />
              <path d="M19 9h-3.2l-1.8 4.5 2.5 5.5h-2.5l-2-4.4-2 4.4H7.5l2.5-5.5L8.2 9H5v2H3V7h18v4h-2z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#1c0f13] lowercase">
            teak
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 bg-white/70 px-5 py-2.5 rounded-sm shadow-xs border border-gray-100/80">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-xs tracking-tight"
            >
              <span className={`w-2.5 h-2.5 rounded-xs ${item.color} inline-block`} />
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#login"
            className="text-gray-600 hover:text-gray-900 text-xs font-medium tracking-tight"
          >
            Log in
          </a>

          <a
            href="#book"
            className="bg-[#1c0f13] hover:bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full flex items-center gap-2 transition-all group"
          >
            <span>Book an appointment</span>
            <span className="text-[10px] transform group-hover:translate-x-0.5 transition-transform">
              ▶
            </span>
          </a>
        </div>

        {/* Hamburger Icon for Mobile/Tablet */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-[#1c0f13] hover:text-gray-600 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close Icon (X)
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f9f5] border-b border-gray-200 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col gap-3 bg-white/70 p-4 rounded-md border border-gray-100/80">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-xs tracking-tight py-1"
              >
                <span className={`w-2.5 h-2.5 rounded-xs ${item.color} inline-block`} />
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#login"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900 text-xs font-medium tracking-tight px-1"
            >
              Log in
            </a>

            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="bg-[#1c0f13] text-white text-xs font-medium px-5 py-3 rounded-full flex items-center justify-center gap-2"
            >
              <span>Book an appointment</span>
              <span className="text-[10px]">▶</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;