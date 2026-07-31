import { useState, useCallback } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const logoX = useMotionValue(0)
  const logoY = useMotionValue(0)

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
    { label: 'Receipts', href: '#receipts' },
    { label: 'Services', href: '#services' },
    { label: 'Why CRO', href: '#cro' },
    { label: 'Process', href: '#process' },
    { label: 'Brand', href: '#brand' },
  ]

  return (
    <header className="fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 top-4 px-4 md:px-6">
      <nav
        id="navbar"
        className="relative w-full flex flex-col transition-all duration-300 backdrop-blur-xl backdrop-saturate-180 max-w-[1240px] rounded-full bg-white/75 border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)]"
      >
        <div className="w-full flex items-center justify-between py-2.5 px-6 lg:px-8">
          
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

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 relative" onMouseLeave={() => setHoveredIndex(null)}>
            {navLinks.map((link, index) => (
              <div key={link.label} className="relative" onMouseEnter={() => setHoveredIndex(index)}>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-gray-100/80 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <a
                  href={link.href}
                  className="text-xs md:text-[13px] lg:text-sm font-semibold font-sans tracking-tight transition-colors duration-200 px-4 py-1.5 rounded-full text-gray-700 hover:text-black block"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3.5 z-10">
            
            {/* Status Badge */}
            <div className="hidden xl:flex items-center gap-2 font-mono text-[10px] font-bold text-gray-600 tracking-wider uppercase bg-gray-100/90 px-3.5 py-1.5 rounded-full border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Q2 '26 · <span className="text-[#FD5800]">+34% LIFT</span>
            </div>
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 text-xs md:text-sm font-bold px-5 py-2 rounded-full bg-[#FD5800] text-white hover:bg-black transition-all duration-300 shadow-[0_4px_16px_rgba(253,88,0,0.35)] hover:shadow-none transform hover:-translate-y-0.5"
            >
              Book a call
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[75vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 flex flex-col gap-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm font-bold px-4 py-3 rounded-xl text-gray-800 hover:text-[#FD5800] hover:bg-orange-50/50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-bold rounded-full px-4 py-3 mt-2 bg-[#FD5800] text-white hover:bg-black transition-colors tracking-wide shadow-md"
            >
              Book a call →
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
