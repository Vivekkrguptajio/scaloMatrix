import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What makes your agency different?",
    answer: "We don't just build websites; we build scalable digital businesses. Our approach combines data-driven strategy, award-winning design, and robust engineering to ensure every project delivers a massive ROI."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard website redesign takes 4-6 weeks from discovery to launch. For complex web applications or full brand identity systems, timelines typically range from 8-12 weeks. We move fast without ever compromising on quality."
  },
  {
    question: "What is your pricing model?",
    answer: "We work on a project-based or retainer model depending on your needs. Minimum engagements start at $5,000. Every project is uniquely scoped after an initial discovery call to ensure you only pay for exactly what you need to scale."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We view launch as the starting line, not the finish line. We offer monthly growth and maintenance retainers to ensure your product remains secure, fast, and continuously optimized for conversions."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] font-sans border-t border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6"
          >
            Got questions? <br />
            <span className="text-gray-300">We have answers.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="border-b border-gray-200 pb-4"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#FD5800]' : 'text-gray-900 group-hover:text-[#FD5800]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`ml-4 flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#FD5800] text-[#FD5800] rotate-45' : 'border-gray-300 text-gray-400 group-hover:border-[#FD5800] group-hover:text-[#FD5800]'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed pb-8 pr-12">
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
    </section>
  );
}
