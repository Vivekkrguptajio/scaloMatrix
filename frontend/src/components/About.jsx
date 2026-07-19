import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="w-full flex justify-center items-center p-4 md:p-6 font-sans">
      {/* Orange Border Container (Now solid orange background) */}
      <div className="w-full border-[2px] md:border-[3px] border-[#FF4500] rounded-[30px] md:rounded-[50px] p-3 md:p-6 lg:p-6 flex flex-col gap-2 md:gap-4 bg-[#FF4500]">
        
        {/* Inner Centered Container */}
        <div className="max-w-5xl w-full mx-auto flex flex-col gap-2 lg:gap-4 flex-grow justify-center">
          
          {/* Header Section */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white mb-1 leading-[1.1]">
              Flexible solutions for every business model.
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white font-medium leading-relaxed max-w-2xl">
              Grow your business with a comprehensive set of payments and financial tools – designed to work individually or together.
            </p>
          </div>

          {/* Premium Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 w-full max-w-4xl mx-auto">
            
            {/* Brand Card - Top Left (White & Crisp) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-3xl p-4 md:p-5 flex flex-col h-full border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#FF4500] hover:shadow-[0_10px_40px_-10px_rgba(255,69,0,0.2)] transition-all duration-500 group relative overflow-hidden">
              

              <div className="flex items-center gap-3 mb-3 relative z-10">
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm lg:text-base text-gray-700 font-medium mt-4">
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
              className="md:col-span-1 md:row-span-2 bg-[#111111] rounded-3xl p-4 md:p-5 flex flex-col border border-black hover:border-gray-700 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4500] opacity-10 blur-[50px] rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
              

              <div className="flex items-center gap-3 mb-3 relative z-10">
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
                className="flex flex-col gap-2 text-sm lg:text-base text-gray-300 font-medium mt-auto relative z-10">
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

            {/* Growth Card - Bottom Left (White & Crisp) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-3xl p-4 md:p-5 flex flex-col h-full border border-gray-200 hover:border-[#FF4500] hover:shadow-[0_10px_40px_-10px_rgba(255,69,0,0.2)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              

              <div className="flex items-center gap-3 mb-3 relative z-10">
                <span className="w-4 h-4 rounded-full bg-[#FF4500] shadow-[0_0_10px_rgba(255,69,0,0.5)] group-hover:scale-125 transition-transform duration-500"></span>
                <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight">Growth</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm lg:text-base text-gray-700 font-medium mt-4 relative z-10">
                {['Content', 'UGC', 'Creative Strategy', 'Performance Marketing', 'Retention'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:text-[#FF4500] transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500]/40 group-hover:bg-[#FF4500] group-hover:scale-150 transition-all"></span>{item}
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
