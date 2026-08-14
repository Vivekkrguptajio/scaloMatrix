import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenModal }) {
  const [adSpend, setAdSpend] = useState(15000);

  // Dynamic calculations based on spend
  const wastedSavings = Math.round(adSpend * 0.34);
  const roasBefore = 1.8;
  const roasAfter = (3.4 + (adSpend / 25000) * 0.6).toFixed(1);
  const netProfitGrowth = Math.round(wastedSavings * 2.6);

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#FFF9F5] text-orange-950">
      {/* Background Ambient Glows & Noise Accent */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(253,88,0,0.12)_0%,transparent_70%)] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(253,88,0,0.1)_0%,transparent_70%)] rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFE4D6_1px,transparent_1px),linear-gradient(to_bottom,#FFE4D6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Top Badge with Handwriting Note */}
            <div>
              <span className="font-handwriting text-lg sm:text-xl text-[#FD5800] -rotate-2 inline-block font-bold">
                ✨ High-Performance Amazon Scaling
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.15] text-orange-950">
              Helping Amazon Sellers Build{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] via-orange-500 to-amber-500">
                  Profitable & Scalable
                </span>
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#FD5800]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              Businesses with PPC
            </h1>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenModal('strategy')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-sm shadow-lg shadow-[#FD5800]/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book a free strategy session</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenModal('audit')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white hover:bg-orange-50 border border-orange-200 text-orange-950 font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Request Free PPC Audit</span>
              </motion.button>
            </div>

            {/* Trust Badges Bar with Hover Animation */}
            <div className="pt-6 border-t border-orange-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-2 rounded-2xl hover:bg-orange-50 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-orange-950">100+</p>
                <p className="text-xs text-orange-800/70 font-semibold mt-0.5">Stores Optimized</p>
              </div>
              <div className="p-2 rounded-2xl hover:bg-orange-100/50 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-[#FD5800]">$10M+</p>
                <p className="text-xs text-orange-800/70 font-semibold mt-0.5">Ad Spend Managed</p>
              </div>
              <div className="p-2 rounded-2xl hover:bg-emerald-50/50 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-emerald-600">95%</p>
                <p className="text-xs text-orange-800/70 font-semibold mt-0.5">Client Retention</p>
              </div>
            </div>

          </div>

          {/* Right Interactive Card / Amazon PPC Calculator (Compact Size) */}
          <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full">
            
            {/* Handwriting annotation arrow */}
            <div className="hidden lg:block absolute -top-8 -left-10 z-20 pointer-events-none">
              <span className="font-handwriting text-lg text-[#FD5800] rotate-[12deg] block font-bold">
                Try live spend calculator! ↴
              </span>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-orange-200/60 rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(253,88,0,0.06)] relative overflow-hidden text-orange-950"
            >
              {/* Card Top Pill Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-orange-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FD5800] animate-ping" />
                  <span className="text-[11px] font-bold text-[#FD5800] uppercase tracking-wider">
                    Live ROAS Simulator
                  </span>
                </div>
                <span className="text-[10px] text-orange-400 font-mono">scaloMATRIX Engine</span>
              </div>

              <h3 className="text-lg font-bold text-orange-950 mb-1">
                Calculate Wasted Spend & Profit Gain
              </h3>
              <p className="text-[11px] text-orange-800/60 mb-4">
                Drag the slider to your current monthly Amazon PPC spend:
              </p>

              {/* Slider Input */}
              <div className="space-y-2 mb-4 bg-orange-50/50 p-3 rounded-xl border border-orange-100 shadow-sm">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-orange-900">Monthly Ad Spend:</span>
                  <span className="text-[#FD5800] text-lg font-mono">${adSpend.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={50000}
                  step={1000}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-[#FD5800]"
                />
                <div className="flex justify-between text-[9px] text-orange-800/50 font-mono">
                  <span>$3,000/mo</span>
                  <span>$25,000/mo</span>
                  <span>$50,000+/mo</span>
                </div>
              </div>

              {/* Visual ROAS Growth Chart Bar Comparison */}
              <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-3 mb-4 shadow-sm space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-800/70 block">
                  ROAS Benchmark Comparison
                </span>
                
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-medium text-orange-900">
                      <span>Before scaloMATRIX</span>
                      <span className="font-mono text-orange-800/70">{roasBefore}x ROAS</span>
                    </div>
                    <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-300 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold text-[#FD5800]">
                      <span>With scaloMATRIX</span>
                      <span className="font-mono text-emerald-600 font-extrabold">{roasAfter}x ROAS</span>
                    </div>
                    <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: '0%' }}
                        animate={{ width: `${Math.min(95, (roasAfter / 5) * 100)}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#FD5800] to-emerald-500 rounded-full" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Metrics Display */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-3 shadow-sm">
                  <span className="text-[10px] text-orange-800/70 uppercase tracking-wider block font-semibold">
                    Wasted Spend Cut
                  </span>
                  <span className="text-xl font-black text-[#FD5800] font-mono">
                    ~${wastedSavings.toLocaleString()}
                  </span>
                  <span className="text-[9px] text-orange-800/50 block mt-0.5">/ month saved</span>
                </div>

                <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-3 shadow-sm">
                  <span className="text-[10px] text-orange-800/70 uppercase tracking-wider block font-semibold">
                    Est. Profit Boost
                  </span>
                  <span className="text-xl font-black text-emerald-600 font-mono">
                    +${netProfitGrowth.toLocaleString()}
                  </span>
                  <span className="text-[9px] text-orange-800/50 block mt-0.5">/ month profit</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenModal('audit')}
                className="w-full py-3 rounded-xl bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-xs transition-all duration-300 text-center shadow-md shadow-[#FD5800]/20"
              >
                Get Free Customized Audit Report →
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
