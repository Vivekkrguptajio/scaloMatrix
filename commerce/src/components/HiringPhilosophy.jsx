import React from 'react';

const HiringPhilosophy = () => {
  return (
    <section className="w-full py-12 lg:py-20 bg-[#111111] text-white font-sans">
      <div className="max-w-[1024px] mx-auto w-full px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            We don't hire fast. We<br className="hidden md:block" /> keep people longer.
          </h2>
        </div>

        {/* Main Card */}
        <div className="flex flex-col lg:flex-row border border-[#333]">
          
          {/* Left Column (Stats) */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#333]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              
              {/* Stat 1 */}
              <div className="border-b border-[#333] pb-10 mb-10 md:mb-12 md:pb-12">
                <div className="text-5xl lg:text-6xl font-bold text-[#e8ff00] mb-6">99%</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full border border-gray-400 flex items-center justify-center p-[1px]">
                    <div className="w-full h-full bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300">RETENTION · 2024-26</span>
                </div>
                <p className="text-sm text-gray-300 leading-snug pr-4">
                  Only two people have left the studio in two years. One went to London, another moved to another city.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-[#333] pb-10 mb-10 md:mb-12 md:pb-12">
                <div className="text-5xl lg:text-6xl font-bold text-[#e8ff00] mb-6">98</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full border border-gray-400 flex items-center justify-center p-[1px]">
                    <div className="w-full h-full bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300">EMPLOYEE NPS</span>
                </div>
                <p className="text-sm text-gray-300 leading-snug pr-4">
                  Measured quarterly, shared publicly. Above industry benchmark of 41.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="pb-10 md:pb-0 mb-10 md:mb-0 border-b border-[#333] md:border-b-0">
                <div className="text-5xl lg:text-6xl font-bold text-[#e8ff00] mb-6">4.7</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full border border-gray-400 flex items-center justify-center p-[1px]">
                    <div className="w-full h-full bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300">AVG TENURE · YEARS</span>
                </div>
                <p className="text-sm text-gray-300 leading-snug pr-4">
                  Most agencies churn in 14 months. We plant our champions in the ground and grow them.
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-[#e8ff00] mb-6">30</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full border border-gray-400 flex items-center justify-center p-[1px]">
                    <div className="w-full h-full bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-300">HUMANS · TOTAL</span>
                </div>
                <p className="text-sm text-gray-300 leading-snug pr-4">
                  Small by design. Every project has a named owner, not a "team lead."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column (Quote) */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 bg-[#f3f2eb] text-black flex flex-col justify-between">
            <div className="text-[11px] font-mono tracking-[0.2em] text-gray-400 uppercase mb-12">
              MENTOR STANCE
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] mb-12 text-[#111]">
              "We hire young, teach hard, and let them ship things that'd scare most agencies. The work compounds. So do the people."
            </h3>

            <div className="text-[11px] font-mono tracking-[0.2em] text-gray-400 uppercase">
              - FOUNDER'S NOTE · 2024
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HiringPhilosophy;
