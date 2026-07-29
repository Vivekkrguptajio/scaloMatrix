import React from 'react';

const HowItWorks = () => {
  return (
    <section className="w-full py-12 lg:py-20 font-sans bg-[#f3f2eb]">
      <div className="max-w-[1024px] mx-auto w-full px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-black">
            How the sausage<br />gets made.
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-md leading-snug">
            Data in. Design out. Shipped live. No "creative exploration phase." No 40-slide decks. We're builders who happen to be researchers.
          </p>
        </div>

        {/* The 3-Column Card */}
        <div className="bg-white text-black w-full flex flex-col lg:flex-row border border-black">
          
          {/* Step 1 */}
          <div className="w-full lg:w-1/3 p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col">
            <div className="text-6xl md:text-7xl font-black text-[#2942ff] mb-8 tracking-tighter">01</div>
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
              DATA IN
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Deep platform analysis.
            </h3>
            <p className="text-sm text-gray-500 leading-snug">
              We pull signal from Meta, Shopify, GA, Clarity and every other platform that matters. Heatmaps, funnels, drop-offs, session recordings — the full picture before we touch a pixel.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full lg:w-1/3 p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col">
            <div className="text-6xl md:text-7xl font-black text-[#2942ff] mb-8 tracking-tighter">02</div>
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
              DESIGN OUT
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Mobile-first, perfected.
            </h3>
            <p className="text-sm text-gray-500 leading-snug">
              Unlimited rounds of iteration until it's right. Real copy, real assets, the exact strategy that will go live. Misuse it — we refund. That's the deal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full lg:w-1/3 p-8 md:p-10 lg:p-12 flex flex-col">
            <div className="text-6xl md:text-7xl font-black text-[#2942ff] mb-8 tracking-tighter">03</div>
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-4">
              SHIPPED LIVE
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Development + live link.
            </h3>
            <p className="text-sm text-gray-500 leading-snug">
              Hand-coded, speed-tuned, QA'd on real devices. You get a live link to test, click, break. We don't call it done until the numbers do.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
