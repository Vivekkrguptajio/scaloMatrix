import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  {
    id: 1,
    name: 'Albee Razak',
    market: 'US',
    marketLabel: 'Amazon US',
    metric: '3.4x',
    metricLabel: 'ROAS',
    highlight: '$140K+ Monthly Revenue',
    quote: 'The scaloMATRIX team completely transformed our ad structure. Our TACOS dropped to 11% while top line doubled.',
    tags: ['Sponsored Products', 'Keyword Isolation', 'Bid Automation'],
    accent: 'from-[#FD5800] to-orange-400'
  },
  {
    id: 2,
    name: 'Shantanu',
    market: 'IN',
    marketLabel: 'Amazon India',
    metric: '42%',
    metricLabel: 'Waste Cut',
    highlight: '#1 Best Seller Rank',
    quote: 'We were bleeding ad budget on non-converting search terms. Within 45 days, scaloMATRIX eliminated our wasted ad spend.',
    tags: ['ACoS Optimization', 'Organic Rank Push', 'Negative Targeting'],
    accent: 'from-emerald-500 to-teal-400'
  },
  {
    id: 3,
    name: 'Halsey',
    market: 'US & UK',
    marketLabel: 'Amazon US & UK',
    metric: '240%',
    metricLabel: 'Growth',
    highlight: 'Scaled 7-Figure Portfolio',
    quote: 'The level of reporting and transparent communication is unmatched. You are dealing with true Amazon ad scientists.',
    tags: ['Global Expansion', 'DSP Advertising', 'Video Ads'],
    accent: 'from-blue-500 to-cyan-400'
  },
  {
    id: 4,
    name: 'Saurabh Pandey',
    market: 'IN & US',
    marketLabel: 'Global Market',
    metric: '38%→14%',
    metricLabel: 'ACoS Drop',
    highlight: '3.8x Net Profit Boost',
    quote: 'Working 1-on-1 with scaloMATRIX gave us full clarity over our campaign analytics and keyword funnel.',
    tags: ['Coaching & Strategy', 'Full-Funnel Ads', 'Listing CRO'],
    accent: 'from-purple-500 to-pink-500'
  }
];

export default function ClientSuccess({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredClients = clients.filter(c => {
    if (activeFilter === 'ALL') return true;
    return c.market.includes(activeFilter);
  });

  return (
    <section id="case-studies" className="py-24 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FD5800]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#FD5800]"></span>
              <span className="text-[#FD5800] font-mono text-xs font-bold tracking-[0.2em] uppercase">Proven Performance</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Impact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Outcomes.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              We engineer scalable growth architectures for ambitious Amazon brands. No fluff, just data-driven profitability.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ALL', label: 'All Regions' },
              { id: 'US', label: 'US Market' },
              { id: 'UK', label: 'UK Market' },
              { id: 'IN', label: 'India Market' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-[#FD5800] text-white shadow-[0_0_20px_rgba(253,88,0,0.3)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Client Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0A0A0A] border border-white/10 rounded-[24px] p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className={`absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br ${client.accent} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`} />

                <div className="flex flex-col h-full justify-between relative z-10">
                  
                  {/* Top Section */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-lg text-white group-hover:scale-105 transition-transform">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">{client.name}</h3>
                        <p className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-wider">{client.marketLabel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Main Metric */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3">
                      <span className={`text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${client.accent} tracking-tighter`}>
                        {client.metric}
                      </span>
                      <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">{client.metricLabel}</span>
                    </div>
                    <span className="inline-block mt-3 px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-gray-300 uppercase tracking-widest">
                      {client.highlight}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-white/10 pl-5 mb-8">
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      "{client.quote}"
                    </p>
                  </blockquote>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {client.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenModal('strategy')}
            className="px-8 py-4 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-3"
          >
            <span>View detailed case studies</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
