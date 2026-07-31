export default function Hero() {
  return (
    <section id="hero" className="flex flex-col pt-32 lg:pt-40 pb-16 px-3 sm:px-8 md:px-20 lg:px-32 xl:px-48 max-w-[1440px] mx-auto bg-white">
      {/* Huge Main Headline */}
      <div className="w-full mb-14">
        <h1 
          className="text-[0.95rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem] font-bold leading-[1.2] tracking-[-0.01em] text-black"
          style={{ fontFamily: "'Urbanist', 'Outfit', ui-sans-serif, system-ui, sans-serif" }}
        >
          <span>Landing pages that <span className="text-[#FD5800]">pays itself.</span></span><br />
          <span>Make <span className="text-[#FD5800]">more money</span> from same ad spend.</span>
        </h1>
      </div>

      {/* Divider */}
      <div className="w-full h-[0.5px] bg-black mb-8" />

      {/* Bottom Content Area */}
      <div className="flex flex-col">
        
        {/* Paragraph & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* Paragraph */}
          <div className="col-span-1 pr-2">
            <p className="text-[14px] text-[#222] leading-relaxed font-normal" style={{ fontFamily: "'Urbanist', 'Outfit', sans-serif" }}>
              We're India's biggest CRO-led landing page company. We ship pages that convert <strong className="font-semibold text-black">at least 20% better</strong> than what's running today — or we keep working until they do.
            </p>
          </div>

          {/* Stat 1 */}
          <div className="col-span-1 flex flex-col justify-start">
            <span className="text-4xl lg:text-5xl text-[#FD5800] font-normal tracking-[-0.03em] mb-2 leading-none" style={{ fontFamily: "'Urbanist', sans-serif" }}>+20%</span>
            <span className="text-[9px] font-mono font-bold text-gray-400 tracking-[0.15em] uppercase">MIN. GUARANTEED LIFT</span>
          </div>

          {/* Stat 2 */}
          <div className="col-span-1 flex flex-col justify-start">
            <span className="text-4xl lg:text-5xl text-[#FD5800] font-normal tracking-[-0.03em] mb-2 leading-none" style={{ fontFamily: "'Urbanist', sans-serif" }}>450+</span>
            <span className="text-[9px] font-mono font-bold text-gray-400 tracking-[0.15em] uppercase">PAGES SHIPPED</span>
          </div>

          {/* Stat 3 */}
          <div className="col-span-1 flex flex-col justify-start">
            <span className="text-4xl lg:text-5xl text-[#FD5800] font-normal tracking-[-0.03em] mb-2 leading-none" style={{ fontFamily: "'Urbanist', sans-serif" }}>98+</span>
            <span className="text-[9px] font-mono font-bold text-gray-400 tracking-[0.15em] uppercase">NPS · 2025</span>
          </div>
        </div>

        {/* Buttons at the bottom left */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a href="#contact" className="group flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[14px] bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide">
            Book a call
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#math" className="flex items-center px-6 py-2.5 rounded-full font-bold text-[14px] text-gray-700 border border-black/10 hover:border-black/20 hover:bg-black/5 transition-all duration-300">
            Run the math ↓
          </a>
          <span className="font-mono text-[9px] font-bold text-gray-500 tracking-[0.15em] uppercase ml-3 leading-none">
            REPLY WITHIN <span className="text-[#FD5800]">24H</span> · NO PITCH ON CALL #1
          </span>
        </div>

        {/* Second Divider (Moved Below Buttons) */}
        <div className="w-full h-[2px] bg-black mt-10" />

      </div>
    </section>
  )
}

