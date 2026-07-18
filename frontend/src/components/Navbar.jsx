import { useState, useContext } from 'react'
import { PortfolioContext } from '../context/PortfolioContext'
export default function Navbar({ scrolled, activeSection, loading, isDarkTheme = false }) {
  const { profileDetails } = useContext(PortfolioContext)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - (left + width / 2)) * 0.2
    const y = (e.clientY - (top + height / 2)) * 0.2
    setLogoPos({ x, y })
  }

  const handleMouseLeave = () => {
    setLogoPos({ x: 0, y: 0 })
  }

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Solutions', href: '#', hasDropdown: true },
    { name: 'About', href: '/about', hasDropdown: true },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Careers', href: '#' },
  ]

  return (
    <header 
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-in-out ${
        loading ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      } ${scrolled ? 'top-4 px-4' : 'top-0 px-0'}`}
    >
      <nav 
        className={`w-full flex items-center justify-between transition-all duration-500 backdrop-blur-2xl backdrop-saturate-200 ${
          isDarkTheme ? 'bg-white/10' : 'bg-white/20'
        } ${
          scrolled 
            ? `max-w-7xl py-2 px-6 md:px-8 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)] border ${isDarkTheme ? 'border-white/10' : 'border-white/40'}` 
            : 'max-w-full py-3 px-6 md:px-10 shadow-sm rounded-none border-transparent'
        }`}
      >
        {/* Logo */}
        <a 
          href="/" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: `translate(${logoPos.x}px, ${logoPos.y}px)` }}
          className={`group flex items-center gap-3 font-semibold tracking-tight transition-transform duration-75 ease-out select-none whitespace-nowrap ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
        >
          <span className={`text-2xl md:text-3xl font-sans font-black transition-colors duration-300 tracking-tight`}>
            <span className="text-[#FF4500]">scalo</span>
            <span className={isDarkTheme ? 'text-white' : 'text-black'}>MATRIX</span>
          </span>
        </a>
        
        {/* Desktop Nav Links & Buttons */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-4 lg:gap-6 mr-2">
            {navLinks.map((link) => {
              const linkPath = link.href.replace(/^\//, '').replace(/^#/, '');
              const isActive = activeSection === linkPath;
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`group flex items-center gap-1.5 text-base md:text-[17px] font-medium transition-colors duration-200 relative py-1 ${
                    isActive 
                      ? 'text-[#FF4500]'
                      : 'text-[#FF4500]/80 hover:text-[#FF4500]'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className={`w-4 h-4 transition-transform duration-200 group-hover:-rotate-180 text-[#FF4500]/80 group-hover:text-[#FF4500]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className={`absolute left-0 bottom-0 w-full h-[2px] transition-transform duration-500 origin-left bg-[#FF4500] ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              );
            })}
          </div>

          <a 
            href="/contact" 
            className={`group flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-300 px-6 py-2.5 rounded-full bg-[#FF4500] text-white hover:bg-[#E63E00] shadow-md shadow-[#FF4500]/20`}
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FF4500] ${mobileMenu ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FF4500] ${mobileMenu ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FF4500] ${mobileMenu ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Nav Menu Dropdown */}
      <div className={`md:hidden absolute top-[calc(100%+12px)] left-4 right-4 rounded-2xl glass-navbar border-t border-gray-100 overflow-hidden transition-all duration-300 shadow-xl ${
        mobileMenu ? 'max-h-60 opacity-100 py-2' : 'max-h-0 opacity-0 py-0 border-transparent'
      }`}>
        <div className="flex flex-col px-4 py-2 gap-3">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-between text-base font-medium text-[#FF4500]/80 hover:text-[#FF4500] hover:bg-orange-50/50 rounded-xl px-4 py-2 transition-all"
            >
              {link.name}
              {link.hasDropdown && (
                <svg className="w-4 h-4 text-[#FF4500]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
          <a 
            href="/contact" 
            onClick={() => setMobileMenu(false)}
            className="flex items-center justify-center gap-2 text-base font-medium text-white bg-[#FF4500] hover:bg-[#E63E00] shadow-md shadow-[#FF4500]/20 rounded-full px-4 py-3 mt-2 transition-all"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
