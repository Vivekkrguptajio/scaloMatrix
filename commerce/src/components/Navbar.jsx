import { useState, useCallback } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
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
    <header className="fixed left-0 right-0 z-50 flex justify-center transition-[opacity,transform] duration-700 ease-in-out top-4 px-4">
      <nav
        id="navbar"
        className="relative w-full flex flex-col transition-all duration-300 backdrop-blur-3xl backdrop-saturate-200 max-w-[1440px] border rounded-[32px] bg-white/45 border-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]"
      >
        <div className="w-full flex items-center justify-between py-2 px-6 lg:px-10">
          {/* Logo */}
          <motion.a 
            href="#" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: logoX, y: logoY }}
            className="group flex items-center gap-3 font-semibold tracking-tight select-none whitespace-nowrap z-10"
          >
            <span className="text-2xl md:text-3xl font-sans font-black transition-colors duration-300 tracking-tight" style={{ fontFamily: "'Urbanist', 'Outfit', ui-sans-serif, system-ui, sans-serif" }}>
              <span className="text-[#FD5800]">scalo</span>
              <span className="text-black">MATRIX</span>
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 h-full">
            {navLinks.map((link) => (
              <div key={link.label} className="relative h-full flex items-center">
                <a
                  href={link.href}
                  className="flex items-center gap-1.5 text-[15px] lg:text-[16px] font-semibold font-sans tracking-wide transition-colors duration-300 ease-out relative px-4 py-2 rounded-full text-gray-700 hover:bg-[#FD5800]/10 hover:text-[#FD5800]"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 z-10">
            <div className="hidden xl:flex items-center gap-2 font-mono text-[9px] font-bold text-[#777] tracking-[0.2em] uppercase bg-white/50 px-3 py-1.5 rounded-full border border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              SHIPPING · Q2 '26 · <span className="text-[#FD5800]">+34% AVG LIFT</span>
            </div>
            
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide shadow-sm"
            >
              Book a call
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm font-bold px-4 py-3 rounded-xl text-[#FD5800]/80 hover:text-[#FD5800] hover:bg-orange-50/50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-bold rounded-full px-4 py-3 mt-2 bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide"
            >
              Book a call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
