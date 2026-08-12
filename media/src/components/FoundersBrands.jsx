import React, { memo } from 'react';

const topRowBrands = [
  { name: 'BURBERRY', borderColor: '#EAB308', logo: null, type: 'text', fontStyle: 'font-serif tracking-widest text-lg' },
  { name: 'MONTE CARLO', borderColor: '#1D4ED8', logo: null, type: 'text', fontStyle: 'font-sans font-bold text-lg' },
  { name: 'perfora', borderColor: '#22D3EE', logo: null, type: 'text', fontStyle: 'font-serif font-bold text-xl tracking-tight' },
  { name: 'HAVELLS', borderColor: '#DC2626', logo: 'H', type: 'icon-text', fontStyle: 'font-sans font-black text-red-600 text-xl tracking-tighter' },
  { name: 'SELECT CITYWALK', borderColor: '#F59E0B', logo: '*', type: 'icon-text', fontStyle: 'font-serif text-xs text-center leading-tight' },
  { name: 'Canon', borderColor: '#DC2626', logo: null, type: 'text', fontStyle: 'font-serif font-black text-2xl italic' },
];

const bottomRowBrands = [
  { name: 'Canon', borderColor: '#DC2626', logo: null, type: 'text', fontStyle: 'font-serif font-black text-2xl italic' },
  { name: 'LLOYD', borderColor: '#1E3A8A', logo: 'L', type: 'circle-icon', fontStyle: '' },
  { name: 'BLUE TEA', borderColor: '#1D4ED8', logo: 'B', type: 'icon-text', fontStyle: 'font-sans font-bold text-blue-800 text-xl' },
  { name: 'one8', subtext: 'BY VIRAT KOHLI', borderColor: '#1F2937', logo: null, type: 'text-subtext', fontStyle: 'font-sans font-light text-2xl' },
];

const BrandCard = ({ brand }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm h-16 sm:h-20 w-48 sm:w-56 flex items-center justify-center relative overflow-hidden flex-shrink-0 mx-3 sm:mx-4"
      style={{ borderLeft: `6px solid ${brand.borderColor}` }}
    >
      {brand.type === 'text' && (
        <span className={brand.fontStyle}>{brand.name}</span>
      )}
      
      {brand.type === 'icon-text' && (
        <div className="flex items-center gap-2">
          {brand.logo && (
            <span className={`text-xl font-black ${brand.name === 'HAVELLS' ? 'text-red-600' : 'text-blue-800'}`}>
              {brand.name === 'HAVELLS' ? '⚡' : '❀'}
            </span>
          )}
          <div className={brand.fontStyle}>
            {brand.name === 'SELECT CITYWALK' ? (
              <div className="flex flex-col items-center">
                <span className="text-red-600 text-[10px]">SELECT</span>
                <span className="font-bold text-sm">CITYWALK</span>
                <span className="text-[8px] italic">New Delhi</span>
              </div>
            ) : brand.name}
          </div>
        </div>
      )}

      {brand.type === 'circle-icon' && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-400 to-blue-900 flex items-center justify-center shadow-inner">
          <span className="text-white text-[10px] font-bold tracking-widest">LLOYD</span>
        </div>
      )}

      {brand.type === 'text-subtext' && (
        <div className="flex flex-col items-center">
          <span className={brand.fontStyle}>{brand.name}</span>
          <span className="text-[8px] tracking-widest text-gray-500">{brand.subtext}</span>
        </div>
      )}
    </div>
  );
};

const FoundersBrands = memo(function FoundersBrands() {
  return (
    <section className="w-full bg-[#C4FF1A] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight uppercase max-w-3xl font-sans">
          Brands our founders <br className="hidden md:block" />
          have helped grow.
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 relative">
        {/* Top Row - Moves Left */}
        <div className="relative flex overflow-x-hidden group w-full">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#C4FF1A] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#C4FF1A] to-transparent z-10" />

          <div className="animate-marquee flex whitespace-nowrap items-center">
            {/* Repeat items enough times to fill a wide screen seamlessly */}
            {[...topRowBrands, ...topRowBrands, ...topRowBrands, ...topRowBrands].map((brand, index) => (
              <BrandCard key={`top-${index}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Moves Right */}
        <div className="relative flex overflow-x-hidden group w-full">
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#C4FF1A] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#C4FF1A] to-transparent z-10" />

          {/* If animate-marquee-reverse is defined in index.css, it will move opposite */}
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

export default FoundersBrands;
