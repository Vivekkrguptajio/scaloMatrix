import React from 'react';

export default function AboutPrachi({ onOpenModal }) {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] text-gray-900 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white p-8 shadow-xl">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#FD5800] via-orange-500 to-amber-500 p-1 shadow-lg shadow-[#FD5800]/20">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center font-black text-2xl text-[#FD5800]">
                    SM
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900">
                    <span className="text-[#FD5800]">scalo</span>MATRIX
                  </h3>
                  <p className="text-sm font-semibold text-[#FD5800]">Amazon PPC Principal Agency</p>
                  <p className="text-xs text-gray-500 mt-0.5">10+ Years Managing Amazon Ad Funnels</p>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-xs text-gray-700">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span>Certified Marketplaces:</span>
                  <span className="text-gray-900 font-bold">US, UK, IN, EU, CA</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span>Specialization:</span>
                  <span className="text-[#FD5800] font-bold">PPC Architecture & TACOS Reduction</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Execution Style:</span>
                  <span className="text-emerald-600 font-bold">100% Data-Driven (No Guesswork)</span>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-center">
                <p className="text-xs font-bold text-gray-800">
                  "Advertising is not about spending more — it's about eliminating waste and commanding premium rank."
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD5800]/30 bg-orange-500/10 text-[#FD5800] font-bold text-xs uppercase tracking-wider">
              WHO WE ARE, REALLY?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              <span className="text-[#FD5800]">scalo</span>MATRIX — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-amber-500">
                Trusted Amazon Advertising Agency
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Over the last 10+ years, our team has helped Amazon sellers across the US, UK, and India scale their stores with strategic advertising that’s backed by data — not guesswork. From first-time sellers to 7-figure brands, our senior strategists work directly with clients to improve ROI, rank better, and sell smarter.
            </p>

            {/* 4 Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-[#FD5800] block font-mono">100+</span>
                <span className="text-xs text-gray-500 font-semibold mt-1 block uppercase tracking-wider">
                  Stores Optimized
                </span>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-emerald-600 block font-mono">$10M+</span>
                <span className="text-xs text-gray-500 font-semibold mt-1 block uppercase tracking-wider">
                  Ad Spend Managed
                </span>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-[#FD5800] block font-mono">5+</span>
                <span className="text-xs text-gray-500 font-semibold mt-1 block uppercase tracking-wider">
                  Countries Client Base
                </span>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-emerald-600 block font-mono">95%</span>
                <span className="text-xs text-gray-500 font-semibold mt-1 block uppercase tracking-wider">
                  Client Retention
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenModal('strategy')}
                className="px-8 py-4 rounded-full bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-[#FD5800]/25 transition-all inline-flex items-center gap-2"
              >
                <span>Work With Our Senior PPC Team</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
