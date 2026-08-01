import React, { useState, useEffect, useRef } from 'react';

const GuestCard = ({ brand, renderLogo, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger animation by column index in each row
  const delay = (index % 6) * 80;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-1/2 sm:w-1/3 lg:w-1/6 h-28 border border-black -ml-[1px] -mt-[1px] bg-white flex items-center justify-center p-4 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      <div className={brand.style}>
        {renderLogo(brand)}
      </div>
    </div>
  );
};

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
    <section id="brand" className="relative z-0 w-full py-24 lg:py-36 font-sans bg-white">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center relative px-2.5 sm:px-5 md:px-16 xl:px-0 w-full">
        


        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-24 gap-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-sans leading-[1.1] text-black lg:w-[60%]">
            The <span className="text-[#FD5800]">guest list.</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-600 text-lg leading-snug lg:text-right">
              Brands we've shipped for. Twenty+ Shark Tank alumni. The kind of names
              that wouldn't sit still for mediocre work. Now you can be one of them.
            </p>
          </div>
        </div>

        {/* Shark Tank Brands Grid */}
        <div className="relative w-full mb-24">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2 z-10">
            SHARK TANK BRANDS
          </div>
          <div className="flex flex-wrap justify-center pl-[1px] pt-[1px]">
            {sharkTankBrands.map((brand, idx) => (
              <GuestCard key={idx} brand={brand} renderLogo={renderLogo} index={idx} />
            ))}
          </div>
        </div>

        {/* Best Brands Grid */}
        <div className="relative w-full">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2 z-10">
            BEST BRANDS
          </div>
          <div className="flex flex-wrap justify-center pl-[1px] pt-[1px]">
            {bestBrands.map((brand, idx) => (
              <GuestCard key={idx} brand={brand} renderLogo={renderLogo} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuestList;

