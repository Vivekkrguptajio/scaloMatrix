import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const cardsData = [
  {
    id: 1,
    titleTop: "OWLED",
    titleScript: "Films",
    gradient: "from-[#FF4E6E] via-[#E93B55] to-[#801323]",
    heading: "We Build\nVideos",
    description: "An AI-native content studio built for the future. We produce over 700 videos a month - ad films, AI films, animated videos, CGI/VFX, and digital content —using in-house studios, cutting-edge AI tools that compress timelines without compromising craft.",
    link: "#"
  },
  {
    id: 2,
    titleTop: "OWLED",
    titleScript: "Social",
    gradient: "from-[#8B5CF6] via-[#6366F1] to-[#312E81]",
    heading: "We Build\nCampaigns",
    description: "Marketing Campaigns, Influencer partnerships, bold outdoor moments, and hands-on social media management, all working together to keep your brand relevant every day.",
    link: "#"
  },
  {
    id: 3,
    titleTop: "hooc",
    titleScript: "",
    gradient: "from-[#F97316] via-[#EA580C] to-[#7C2D12]",
    heading: "We Build\nIPs & Distribution",
    description: "We create digital IPs like Podcasts, YT channels, IG Creator / Community Pages",
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
    <section className="bg-white py-8 relative overflow-hidden" id="services">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                  <a href={card.link} className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm font-semibold text-[#F3CD7A] group border border-white/5">
                    Learn More 
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </span>
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
