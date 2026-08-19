import React, { memo } from 'react';

const topRowBrands = [
  { name: 'Nutraphyll', img: '/logo/Nutraphyll.png', color: '#10B981' },
  { name: 'Judex', img: '/logo/Judex.png', color: '#3B82F6' },
  { name: 'Nada', img: '/logo/Nada.png', color: '#FD5800' },
  { name: 'Gladful', color: '#F97316', render: () => <span className="text-orange-500 font-black text-xl tracking-tighter">Gladful</span> },
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
  { name: 'Wayora', img: '/logo/Wayora.png', color: '#EC4899' },
  { name: 'SUPERYOU', color: '#DC2626', render: () => <span className="text-white bg-red-600 font-black italic px-2.5 py-0.5 text-base tracking-tighter rounded">SUPERYOU</span> },
];

const bottomRowBrands = [
  { name: 'drapes', img: '/logo/drapes.png', color: '#EAB308' },
  { name: 'velmukha', img: '/logo/velmukha.png', color: '#8B5CF6' },
  { name: 'WayoraN', img: '/logo/WayoraN.png', color: '#14B8A6' },
  { name: 'HealthFab', color: '#FD5800', render: () => <span className="text-[#FD5800] font-black text-xl tracking-tight">HealthFab</span> },
  { name: 'ADILQADRI', color: '#111827', render: () => <span className="text-gray-900 font-serif font-bold text-lg tracking-wide">ADILQADRI</span> },
  { name: 'MuscleBlaze', color: '#1F2937', render: () => (
    <div className="flex items-center gap-1.5 text-gray-900 font-black italic text-lg">
      <span className="text-xs uppercase tracking-widest font-bold text-gray-500">MuscleBlaze</span>
      <span className="text-[#FD5800]">MB</span>
    </div>
  )},
  { name: 'koparo', color: '#16A34A', render: () => <span className="text-green-600 font-black text-xl lowercase">koparo</span> },
  { name: 'Emma', color: '#F59E0B', render: () => <span className="text-amber-500 font-bold text-2xl tracking-tight">Emma.</span> },
];

const BrandCard = ({ brand }) => (
  <div 
    className="bg-white border border-gray-200 hover:border-[#FD5800] rounded-xl h-12 sm:h-14 w-44 sm:w-52 flex items-center justify-center relative overflow-hidden flex-shrink-0 mx-2.5 px-4 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
    style={{ borderLeft: `4px solid ${brand.color}` }}
  >
    {brand.img ? (
      <img src={brand.img} alt={brand.name} className="h-7 sm:h-8 max-w-[130px] object-contain" />
    ) : (
      brand.render && brand.render()
    )}
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
