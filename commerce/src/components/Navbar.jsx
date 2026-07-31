import { useState, useCallback, useEffect } from 'react'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const logoX = useMotionValue(0)
  const logoY = useMotionValue(0)

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    logoX.set((e.clientX - (left + width / 2)) * 0.2)
    logoY.set((e.clientY - (top + height / 2)) * 0.2)
  }, [logoX, logoY])

  const handleMouseLeave = useCallback(() => {
    logoX.set(0)
    logoY.set(0)
  }, [logoX, logoY])

  const navLinks = [
    { label: 'Receipts', href: '#receipts', num: '01' },
    { label: 'Services', href: '#services', num: '02' },
    { label: 'Why CRO', href: '#cro', num: '03' },
    { label: 'Process', href: '#process', num: '04' },
    { label: 'Brand', href: '#brand', num: '05' },
  ]

  return (
    <>
      <header className="fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 top-0 md:top-4 px-0 md:px-6">
        <nav
          id="navbar"
          className="glass-navbar relative w-full flex flex-col transition-all duration-300 max-w-[1220px] rounded-none md:rounded-full"
        >
          <div className="w-full flex items-center justify-between py-2 px-4 sm:px-6 lg:py-2.5 lg:px-8">
            
            {/* Logo */}
            <motion.a 
              href="#" 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: logoX, y: logoY }}
              className="group flex items-center gap-1 font-semibold tracking-tight select-none whitespace-nowrap z-10"
            >
              <span className="text-xl md:text-2xl font-sans font-black tracking-tight flex items-center gap-0.5" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                <span className="text-[#FD5800]">scalo</span>
                <span className="text-black">MATRIX</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800] inline-block ml-0.5 animate-pulse" />
              </span>
            </motion.a>

            {/* Desktop Nav Links (Centered with Framer Motion Sliding Pill) */}
            <div 
              className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navLinks.map((link, index) => (
                <div 
                  key={link.label} 
                  className="relative" 
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-[#FD5800]/10 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <a
                    href={link.href}
                    className={`text-xs md:text-[13px] lg:text-sm font-semibold font-sans tracking-tight transition-colors duration-200 px-4 py-1.5 rounded-full block ${
                      hoveredIndex === index ? 'text-[#FD5800]' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3.5 z-10">
              
              {/* Status Badge */}
              <div className="hidden xl:flex items-center gap-2 font-mono text-[10px] font-bold text-gray-600 tracking-wider uppercase bg-gray-100/90 px-3.5 py-1.5 rounded-full border border-gray-200/80">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Q2 '26 · <span className="text-[#FD5800]">+34% LIFT</span>
              </div>
              
              {/* CTA Button */}
              <a
                href="#contact"
                className="hidden lg:flex items-center gap-2 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full bg-[#FD5800] text-white hover:bg-black transition-all duration-300 shadow-[0_4px_16px_rgba(253,88,0,0.35)] hover:shadow-none transform hover:-translate-y-0.5"
              >
                Book a call
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden px-3 py-1.5 rounded-full bg-[#FD5800] text-white font-bold text-xs flex items-center gap-1.5 active:scale-95 transition-transform shadow-md"
                aria-label="Open Menu"
              >
                <span>MENU</span>
                <div className="w-2.5 h-2 flex flex-col justify-between">
                  <span className="w-full h-[1.5px] bg-white rounded-full" />
                  <span className="w-full h-[1.5px] bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* FULL SCREEN LUXURY GLASS OVERLAY FOR MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[99999] bg-[#0a0a0a]/95 backdrop-blur-3xl text-white flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center gap-0.5 text-2xl font-black font-sans tracking-tight">
                <span className="text-[#FD5800]">scalo</span>
                <span className="text-white">MATRIX</span>
                <span className="w-2 h-2 rounded-full bg-[#FD5800] inline-block ml-1 animate-pulse" />
              </a>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform"
                aria-label="Close Menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links (Large Editorial Style) */}
            <div className="flex flex-col gap-6 my-auto pt-8 pb-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white hover:text-[#FD5800] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#FD5800] font-normal">{link.num}</span>
                    {link.label}
                  </span>
                  <span className="text-lg text-white/40 group-hover:text-[#FD5800] group-hover:translate-x-1 transition-all">→</span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Footer Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-2xl p-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Q2 '26 STATUS</span>
                </div>
                <span className="text-[#FD5800] font-bold">+34% AVG CONVERSION LIFT</span>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-base font-bold py-4 rounded-full bg-[#FD5800] text-white hover:bg-white hover:text-black transition-all shadow-[0_8px_30px_rgba(253,88,0,0.4)] active:scale-98"
              >
                Book a call →
              </a>

              {/* Mobile Social Links */}
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 tracking-wider pt-2">
                <span>SURAT · INDIA</span>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                  <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
