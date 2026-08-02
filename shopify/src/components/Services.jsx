import React from 'react';

const Services = () => {
  return (
    <section id="services" className="w-full py-10 md:py-16 lg:py-20 font-sans bg-white">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black font-sans leading-[1.1] text-black lg:w-[60%] tracking-tight">
            Our services. <span className="text-[#FD5800]">All about money</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end mt-6 lg:mt-0">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed lg:text-right">
              Pick the one that matches your problem. All services includes UI/<br className="hidden lg:block" />UX, Content, Graphics, Design, & Development. AI Photoshoots &<br className="hidden lg:block" />3D animations optional*
            </p>
          </div>
        </div>

        {/* Pricing/Services Table */}
        <div className="w-full flex flex-col xl:flex-row rounded-[32px] md:rounded-[48px] shadow-sm border border-gray-200 overflow-hidden mb-12 bg-white">
          
          {/* Tier 1 */}
          <div className="w-full xl:w-1/4 bg-white p-8 md:p-10 flex flex-col border-b xl:border-b-0 xl:border-r border-gray-200">
            <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-5">
              TIER · 01 · SNIPER
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight tracking-tight">
              Single landing page.
            </h3>
            <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8 flex-1">
              One page. Research → copy → design → build → ship. Guaranteed +20% or we keep working.
            </p>
            <ul className="flex flex-col gap-5 font-mono text-[13px] leading-snug text-gray-600">
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> Customer interviews (n=5)
              </li>
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> Competitive teardown
              </li>
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> Copy + design + build
              </li>
              <li className="pb-2">
                <span className="text-[#FD5800] mr-2">→</span> 30-day post-launch care
              </li>
            </ul>
          </div>

          {/* Tier 2 (Dark) */}
          <div className="w-full xl:w-1/4 bg-[#111] text-white p-8 md:p-10 flex flex-col border-b xl:border-b-0 xl:border-r border-[#333] relative">
            <div className="text-[10px] font-mono tracking-widest text-[#FD5800] uppercase mb-5">
              TIER · 02 · THE RETAINER - MOST PICKED
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight tracking-tight text-white">
              CRO retainer for each Landing Page
            </h3>
            <div className="w-full h-[1px] bg-[#333] mb-6"></div>
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8 flex-1">
              Choose the number of landing pages you wish. For every landing page we
            </p>
            
            <ul className="flex flex-col gap-5 font-mono text-[13px] leading-snug text-gray-300">
              <li className="pb-5 border-b border-dashed border-[#333]">
                <span className="text-[#FD5800] mr-2">→</span> Create a high converting version + test variation
              </li>
              <li className="pb-5 border-b border-dashed border-[#333]">
                <span className="text-[#FD5800] mr-2">→</span> Unlimited tasks, one task at a time
              </li>
              <li className="pb-5 border-b border-dashed border-[#333]">
                <span className="text-[#FD5800] mr-2">→</span> From Meta creatives to cross sell message
              </li>
              <li className="pb-2">
                <span className="text-[#FD5800] mr-2">→</span> Weekly async, monthly live
              </li>
            </ul>
            
            {/* Top center dot decoration */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
          </div>

          {/* Tier 3 */}
          <div className="w-full xl:w-1/4 bg-white p-8 md:p-10 flex flex-col border-b xl:border-b-0 xl:border-r border-gray-200">
            <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-5">
              TIER · 03 · FULL REVAMP
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight tracking-tight">
              Full Shopify Store Development
            </h3>
            <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8 flex-1">
              Sitemap, narrative, proof, polish. Your site stops being a brochure and starts earning.
            </p>
            <ul className="flex flex-col gap-5 font-mono text-[13px] leading-snug text-gray-600">
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> UI/UX + Content + Graphics + Development
              </li>
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> 12-24 pages, all tested
              </li>
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> 8-10 week sprint
              </li>
              <li className="pb-2">
                <span className="text-[#FD5800] mr-2">→</span> You share brand guidelines and Photo Assets.
              </li>
            </ul>
          </div>

          {/* Tier 4 */}
          <div className="w-full xl:w-1/4 bg-white p-8 md:p-10 flex flex-col">
            <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-5">
              TIER · 04 · DIAGNOSTIC
            </div>
            <h3 className="text-2xl font-bold mb-5 leading-tight tracking-tight">
              Live audit. 60 mins.
            </h3>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-[15px] text-gray-500 font-mono">Free</span>
              <span className="text-2xl font-bold text-[#FD5800]">₹0</span>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
            
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8 flex-1">
              Only if you get selected* Send us the URL. We'll audit live on a call. If you don't get selected, you can still pay for it.
            </p>
            <ul className="flex flex-col gap-5 font-mono text-[13px] leading-snug text-gray-600">
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> Conversion teardown
              </li>
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> 10 things you can do to improve
              </li>
              <li className="pb-5 border-b border-dashed border-gray-200">
                <span className="text-[#FD5800] mr-2">→</span> No deck. No upsell.
              </li>
              <li className="pb-2">
                <span className="text-[#FD5800] mr-2">→</span> No Recording + doc, yours
              </li>
            </ul>
          </div>

        </div>

        {/* Schedule a call button */}
        <div className="flex">
          <a href="#" className="group flex items-center gap-3 bg-black text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#FD5800] transition-colors shadow-sm text-sm tracking-wide">
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
