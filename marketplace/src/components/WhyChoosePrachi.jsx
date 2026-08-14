import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    num: '01',
    category: 'team',
    metric: '15+ Experts',
    desc: 'Specialized account strategists, ad analysts & reporting experts for fast-growing brands.',
    btnText: 'Explore Team',
    bg: 'bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]', // Vibrant Electric Blue
    badge: 'Unified Support'
  },
  {
    num: '02',
    category: 'global',
    metric: '3 Markets',
    desc: 'Proven ad funnels and scaling strategies across US, UK & India marketplaces.',
    btnText: 'View Regions',
    bg: 'bg-gradient-to-br from-[#10B981] via-[#059669] to-[#047857]', // Vibrant Emerald Green
    badge: 'Cross-Border'
  },
  {
    num: '03',
    category: 'data',
    metric: '0% Guesswork',
    desc: 'Precision bid optimization, search term waste elimination, and transparent weekly ROI.',
    btnText: 'See Analytics',
    bg: 'bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]', // Vibrant Electric Purple
    badge: 'ROAS Focus'
  },
  {
    num: '04',
    category: 'mastery',
    metric: '10+ Years',
    desc: 'Led by senior Amazon advertising specialists trusted by over 100+ global sellers.',
    btnText: 'Book Strategy',
    bg: 'bg-gradient-to-br from-[#FF5722] via-[#FD5800] to-[#C2410C]', // Vibrant Signature Orange
    badge: 'Senior Led'
  }
];

export default function WhyChoosePrachi({ onOpenModal }) {
  return (
    <section className="py-12 md:py-8 md:py-10 bg-white text-gray-900 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="font-handwriting text-2xl text-[#FD5800] -rotate-2 font-bold block">
            Built for Speed, Scale & ROAS 🏆
          </span>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD5800]/30 bg-orange-500/10 text-[#FD5800] font-bold text-xs uppercase tracking-wider">
            Agency Difference
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase leading-tight">
            Why Amazon Sellers Choose <span className="text-[#FD5800]">scalo</span>MATRIX
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We’re not freelancers or outsourced consultants. We’re a full-service Amazon advertising agency built for scale, speed, and results.
          </p>
        </div>

        {/* 4 Cards with distinct colors, rotating fan element, and wider chunky dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cardData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`${item.bg} rounded-[32px] p-8 sm:p-9 text-white relative overflow-hidden shadow-2xl border-2 border-white/20 flex flex-col justify-between min-h-[460px] group`}
            >
              {/* Rotating Fan / Propeller Geometric Watermark Element */}
              <div className="absolute -top-12 -right-12 pointer-events-none select-none opacity-20 group-hover:opacity-30 transition-opacity">
                <svg className="w-64 h-64 text-black animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100" fill="currentColor">
                  {/* Rotating Fan Blades */}
                  <path d="M50 50 L50 5 L62 25 Z" />
                  <path d="M50 50 L95 50 L75 62 Z" />
                  <path d="M50 50 L50 95 L38 75 Z" />
                  <path d="M50 50 L5 50 L25 38 Z" />
                  <path d="M50 50 L82 18 L70 38 Z" />
                  <path d="M50 50 L82 82 L62 70 Z" />
                  <path d="M50 50 L18 82 L30 62 Z" />
                  <path d="M50 50 L18 18 L38 30 Z" />
                  <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="6" />
                </svg>
              </div>

              {/* Bottom Secondary Rotating Fan Accent */}
              <div className="absolute -bottom-16 -left-16 pointer-events-none select-none opacity-15">
                <svg className="w-56 h-56 text-black animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </div>

              {/* Card Content Top */}
              <div className="relative z-10">
                {/* Category Header */}
                <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white lowercase mb-6">
                  {item.category}
                </h3>

                {/* Big Metric Highlight */}
                <div className="space-y-1 mb-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/90 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25">
                    {item.badge}
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight pt-1">
                    {item.metric}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom White Pill Button */}
              <div className="relative z-10 pt-6 mt-4">
                <button
                  onClick={() => onOpenModal('strategy')}
                  className="w-full py-4 px-5 bg-white hover:bg-gray-100 text-gray-900 rounded-2xl font-black text-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-2.5 group-hover:shadow-2xl"
                >
                  <span>{item.btnText}</span>
                  <svg className="w-4 h-4 text-gray-900 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Action Banner Strip */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/30 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-2xl font-black text-gray-900">Ready to stop burning ad budget?</h4>
            <p className="text-gray-600 text-sm mt-1 font-medium">Get a comprehensive account audit & customized growth plan within 24 hours.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenModal('audit')}
            className="whitespace-nowrap px-8 py-4 rounded-full bg-[#FD5800] hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FD5800]/25 transition-all"
          >
            Claim Free Account Audit
          </motion.button>
        </div>

      </div>
    </section>
  );
}
