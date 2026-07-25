import React, { useState } from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: "01",
    name: "Dhiraj",
    role: "Founder & CEO",
    desc: "Visionary leader driving the strategic direction of scaloMATRIX, focused on scalable growth and innovation.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "02",
    name: "Jane Smith",
    role: "Chief Creative Officer",
    desc: "Award-winning designer with 10+ years experience crafting unforgettable brand identities and digital experiences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "03",
    name: "Michael Chen",
    role: "Head of Engineering",
    desc: "Technical powerhouse architecting robust, high-performance commerce and tech solutions for global brands.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "04",
    name: "Sarah Williams",
    role: "Growth Director",
    desc: "Data-driven marketer specializing in rapid scaling, performance marketing, and customer acquisition.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "05",
    name: "David Kumar",
    role: "Lead Strategist",
    desc: "Market analyst and strategic thinker helping brands navigate complex digital landscapes and beat competitors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function TeamMembers() {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <section id="team" className="relative w-full h-[100svh] flex flex-col bg-[#0a0a0a] font-sans overflow-hidden">

      
      <div className="w-full h-full flex flex-col relative z-10 pt-4 md:pt-6">
        
        {/* ─── Header Section ─── */}
        <div className="w-full text-center flex flex-col items-center mb-4 md:mb-6 px-4">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-black tracking-tight text-white leading-[1.1] mb-2"
          >
            Meet Our <span className="text-[#FD5800]">Experts</span>
          </motion.h2>
          

        </div>

        {/* ─── Horizontal Accordion Grid ─── */}
        <div className="w-full flex-1 min-h-[500px] flex flex-col md:flex-row shadow-2xl overflow-hidden rounded-none border-t border-white/10 mx-auto">
          {teamMembers.map((item, index) => {
            const isActive = activePanel === index;
            
            return (
              <div 
                key={item.id}
                onMouseEnter={() => setActivePanel(index)}
                onClick={() => setActivePanel(index)}
                className={`transition-all duration-700 ease-in-out cursor-pointer flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 last:border-0 relative overflow-hidden group
                  ${isActive ? 'w-full md:w-auto md:flex-[4_4_0%]' : 'w-full md:w-auto md:flex-1 bg-black hover:bg-gray-900/50'}`}
              >
                {/* Background Image for Active Panel */}
                <div 
                  className={`absolute inset-0 bg-cover bg-[center_10%] transition-opacity duration-700 ${isActive ? 'opacity-40' : 'opacity-0'} grayscale`}
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                
                {/* Active Panel Gradient Overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                )}

                <div className="w-full h-full flex flex-col justify-center relative px-8 md:px-12 py-12 md:py-0">
                  
                  {/* INACTIVE STATE (Vertical Text) */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-end pb-10 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-200'}`}>
                    <h3 
                      className={`text-[36px] md:text-[44px] lg:text-[52px] font-black leading-[1.05] whitespace-nowrap text-white group-hover:text-[#FD5800] transition-colors`}
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* ACTIVE STATE (Content) */}
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="flex flex-col w-full min-w-[280px] md:min-w-[400px] relative z-10 h-full justify-end pb-16"
                    >
                      <h4 className="text-[#FD5800] font-bold tracking-widest uppercase text-sm mb-2">
                        {item.role}
                      </h4>
                      <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-black leading-[1.1] text-white mb-4 whitespace-nowrap">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-base md:text-[18px] font-medium leading-relaxed mb-8 max-w-md drop-shadow-sm">
                        {item.desc}
                      </p>
                      
                      {/* Circle Arrow Button */}
                      <button className="w-14 h-14 bg-[#FD5800] rounded-full flex items-center justify-center group/btn hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(253,88,0,0.4)] shrink-0">
                        <svg className="w-6 h-6 text-white group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
