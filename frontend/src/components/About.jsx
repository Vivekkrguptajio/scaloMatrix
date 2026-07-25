import React, { useState } from 'react'
import { motion } from 'framer-motion'

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

const approachIcons = [
  { src: "/logo/Frame 1.svg", text: "love what we do" },
  { src: "/logo/Frame 2.svg", text: "roots to visuals" },
  { src: "/logo/Frame 3.svg", text: "calm process" },
  { src: "/logo/Frame 4.svg", text: "efficiency first" },
  { src: "/logo/Frame 5.svg", text: "creative minds" },
  { src: "/logo/Frame 6.svg", text: "fueled by curiosity" }
];

const GlossyHexagon = ({ icon }) => (
  <div className="relative w-[90px] h-[90px] shrink-0">
    {/* Halftone dots behind */}
    <div className="absolute -bottom-2 -left-3 w-16 h-16 opacity-30" style={{ backgroundImage: 'radial-gradient(#FD5800 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }}></div>
    
    <svg className="w-full h-full drop-shadow-[0_12px_24px_rgba(253,88,0,0.15)]" viewBox="0 0 100 100" fill="none">
      {/* Outer White Hexagon */}
      <polygon points="50 5, 90 27, 90 73, 50 95, 10 73, 10 27" fill="white" />
      {/* Inner Orange Glossy Hexagon */}
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9D00" />
          <stop offset="50%" stopColor="#FD5800" />
          <stop offset="100%" stopColor="#D93D00" />
        </linearGradient>
        <linearGradient id="hexHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="40%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="50 14, 81 32, 81 68, 50 86, 19 68, 19 32" fill="url(#hexGrad)" />
      <polygon points="50 14, 81 32, 81 68, 50 86, 19 68, 19 32" fill="url(#hexHighlight)" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md z-10">
      {icon}
    </div>
  </div>
);

const GlossyCircle = ({ icon }) => (
  <div className="relative w-[90px] h-[90px] shrink-0">
    {/* Halftone dots behind */}
    <div className="absolute -bottom-2 -left-3 w-16 h-16 opacity-30" style={{ backgroundImage: 'radial-gradient(#FD5800 1.5px, transparent 1.5px)', backgroundSize: '8px 8px' }}></div>
    
    <svg className="w-full h-full drop-shadow-[0_12px_24px_rgba(253,88,0,0.15)]" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" fill="white" />
      <defs>
        <linearGradient id="circGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9D00" />
          <stop offset="50%" stopColor="#FD5800" />
          <stop offset="100%" stopColor="#D93D00" />
        </linearGradient>
        <linearGradient id="circHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="40%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="36" fill="url(#circGrad)" />
      <circle cx="50" cy="50" r="36" fill="url(#circHighlight)" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md z-10">
      {icon}
    </div>
  </div>
);

const solutions = [
  {
    id: "01",
    title: "Brand",
    desc: "Build a lasting legacy and connect deeply with your audience through powerful storytelling.",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    list: ["Brand Strategy", "Visual Identity", "Packaging Design", "UI/UX Experience", "Messaging & Voice"]
  },
  {
    id: "02",
    title: "Commerce",
    desc: "Scale your revenue seamlessly with high-converting, lightning-fast storefronts.",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["Shopify Plus Development", "Conversion Rate (CRO)", "Custom Landing Pages"]
  },
  {
    id: "03",
    title: "Growth",
    desc: "Accelerate your market presence and acquire high-LTV customers worldwide.",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    list: ["Performance Marketing", "UGC & Creators", "SEO, SEM & Retention"]
  },
  {
    id: "04",
    title: "Media",
    desc: "Drive growth and maximize ROI with data-driven media and performance marketing solutions.",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    list: ["Media Planning", "Media Buying", "Content Creation"]
  },
  {
    id: "05",
    title: "MarketPlace",
    desc: "Dominate online marketplaces with optimized product listings and ad strategies.",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["Amazon Optimization", "E-commerce SEO", "Listing Management"]
  },
  {
    id: "06",
    title: "Finance",
    desc: "Optimize your budget allocation and scale your marketing efficiently with clear ROI tracking.",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    list: ["Financial Planning", "Budget Allocation", "ROI Tracking"]
  },
  {
    id: "07",
    title: "Lead Gen",
    desc: "Build highly converting funnels to capture and nurture quality inbound leads at scale.",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["B2B Leads", "Funnel Optimization", "Inbound Marketing"]
  }
];

export default function About() {
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
        <div className="w-full h-auto md:h-[75vh] min-h-[600px] flex flex-row shadow-2xl overflow-x-auto snap-x snap-mandatory rounded-none border-t border-gray-200" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
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
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-[2px]">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-white font-medium text-sm drop-shadow-sm">{listItem}</span>
                        </li>
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
