import React from 'react';

const FeaturedCaseStudy = () => {
  return (
    <section className="w-full py-10 md:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 xl:px-16">
        <div className="relative w-full bg-[#fce9d3] border border-black p-6 md:p-8 lg:p-10">
          
          {/* Blue Ribbon / Tag */}
          <div className="absolute top-0 left-0 -translate-y-full -translate-x-[1px] bg-[#2942ff] text-white text-xs md:text-sm font-bold tracking-[0.2em] py-3 px-6 md:py-3.5 md:px-8 uppercase border border-black border-b-0 z-10">
            Featured Case Study
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
            
            {/* Left Sidebar */}
            <div className="w-full lg:w-[260px] xl:w-[280px] flex flex-col justify-between shrink-0 gap-6">
              
              {/* Unified Logo & Stats Card */}
              <div className="bg-white border border-black flex flex-col">
                {/* Logo Section */}
                <div className="p-6 border-b border-black flex items-center justify-center">
                  <div className="bg-[#ff2020] text-white font-black italic text-3xl leading-none px-4 py-2 tracking-tighter w-full text-center">
                    SUPER<span className="text-white/90">YOU</span>
                  </div>
                </div>

                {/* Stat 1: CR */}
                <div className="p-6 border-b border-black">
                  <div className="text-4xl lg:text-5xl font-bold text-[#2942ff]">+33%</div>
                  <div className="text-gray-500 font-mono font-bold text-xs mt-2 tracking-widest uppercase">CR</div>
                </div>

                {/* Stat 2: AOV */}
                <div className="p-6">
                  <div className="text-4xl lg:text-5xl font-bold text-[#2942ff]">+14%</div>
                  <div className="text-gray-500 font-mono font-bold text-xs mt-2 tracking-widest uppercase">AOV</div>
                </div>
              </div>

              {/* Visit Website Button */}
              <div>
                <a 
                  href="#" 
                  className="group bg-black text-white font-bold py-3.5 px-5 w-full flex justify-between items-center hover:bg-[#FD5800] transition-colors text-sm tracking-wide border border-black"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
            </div>

            {/* Right Mockup Images Container */}
            <div className="flex-1 w-full border border-black bg-white overflow-hidden grid grid-cols-1 sm:grid-cols-3">
              <div className="border-b sm:border-b-0 sm:border-r border-black flex h-full">
                <img 
                  src="/image.png" 
                  alt="Super You Case Study 1" 
                  className="w-full h-auto object-cover object-top block" 
                />
              </div>
              <div className="border-b sm:border-b-0 sm:border-r border-black flex h-full">
                <img 
                  src="/image copy.png" 
                  alt="Super You Case Study 2" 
                  className="w-full h-auto object-cover object-top block" 
                />
              </div>
              <div className="flex h-full">
                <img 
                  src="/image copy 2.png" 
                  alt="Super You Case Study 3" 
                  className="w-full h-auto object-cover object-top block" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;

