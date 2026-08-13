import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function Navbar({ onOpenModal }) {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef(null)
  const logoX = useMotionValue(0)
  const logoY = useMotionValue(0)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Ad Management', href: '#services' },
    { name: 'Masterclass', href: '#masterclass' },
    { name: 'Brand Audit', href: '#audit' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact Us', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    logoX.set((e.clientX - (left + width / 2)) * 0.15)
    logoY.set((e.clientY - (top + height / 2)) * 0.15)
  }, [logoX, logoY])

  const handleMouseLeave = useCallback(() => {
    logoX.set(0)
    logoY.set(0)
  }, [logoX, logoY])

  return (
    <header className="fixed left-0 right-0 z-50 flex justify-center top-3 sm:top-4 px-3 sm:px-6">
      <nav
        ref={navRef}
        className={`relative w-full flex flex-col transition-all duration-300 backdrop-blur-xl border max-w-7xl rounded-2xl md:rounded-full ${
          isScrolled
            ? 'bg-white/95 border-gray-200 shadow-xl shadow-black/5'
            : 'bg-white/80 border-gray-200/80 shadow-lg shadow-black/5'
        }`}
      >
        {/* Main Navbar Row */}
        <div className="w-full flex items-center justify-between py-2.5 px-4 sm:px-6">
          {/* Logo */}
          <motion.a 
            href="#hero" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: logoX, y: logoY }}
            className="group flex items-center gap-3 font-semibold tracking-tight select-none whitespace-nowrap z-10"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-sans font-black leading-none tracking-tight">
                <span className="text-[#FD5800]">scalo</span><span className="text-gray-900">MATRIX</span>
              </span>
              <span className="text-[9px] font-bold tracking-wider uppercase text-[#FD5800] leading-tight mt-1">
                MARKETPLACE • AMAZON PPC AGENCY
              </span>
            </div>
          </motion.a>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 h-full">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-[13px] xl:text-[14px] font-semibold font-sans text-gray-700 hover:text-[#FD5800] hover:bg-orange-50/80 transition-colors px-3 py-1.5 rounded-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <button
              onClick={() => onOpenModal('strategy')}
              className="group flex items-center gap-2 text-xs md:text-sm font-bold px-5 py-2.5 rounded-full bg-[#FD5800] hover:bg-orange-600 text-white shadow-md shadow-[#FD5800]/20 transition-all tracking-wide"
            >
              <span>Book Strategy Session</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-20"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenu && (
        <div className="lg:hidden fixed top-[72px] left-4 right-4 rounded-2xl bg-white border border-gray-200 p-5 shadow-2xl z-40 max-h-[80vh] overflow-y-auto text-gray-900">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    setMobileMenu(false);
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setMobileMenu(false);
                  }
                }}
                className="text-base font-semibold px-4 py-2.5 rounded-xl text-gray-800 hover:text-[#FD5800] hover:bg-orange-50 transition-all"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenu(false);
                onOpenModal('strategy');
              }}
              className="w-full mt-3 py-3 rounded-xl bg-[#FD5800] text-white font-bold text-sm text-center shadow-md shadow-[#FD5800]/20"
            >
              Book a free strategy session
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
