import React from 'react';

const HiringPhilosophy = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-36 bg-black lg:bg-white text-white lg:text-black font-sans">
      <div className="max-w-[1024px] mx-auto w-full px-2.5 sm:px-5 md:px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans leading-[1.1] tracking-tight text-white lg:text-black">
            We don't hire fast. We<br className="hidden md:block" /> <span className="text-[#FD5800]">keep people longer.</span>
          </h2>
        </div>

        {/* Main Card Container */}
        <div className="flex flex-col lg:flex-row border-[0.5px] border-gray-800/60 lg:border-black overflow-hidden rounded-xl lg:rounded-none">
          
          {/* Left Column / Top Section on Mobile (Stats - Dark Background) */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 bg-[#111111] text-white border-b-[0.5px] border-gray-800/60 lg:border-b-0 lg:border-r lg:border-black">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              
              {/* Stat 1 */}
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#FD5800] mb-2 tracking-tight">99%</div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs text-gray-400">⊕</span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-gray-300 font-bold">RETENTION · 2024-26</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug">
                  Only two people have left the studio in two years. One went to London, another moved to another city.
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#FD5800] mb-2 tracking-tight">98</div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs text-gray-400">⊕</span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-gray-300 font-bold">EMPLOYEE NPS</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug">
                  Measured quarterly, shared publicly. Above industry benchmark of 41.
                </p>
              </div>

              {/* Row Divider */}
              <div className="col-span-2 w-full h-[0.5px] bg-gray-800 my-2"></div>

              {/* Stat 3 */}
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#FD5800] mb-2 tracking-tight">4.7</div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs text-gray-400">⊕</span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-gray-300 font-bold">AVG TENURE · YEARS</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug">
                  Most agencies churn in 14 months. We plant our champions in the ground and grow them.
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-4xl md:text-5xl font-black text-[#FD5800] mb-2 tracking-tight">30</div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-xs text-gray-400">⊕</span>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-gray-300 font-bold">HUMANS · TOTAL</span>
                </div>
                <p className="text-xs text-gray-300 leading-snug">
                  Small by design. Every project has a named owner, not a "team lead."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column / Bottom Section on Mobile (Quote - Always White Background) */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 bg-white text-black flex flex-col justify-between">
            <div className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-6 font-bold">
              MENTOR STANCE
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-sans leading-[1.35] mb-8 text-black">
              "We hire young, teach hard, and let them ship things that'd scare most agencies. The work compounds. So do the people."
            </h3>

            <div className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase font-bold">
              — FOUNDER'S NOTE · 2024
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HiringPhilosophy;

