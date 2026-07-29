export default function Hero() {
  return (
    <section id="hero" className="flex flex-col pt-12 pb-16 px-16 xl:px-0 max-w-[1024px] mx-auto bg-[#f3f2eb]">
      {/* Huge Main Headline */}
      <div className="w-full mb-14">
        <h1 className="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] font-medium leading-[0.9] tracking-[-0.04em] text-black">
          Landing pages<br className="hidden lg:block"/>
          that pays itself.<br className="hidden lg:block"/>
          Make more money<br className="hidden lg:block"/>
          from same ad spend
        </h1>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-300 mb-12" />

      {/* Bottom Content Area */}
      <div className="flex flex-col">
        
        {/* Paragraph & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Paragraph */}
          <div className="col-span-1 pr-4">
            <p className="text-[14px] text-[#222] leading-snug font-normal">
              We're India's biggest CRO-led landing page company. We ship pages that convert <strong className="font-semibold text-black">at least 20% better</strong> than what's running today — or we keep working until they do.
            </p>
          </div>

          {/* Stat 1 */}
          <div className="col-span-1 flex flex-col justify-start">
            <span className="text-5xl lg:text-6xl text-[#3b82f6] font-normal tracking-[-0.03em] mb-3 leading-none">+20%</span>
            <span className="text-[9px] font-mono font-bold text-gray-400 tracking-[0.15em] uppercase">MIN. GUARANTEED LIFT</span>
          </div>

          {/* Stat 2 */}
          <div className="col-span-1 flex flex-col justify-start">
            <span className="text-5xl lg:text-6xl text-[#3b82f6] font-normal tracking-[-0.03em] mb-3 leading-none">450+</span>
            <span className="text-[9px] font-mono font-bold text-gray-400 tracking-[0.15em] uppercase">PAGES SHIPPED</span>
          </div>

          {/* Stat 3 */}
          <div className="col-span-1 flex flex-col justify-start">
            <span className="text-5xl lg:text-6xl text-[#3b82f6] font-normal tracking-[-0.03em] mb-3 leading-none">98+</span>
            <span className="text-[9px] font-mono font-bold text-gray-400 tracking-[0.15em] uppercase">NPS - 2025</span>
          </div>
        </div>

        {/* Buttons at the bottom left */}
        <div className="flex flex-wrap items-center gap-3 mt-12">
          <a href="#contact" className="px-5 py-[10px] bg-[#f2ff00] text-black border border-black text-xs font-bold hover:bg-[#e0ea02] transition-colors items-center flex gap-1 rounded-none leading-none">
            Book a call <span className="text-sm font-normal leading-none mt-[-1px]">→</span>
          </a>
          <a href="#math" className="px-5 py-[10px] bg-transparent text-black border border-black text-xs font-bold hover:bg-black/5 transition-colors items-center flex gap-1 rounded-none leading-none">
            Run the math <span className="text-sm font-normal leading-none mt-[-1px]">↓</span>
          </a>
          <span className="font-mono text-[9px] font-bold text-gray-500 tracking-[0.15em] uppercase ml-3 leading-none">
            REPLY WITHIN <span className="text-[#3b82f6]">24H</span> - NO PITCH ON CALL #1
          </span>
        </div>

      </div>
    </section>
  )
}
