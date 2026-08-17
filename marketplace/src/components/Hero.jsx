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
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-black text-white">
      {/* Background Ambient Glows & Noise Accent - Colorful! */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#FD5800]/20 via-purple-600/20 to-transparent rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/20 via-pink-600/20 to-transparent rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-[#FD5800] animate-pulse"></span>
                <span className="text-white/90 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase">High-Performance Amazon Scaling</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-white">
              Helping Amazon Sellers Build{' '}
              <span className="relative inline-block mt-2 mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] via-orange-400 to-yellow-400 drop-shadow-lg">
                  Profitable & Scalable
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#FD5800]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>{' '}
              <br className="hidden lg:block" />
              <span className="font-serif italic font-medium text-gray-400">Businesses with PPC</span>
            </h1>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenModal('strategy')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FD5800] to-orange-500 text-white font-black text-xs sm:text-sm shadow-[0_0_30px_rgba(253,88,0,0.4)] hover:shadow-[0_0_50px_rgba(253,88,0,0.6)] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book a free strategy session</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenModal('audit')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Request Free PPC Audit</span>
              </motion.button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-md group">
                <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">100+</p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">Stores Optimized</p>
              </div>
              <div className="p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-md group">
                <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-yellow-400">$10M+</p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">Ad Spend</p>
              </div>
              <div className="p-2 sm:p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-md group">
                <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">95%</p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">Retention</p>
              </div>
            </div>

          </div>

          {/* Right Interactive Card / Amazon PPC Calculator */}
          <div className="lg:col-span-5 relative max-w-[420px] mx-auto lg:mr-auto lg:ml-8 w-full mt-12 lg:mt-0">
            
            {/* Handwriting annotation arrow */}
            <div className="hidden lg:block absolute -top-8 -left-12 z-20 pointer-events-none">
              <span className="font-handwriting text-base text-yellow-400 rotate-[-15deg] block font-bold drop-shadow-md">
                Try live calculator! ↴
              </span>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-[#0A0A0A]/90 backdrop-blur-3xl border border-white/10 rounded-[24px] p-5 sm:p-7 shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative overflow-hidden text-white group/card"
            >


              <h3 className="text-lg font-bold text-white mb-1">
                Calculate Wasted Spend & Profit
              </h3>
              <p className="text-[11px] text-gray-400 mb-6 font-medium">
                Drag the slider to your current monthly Amazon PPC spend:
              </p>

              {/* Slider Input */}
              <div className="space-y-4 mb-6 bg-black/40 p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold">
                  <span className="text-gray-400">Monthly Ad Spend:</span>
                  <span className="text-white text-lg font-mono font-bold">₹{adSpend.toLocaleString('en-IN')} / mo</span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={50000}
                  step={1000}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FD5800]"
                />
                <div className="flex justify-between text-[9px] text-gray-500 font-mono font-medium">
                  <span>₹3,000/mo</span>
                  <span>₹25,000/mo</span>
                  <span>₹50,000+/mo</span>
                </div>
              </div>

              {/* Visual ROAS Growth Chart Bar Comparison */}
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 mb-6 space-y-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-500 block border-b border-white/5 pb-2">
                  ROAS Benchmark Comparison
                </span>
                
                <div className="space-y-4 pt-1">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-medium text-gray-400">
                      <span>Before scaloMATRIX</span>
                      <span className="font-mono text-gray-500">{roasBefore}x ROAS</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-600 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-bold text-white">
                      <span>With scaloMATRIX</span>
                      <span className="font-mono text-[#FD5800]">{roasAfter}x ROAS</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: '0%' }}
                        animate={{ width: `${Math.min(95, (roasAfter / 5) * 100)}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-[#FD5800] rounded-full shadow-[0_0_8px_rgba(253,88,0,0.5)]" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Metrics Display */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-black/40 border border-white/5 rounded-xl p-3 sm:p-4 group-hover/card:border-white/10 transition-colors">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest block font-bold mb-1">
                    Wasted Spend Cut
                  </span>
                  <span className="text-xl font-bold text-white font-mono">
                    ~₹{wastedSavings.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[9px] text-gray-500 font-medium block mt-1">/ month saved</span>
                </div>

                <div className="bg-[#FD5800]/5 border border-[#FD5800]/20 rounded-xl p-3 sm:p-4 group-hover/card:border-[#FD5800]/40 transition-colors">
                  <span className="text-[9px] text-[#FD5800] uppercase tracking-widest block font-bold mb-1">
                    Est. Profit Boost
                  </span>
                  <span className="text-xl font-bold text-[#FD5800] font-mono">
                    +₹{netProfitGrowth.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[9px] text-orange-700/60 font-medium block mt-1">/ month profit</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenModal('audit')}
                className="w-full py-3.5 rounded-xl bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition-all duration-300 text-center shadow-lg shadow-[#FD5800]/20"
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
