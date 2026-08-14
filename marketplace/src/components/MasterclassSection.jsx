import React, { useState } from 'react';
import { motion } from 'framer-motion';

const chapters = [
  { time: '02:15', title: 'Finding & Eliminating Search Term Waste' },
  { time: '14:30', title: 'Top-of-Search Bid Architecture Strategy' },
  { time: '28:10', title: 'TACOS Reduction & Profitability Balancing' },
  { time: '39:45', title: 'Live Amazon Account Teardown Case Study' },
];

export default function MasterclassSection({ onOpenModal }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="masterclass" className="py-12 md:py-8 md:py-10 bg-[#F8FAFC] text-gray-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-handwriting text-2xl text-[#FD5800] -rotate-2 font-bold block">
              Free 45-Min Agency Breakdown 🎬
            </span>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD5800]/30 bg-orange-500/10 text-[#FD5800] font-bold text-xs uppercase tracking-wider">
              Free Access Masterclass
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight uppercase leading-tight">
              Advanced Amazon Ads Masterclass <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-orange-500">
                (scaloMATRIX Edition)
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Learn how our agency scales Amazon stores using the exact PPC frameworks we use for 6- and 7-figure clients.
            </p>

            {/* Chapters list */}
            <div className="space-y-3 pt-2 bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                Video Chapters Covered:
              </span>
              {chapters.map((chap, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-gray-100 last:border-0">
                  <span className="text-gray-800 font-semibold">{chap.title}</span>
                  <span className="font-mono text-[#FD5800] bg-orange-50 px-2 py-0.5 rounded border border-orange-200 font-bold">
                    {chap.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenModal('strategy')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-[#FD5800]/25 transition-all text-center"
              >
                Book a free strategy session
              </motion.button>

              <a
                href="https://www.youtube.com/@scalomatrix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 fill-current text-red-600" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                </svg>
                <span>Watch Latest Video on YouTube</span>
              </a>
            </div>
          </div>

          {/* Right Video Mockup */}
          <div className="lg:col-span-6">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white p-2 shadow-2xl group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
                
                {!isPlaying ? (
                  <>
                    {/* Thumbnail graphic */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-[#FD5800] font-mono text-xs font-bold uppercase tracking-widest mb-2">
                        scaloMATRIX Masterclass
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-black text-white max-w-md">
                        Amazon Ads Scaling Framework 2026
                      </h4>
                      <p className="text-xs text-gray-400 mt-2">Duration: 45 Mins • High Value Teardown</p>
                    </div>

                    {/* Play button */}
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="relative z-10 w-20 h-20 rounded-full bg-[#FD5800] text-white flex items-center justify-center shadow-2xl shadow-[#FD5800]/50 transition-transform"
                    >
                      <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.button>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Amazon Ads Masterclass"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
