import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How fast will we see a drop in our ACoS and wasted spend?",
    a: "Within the first 7 to 14 days, our diagnostic audit and negative-keyword quarantine immediately cuts bleeders and non-converting search terms. Most clients see an instant 20% to 35% reduction in wasted spend within the first month, followed by top-line revenue expansion."
  },
  {
    q: "Do you require long-term lock-in contracts?",
    a: "No. We believe in earning our seat at the table every single month through clear performance and weekly transparent reporting. We work on a rolling monthly agreement with zero restrictive lock-ins."
  },
  {
    q: "What Amazon marketplaces do you manage?",
    a: "We actively manage and scale ad accounts across Amazon US, Amazon UK, Amazon India, Canada, Germany, and UAE. Our team understands regional bidding behaviors, seasonality trends, and currency dynamics."
  },
  {
    q: "How is scaloMATRIX different from automated PPC software?",
    a: "Automated software relies on blind algorithms that can bid on irrelevant search terms and waste capital during out-of-stock periods. At scaloMATRIX, you get dedicated senior PPC strategists who combine custom proprietary bid scripts with human strategic nuance, listing conversion optimization, and competitor analysis."
  },
  {
    q: "What monthly ad spend do you typically manage?",
    a: "We work with brands spending anywhere from $3,000/mo to $100,000+/mo on Amazon PPC. Whether you're an established 7-figure category leader or a fast-scaling challenger brand, we calibrate our strategy to your exact margin profile."
  },
  {
    q: "How often will we receive reports and communicate with the team?",
    a: "You receive weekly video walkthrough reports detailing performance, spend, ACoS, and TACOS trends, plus direct Slack/WhatsApp channel access to your dedicated senior account team for real-time strategy adjustments."
  }
];

export default function MarketplaceFaq({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-900 text-xs font-bold tracking-[0.2em] uppercase rounded border border-gray-200">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight leading-[1.1]">
            Frequently Asked <span className="font-semibold text-[#FD5800]">Questions</span>
          </h2>
          <p className="text-gray-900 text-base max-w-xl mx-auto font-normal leading-relaxed">
            Everything you need to know about partnering with scaloMATRIX to scale your Amazon store profitably.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#FD5800] bg-gray-50/50 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#FD5800] text-white rotate-180' : 'bg-gray-100 text-gray-900'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-gray-900 text-sm leading-relaxed border-t border-gray-100 pt-4 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-900 font-normal">
            Have a unique question not listed here?{' '}
            <button
              onClick={() => onOpenModal('strategy')}
              className="text-[#FD5800] font-bold underline hover:opacity-80 transition-opacity"
            >
              Ask our team directly
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
