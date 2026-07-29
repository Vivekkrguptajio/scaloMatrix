import React from 'react';

const FeaturedCaseStudy = () => {
  return (
    <section className="w-full py-10 md:py-16 bg-[#f3f2eb]">
      <div className="max-w-[1024px] mx-auto w-full px-16 xl:px-0">
        <div className="relative w-full bg-[#fce9d3] border border-black p-6 md:p-10 lg:p-16">
        {/* Blue Ribbon / Tag */}
        <div className="absolute top-0 left-0 -translate-y-full -translate-x-[1px] bg-[#2942ff] text-white text-sm font-bold tracking-[0.2em] py-4 px-8 uppercase border border-black border-b-0 z-10">
          Featured Case Study
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 h-full">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] xl:w-[320px] flex flex-col shrink-0">
            
            {/* Logo Box */}
            <div className="bg-white border border-black p-6 md:p-8 flex items-center justify-center mb-6">
              <div className="bg-[#ff2020] text-white font-black italic text-4xl leading-none px-4 py-2 tracking-tighter w-full text-center shadow-sm">
                SUPER<br/>YOU
              </div>
            </div>

            {/* Stats Box */}
            <div className="bg-white border border-black flex flex-col mb-6">
              <div className="p-8 md:p-10 border-b border-black">
                <div className="text-5xl md:text-6xl font-bold text-[#2942ff]">+33%</div>
                <div className="text-gray-500 font-bold text-sm mt-3 tracking-widest uppercase">CR</div>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-5xl md:text-6xl font-bold text-[#2942ff]">+14%</div>
                <div className="text-gray-500 font-bold text-sm mt-3 tracking-widest uppercase">AOV</div>
              </div>
            </div>

            {/* Visit Website Button */}
            <div className="mt-auto">
              <a href="#" className="bg-[#111] text-white font-semibold py-5 px-6 w-full flex justify-between items-center hover:bg-black transition-colors border border-black text-lg">
                <span>Visit Website</span>
                <span>→</span>
              </a>
            </div>
            
          </div>

          {/* Right Image Container */}
          <div className="flex-1 w-full border border-black bg-white overflow-hidden grid grid-cols-1 sm:grid-cols-3 gap-0">
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
