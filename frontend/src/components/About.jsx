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
  const containerRect = useRef({ left: 0, width: 0 });

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      const rect = scrollRef.current.getBoundingClientRect();
      containerRect.current = { left: rect.left, width: rect.width };
    }
  };

  const handleMouseMove = (e) => {
    if (!scrollRef.current) return;
    
    const { left, width } = containerRect.current;
    if (width === 0) return; // Fallback if rect wasn't cached properly
    
    const mouseX = e.clientX - left;
    
    // Ensure percentage is between 0 and 1
    const percentage = Math.max(0, Math.min(1, mouseX / width));
    
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Smoothly pan the container based on cursor position
    container.scrollTo({
      left: maxScroll * percentage,
      behavior: 'auto'
    });
  };

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
    <section id="about" className="relative w-full flex flex-col pt-16 bg-white font-sans overflow-hidden">
      
      {/* ─── Background Ambient Waves ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FD5800]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FD5800]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="w-full h-full flex flex-col relative z-10">
        
        {/* ─── Header Section ─── */}
        <div className="w-full text-center flex flex-col items-center mb-8 md:mb-10 px-4">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-black tracking-tight text-gray-900 leading-[1.1] mb-3"
          >
            Solutions That Drive <span className="text-[#FD5800]">Real Impact</span>
          </motion.h2>
          

        </div>

        {/* ─── Horizontal Scroll Grid ─── */}
        <div 
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          className="w-full h-auto md:h-[75vh] min-h-[600px] flex flex-row shadow-2xl overflow-x-auto rounded-none border-t border-gray-200 cursor-ew-resize transition-all duration-300 ease-out" 
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
                className={`flex flex-col justify-center border-r border-white/20 last:border-0 relative overflow-hidden group 
                  w-[80vw] sm:w-[350px] md:w-[400px] lg:w-[450px] shrink-0 snap-center py-12 md:py-0 px-6 md:px-10 ${activeBg}`}
              >
                <div className="w-full h-full flex flex-col justify-center relative">
                  
                  {/* ACTIVE STATE (Content) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col w-full relative z-10"
                  >
                    <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-black leading-[1.1] text-white mb-6 whitespace-nowrap">
                      {item.title} Solution
                    </h3>
                    <p className="text-white text-base md:text-[18px] font-medium leading-relaxed mb-8 max-w-sm drop-shadow-sm">
                      {item.desc}
                    </p>
                    
                    {/* Services Checklist */}
                    <ul className={`grid gap-x-6 gap-y-3 mb-10 w-full max-w-md ${item.list.length > 3 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                      {item.list.map((listItem, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 + (i * 0.1) }}
                          className="flex items-start gap-2.5"
                        >
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-[2px]">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white font-medium text-sm drop-shadow-sm">{listItem}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Circle Arrow Button */}
                    <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center group/btn hover:scale-105 transition-transform duration-300 shadow-lg shrink-0">
                      <svg className="w-6 h-6 text-black group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
