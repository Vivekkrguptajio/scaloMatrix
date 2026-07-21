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
      className="flex items-center gap-3 group/item cursor-default"
    >
      <div className="w-5 h-5 rounded-full bg-[#FD5800]/10 flex items-center justify-center group-hover/item:bg-[#FD5800] group-hover/item:shadow-[0_0_12px_rgba(253,88,0,0.3)] transition-all duration-300 shrink-0">
        <svg className="w-3 h-3 text-[#FD5800] group-hover/item:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-600 font-semibold group-hover/item:text-gray-900 transition-colors duration-300 text-[15px]">{text}</span>
    </motion.li>
  )
}

function BrandVisual() {
  return (
    <div className="w-full h-40 sm:h-48 rounded-2xl mb-4 relative overflow-hidden group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center shadow-[0_8px_30px_rgba(236,72,153,0.3)]">
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    </div>
  )
}

function CommerceVisual() {
  return (
    <div className="w-full md:w-56 h-32 md:h-full min-h-[120px] rounded-2xl relative overflow-hidden group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0 flex items-center justify-center shadow-[0_8px_30px_rgba(59,130,246,0.3)]">
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    </div>
  )
}

function GrowthVisual() {
  return (
    <div className="w-full md:w-56 h-32 md:h-full min-h-[120px] rounded-2xl relative overflow-hidden group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-br from-amber-400 to-orange-500 shrink-0 flex items-center justify-center shadow-[0_8px_30px_rgba(245,158,11,0.3)]">
      <svg className="w-16 h-16 sm:w-20 sm:h-20 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
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
      
      {/* ─── Background Ambient Magic ─── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FD5800]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-20 relative z-10">
        
        {/* ─── Header Section ─── */}
        <div className="w-full max-w-7xl mx-auto text-center flex flex-col items-center gap-10 mb-3">
          
          {/* SVG Icons Row */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-row flex-wrap items-center justify-center gap-16 sm:gap-20 md:gap-28 lg:gap-[120px] px-2"
          >
            {approachIcons.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative group opacity-80 hover:opacity-100 transition-opacity duration-300 w-24 h-24 flex items-center justify-center">
                
                {/* Tooltip */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-gray-100 text-sm font-medium text-[#FD5800] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10 translate-y-2 group-hover:translate-y-0">
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

            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight text-[#111827] leading-[1.2] whitespace-nowrap"
          >
            Flexible solutions for <span className="text-[#FD5800]">every business model.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg lg:text-[20px] text-[#6B7280] font-medium leading-relaxed max-w-3xl mt-1"
          >
            Grow your business with a comprehensive set of strategy, commerce, and<br />
            growth tools – designed to work individually or together.
          </motion.p>
        </div>

        {/* ─── Premium Glass Wrapper with Orange Glow ─── */}
        <div className="relative z-10 w-full p-6 md:p-8 lg:p-10 rounded-[48px] border border-[#FD5800]/30 bg-gradient-to-br from-[#FD5800]/15 via-[#FD5800]/10 to-[#FD5800]/5 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(253,88,0,0.15)] overflow-hidden">
          {/* Inner Highlight Line for that extra premium Apple-like finish */}
          <div className="absolute inset-0 rounded-[48px] border border-white/60 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5 w-full relative z-10">
            
            {/* ════ BRAND CARD ════ */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-white rounded-[32px] p-5 lg:p-6 flex flex-col border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(236,72,153,0.15)] hover:border-fuchsia-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle top gradient glow on hover */}
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[32px] pointer-events-none"></div>

              <BrandVisual />
              
              <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-fuchsia-600 transition-colors relative z-10">Brand</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-4 text-sm lg:text-[15px] relative z-10">Build a lasting legacy and connect deeply with your audience through powerful storytelling.</p>

              <ul className="flex flex-col gap-2 mt-auto relative z-10">
                {['Brand Strategy', 'Visual Identity', 'Packaging Design', 'UI/UX Experience', 'Messaging & Voice'].map((item, idx) => (
                  <CheckItem key={idx} text={item} delay={0.2 + idx * 0.1} />
                ))}
              </ul>
            </motion.div>

            {/* ════ COMMERCE CARD ════ */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white rounded-[32px] p-5 lg:p-6 flex flex-col md:flex-row gap-4 lg:gap-5 justify-between items-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle top gradient glow on hover */}
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[32px] pointer-events-none"></div>

              <div className="flex flex-col flex-1 w-full relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Commerce</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm lg:text-[15px] mb-4 max-w-sm">Scale your revenue seamlessly with high-converting, lightning-fast storefronts.</p>
                
                <ul className="flex flex-col gap-2 mt-auto">
                  {['Shopify Plus Development', 'Conversion Rate (CRO)', 'Custom Landing Pages'].map((item, idx) => (
                    <CheckItem key={idx} text={item} delay={0.3 + idx * 0.1} />
                  ))}
                </ul>
              </div>
              <CommerceVisual />
            </motion.div>

            {/* ════ GROWTH CARD ════ */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white rounded-[32px] p-5 lg:p-6 flex flex-col md:flex-row gap-4 lg:gap-5 justify-between items-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-12px_rgba(245,158,11,0.15)] hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle top gradient glow on hover */}
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[32px] pointer-events-none"></div>

              <div className="flex flex-col flex-1 w-full relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-orange-500 transition-colors">Growth</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm lg:text-[15px] mb-4 max-w-sm">Accelerate your market presence and acquire high-LTV customers worldwide.</p>
                
                <ul className="flex flex-col gap-2 mt-auto">
                  {['Performance Marketing', 'UGC & Creators', 'SEO, SEM & Retention'].map((item, idx) => (
                    <CheckItem key={idx} text={item} delay={0.4 + idx * 0.1} />
                  ))}
                </ul>
              </div>
              <GrowthVisual />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
