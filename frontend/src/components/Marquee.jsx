import React from 'react';

export default function Marquee() {
  const repetitions = 10;
  
  return (
    <section className="w-full bg-[#FD5800] overflow-hidden py-3 md:py-4 flex items-center transform -rotate-2 scale-105 z-20 relative shadow-xl">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee inline-block whitespace-nowrap flex items-center">
          {Array(repetitions).fill(0).map((_, i) => (
            <div key={i} className="inline-flex items-center text-2xl md:text-3xl lg:text-5xl font-black font-sans tracking-tighter uppercase text-white">
              <span className="px-6">Strategy</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">Design</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">Growth</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">scaloMATRIX</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
