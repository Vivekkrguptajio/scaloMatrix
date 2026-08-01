import React from 'react';

const HowItWorks = () => {
  return (
    <section id="process" className="w-full py-16 md:py-24 lg:py-36 font-sans bg-white">
      <div className="max-w-[1024px] mx-auto w-full px-2.5 sm:px-5 md:px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans leading-[1.1] text-black lg:w-[60%]">
            How the sausage<br /><span className="text-[#FD5800]">gets made.</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-600 text-sm md:text-base leading-snug lg:text-right">
              Data in. Design out. Shipped live. No "creative exploration phase." No 40-slide decks. We're builders who happen to be researchers.
            </p>
          </div>
        </div>

        {/* The 3-Column Card */}
        <div className="bg-white text-black w-full flex flex-col lg:flex-row border-[0.5px] lg:border border-black hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300">
          
          {/* Step 1 */}
          <div className="w-full lg:w-1/3 p-6 md:p-7 lg:p-8 border-b-[0.5px] lg:border-b-0 lg:border-r border-black flex flex-col">
            <div className="text-4xl md:text-5xl font-black text-[#FD5800] mb-4 tracking-tighter">01</div>
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
              DATA IN
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Deep platform analysis.
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              We pull signal from Meta, Shopify, GA, Clarity and every other platform that matters. Heatmaps, funnels, drop-offs, session recordings — the full picture before we touch a pixel.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full lg:w-1/3 p-6 md:p-7 lg:p-8 border-b lg:border-b-0 lg:border-r border-black flex flex-col">
            <div className="text-4xl md:text-5xl font-black text-[#FD5800] mb-4 tracking-tighter">02</div>
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
              DESIGN OUT
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Mobile-first, perfected.
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Unlimited rounds of iteration until it's right. Real copy, real assets, the exact strategy that will go live. Misuse it — we refund. That's the deal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full lg:w-1/3 p-6 md:p-7 lg:p-8 flex flex-col">
            <div className="text-4xl md:text-5xl font-black text-[#FD5800] mb-4 tracking-tighter">03</div>
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
              SHIPPED LIVE
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Development + live link.
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Hand-coded, speed-tuned, QA'd on real devices. You get a live link to test, click, break. We don't call it done until the numbers do.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

