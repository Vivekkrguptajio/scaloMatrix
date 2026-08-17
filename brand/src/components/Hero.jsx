import { motion } from 'framer-motion'
import { FaArrowRight, FaStar } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-black px-6 pb-20 pt-32 lg:px-12">
      {/* Background glow effects - Colorful and Creative */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#FD5800]/20 to-purple-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-blue-600/20 to-pink-500/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start pr-4 relative z-20"
        >
          {/* Creative Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FD5800]/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <FaStar className="text-yellow-400 animate-spin-slow" size={12} />
            <span className="text-white/90 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">The New Standard</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] mb-8">
            <span className="text-white block mb-2">BUILD</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] via-orange-400 to-yellow-400 block mb-2 drop-shadow-lg">
              BRANDS.
            </span>
            <span className="text-white block mb-2 flex items-center gap-4">
              IGNITE <span className="text-3xl lg:text-5xl font-serif italic font-medium text-gray-400">ideas.</span>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 block drop-shadow-lg">
              GROWTH.
            </span>
          </h1>
          

          
          <button className="group flex items-center gap-4 bg-white hover:bg-[#FD5800] text-black hover:text-white font-extrabold text-sm md:text-base py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(253,88,0,0.4)] hover:shadow-[0_0_60px_rgba(253,88,0,0.6)]">
            Start The Evolution
            <div className="bg-black group-hover:bg-white text-white group-hover:text-[#FD5800] rounded-full p-2 flex items-center justify-center transition-colors duration-300 group-hover:translate-x-2">
              <FaArrowRight size={14} />
            </div>
          </button>
        </motion.div>

        {/* Right Column: Floating Cards (Sleek Dark Theme Layout) */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-[1000px]">
          
          {/* Card 1: Insight Sticky */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-[5%] left-[0%] bg-gradient-to-br from-[#111] to-black border border-white/10 p-5 rounded-2xl shadow-2xl w-[150px] min-h-[180px] z-30 flex flex-col justify-center backdrop-blur-xl group hover:border-purple-500/50 transition-colors"
          >
            <h3 className="font-serif italic font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 border-b border-white/10 pb-2 inline-block text-sm">Vision</h3>
            <p className="font-serif italic text-[14px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              People don't buy products. They buy better versions of themselves.
            </p>
          </motion.div>

          {/* Card 2: Growth Insights */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[2%] left-[26%] bg-black/80 border border-white/10 p-5 rounded-3xl shadow-2xl w-[55%] z-20 backdrop-blur-xl hover:border-[#FD5800]/50 transition-colors"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#FD5800] uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800] animate-pulse"></span>
              Live Metrics
            </h3>
            <div className="grid grid-cols-2 gap-y-5 gap-x-5">
              <div>
                <p className="text-[10px] text-gray-500 font-semibold mb-1 uppercase tracking-wider">Traffic</p>
                <p className="text-2xl font-black text-white mb-2">+62%</p>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#FD5800] to-yellow-400 w-[62%] rounded-full shadow-[0_0_10px_#FD5800]"></div></div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-semibold mb-1 uppercase tracking-wider">Engagement</p>
                <p className="text-2xl font-black text-white mb-2">+84%</p>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[84%] rounded-full shadow-[0_0_10px_#A855F7]"></div></div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-semibold mb-1 uppercase tracking-wider">Leads</p>
                <p className="text-2xl font-black text-white mb-2">+124%</p>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 w-[90%] rounded-full shadow-[0_0_10px_#3B82F6]"></div></div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-semibold mb-1 uppercase tracking-wider">Conversion</p>
                <p className="text-2xl font-black text-white mb-2">+45%</p>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 w-[45%] rounded-full shadow-[0_0_10px_#4ADE80]"></div></div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Brand Pillars */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-[8%] right-[-5%] bg-gradient-to-br from-[#FD5800] to-orange-600 p-5 rounded-2xl shadow-[0_0_30px_rgba(253,88,0,0.3)] w-[27%] text-white z-10"
          >
            <h3 className="text-[10px] font-bold tracking-widest uppercase mb-4 opacity-90 border-b border-white/20 pb-2">Pillars</h3>
            <ul className="text-[14px] font-bold space-y-3">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Clarity</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Creativity</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Culture</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> Scale</li>
            </ul>
          </motion.div>

          {/* Card 4: Strategy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-[48%] left-[0%] bg-[#050505] border border-white/10 p-5 rounded-2xl shadow-2xl w-[45%] text-white z-20 hover:border-blue-500/50 transition-colors"
          >
             <h3 className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-4">Framework</h3>
             <div className="flex flex-col gap-3">
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center justify-between">
                  <span className="font-bold text-xs tracking-wider">AWARENESS</span>
                  <span className="text-gray-400 text-[10px]">Top of Funnel</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center justify-between ml-4">
                  <span className="font-bold text-xs tracking-wider">ENGAGEMENT</span>
                  <span className="text-gray-400 text-[10px]">Mid Funnel</span>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-xl flex items-center justify-between ml-8">
                  <span className="font-bold text-xs tracking-wider text-blue-400">CONVERSION</span>
                  <span className="text-blue-400/70 text-[10px] font-bold">Bottom Funnel</span>
                </div>
             </div>
          </motion.div>

          {/* Card 5: Big Idea */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute top-[55%] right-[10%] bg-gradient-to-br from-white to-gray-200 p-6 rounded-2xl shadow-2xl w-[35%] text-black z-30"
          >
            <h3 className="font-serif italic font-bold text-lg mb-2 text-purple-600">The Secret</h3>
            <p className="font-black text-2xl leading-tight tracking-tight">
              Make growth feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-pink-600">inevitable.</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}