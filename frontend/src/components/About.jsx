import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-[#FAFAFA] overflow-hidden font-sans">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FD5800]/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FD5800]/5 to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 md:gap-16 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 leading-[1.1]"
          >
            Flexible solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#ff8c42]">
              every business model.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm md:text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl"
          >
            Grow your business with a comprehensive set of strategy, commerce, and growth tools – designed to work individually or together.
          </motion.p>
        </div>

        {/* Premium Bento Grid */}
        <div className="w-full bg-gradient-to-br from-[#ff7a29] via-[#FD5800] to-[#e64a00] rounded-[30px] md:rounded-[40px] p-4 md:p-6 lg:p-8 flex flex-col justify-center shadow-[0_20px_50px_rgba(253,88,0,0.3)] border border-[#ff8c42]/30 relative overflow-hidden">
          {/* Subtle top glare for 3D effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full relative z-10">
          
          {/* Brand - Tall Left */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-2 bg-white rounded-[32px] p-6 lg:p-8 flex flex-col border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:border-[#FD5800]/20 hover:shadow-[0_30px_60px_-12px_rgba(253,88,0,0.12)] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FD5800]/5 to-transparent rounded-full blur-[40px] group-hover:from-[#FD5800]/10 transition-colors duration-700 pointer-events-none"></div>
            
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FD5800] to-[#ff7a29] flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(253,88,0,0.3)] group-hover:scale-110 transition-transform duration-500">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3 tracking-tight">Brand</h3>
            <p className="text-gray-500 font-medium leading-relaxed mb-8 text-sm lg:text-base">Build a lasting legacy and connect deeply with your audience.</p>

            <ul className="flex flex-col gap-5 mt-auto">
              {['Brand Strategy', 'Visual Identity', 'Packaging Design', 'UI/UX Experience', 'Messaging & Voice'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover/item:bg-[#FD5800] transition-colors duration-300 shadow-sm border border-gray-100 group-hover/item:border-[#FD5800]">
                    <svg className="w-3 h-3 text-gray-400 group-hover/item:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold group-hover/item:text-[#FD5800] group-hover/item:translate-x-1 transition-all duration-300 text-sm lg:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Commerce - Top Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-[32px] p-6 lg:p-8 flex flex-col md:flex-row gap-6 lg:gap-10 justify-between border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:border-[#FD5800]/20 hover:shadow-[0_30px_60px_-12px_rgba(253,88,0,0.12)] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="flex flex-col max-w-sm relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-6 group-hover:bg-[#FD5800] transition-colors duration-500 shadow-sm">
                <svg className="w-6 h-6 text-[#FD5800] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3 tracking-tight">Commerce</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm lg:text-base">Scale your revenue seamlessly with high-converting, lightning-fast storefronts.</p>
            </div>

            <ul className="flex flex-col justify-center gap-5 relative z-10 flex-grow">
              {['Shopify Plus Development', 'Conversion Rate (CRO)', 'Custom Landing Pages', 'Headless Architecture'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover/item:bg-[#FD5800] transition-colors duration-300 shadow-sm border border-gray-100 group-hover/item:border-[#FD5800]">
                    <svg className="w-3 h-3 text-gray-400 group-hover/item:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold group-hover/item:text-[#FD5800] group-hover/item:translate-x-1 transition-all duration-300 text-sm lg:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Growth - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-[32px] p-6 lg:p-8 flex flex-col md:flex-row gap-6 lg:gap-10 justify-between border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:border-[#FD5800]/20 hover:shadow-[0_30px_60px_-12px_rgba(253,88,0,0.12)] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="flex flex-col max-w-sm relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF5F0] flex items-center justify-center mb-6 group-hover:bg-[#FD5800] transition-colors duration-500 shadow-sm">
                <svg className="w-6 h-6 text-[#FD5800] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3 tracking-tight">Growth</h3>
              <p className="text-gray-500 font-medium leading-relaxed text-sm lg:text-base">Accelerate your market presence and acquire high-LTV customers worldwide.</p>
            </div>

            <ul className="flex flex-col justify-center gap-5 relative z-10 flex-grow">
              {['Content & Creative Strategy', 'UGC Creators & Influencers', 'Performance Marketing', 'SEO, SEM & Email Retention'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group/item cursor-pointer">
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover/item:bg-[#FD5800] transition-colors duration-300 shadow-sm border border-gray-100 group-hover/item:border-[#FD5800]">
                    <svg className="w-3 h-3 text-gray-400 group-hover/item:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold group-hover/item:text-[#FD5800] group-hover/item:translate-x-1 transition-all duration-300 text-sm lg:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
