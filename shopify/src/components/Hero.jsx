import Marquee from './Marquee'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 md:pb-24 px-6 md:px-16 lg:px-24 bg-white relative"
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10 mt-16 md:mt-24">
        <h1 
          className="text-[28px] sm:text-4xl md:text-5xl lg:text-[74px] font-black font-sans text-black leading-[1.15] md:leading-[0.95] tracking-tight mb-6 md:mb-8 text-center md:text-left break-words"
        >
          Landing pages that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066] drop-shadow-sm">pays itself.</span>
          <span className="block mt-1 md:mt-2"></span>
          Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066] drop-shadow-sm">more money</span> from same ad spend.
        </h1>

        <p 
          className="text-[15px] sm:text-base md:text-lg text-[#222] font-medium max-w-[800px] leading-relaxed mb-8 md:mb-10 text-center md:text-left mx-auto md:mx-0"
        >
          We're India's biggest CRO-led landing page company. We ship pages that convert <strong className="font-semibold text-black">at least 20% better</strong> than what's running today — or we keep working until they do.
        </p>

        <div className="flex flex-col gap-4 lg:gap-5 mb-12">
          {/* Main Buttons and Stats Tags Row */}
          <div className="flex flex-col lg:flex-row flex-wrap items-stretch lg:items-center justify-center md:justify-start gap-8 lg:gap-16">
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4">
              <a 
                href="#contact" 
                className="group flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black hover:scale-105 hover:shadow-lg transition-all duration-300 tracking-wide"
              >
                Book a call
                <svg className="w-4 h-4 sm:w-[16px] sm:h-[16px] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a 
                href="#math" 
                className="flex w-full sm:w-auto items-center justify-center px-6 py-3 sm:py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] text-gray-700 border border-black/10 hover:border-black/20 hover:bg-black/5 hover:scale-105 hover:shadow-md transition-all duration-300"
              >
                Run the math ↓
              </a>
            </div>

            {/* Stats Tags (Aligned right of buttons on lg screens) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 lg:gap-8 lg:border-l lg:border-gray-300 lg:pl-10">
              <div className="text-[15px] sm:text-base md:text-[17px] font-bold text-gray-600 tracking-wide">
                <span className="text-[#FD5800]">+20%</span> min. guaranteed lift
              </div>
              <div className="text-[15px] sm:text-base md:text-[17px] font-bold text-gray-600 tracking-wide">
                <span className="text-[#FD5800]">450+</span> pages shipped
              </div>
              <div className="text-[15px] sm:text-base md:text-[17px] font-bold text-gray-600 tracking-wide">
                <span className="text-[#FD5800]">98+</span> NPS · 2025
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Marquee at the bottom of the hero section */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <Marquee />
      </div>
    </section>
  )
}
