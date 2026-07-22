import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How do you blend creativity with technology?",
    answer: "We believe magic happens at the intersection of art and code. Our award-winning creatives work hand-in-hand with our engineering team from day one. This ensures every bold idea is not just visually stunning, but technically robust and infinitely scalable."
  },
  {
    question: "What is your approach to brand transformation?",
    answer: "We don't just refresh logos; we engineer holistic brand experiences. By diving deep into consumer insights and cultural trends, we build immersive digital ecosystems that drive real business growth and leave a lasting cultural legacy."
  },
  {
    question: "How long does it take to see tangible results?",
    answer: "While our rapid prototyping allows us to launch impactful campaigns within weeks, true transformation is a journey. We focus on quick wins to generate immediate ROI, while laying the robust groundwork for sustainable, long-term market dominance."
  },
  {
    question: "Do you collaborate with in-house marketing teams?",
    answer: "Absolutely. We view ourselves as a seamless extension of your team. Whether you need us to take the reins completely or co-create alongside your internal experts, our agile pods adapt to your unique workflow to maximize impact."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Header */}
          <div className="lg:sticky lg:top-40 h-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6"
            >
              Got questions? <br />
              <span className="text-gray-300">We have answers.</span>
            </motion.h2>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4 pt-4 lg:pt-0">
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

      </div>
    </section>
  );
}
