import React, { memo } from 'react';

const topRowBrands = [
  { name: 'Gladful', color: '#F97316', render: () => <span className="text-orange-500 font-black text-xl tracking-tighter">Gladful</span> },
  { name: 'GOOD MONK', color: '#FD5800', render: () => <span className="text-[#FD5800] font-black text-base leading-tight uppercase tracking-tight">GOOD MONK</span> },
  { name: 'ADILQADRI', color: '#111827', render: () => <span className="text-gray-900 font-serif font-bold text-lg tracking-wide">ADILQADRI</span> },
  { name: 'Bold Care', color: '#FD5800', render: () => (
    <div className="flex items-center gap-2 text-gray-900 font-bold text-lg">
      <svg width="18" height="22" viewBox="0 0 24 24" fill="none" stroke="#FD5800" strokeWidth="2.5">
        <path d="M6 4h8a4 4 0 010 8H6V4z" />
        <path d="M6 12h9a4 4 0 010 8H6v-8z" />
      </svg>
      <span>Bold Care</span>
    </div>
  )},
  { name: 'TheGoodBug', color: '#3B82F6', render: () => (
    <div className="flex flex-col items-center">
      <span className="text-gray-900 font-black text-base tracking-tight">TheGoodBug</span>
      <span className="text-[7px] font-bold uppercase tracking-widest text-[#FD5800]">Daily Probiotics</span>
    </div>
  )},
  { name: 'SUPERYOU', color: '#DC2626', render: () => <span className="text-white bg-red-600 font-black italic px-2.5 py-0.5 text-base tracking-tighter rounded">SUPERYOU</span> },
  { name: 'HealthFab', color: '#FD5800', render: () => <span className="text-[#FD5800] font-black text-xl tracking-tight">HealthFab</span> },
];

const bottomRowBrands = [
  { name: 'MuscleBlaze', color: '#1F2937', render: () => (
    <div className="flex items-center gap-1.5 text-gray-900 font-black italic text-lg">
      <span className="text-xs uppercase tracking-widest font-bold text-gray-500">MuscleBlaze</span>
      <span className="text-[#FD5800]">MB</span>
    </div>
  )},
  { name: 'koparo', color: '#16A34A', render: () => <span className="text-green-600 font-black text-xl lowercase">koparo</span> },
  { name: 'Emma', color: '#F59E0B', render: () => <span className="text-amber-500 font-bold text-2xl tracking-tight">Emma.</span> },
  { name: 'Beautywise', color: '#111827', render: () => <span className="text-gray-900 font-serif italic font-bold text-xl">Beautywise</span> },
  { name: 'allter', color: '#8d9e78', render: () => <span className="text-white bg-[#8d9e78] rounded-full px-3 py-1 font-bold text-xs">allter</span> },
  { name: 'CONSCIOUS CHEMIST', color: '#111827', render: () => <span className="text-gray-900 font-semibold text-xs tracking-wider uppercase text-center">CONSCIOUS CHEMIST</span> },
  { name: 'DECODE AGE', color: '#4F46E5', render: () => <span className="text-indigo-800 font-black text-base uppercase tracking-tight">DECODE AGE</span> },
];

const BrandCard = ({ brand }) => (
  <div 
    className="bg-white border border-gray-200 hover:border-[#FD5800] rounded-xl h-12 sm:h-14 w-44 sm:w-52 flex items-center justify-center relative overflow-hidden flex-shrink-0 mx-2.5 px-4 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
    style={{ borderLeft: `4px solid ${brand.color}` }}
  >
    {brand.render()}
  </div>
);

const TrustStrip = memo(function TrustStrip() {
  return (
    <section className="w-full bg-[#F8FAFC] py-8 md:py-10 border-y border-gray-200 text-gray-900 overflow-hidden relative font-sans">
      <div className="flex flex-col gap-4 relative">
        {/* Top Marquee Row */}
        <div className="relative flex overflow-x-hidden group w-full py-1">
          <div className="absolute top-0 left-0 w-24 md:w-36 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 md:w-36 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex whitespace-nowrap items-center">
            {[...topRowBrands, ...topRowBrands, ...topRowBrands, ...topRowBrands].map((brand, index) => (
              <BrandCard key={`top-${index}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Bottom Reverse Marquee Row */}
        <div className="relative flex overflow-x-hidden group w-full py-1">
          <div className="absolute top-0 left-0 w-24 md:w-36 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 md:w-36 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-reverse flex whitespace-nowrap items-center ml-10">
            {[...bottomRowBrands, ...bottomRowBrands, ...bottomRowBrands, ...bottomRowBrands].map((brand, index) => (
              <BrandCard key={`bottom-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default TrustStrip;
