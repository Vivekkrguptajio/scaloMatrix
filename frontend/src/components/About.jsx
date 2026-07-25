import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { solutions } from '../data/aboutData'

/* ─── Animated Check List Item ─── */
function CheckItem({ text, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start gap-3 group/item cursor-default"
    >
      <div className="w-[16px] h-[16px] rounded-full bg-[#FD5800] flex items-center justify-center flex-shrink-0 mt-[3px] shadow-sm">
        <svg className="w-[10px] h-[10px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-600 font-semibold group-hover/item:text-gray-900 transition-colors duration-300 text-[13.5px] leading-relaxed">{text}</span>
    </motion.li>
  )
}

export default function About() {
  const scrollRef = useRef(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const animFrameId = useRef(null);
  const isHovering = useRef(false);

  const handleMouseEnter = () => {
    isHovering.current = true;
    if (scrollRef.current) {
      currentScroll.current = scrollRef.current.scrollLeft;
      targetScroll.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };

  const handleMouseMove = (e) => {
    if (!scrollRef.current) return;
    const rect = scrollRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, mouseX / rect.width));
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    targetScroll.current = maxScroll * percentage;
  };

  React.useEffect(() => {
    const animate = () => {
      if (scrollRef.current && isHovering.current) {
        const diff = targetScroll.current - currentScroll.current;
        if (Math.abs(diff) > 0.2) {
          currentScroll.current += diff * 0.1;
          scrollRef.current.scrollLeft = currentScroll.current;
        }
      }
      animFrameId.current = requestAnimationFrame(animate);
    };
    animFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative w-full flex flex-col pt-0 bg-white font-sans overflow-hidden">
      
      {/* ─── Background Ambient Waves ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FD5800]/[0.03] to-transparent rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FD5800]/[0.03] to-transparent rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="w-full h-full flex flex-col relative z-10">

        {/* ─── Horizontal Scroll Grid ─── */}
        <div 
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="w-full h-auto md:h-[75vh] min-h-[600px] flex flex-row shadow-2xl overflow-x-auto rounded-none border-t border-gray-200 cursor-ew-resize select-none" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {solutions.map((item, index) => {
            
            const activeColors = [
              'bg-[#00D1FF]', // Cyan
              'bg-[#FF3366]', // Pink
              'bg-[#00E676]', // Green
              'bg-[#7E57C2]', // Purple
              'bg-[#FF9D00]', // Orange
              'bg-[#3B82F6]', // Blue
              'bg-[#EC4899]'  // Magenta
            ];
            const activeBg = activeColors[index % activeColors.length];

            return (
              <div 
                key={item.id}
                className={`flex flex-col justify-between border-r border-white/20 last:border-0 relative overflow-hidden group 
                  w-[80vw] sm:w-[320px] md:w-[380px] lg:w-[420px] shrink-0 snap-center py-10 md:py-12 px-6 md:px-10 ${activeBg} transition-all duration-500 cursor-pointer`}
              >
                {/* Large Background Card Number */}
                <div className="absolute top-4 right-6 text-white/20 font-black text-6xl md:text-8xl select-none pointer-events-none group-hover:opacity-10 transition-opacity">
                  {item.id}
                </div>

                <div className="w-full h-full flex flex-col justify-between relative z-10">
                  
                  {/* CARD COVER / TITLE SECTION */}
                  <div className="flex flex-col items-start transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 text-white shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>

                    <h3 className="text-[32px] md:text-[38px] lg:text-[44px] font-black leading-[1.1] text-white tracking-tight">
                      {item.title} <br className="hidden md:inline"/>Solution
                    </h3>
                  </div>

                  {/* HOVER DETAILS SECTION (Collapsed by default, revealed on hover) */}
                  <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-500 ease-out overflow-hidden flex flex-col pt-4">
                    <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed mb-6 max-w-sm drop-shadow-sm">
                      {item.desc}
                    </p>
                    
                    {/* Services Checklist */}
                    <ul className={`grid gap-x-4 gap-y-2.5 mb-8 w-full max-w-md ${item.list.length > 3 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                      {item.list.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center shrink-0 mt-[3px]">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white font-medium text-xs md:text-sm drop-shadow-sm">{listItem}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Circle Arrow Button */}
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center group/btn hover:scale-105 transition-transform duration-300 shadow-lg shrink-0">
                      <svg className="w-5 h-5 text-black group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
