import React from 'react';

const GuestList = () => {
  const sharkTankBrands = [
    { name: "oye happy", style: "text-yellow-400 font-serif italic text-xl" },
    { name: "Gladful", style: "text-orange-500 font-black text-xl tracking-tighter" },
    { name: "GOOD MONK", style: "text-purple-600 font-black text-lg leading-tight text-center" },
    { name: "ADILQADRI", style: "text-black font-serif font-bold text-lg" },
    { name: "CONSCIOUS CHEMIST", style: "text-black font-light text-sm text-center leading-tight" },
    { name: "moder/ate", style: "text-green-800 font-medium text-lg" },
    { name: "Beautywise", style: "text-black font-serif italic text-xl" },
    { name: "PERSONAL TOUCH SKINCARE", style: "text-[#c2a38c] font-light text-[8px] text-center uppercase tracking-widest flex flex-col items-center gap-1" },
    { name: "koparo", style: "text-green-600 font-black text-xl" },
    { name: "Creme Castle", style: "text-red-500 font-black text-lg text-center leading-tight" },
    { name: "allter", style: "text-white bg-[#8d9e78] rounded-full px-4 py-2 font-medium text-sm" },
    { name: "kvy", style: "text-[#c2a38c] font-serif text-2xl" },
    { name: "YAAN MAN", style: "text-[#8b5a2b] font-mono text-sm border border-[#8b5a2b] px-2 py-1 flex flex-col items-center" },
    { name: "HealthFab", style: "text-blue-600 font-bold text-xl" },
  ];

  const bestBrands = [
    { name: "TheGoodBug", style: "text-black font-bold text-lg flex flex-col items-center" },
    { name: "W Nutrition", style: "text-black font-bold text-sm text-center" },
    { name: "Bold Care", style: "text-black font-bold text-lg flex items-center gap-2" },
    { name: "SUPERYOU", style: "text-white bg-red-600 font-black italic px-2 py-1 text-xl tracking-tighter" },
    { name: "MuscleBlaze", style: "text-black font-black text-xl italic" },
    { name: "Emma", style: "text-orange-500 font-bold text-2xl" },
  ];

  const renderLogo = (brand) => {
    switch(brand.name) {
      case "PERSONAL TOUCH SKINCARE":
        return (
          <>
            <span className="text-xl">P</span>
            <span>PERSONAL TOUCH SKINCARE</span>
          </>
        );
      case "GOOD MONK":
        return <>GOOD<br/>MONK</>;
      case "Creme Castle":
        return <>Creme<br/>Castle</>;
      case "CONSCIOUS CHEMIST":
        return <>CONSCIOUS<br/>CHEMIST</>;
      case "YAAN MAN":
        return (
          <>
            <span className="text-lg leading-none">YAAN</span>
            <span className="text-[10px] leading-none">MAN</span>
          </>
        );
      case "Bold Care":
        return (
          <>
            <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="2.5">
              <path d="M6 4h8a4 4 0 010 8H6V4z" />
              <path d="M6 12h9a4 4 0 010 8H6v-8z" />
            </svg>
            <span>Bold Care</span>
          </>
        );
      case "TheGoodBug":
        return (
          <>
            <span>TheGoodBug</span>
            <span className="text-[8px] font-normal uppercase tracking-widest text-gray-500">Daily Probiotics</span>
          </>
        );
      case "W Nutrition":
        return (
          <>
            <span className="text-[8px] uppercase tracking-widest text-gray-500">Wellbeing</span>
            <span className="text-xl">W</span>
            <span className="text-[8px] uppercase tracking-widest text-gray-500">Nutrition</span>
          </>
        );
      case "MuscleBlaze":
        return (
          <div className="flex flex-col items-center">
            <span className="text-[8px] uppercase tracking-widest text-gray-500 font-normal">MuscleBlaze</span>
            <span>MB</span>
          </div>
        );
      case "Emma":
        return (
          <div className="flex flex-col text-[#ff9900]">
            <span className="font-bold text-2xl tracking-tight leading-none">Emma</span>
            <span className="text-[8px] font-mono tracking-widest uppercase mt-0.5 text-center">.</span>
          </div>
        );
      default:
        return brand.name;
    }
  };

  return (
    <section className="w-full py-12 lg:py-20 font-sans bg-[#f3f2eb]">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center relative px-16 xl:px-0 w-full">
        
        {/* Decorative Scroll Dot (Right Side) */}
        <div className="hidden xl:flex absolute top-1/2 -right-16 w-10 h-10 rounded-full border border-[#2942ff] items-center justify-center">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-black mb-6">
            The guest list.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-snug">
            Brands we've shipped for. Twenty+ Shark Tank alumni. The kind of names
            that wouldn't sit still for mediocre work. Now you can be one of them.
          </p>
        </div>

        {/* Shark Tank Brands Grid */}
        <div className="relative w-full mb-24">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2942ff] text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2 z-10">
            SHARK TANK BRANDS
          </div>
          <div className="flex flex-wrap justify-center pl-[1px] pt-[1px]">
            {sharkTankBrands.map((brand, idx) => (
              <div key={idx} className="w-1/2 md:w-1/3 lg:w-1/6 h-28 border border-black -ml-[1px] -mt-[1px] bg-white flex items-center justify-center p-4">
                <div className={brand.style}>
                  {renderLogo(brand)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Brands Grid */}
        <div className="relative w-full">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2942ff] text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2 z-10">
            BEST BRANDS
          </div>
          <div className="flex flex-wrap justify-center pl-[1px] pt-[1px]">
            {bestBrands.map((brand, idx) => (
              <div key={idx} className="w-1/2 md:w-1/3 lg:w-1/6 h-28 border border-black -ml-[1px] -mt-[1px] bg-white flex items-center justify-center p-4">
                <div className={brand.style}>
                  {renderLogo(brand)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuestList;
