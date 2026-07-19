import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="w-full flex justify-center items-center py-6 md:py-8 px-4 md:px-8 font-sans">
      <div className="w-full max-w-[90rem] mx-auto flex flex-col gap-6 md:gap-8">
        
        {/* Header Section (Moved Outside) */}
        <div className="max-w-3xl text-left ml-5 md:ml-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#FD5800] mb-2 leading-[1.1]">
            Flexible solutions for every business model.
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-800 font-medium leading-relaxed max-w-2xl">
            Grow your business with a comprehensive set of payments and financial tools – designed to work individually or together.
          </p>
        </div>

        {/* Orange Border Container (Now solid orange background) */}
        <div className="w-full border-[2px] md:border-[3px] border-[#FD5800] rounded-[30px] md:rounded-[50px] px-6 md:px-12 lg:px-20 py-4 md:py-6 lg:py-8 flex flex-col gap-4 bg-[#FD5800]">
          
          {/* Inner Centered Container */}
          <div className="w-full flex flex-col flex-grow justify-center">          {/* Premium Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 w-full max-w-7xl mx-auto">
            
            {/* Brand Card - Tall Left Side (White & Crisp) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-1 md:row-span-2 bg-white rounded-3xl p-5 md:p-8 flex flex-col h-full border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#FD5800] hover:shadow-[0_10px_40px_-10px_rgba(253,88,0,0.2)] transition-all duration-500 group relative overflow-hidden">
              

              <div className="flex items-center gap-3 mb-3 relative z-10">
                <span className="w-4 h-4 rounded-full bg-[#FD5800] shadow-[0_0_10px_rgba(255,69,0,0.5)] group-hover:scale-125 transition-transform duration-500"></span>
                <h3 className="text-3xl lg:text-4xl font-black text-black tracking-tight">Brand</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                className="flex flex-col gap-2 md:gap-3 text-base lg:text-lg text-gray-700 font-medium mt-4 md:mt-6">
                {['Positioning', 'Identity', 'Packaging', 'Offer Strategy'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:text-[#FD5800] transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800] group-hover:scale-150 transition-transform"></span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Commerce Card - Top Right (White & Crisp) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-3xl p-5 md:p-8 flex flex-col h-full border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#FD5800] hover:shadow-[0_10px_40px_-10px_rgba(253,88,0,0.2)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              

              <div className="flex items-center gap-3 mb-3 relative z-10">
                <span className="w-4 h-4 rounded-full bg-[#FD5800] shadow-[0_0_10px_rgba(253,88,0,0.5)] group-hover:scale-125 transition-transform duration-500"></span>
                <h3 className="text-3xl lg:text-4xl font-black text-black tracking-tight">Commerce</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-base lg:text-lg text-gray-700 font-medium mt-auto pt-4 md:pt-6 relative z-10">
                {['Shopify', 'CRO', 'Landing Pages', 'Analytics', 'Automation'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:text-[#FD5800] transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800]/40 group-hover:bg-[#FD5800] group-hover:scale-150 transition-all"></span>{item}
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
              className="md:col-span-2 bg-white rounded-3xl p-5 md:p-8 flex flex-col h-full border border-gray-200 hover:border-[#FD5800] hover:shadow-[0_10px_40px_-10px_rgba(255,69,0,0.2)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              

              <div className="flex items-center gap-3 mb-3 relative z-10">
                <span className="w-4 h-4 rounded-full bg-[#FD5800] shadow-[0_0_10px_rgba(255,69,0,0.5)] group-hover:scale-125 transition-transform duration-500"></span>
                <h3 className="text-3xl lg:text-4xl font-black text-black tracking-tight">Growth</h3>
              </div>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-base lg:text-lg text-gray-700 font-medium mt-4 md:mt-6 relative z-10">
                {['Content', 'UGC', 'Creative Strategy', 'Performance Marketing', 'Retention'].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-2 cursor-pointer hover:translate-x-2 hover:text-[#FD5800] transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800]/40 group-hover:bg-[#FD5800] group-hover:scale-150 transition-all"></span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
