import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center py-16 md:py-24 bg-[#0a0a0a] font-sans overflow-hidden border-b-[4px] border-[#FD5800] rounded-b-[40px] md:rounded-b-[80px]">
      
      {/* ─── Background Ambient Waves ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FD5800]/[0.1] to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FD5800]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Header */}
          <div className="lg:sticky lg:top-40 h-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-white"
            >
              Got questions? <br />
              <span className="text-[#FD5800]">We have answers.</span>
            </motion.h2>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-1 pt-4 lg:pt-0 max-h-[70vh] overflow-y-auto pr-2 md:pr-4" data-lenis-prevent="true" style={{ scrollbarWidth: 'thin', scrollbarColor: '#FD5800 transparent' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="border-b border-white/10 pb-3"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center py-4 md:py-5 text-left focus:outline-none group"
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#FD5800]' : 'text-white group-hover:text-[#FD5800]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`ml-4 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#FD5800] text-[#FD5800] rotate-45' : 'border-white/20 text-gray-400 group-hover:border-[#FD5800] group-hover:text-[#FD5800]'}`}>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed pb-6 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}
