import React from 'react'
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
    title: "Strategy",
    desc: "Turn insights into action with data-driven strategies tailored to your business goals.",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    list: ["Market Research", "Growth Planning", "Competitive Analysis"]
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
    <section id="about" className="relative w-full py-20 md:py-32 px-4 md:px-8 bg-[#FAFAFA] font-sans">
      
      {/* ─── Background Ambient Waves ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FD5800]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FD5800]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* ─── Header Section ─── */}
        <div className="w-full text-center flex flex-col items-center mb-16 md:mb-20">
          
          {/* SVG Icons Row */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-row flex-wrap items-center justify-center gap-16 sm:gap-20 md:gap-28 lg:gap-[120px] px-2 mb-16 md:mb-24"
          >
            {approachIcons.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative group opacity-80 hover:opacity-100 transition-opacity duration-300 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                
                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 text-xs md:text-sm font-medium text-[#FD5800] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10 translate-y-2 group-hover:translate-y-0">
                  {item.text}
                </div>

                {/* Orange Masked SVG */}
                <div 
                  style={{ 
                    WebkitMaskImage: `url('${item.src}')`, 
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                  }} 
                  className="w-full h-full bg-[#FD5800]"
                ></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-5xl lg:text-[60px] font-black tracking-tight text-gray-900 leading-[1.1] mb-6"
          >
            Solutions That Drive <span className="text-[#FD5800]">Real Impact</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[17px] md:text-[20px] text-gray-500 font-medium leading-relaxed max-w-2xl"
          >
            From building strong brands to scaling businesses, we craft strategies that deliver measurable growth.
          </motion.p>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[28px] p-5 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(253,88,0,0.1)] border border-gray-100 transition-all duration-300 group flex flex-col sm:flex-row gap-5 relative overflow-hidden"
            >
              
              {/* Left Side: 3D Glossy Icon */}
              <div className="flex items-start shrink-0">
                {item.shape === 'hexagon' ? <GlossyHexagon icon={item.icon} /> : <GlossyCircle icon={item.icon} />}
              </div>
              
              {/* Right Side: Content */}
              <div className="flex flex-col flex-1">
                {/* Title Row */}
                <div className="flex items-center gap-3 mb-3 mt-1">
                  <span className="text-[#FD5800] font-bold bg-white px-2.5 py-0.5 rounded-full text-[13px] border border-orange-200 shadow-sm shadow-orange-100">
                    {item.id}
                  </span>
                  <h3 className="text-xl md:text-[22px] font-black text-gray-900 tracking-tight">{item.title}</h3>
                </div>
                
                <p className="text-gray-500 text-[14px] font-medium leading-relaxed mb-4 pr-2">
                  {item.desc}
                </p>

                {/* Horizontal Separator */}
                <div className="w-full h-[1px] bg-gray-100 mb-4"></div>

                {/* Checklist */}
                <ul className={`grid gap-x-4 gap-y-3 ${item.list.length > 3 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {item.list.map((listItem, i) => (
                    <CheckItem key={i} text={listItem} delay={0.2 + i * 0.1} />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
