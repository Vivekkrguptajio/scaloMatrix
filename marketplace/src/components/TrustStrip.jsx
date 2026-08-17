import React, { memo } from 'react';

const topRowBrands = [
  { name: 'BURBERRY', color: '#EAB308', type: 'text', fontStyle: 'font-serif tracking-widest text-lg font-bold' },
  { name: 'MONTE CARLO', color: '#2563EB', type: 'text', fontStyle: 'font-sans font-bold text-lg' },
  { name: 'perfora', color: '#0891B2', type: 'text', fontStyle: 'font-serif font-bold text-xl tracking-tight' },
  { name: 'HAVELLS', color: '#DC2626', type: 'icon', fontStyle: 'font-sans font-black text-red-600 text-xl' },
  { name: 'SELECT CITYWALK', color: '#D97706', type: 'text', fontStyle: 'font-serif text-xs text-center' },
  { name: 'Canon', color: '#DC2626', type: 'text', fontStyle: 'font-serif font-black text-2xl italic' },
];

const bottomRowBrands = [
  { name: 'Canon', color: '#DC2626', type: 'text', fontStyle: 'font-serif font-black text-2xl italic' },
  { name: 'LLOYD', color: '#1E3A8A', type: 'circle', fontStyle: '' },
  { name: 'BLUE TEA', color: '#2563EB', type: 'icon', fontStyle: 'font-sans font-bold text-blue-800 text-xl' },
  { name: 'one8', subtext: 'BY VIRAT KOHLI', color: '#059669', type: 'subtext', fontStyle: 'font-sans font-light text-2xl' },
];

const BrandCard = ({ brand }) => (
  <div 
    className="bg-white border border-gray-200 hover:border-[#FD5800] rounded-xl h-12 sm:h-14 w-44 sm:w-52 flex items-center justify-center relative overflow-hidden flex-shrink-0 mx-3 px-4 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
    style={{ borderLeft: `4px solid ${brand.color}` }}
  >
    {brand.type === 'text' && (
      <span className={`text-gray-900 ${brand.fontStyle}`}>{brand.name}</span>
    )}
    
    {brand.type === 'icon' && (
      <div className="flex items-center gap-2">
        <span className="text-[#FD5800] font-bold">⚡</span>
        <span className={`text-gray-900 ${brand.fontStyle}`}>{brand.name}</span>
      </div>
    )}

    {brand.type === 'circle' && (
      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-blue-500 to-blue-900 flex items-center justify-center shadow-inner">
        <span className="text-white text-[9px] font-bold tracking-widest">LLOYD</span>
      </div>
    )}

    {brand.type === 'subtext' && (
      <div className="flex flex-col items-center">
        <span className="text-gray-900 font-sans text-lg font-light">{brand.name}</span>
        <span className="text-[7px] tracking-widest text-[#FD5800] font-semibold">{brand.subtext}</span>
      </div>
    )}
  </div>
);

const TrustStrip = memo(function TrustStrip() {
  return (
    <section className="w-full bg-[#F8FAFC] py-8 md:py-10 border-y border-gray-200 text-gray-900 overflow-hidden relative">


      <div className="flex flex-col gap-4 relative">
        {/* Top Marquee Row */}
        <div className="relative flex overflow-x-hidden group w-full py-1">
          <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex whitespace-nowrap items-center">
            {[...topRowBrands, ...topRowBrands, ...topRowBrands, ...topRowBrands].map((brand, index) => (
              <BrandCard key={`top-${index}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Bottom Reverse Marquee Row */}
        <div className="relative flex overflow-x-hidden group w-full py-1">
          <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-reverse flex whitespace-nowrap items-center ml-12">
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
