import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'RECEIPTS', href: '#receipts' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WHY CRO', href: '#cro' },
    { label: 'PROCESS', href: '#process' },
    { label: 'BRAND', href: '#brand' },
    { label: 'MARKETPLACE', href: 'https://marketplace-scalomatrix.onrender.com' },
  ]

  return (
    <nav
      id="navbar"
      className="border-b border-black bg-[#f3f2eb]"
    >
      <div className="max-w-[1024px] mx-auto px-16 xl:px-0 py-4 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="w-7 h-7 bg-[#f2ff00] border border-black flex items-center justify-center text-black font-bold text-sm leading-none rounded-none">
              L
            </span>
            <span className="text-[14px] font-bold tracking-tight text-black">
              The Landing Page Co.
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[9px] tracking-[0.2em] font-bold text-[#555] hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-2 font-mono text-[9px] font-bold text-[#777] tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              SHIPPING · Q2 '26 · <span className="text-[#3b82f6]">+34% AVG LIFT</span>
            </div>
            <a
              href="#contact"
              className="hidden lg:flex px-5 py-[10px] bg-[#f2ff00] text-black border border-black text-xs font-bold hover:bg-[#e0ea02] transition-colors items-center gap-2 rounded-none leading-none"
            >
              Book a call
              <span className="text-sm font-normal leading-none mt-[-1px]">→</span>
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-5 h-[1.5px] bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`w-5 h-[1.5px] bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-80 border-b border-black' : 'max-h-0'}`}>
        <div className="px-8 py-4 bg-[#f3f2eb] space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-mono tracking-wider text-gray-600 hover:text-black hover:bg-black/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              className="inline-flex px-6 py-3 bg-[#f2ff00] text-black border border-black text-sm font-semibold hover:bg-[#e0ea02] transition-colors items-center gap-2 rounded-none"
            >
              Book a call →
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
