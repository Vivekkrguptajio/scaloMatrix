import React from 'react';

const HowItWorks = () => {
  return (
    <section id="process" className="w-full py-10 md:py-16 lg:py-20 font-sans bg-white">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col mb-10">
          <h4 className="text-[#FD5800] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3">
            How The Work Happens
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans leading-[1.15] tracking-tight text-black max-w-3xl">
            Signal in. Design out. <span className="text-[#FD5800]">Shipped live.</span>
          </h2>
        </div>

        {/* 3-Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Step 1 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#FD5800] uppercase mb-4">
                01 &middot; SIGNAL IN
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 leading-snug">
                We read the data first.
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                Analytics, heatmaps, session recordings, your ad account — the full picture of where visitors leak before we touch a pixel.
              </p>
            </div>
          </div>

          {/* Step 2 (Filled Black Card) */}
          <div className="bg-[#111111] text-white p-8 md:p-10 rounded-3xl border border-[#222] shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#FD5800] uppercase mb-4">
                02 &middot; DESIGN OUT
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-snug">
                Real copy, real strategy.
              </h3>
              <p className="text-gray-300 font-medium leading-relaxed text-sm md:text-base">
                Mobile-first design with the actual copy and offer that will go live — not lorem ipsum theatre. Iterated until it's right.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#FD5800] uppercase mb-4">
                03 &middot; SHIPPED LIVE
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 leading-snug">
                Built, tested, measured.
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                Hand-built, speed-tuned, QA'd on real devices. Then we watch the numbers — because shipped isn't done, performing is.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

