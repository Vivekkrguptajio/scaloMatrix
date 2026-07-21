import { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PortfolioContext } from '../context/PortfolioContext'
export default function Navbar({ scrolled, activeSection, loading, isDarkTheme = false }) {
  const { profileDetails } = useContext(PortfolioContext)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 })
  const [activeDropdown, setActiveDropdown] = useState(null)

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

  const megaMenuData = {
    Solutions: {
      listTitle: 'Products',
      items: [
        { title: 'scalo Samvaad', desc: 'Conversational AI for faster growth', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /> },
        { title: 'scalo Studio', desc: 'Content Transformation at scale', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> },
        { title: 'scalo Fast', desc: 'Realtime edge processing & tracking', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> }
      ],
      featured: { title: 'Dashboard', subtitle: 'scalo Dashboard', desc: 'Build with the most accurate AI APIs. Access Text to Speech, Translation, Data Automation, and Vision from a single powerful dashboard.', gradient: 'from-[#FD5800] via-[#FF6A33] to-[#FF9066]' }
    },
    About: {
      listTitle: 'Company',
      items: [
        { title: 'Our Story', desc: 'Learn how scalo started and where we are heading.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
        { title: 'Team', desc: 'Meet the brilliant minds behind our AI technology.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
        { title: 'Careers', desc: 'Join us in building the future of generative AI.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> }
      ],
      featured: { title: 'Mission', subtitle: 'Our Vision', desc: 'To empower businesses with cutting-edge AI tools that are easy to integrate, scalable, and built for the modern enterprise.', gradient: 'from-blue-600 via-blue-500 to-cyan-400' }
    },
    Resources: {
      listTitle: 'Learn',
      items: [
        { title: 'Documentation', desc: 'Comprehensive guides and API references.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
        { title: 'Blog', desc: 'Latest updates, articles, and industry insights.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /> },
        { title: 'Community', desc: 'Connect with other developers and experts.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /> }
      ],
      featured: { title: 'Developers', subtitle: 'API Reference', desc: 'Get started quickly with our robust APIs and SDKs. Explore interactive tutorials and code examples.', gradient: 'from-purple-600 via-purple-500 to-pink-500' }
    }
  }

  return (
    <header 
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-in-out ${
        loading ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      } top-4 px-4`}
    >
      <nav 
        onMouseLeave={() => setActiveDropdown(null)}
        className={`relative w-full flex flex-col transition-all duration-300 backdrop-blur-2xl backdrop-saturate-200 max-w-7xl border rounded-[32px] ${
          isDarkTheme 
            ? (activeDropdown ? 'bg-[#111] border-[#333]' : 'bg-white/5 border-white/10') 
            : (activeDropdown ? 'bg-white border-gray-200' : 'bg-white/20 border-gray-200')
        } ${activeDropdown ? 'shadow-[0_25px_50px_-12px_rgba(255,69,0,0.3)]' : 'shadow-[0_10px_30px_rgba(255,69,0,0.15)]'}`}
      >
        {/* Main Navbar Row */}
        <div className="w-full flex items-center justify-between transition-all duration-500 py-2 px-6 md:px-8">
        {/* Logo */}
        <a 
          href="/" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: `translate(${logoPos.x}px, ${logoPos.y}px)` }}
          className={`group flex items-center gap-3 font-semibold tracking-tight transition-transform duration-75 ease-out select-none whitespace-nowrap z-10 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
        >
          <span className={`text-2xl md:text-3xl font-sans font-black transition-colors duration-300 tracking-tight`}>
            <span className="text-[#FD5800]">scalo</span>
            <span className={isDarkTheme ? 'text-white' : 'text-black'}>MATRIX</span>
          </span>
        </a>
        
        {/* Desktop Nav Links (Centered perfectly) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 lg:gap-2 h-full">
          {navLinks.map((link) => {
            const linkPath = link.href.replace(/^\//, '').replace(/^#/, '');
            const isActive = activeSection === linkPath;
            return (
              <div key={link.name} className="relative h-full flex items-center">
                <a 
                  href={link.href} 
                  onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.name) : setActiveDropdown(null)}
                  className={`flex items-center gap-1.5 text-[15px] lg:text-[16px] font-semibold font-sans transition-all duration-300 relative px-4 py-2 rounded-full ${
                    isActive || activeDropdown === link.name
                      ? 'bg-[#FD5800] text-white'
                      : (isDarkTheme ? 'text-gray-300 hover:bg-[#FD5800] hover:text-white' : 'text-gray-600 hover:bg-[#FD5800] hover:text-white')
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? '-rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              </div>
            );
          })}
        </div>

        {/* Contact Button (Right Side) */}
        <div className="hidden md:flex items-center z-10">
          <a 
            href="/contact" 
            className={`group flex items-center gap-2 text-sm md:text-base font-bold transition-all duration-300 px-6 py-2.5 rounded-full bg-[#FD5800] text-white hover:bg-[#E63E00] shadow-md shadow-[#FD5800]/20`}
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        </div> {/* End Main Navbar Row */}

        {/* Expanding Mega Menu Panel (Inside Nav) */}
        <AnimatePresence>
          {activeDropdown && megaMenuData[activeDropdown] && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full overflow-hidden"
            >
              <div className="w-full px-8 pb-8 pt-2 flex gap-8">
                {/* Left Side: Dynamic List */}
                <div className="w-[45%] flex flex-col gap-2 border-r border-gray-100 pr-6">
                  <div className="text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-widest pl-2">
                    {megaMenuData[activeDropdown].listTitle}
                  </div>
                  
                  {megaMenuData[activeDropdown].items.map((item, idx) => (
                    <a key={idx} href="#" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-[#FFF8F5] transition-colors group/item">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center text-[#FD5800] font-bold group-hover/item:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <div className="text-gray-900 font-bold text-sm group-hover/item:text-[#FD5800] transition-colors">{item.title}</div>
                        <div className="text-gray-500 text-xs mt-0.5 font-bold leading-relaxed">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Right Side: Dynamic Featured Card */}
                <div className="w-[55%] pl-4 flex flex-col">
                  <div className={`w-full h-[180px] rounded-2xl bg-gradient-to-br ${megaMenuData[activeDropdown].featured.gradient} flex items-center justify-center text-white font-black text-3xl shadow-[0_10px_30px_-10px_rgba(255,69,0,0.5)] mb-6 overflow-hidden relative group/card cursor-pointer`}>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-150%] group-hover/card:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                    <span className="relative z-10 group-hover/card:scale-105 transition-transform duration-500 tracking-tight">{megaMenuData[activeDropdown].featured.title}</span>
                  </div>
                  <h4 className="text-gray-900 font-black text-lg mb-2">{megaMenuData[activeDropdown].featured.subtitle}</h4>
                  <p className="text-[13px] text-gray-500 font-bold leading-relaxed">
                    {megaMenuData[activeDropdown].featured.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
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
              className="flex items-center justify-between text-base font-bold text-[#FD5800]/80 hover:text-[#FD5800] hover:bg-orange-50/50 rounded-xl px-4 py-2 transition-all"
            >
              {link.name}
              {link.hasDropdown && (
                <svg className="w-4 h-4 text-[#FD5800]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
          <a 
            href="/contact" 
            onClick={() => setMobileMenu(false)}
            className="flex items-center justify-center gap-2 text-base font-bold text-white bg-[#FD5800] hover:bg-[#E63E00] shadow-md shadow-[#FD5800]/20 rounded-full px-4 py-3 mt-2 transition-all"
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
