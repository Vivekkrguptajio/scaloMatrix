import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-white flex justify-center items-center p-4 md:p-8 font-sans">
      {/* Orange Border Container (Thinner) */}
      <div className="w-full min-h-[90vh] border-[2px] md:border-[3px] border-[#FF4500] rounded-[30px] md:rounded-[50px] p-8 md:p-14 lg:p-20 flex flex-col gap-12 bg-white/50 backdrop-blur-sm">
        
        {/* Inner Centered Container */}
        <div className="max-w-5xl w-full mx-auto flex flex-col gap-10 lg:gap-12 flex-grow justify-center">
          
          {/* Header Section */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#101828] mb-4 leading-[1.1]">
              Flexible solutions for every business model.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-[#4A4A4A] font-medium leading-relaxed max-w-2xl">
              Grow your business with a comprehensive set of payments and financial tools – designed to work individually or together.
            </p>
          </div>

          {/* Premium Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            
            {/* Brand Card - Top Left (White & Crisp) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 flex flex-col border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#FF4500] hover:shadow-[0_10px_40px_-10px_rgba(255,69,0,0.2)] transition-all duration-500 group relative overflow-hidden">
              
              {/* Figure / Graphic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute right-0 bottom-0 w-48 h-48 sm:w-64 sm:h-64 opacity-5 pointer-events-none group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="0.5" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </motion.div>

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <span className="w-4 h-4 rounded-full bg-[#FF4500] shadow-[0_0_10px_rgba(255,69,0,0.5)] group-hover:scale-125 transition-transform duration-500"></span>
                <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight">Brand</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm lg:text-base text-gray-700 font-medium mt-6">
                {['Positioning', 'Identity', 'Packaging', 'Offer Strategy'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:text-[#FF4500] transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] group-hover:scale-150 transition-transform"></span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Commerce Card - Tall Right side (Deep Black & Sleek) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-1 md:row-span-2 bg-[#111111] rounded-3xl p-6 md:p-8 flex flex-col border border-black hover:border-gray-700 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4500] opacity-10 blur-[50px] rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Figure / Graphic */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute right-[-20%] top-[30%] w-64 h-64 opacity-[0.03] group-hover:opacity-[0.08] group-hover:translate-x-[-10%] transition-all duration-700 pointer-events-none"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </motion.div>

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <span className="w-4 h-4 rounded-full bg-[#FF4500] shadow-[0_0_15px_rgba(255,69,0,0.6)] group-hover:scale-125 transition-transform duration-500"></span>
                <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight">Commerce</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                }}
                className="flex flex-col gap-4 text-sm lg:text-base text-gray-300 font-medium mt-auto relative z-10">
                {['Shopify', 'CRO', 'Landing Pages', 'Analytics', 'Automation'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-3 hover:text-white transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover:bg-white transition-colors group-hover:scale-150 transform"></span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Growth Card - Bottom Left (Vibrant Orange & Energetic) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#FF4500] rounded-3xl p-6 md:p-8 flex flex-col min-h-[200px] border border-[#FF5722] hover:shadow-[0_15px_40px_-10px_rgba(255,69,0,0.6)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Figure / Graphic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute right-0 bottom-0 w-48 h-48 sm:w-56 sm:h-56 opacity-10 pointer-events-none group-hover:opacity-20 group-hover:translate-y-[-10px] transition-all duration-700"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="0.5" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </motion.div>

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <span className="w-4 h-4 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.3)] group-hover:scale-125 transition-transform duration-500"></span>
                <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight">Growth</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm lg:text-base text-white/90 font-medium mt-6 relative z-10">
                {['Content', 'UGC', 'Creative Strategy', 'Performance Marketing', 'Retention'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:text-black transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all"></span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
