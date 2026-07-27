import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const cardsData = [
  {
    id: 1,
    titleTop: "SCALO",
    titleScript: "Brand",
    gradient: "from-[#FF4E6E] via-[#E93B55] to-[#801323]",
    heading: "We Build\nBrands",
    description: "We craft compelling brand identities and narratives that resonate with your target audience. From stunning visual design to comprehensive brand strategy, we ensure your brand stands out in a crowded market and builds lasting, meaningful connections.",
    link: "#"
  },
  {
    id: 2,
    titleTop: "SCALO",
    titleScript: "Commerce",
    gradient: "from-[#8B5CF6] via-[#6366F1] to-[#312E81]",
    heading: "We Build\nCommerce",
    description: "We engineer seamless, high-converting e-commerce experiences designed to drive sales and foster customer loyalty. Our solutions integrate cutting-edge technology with intuitive UI/UX to optimize the entire buyer's journey from discovery to checkout.",
    link: "#"
  },
  {
    id: 3,
    titleTop: "SCALO",
    titleScript: "Growth",
    gradient: "from-[#F97316] via-[#EA580C] to-[#7C2D12]",
    heading: "We Build\nGrowth",
    description: "We execute data-driven growth strategies that scale your business rapidly. By leveraging advanced analytics, performance marketing, and relentless conversion rate optimization, we maximize your ROI and accelerate your market penetration.",
    link: "#"
  }
];

export default function ServicesCards() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black py-8 relative overflow-hidden" id="services">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center pb-8 pt-2">
          <span className="text-[#FD5800] uppercase tracking-[0.2em] text-[13px] font-bold mb-2">Ecosystem</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-sans font-black leading-none uppercase tracking-tight text-white">
            What We Build
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 pt-2 px-2">
          {cardsData.map((card) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: card.id * 0.1 }}
              className="bg-[#181818] text-white rounded-2xl border border-white/5 flex flex-col overflow-hidden shadow-2xl relative w-full"
            >
              {/* Top Gradient Image Area */}
              <div className="relative h-[200px] w-full p-4">
                 {/* The unique gradient shape */}
                 <div className="absolute inset-0 p-4 pb-0">
                    <div 
                      className={`w-full h-full bg-gradient-to-br ${card.gradient} relative overflow-hidden`}
                      style={{
                        borderRadius: '16px 16px 24px 16px',
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 75% 100%, 65% 75%, 0 75%)'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20" style={{ mixBlendMode: 'overlay' }}></div>
                    </div>
                 </div>

                 {/* Text Overlay */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-[-20px]">
                   {card.titleTop === 'hooc' ? (
                      <h3 className="text-5xl font-light tracking-wider text-white drop-shadow-xl" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                        h<span className="text-[1.1em] font-normal tracking-tighter">oo</span>c
                      </h3>
                   ) : (
                      <h3 className="text-5xl font-black tracking-tight text-white drop-shadow-xl flex flex-col items-center font-sans">
                        {card.titleTop}
                        {card.titleScript && (
                          <span className="font-serif text-[#F3CD7A] text-4xl font-normal -mt-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {card.titleScript}
                          </span>
                        )}
                      </h3>
                   )}
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-5 pt-4 flex-grow flex flex-col z-10">
                <h4 className="text-2xl font-bold mb-3 whitespace-pre-line text-white leading-tight">
                  {card.heading}
                </h4>
                <p className="text-[#a1a1aa] text-sm leading-relaxed flex-grow font-medium">
                  {card.description}
                </p>
                
                <div className="mt-6 flex justify-end">
                  <a href={card.link} className="group flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors uppercase tracking-wide">
                    Explore {card.titleScript}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
