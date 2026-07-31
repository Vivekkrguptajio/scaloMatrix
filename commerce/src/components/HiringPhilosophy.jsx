import React from 'react';

const HiringPhilosophy = () => {
  return (
    <section className="w-full py-8 lg:py-12 bg-white text-black font-sans">
      <div className="max-w-[1024px] mx-auto w-full px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-black" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            We don't hire fast. We<br className="hidden md:block" /> keep people longer.
          </h2>
        </div>

        {/* Main Card */}
        <div className="flex flex-col lg:flex-row border border-black">
          
          {/* Left Column (Stats) - Dark Background for High Contrast */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 bg-[#111111] text-white border-b lg:border-b-0 lg:border-r border-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              
              {/* Stat 1 */}
              <div className="border-b border-[#2a2a2a] pb-6 mb-6 md:mb-8 md:pb-8">
                <div className="text-3xl lg:text-4xl font-bold text-[#FD5800] mb-3">99%</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">RETENTION · 2024-26</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug pr-2">
                  Only two people have left the studio in two years. One went to London, another moved to another city.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-[#2a2a2a] pb-6 mb-6 md:mb-8 md:pb-8">
                <div className="text-3xl lg:text-4xl font-bold text-[#FD5800] mb-3">98</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">EMPLOYEE NPS</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug pr-2">
                  Measured quarterly, shared publicly. Above industry benchmark of 41.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="pb-6 md:pb-0 mb-6 md:mb-0 border-b border-[#2a2a2a] md:border-b-0">
                <div className="text-3xl lg:text-4xl font-bold text-[#FD5800] mb-3">4.7</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">AVG TENURE · YEARS</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug pr-2">
                  Most agencies churn in 14 months. We plant our champions in the ground and grow them.
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#FD5800] mb-3">30</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">HUMANS · TOTAL</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug pr-2">
                  Small by design. Every project has a named owner, not a "team lead."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column (Quote) */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 bg-white text-black flex flex-col justify-between">
            <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase mb-6 font-bold">
              MENTOR STANCE
            </div>
            
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium leading-[1.4] mb-6 text-black">
              "We hire young, teach hard, and let them ship things that'd scare most agencies. The work compounds. So do the people."
            </h3>

            <div className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase font-bold">
              - FOUNDER'S NOTE · 2024
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HiringPhilosophy;

