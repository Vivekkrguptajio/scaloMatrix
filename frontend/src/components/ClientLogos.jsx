import { memo } from 'react';

const brandsRow1 = [
  { name: "Gladful", render: () => <span className="text-orange-500 font-black text-2xl md:text-3xl tracking-tighter">Gladful</span> },
  { name: "GOOD MONK", render: () => <span className="text-[#FD5800] font-black text-lg md:text-xl leading-tight text-center uppercase tracking-tight">GOOD<br className="hidden sm:block" />MONK</span> },
  { name: "ADILQADRI", render: () => <span className="text-gray-900 font-serif font-bold text-xl md:text-2xl tracking-wide">ADILQADRI</span> },
  { name: "CONSCIOUS CHEMIST", render: () => <span className="text-gray-900 font-medium text-xs md:text-sm text-center leading-tight tracking-widest uppercase">CONSCIOUS<br />CHEMIST</span> },
  { name: "Bold Care", render: () => (
    <div className="flex items-center gap-2 text-gray-900 font-bold text-xl md:text-2xl">
      <svg width="22" height="26" viewBox="0 0 24 24" fill="none" stroke="#FD5800" strokeWidth="2.5">
        <path d="M6 4h8a4 4 0 010 8H6V4z" />
        <path d="M6 12h9a4 4 0 010 8H6v-8z" />
      </svg>
      <span>Bold Care</span>
    </div>
  )},
  { name: "TheGoodBug", render: () => (
    <div className="flex flex-col items-center">
      <span className="text-gray-900 font-black text-xl md:text-2xl tracking-tight">TheGoodBug</span>
      <span className="text-[9px] font-bold uppercase tracking-widest text-[#FD5800]">Daily Probiotics</span>
    </div>
  )},
  { name: "SUPERYOU", render: () => <span className="text-white bg-red-600 font-black italic px-3 py-1 text-lg md:text-xl tracking-tighter rounded">SUPERYOU</span> },
  { name: "MuscleBlaze", render: () => (
    <div className="flex flex-col items-center text-gray-900">
      <span className="text-[9px] uppercase tracking-widest font-bold text-gray-500">MuscleBlaze</span>
      <span className="font-black italic text-2xl tracking-tighter">MB</span>
    </div>
  )},
  { name: "HealthFab", render: () => <span className="text-[#FD5800] font-black text-2xl md:text-3xl tracking-tight">HealthFab</span> },
  { name: "koparo", render: () => <span className="text-green-600 font-black text-2xl md:text-3xl lowercase">koparo</span> },
];

const brandsRow2 = [
  { name: "Emma", render: () => <span className="text-amber-500 font-bold text-3xl tracking-tight">Emma.</span> },
  { name: "oye happy", render: () => <span className="text-yellow-500 font-serif italic font-bold text-2xl md:text-3xl">oye happy</span> },
  { name: "Beautywise", render: () => <span className="text-gray-900 font-serif italic font-bold text-2xl md:text-3xl">Beautywise</span> },
  { name: "allter", render: () => <span className="text-white bg-[#8d9e78] rounded-full px-4 py-1.5 font-bold text-sm tracking-wide">allter</span> },
  { name: "Creme Castle", render: () => <span className="text-red-500 font-black text-lg md:text-xl text-center leading-tight uppercase">Creme<br />Castle</span> },
  { name: "moder/ate", render: () => <span className="text-green-800 font-bold text-2xl lowercase tracking-tight">moder/ate</span> },
  { name: "kvy", render: () => <span className="text-[#c2a38c] font-serif font-black text-3xl lowercase">kvy</span> },
  { name: "W Nutrition", render: () => (
    <div className="flex flex-col items-center text-gray-900">
      <span className="text-[8px] uppercase tracking-widest font-bold text-gray-500">Wellbeing</span>
      <span className="text-2xl font-black">W</span>
      <span className="text-[8px] uppercase tracking-widest font-bold text-gray-500">Nutrition</span>
    </div>
  )},
  { name: "YAAN MAN", render: () => (
    <div className="text-[#8b5a2b] font-mono text-xs font-bold border-2 border-[#8b5a2b] px-3 py-1 flex flex-col items-center">
      <span className="text-sm font-black leading-none">YAAN</span>
      <span className="text-[9px] leading-none mt-0.5">MAN</span>
    </div>
  )},
  { name: "Decode Age", render: () => <span className="text-indigo-800 font-black text-xl md:text-2xl uppercase tracking-tighter">DECODE AGE</span> },
];

const ClientLogos = memo(function ClientLogos() {
  return (
    <section className="w-full bg-white py-10 md:py-14 border-b border-gray-100 overflow-hidden font-sans">
      
      {/* Top Row */}
      <div className="relative flex overflow-x-hidden group mb-8 md:mb-10">
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex whitespace-nowrap py-2 items-center gap-12 sm:gap-16 md:gap-20 px-8">
          {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-16 opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
              {brand.render()}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Reverse Row */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex whitespace-nowrap py-2 items-center gap-12 sm:gap-16 md:gap-20 px-8 ml-10">
          {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-16 opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
              {brand.render()}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
});

export default ClientLogos;
