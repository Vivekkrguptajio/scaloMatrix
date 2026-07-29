import React from 'react';

const Services = () => {
  return (
    <section className="w-full py-12 lg:py-20 font-sans bg-[#f3f2eb]">
      <div className="max-w-[1024px] mx-auto w-full px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-black">
            Our services. <span className="text-[#2942ff]">All<br className="hidden md:block" /> about money</span>
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-lg leading-snug">
            Pick the one that matches your problem. All services includes UI/UX, Content, Graphics, Design, & Development. AI Photoshoots & 3D animations optional*
          </p>
        </div>

        {/* Pricing/Services Table */}
        <div className="w-full flex flex-col xl:flex-row border border-black mb-8">
          
          {/* Tier 1 */}
          <div className="w-full xl:w-1/4 bg-white p-8 md:p-10 flex flex-col border-b xl:border-b-0 xl:border-r border-black">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-6">
              TIER · 01 · SNIPER
            </div>
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Single landing<br />page.
            </h3>
            <div className="w-full h-[1px] bg-gray-300 mb-6"></div>
            <p className="text-sm text-gray-600 leading-snug mb-12 flex-1">
              One page. Research → copy → design → build → ship. Guaranteed +20% or we keep working.
            </p>
            <ul className="flex flex-col gap-6 font-mono text-xs leading-snug text-gray-700">
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> Customer interviews (n=5)
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> Competitive teardown
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> Copy + design + build
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> 30-day post-launch care
              </li>
            </ul>
          </div>

          {/* Tier 2 (Dark) */}
          <div className="w-full xl:w-1/4 bg-[#111] text-white p-8 md:p-10 flex flex-col border-b xl:border-b-0 xl:border-r border-black relative overflow-hidden">
            <div className="text-[10px] font-mono tracking-widest text-[#e8ff00] uppercase mb-6">
              TIER · 02 · THE RETAINER - MOST PICKED
            </div>
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              CRO retainer for<br />each Landing<br />Page
            </h3>
            <div className="w-full h-[1px] bg-[#333] mb-6"></div>
            <p className="text-sm text-gray-400 leading-snug mb-12 flex-1 relative z-10">
              Choose the number of landing pages you wish. For every landing page we
            </p>
            {/* Decorative Blue Circle */}
            <div className="absolute right-12 top-1/2 -translate-y-12 w-16 h-16 rounded-full border-[1.5px] border-[#2942ff] opacity-50 z-0"></div>
            
            <ul className="flex flex-col gap-6 font-mono text-xs leading-snug text-gray-300 relative z-10">
              <li className="pb-6 border-b border-dashed border-[#333]">
                <span className="text-[#2942ff]">→</span> Create a high converting version + test variation
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                <span className="text-[#2942ff]">→</span> Unlimited tasks, one task at a time
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                <span className="text-[#2942ff]">→</span> From Meta creatives to cross sell message
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                <span className="text-[#2942ff]">→</span> Weekly async, monthly live
              </li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="w-full xl:w-1/4 bg-white p-8 md:p-10 flex flex-col border-b xl:border-b-0 xl:border-r border-black">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-6">
              TIER · 03 · FULL REVAMP
            </div>
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Full Shopify Store<br />Development
            </h3>
            <div className="w-full h-[1px] bg-gray-300 mb-6"></div>
            <p className="text-sm text-gray-600 leading-snug mb-12 flex-1">
              Sitemap, narrative, proof, polish. Your site stops being a brochure and starts earning.
            </p>
            <ul className="flex flex-col gap-6 font-mono text-xs leading-snug text-gray-700">
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> UI/UX + Content + Graphics + Development
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> 12-24 pages, all tested
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> 8-10 week sprint
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> You share brand guidelines and Photo Assets.
              </li>
            </ul>
          </div>

          {/* Tier 4 */}
          <div className="w-full xl:w-1/4 bg-white p-8 md:p-10 flex flex-col">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-6">
              TIER · 04 · DIAGNOSTIC
            </div>
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Live audit. 60<br />mins.
            </h3>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-600">Free</span>
              <span className="text-xl font-bold text-[#2942ff]">₹0</span>
            </div>
            <div className="w-full h-[1px] bg-gray-300 mb-6"></div>
            <p className="text-sm text-gray-600 leading-snug mb-12 flex-1">
              Only if you get selected* Send us the URL. We'll audit live on a call. If you don't get selected, you can still pay for it.
            </p>
            <ul className="flex flex-col gap-6 font-mono text-xs leading-snug text-gray-700">
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> Conversion teardown
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> 10 things you can do to improve
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> No deck. No upsell.
              </li>
              <li className="pb-6 border-b border-dashed border-gray-300">
                <span className="text-[#2942ff]">→</span> No Recording + doc, yours
              </li>
            </ul>
          </div>

        </div>

        {/* Schedule a call button */}
        <div className="flex">
          <a href="#" className="bg-[#111] text-white font-semibold py-4 px-8 flex items-center gap-12 hover:bg-black transition-colors text-sm">
            <span>Schedule a call</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
