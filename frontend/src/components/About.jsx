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
    <div className="w-full h-40 sm:h-48 bg-gray-50 rounded-2xl mb-6 relative overflow-hidden group-hover:bg-[#FFF5F0]/30 transition-colors duration-500 border border-gray-100/50">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Pulsing rings */}
        <motion.div 
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-16 h-16 bg-[#FD5800]/30 rounded-full"
        />
        {/* Rotating outer dash */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 border-[2px] border-dashed border-gray-300 rounded-full group-hover:border-[#FD5800]/40 transition-colors duration-500"
        />
        {/* Inner floating box */}
        <motion.div 
          animate={{ y: [-4, 4, -4], rotate: [12, 12, 12] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center rotate-12 group-hover:shadow-[0_8px_30px_rgba(253,88,0,0.2)] group-hover:border-[#FD5800]/30 transition-all duration-500 relative z-10"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 bg-gradient-to-br from-[#FD5800] to-[#ff8c42] rounded-full shadow-[0_0_15px_rgba(253,88,0,0.4)]"
          />
        </motion.div>
      </div>
    </div>
  )
}

function CommerceVisual() {
  const heights = [35, 55, 40, 80, 65, 100];
  return (
    <div className="w-full md:w-56 h-32 md:h-full min-h-[120px] bg-gray-50 rounded-2xl relative overflow-hidden group-hover:bg-[#FFF5F0]/30 transition-colors duration-500 border border-gray-100/50 flex items-end justify-center gap-2 p-4 shrink-0">
      {heights.map((height, i) => (
        <motion.div
          key={i}
          animate={{ height: [`${height * 0.6}%`, `${height}%`, `${height * 0.6}%`] }}
          transition={{ duration: 2 + (i % 3) * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          className={`w-6 rounded-t-lg relative z-10 ${i === 5 ? 'bg-gradient-to-t from-[#FD5800] to-[#ff8c42] shadow-[0_0_20px_rgba(253,88,0,0.4)]' : 'bg-gray-200 group-hover:bg-gray-300 transition-colors duration-500'}`}
        />
      ))}
    </div>
  )
}

function GrowthVisual() {
  return (
    <div className="w-full md:w-56 h-32 md:h-full min-h-[120px] bg-gray-50 rounded-2xl relative overflow-hidden group-hover:bg-[#FFF5F0]/30 transition-colors duration-500 border border-gray-100/50 flex items-center justify-center shrink-0">
      <div className="relative flex items-center justify-center w-full px-6">
        
        {/* Trailing dots indicating growth trajectory */}
        <div className="flex gap-2 absolute left-8 top-1/2 mt-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 15, 0], y: [0, -10, 0], opacity: [0.1, 0.8, 0.1] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-[#FD5800]/40"
            />
          ))}
        </div>

        {/* Flying Arrow */}
        <motion.div 
          animate={{ x: [-5, 10, -5], y: [5, -10, 5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#FD5800]/20 z-10 ml-auto mr-4 group-hover:shadow-[0_10px_30px_rgba(253,88,0,0.2)] transition-all duration-500"
        >
          <svg className="w-7 h-7 text-[#FD5800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 px-4 md:px-8 bg-[#FAFAFA] font-sans">
      
      {/* ─── Background Ambient Magic ─── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FD5800]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-20 relative z-10">
        
        {/* ─── Header Section ─── */}
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center gap-4 mb-3">
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
              className="md:col-span-2 md:row-span-2 bg-white rounded-[32px] p-6 lg:p-7 flex flex-col border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-12px_rgba(253,88,0,0.12)] hover:border-[#FD5800]/30 transition-all duration-500 group relative overflow-hidden"
            >
              <BrandVisual />
              
              <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Brand</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-5 text-sm lg:text-[15px]">Build a lasting legacy and connect deeply with your audience through powerful storytelling.</p>

              <ul className="flex flex-col gap-2.5 mt-auto relative z-10">
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
              className="md:col-span-3 bg-white rounded-[32px] p-6 lg:p-7 flex flex-col md:flex-row gap-6 lg:gap-8 justify-between items-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-12px_rgba(253,88,0,0.12)] hover:border-[#FD5800]/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex flex-col flex-1 w-full relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Commerce</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm lg:text-[15px] mb-5 max-w-sm">Scale your revenue seamlessly with high-converting, lightning-fast storefronts.</p>
                
                <ul className="flex flex-col gap-2.5 mt-auto">
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
              className="md:col-span-3 bg-white rounded-[32px] p-6 lg:p-7 flex flex-col md:flex-row gap-6 lg:gap-8 justify-between items-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-12px_rgba(253,88,0,0.12)] hover:border-[#FD5800]/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="flex flex-col flex-1 w-full relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Growth</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm lg:text-[15px] mb-5 max-w-sm">Accelerate your market presence and acquire high-LTV customers worldwide.</p>
                
                <ul className="flex flex-col gap-2.5 mt-auto">
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
