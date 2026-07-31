import React from 'react';

const Services = () => {
  return (
    <section className="w-full py-8 lg:py-12 font-sans bg-white">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-black" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            Our services.<br />
            <span className="text-[#FD5800]">All about money</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md leading-snug">
            Pick the one that matches your problem. All services includes UI/UX, Content, Graphics, Design, & Development. AI Photoshoots & 3D animations optional*
          </p>
        </div>

        {/* Pricing/Services Table */}
        <div className="w-full flex flex-col xl:flex-row border border-black mb-8">
          
          {/* Tier 1 */}
          <div className="w-full xl:w-1/4 bg-white p-7 md:p-8 flex flex-col border-b xl:border-b-0 xl:border-r border-black">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-5">
              TIER · 01 · SNIPER
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight">
              Single landing<br />page.
            </h3>
            <div className="w-full h-[1px] bg-gray-300 mb-5"></div>
            <p className="text-xs text-gray-600 leading-snug mb-8 flex-1">
              One page. Research → copy → design → build → ship. Guaranteed +20% or we keep working.
            </p>
            <ul className="flex flex-col gap-4.5 font-mono text-xs leading-snug text-gray-700">
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> Customer interviews (n=5)
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> Competitive teardown
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> Copy + design + build
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> 30-day post-launch care
              </li>
            </ul>
          </div>

          {/* Tier 2 (Dark) */}
          <div className="w-full xl:w-1/4 bg-[#111] text-white p-7 md:p-8 flex flex-col border-b xl:border-b-0 xl:border-r border-black relative overflow-hidden">
            <div className="text-[10px] font-mono tracking-widest text-[#FF9066] uppercase mb-5">
              TIER · 02 · THE RETAINER - MOST PICKED
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight">
              CRO retainer for<br />each Landing<br />Page
            </h3>
            <div className="w-full h-[1px] bg-[#333] mb-5"></div>
            <p className="text-xs text-gray-400 leading-snug mb-8 flex-1 relative z-10">
              Choose the number of landing pages you wish. For every landing page we
            </p>
            
            <ul className="flex flex-col gap-4.5 font-mono text-xs leading-snug text-gray-300 relative z-10">
              <li className="pb-4.5 border-b border-dashed border-[#333]">
                <span className="text-[#FD5800]">→</span> Create a high converting version + test variation
              </li>
              <li className="pb-4.5 border-b border-dashed border-[#333]">
                <span className="text-[#FD5800]">→</span> Unlimited tasks, one task at a time
              </li>
              <li className="pb-4.5 border-b border-dashed border-[#333]">
                <span className="text-[#FD5800]">→</span> From Meta creatives to cross sell message
              </li>
              <li className="pb-4.5 border-b border-dashed border-[#333]">
                <span className="text-[#FD5800]">→</span> Weekly async, monthly live
              </li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="w-full xl:w-1/4 bg-white p-7 md:p-8 flex flex-col border-b xl:border-b-0 xl:border-r border-black">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-5">
              TIER · 03 · FULL REVAMP
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight">
              Full Shopify Store<br />Development
            </h3>
            <div className="w-full h-[1px] bg-gray-300 mb-5"></div>
            <p className="text-xs text-gray-600 leading-snug mb-8 flex-1">
              Sitemap, narrative, proof, polish. Your site stops being a brochure and starts earning.
            </p>
            <ul className="flex flex-col gap-4.5 font-mono text-xs leading-snug text-gray-700">
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> UI/UX + Content + Graphics + Development
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> 12-24 pages, all tested
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> 8-10 week sprint
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> You share brand guidelines and Photo Assets.
              </li>
            </ul>
          </div>

          {/* Tier 4 */}
          <div className="w-full xl:w-1/4 bg-white p-7 md:p-8 flex flex-col">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-5">
              TIER · 04 · DIAGNOSTIC
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight">
              Live audit. 60<br />mins.
            </h3>
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs text-gray-600">Free</span>
              <span className="text-lg font-bold text-[#FD5800]">₹0</span>
            </div>
            <div className="w-full h-[1px] bg-gray-300 mb-5"></div>
            <p className="text-xs text-gray-600 leading-snug mb-8 flex-1">
              Only if you get selected* Send us the URL. We'll audit live on a call. If you don't get selected, you can still pay for it.
            </p>
            <ul className="flex flex-col gap-4.5 font-mono text-xs leading-snug text-gray-700">
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> Conversion teardown
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> 10 things you can do to improve
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> No deck. No upsell.
              </li>
              <li className="pb-4.5 border-b border-dashed border-gray-300">
                <span className="text-[#FD5800]">→</span> No Recording + doc, yours
              </li>
            </ul>
          </div>

        </div>

        {/* Schedule a call button */}
        <div className="flex">
          <a href="#" className="group flex items-center gap-2 bg-[#FD5800] text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black hover:border-black border border-transparent transition-colors text-sm tracking-wide">
            Schedule a call
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;

