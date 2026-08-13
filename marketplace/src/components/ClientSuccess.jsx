import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  {
    id: 1,
    name: 'Albee Razak',
    role: 'Amazon Seller',
    market: 'US',
    marketLabel: 'Amazon US (US Market)',
    metric: '3.4x ROAS',
    highlight: '$140K+ Monthly Revenue',
    quote: 'The scaloMATRIX team completely transformed our ad structure. Our TACOS dropped to 11% while top line doubled.',
    tags: ['Sponsored Products', 'Keyword Isolation', 'Bid Automation'],
    color: 'from-orange-500/10 to-amber-500/5',
    borderColor: 'border-orange-500/30'
  },
  {
    id: 2,
    name: 'Shantanu',
    role: 'Amazon Seller',
    market: 'IN',
    marketLabel: 'Amazon India (IN Market)',
    metric: '42% Waste Cut',
    highlight: '#1 Best Seller Rank',
    quote: 'We were bleeding ad budget on non-converting search terms. Within 45 days, scaloMATRIX eliminated our wasted ad spend.',
    tags: ['ACoS Optimization', 'Organic Rank Push', 'Negative Targeting'],
    color: 'from-emerald-500/10 to-teal-500/5',
    borderColor: 'border-emerald-500/30'
  },
  {
    id: 3,
    name: 'Halsey',
    role: 'Amazon Brand Owner',
    market: 'US & UK',
    marketLabel: 'Amazon US & UK',
    metric: '240% Growth',
    highlight: 'Scaled 7-Figure Portfolio',
    quote: 'The level of reporting and transparent communication is unmatched. You are dealing with true Amazon ad scientists.',
    tags: ['Global Expansion', 'DSP Advertising', 'Video Ads'],
    color: 'from-blue-500/10 to-cyan-500/5',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 4,
    name: 'Saurabh Pandey',
    role: 'Amazon D2C Founder',
    market: 'IN & US',
    marketLabel: 'Global Market',
    metric: 'ACoS 38% → 14%',
    highlight: '3.8x Net Profit Boost',
    quote: 'Working 1-on-1 with scaloMATRIX gave us full clarity over our campaign analytics and keyword funnel.',
    tags: ['Coaching & Strategy', 'Full-Funnel Ads', 'Listing CRO'],
    color: 'from-purple-500/10 to-indigo-500/5',
    borderColor: 'border-purple-500/30'
  }
];

export default function ClientSuccess({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredClients = clients.filter(c => {
    if (activeFilter === 'ALL') return true;
    return c.market.includes(activeFilter);
  });

  return (
    <section id="case-studies" className="py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <span className="font-handwriting text-2xl text-[#FD5800] -rotate-2 font-bold block">
            Real Verified Performance Teardowns 📈
          </span>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD5800]/30 bg-orange-500/10 text-[#FD5800] font-bold text-xs uppercase tracking-wider">
            Verified Proof & Case Studies
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase leading-tight">
            What Success Looks Like for Our Clients
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We’re not freelancers or outsourced consultants. We’re a full-service Amazon advertising agency built for scale, speed, and results.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'ALL', label: 'All Regions' },
            { id: 'US', label: '🇺🇸 Amazon US' },
            { id: 'UK', label: '🇬🇧 Amazon UK' },
            { id: 'IN', label: '🇮🇳 Amazon India' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-[#FD5800] text-white shadow-md shadow-[#FD5800]/25 scale-105'
                  : 'bg-[#F8FAFC] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Client Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className={`bg-[#F8FAFC] border ${client.borderColor} rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#FD5800] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 leading-none">{client.name}</h3>
                        <p className="text-xs text-[#FD5800] font-semibold mt-1">{client.marketLabel}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono block">
                        {client.metric}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-semibold">
                        {client.highlight}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base italic mb-6 leading-relaxed bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs group-hover:border-[#FD5800]/30 transition-colors">
                    "{client.quote}"
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                    {client.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white text-gray-700 border border-gray-300 shadow-2xs">
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
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenModal('strategy')}
            className="px-8 py-4 rounded-full bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-base shadow-xl shadow-[#FD5800]/20 transition-all inline-flex items-center gap-2 group"
          >
            <span>Want Results Like These? Schedule Strategy Call</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
