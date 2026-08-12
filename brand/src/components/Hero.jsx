import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#714AF0] via-[#C933C7] to-[#F1556C] px-6 pb-20 pt-32 lg:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start pr-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[1.05] mb-6">
            <span className="text-white block">ALL THINGS</span>
            <span className="text-[#D4FF00] block">BRAND.</span>
            <span className="text-[#D4FF00] block">CONTENT.</span>
            <span className="text-[#D4FF00] block">GROWTH.</span>
          </h1>
          
          <p className="text-white/95 text-base md:text-lg max-w-xl leading-relaxed mb-5 font-medium">
            We help ambitious brands find clarity, create content people care about, and build systems that drive growth.
          </p>
          
          <p className="text-white/90 text-sm md:text-base mb-8 font-medium">
            Your fractional <span className="text-[#D4FF00] font-bold">CMO</span> for strategy, storytelling, and scale.
          </p>
          
          <button className="group flex items-center gap-3 bg-[#D4FF00] hover:bg-[#b8e833] text-black font-extrabold text-sm md:text-base py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#D4FF00]/20">
            Let's Build Something Beyond
            <div className="bg-black text-[#D4FF00] rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={12} />
            </div>
          </button>
        </motion.div>

        {/* Right Column: Floating Cards (Ditto Cluster Layout) */}
        <div className="relative h-[600px] w-full hidden lg:block">
          
          {/* Card 1: Insight Sticky */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-[5%] left-[0%] bg-[#FCF7D4] p-4 xl:p-5 rounded-md shadow-2xl shadow-black/30 w-[130px] xl:w-[150px] min-h-[160px] xl:min-h-[180px] z-30 flex flex-col justify-center"
          >
            <h3 className="font-serif italic font-bold mb-2 text-gray-800 border-b border-gray-400 pb-1 inline-block text-xs xl:text-sm">Insight</h3>
            <p className="font-serif italic text-[12px] xl:text-[14px] text-gray-800 leading-snug">
              People don't just buy products. They buy better versions of themselves.
            </p>
          </motion.div>

          {/* Card 2: Growth Insights */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[2%] left-[22%] bg-[#D4FF00] p-4 xl:p-5 rounded-3xl shadow-2xl shadow-black/30 w-[52%] xl:w-[55%] z-20"
          >
            <h3 className="text-[10px] xl:text-xs font-bold tracking-widest text-black/70 uppercase mb-3 xl:mb-4">Growth Insights</h3>
            <div className="grid grid-cols-2 gap-y-4 xl:gap-y-5 gap-x-4 xl:gap-x-5">
              <div>
                <p className="text-[9px] xl:text-[10px] text-black/70 font-semibold mb-0.5">Website Traffic</p>
                <p className="text-xl xl:text-2xl font-black mb-1">+62%</p>
                <div className="h-1 bg-black/10 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[62%] rounded-full"></div></div>
                <p className="text-[8px] xl:text-[9px] text-black/50 mt-1">vs last 30 days</p>
              </div>
              <div>
                <p className="text-[9px] xl:text-[10px] text-black/70 font-semibold mb-0.5">Engagement Rate</p>
                <p className="text-xl xl:text-2xl font-black mb-1">+48%</p>
                <div className="h-1 bg-black/10 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[48%] rounded-full"></div></div>
                <p className="text-[8px] xl:text-[9px] text-black/50 mt-1">vs last 30 days</p>
              </div>
              <div>
                <p className="text-[9px] xl:text-[10px] text-black/70 font-semibold mb-0.5">Leads Generated</p>
                <p className="text-xl xl:text-2xl font-black mb-1">+73%</p>
                <div className="h-1 bg-black/10 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[73%] rounded-full"></div></div>
                <p className="text-[8px] xl:text-[9px] text-black/50 mt-1">vs last 30 days</p>
              </div>
              <div>
                <p className="text-[9px] xl:text-[10px] text-black/70 font-semibold mb-0.5">Conversion Rate</p>
                <p className="text-xl xl:text-2xl font-black mb-1">+35%</p>
                <div className="h-1 bg-black/10 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[35%] rounded-full"></div></div>
                <p className="text-[8px] xl:text-[9px] text-black/50 mt-1">vs last 30 days</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Brand Pillars */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-[6%] right-[-4%] bg-[#FF6633] p-4 xl:p-5 rounded-2xl shadow-2xl shadow-black/30 w-[25%] xl:w-[27%] text-white z-10"
          >
            <h3 className="text-[9px] xl:text-[10px] font-bold tracking-widest uppercase mb-3 xl:mb-4 opacity-90 border-b border-white/20 pb-2">Brand Pillars</h3>
            <ul className="text-[12px] xl:text-[14px] font-semibold space-y-2 xl:space-y-3">
              <li className="border-b border-white/20 pb-2">Clarity</li>
              <li className="border-b border-white/20 pb-2">Creativity</li>
              <li className="border-b border-white/20 pb-2">Connection</li>
              <li>Growth</li>
            </ul>
          </motion.div>

          {/* Card 4: Target Audience */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute top-[42%] left-[0%] bg-[#4D66FF] p-4 xl:p-5 rounded-2xl shadow-2xl shadow-black/30 w-[30%] xl:w-[28%] text-white z-30"
          >
            <h3 className="text-[9px] font-bold tracking-widest uppercase text-[#D4FF00] mb-2 xl:mb-3">Target Audience</h3>
            <ul className="text-xs xl:text-sm font-medium space-y-2 xl:space-y-2.5">
              <li>Ambitious</li>
              <li>Values inspiration</li>
              <li>Seeks quality</li>
              <li>Digital-first</li>
            </ul>
          </motion.div>

          {/* Card 5: Content Strategy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-[44%] left-[28%] bg-white p-4 xl:p-5 rounded-2xl shadow-2xl shadow-black/30 w-[52%] xl:w-[50%] text-black z-20"
          >
             <h3 className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mb-2 xl:mb-3">Content Strategy</h3>
             <div className="grid grid-cols-4 gap-1.5 xl:gap-2 text-[8px] xl:text-[9px]">
                <div className="border-r border-gray-100 pr-1">
                  <p className="font-bold text-gray-800 mb-1">AWARENESS</p>
                  <p className="text-gray-500 mb-1.5 leading-tight">Educate<br/>Inspire</p>
                  <div className="bg-[#FCF7D4] p-1 xl:p-1.5 rounded font-serif italic border border-yellow-200 text-gray-700 font-medium">Thought Leadership</div>
                </div>
                <div className="border-r border-gray-100 pr-1 pl-0.5">
                  <p className="font-bold text-gray-800 mb-1">CONSIDERATION</p>
                  <p className="text-gray-500 mb-1.5 leading-tight">Engage<br/>Build Trust</p>
                  <div className="bg-[#FCF7D4] p-1 xl:p-1.5 rounded font-serif italic border border-yellow-200 text-gray-700 font-medium">Case Studies</div>
                </div>
                <div className="border-r border-gray-100 pr-1 pl-0.5">
                  <p className="font-bold text-gray-800 mb-1">CONVERSION</p>
                  <p className="text-gray-500 mb-1.5 leading-tight">Convert<br/>Nurture</p>
                  <div className="bg-[#FCF7D4] p-1 xl:p-1.5 rounded font-serif italic border border-yellow-200 text-gray-700 font-medium">Testimonials</div>
                </div>
                <div className="pl-0.5">
                  <p className="font-bold text-gray-800 mb-1">LOYALTY</p>
                  <p className="text-gray-500 mb-1.5 leading-tight">Retain<br/>Advocate</p>
                  <div className="bg-[#FCF7D4] p-1 xl:p-1.5 rounded font-serif italic border border-yellow-200 text-gray-700 font-medium">Community</div>
                </div>
             </div>
          </motion.div>

          {/* Card 6: Big Idea */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute top-[50%] right-[0%] bg-[#FF3385] p-4 xl:p-5 rounded-md shadow-2xl shadow-black/30 w-[22%] xl:w-[24%] text-white z-30"
          >
            <h3 className="font-serif italic font-bold text-sm xl:text-base mb-1.5 border-b border-white/30 pb-1 inline-block">Big Idea</h3>
            <p className="font-serif italic text-[12px] xl:text-[14px] leading-snug">
              Make growth feel personal.
            </p>
          </motion.div>

          {/* Card 7: Colour Palette */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-[2%] left-[25%] bg-white p-3 xl:p-3.5 rounded-2xl shadow-2xl shadow-black/30 w-[50%] xl:w-[45%] z-40"
          >
            <h3 className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mb-2 text-center">Colour Palette</h3>
            <div className="flex justify-center gap-2 xl:gap-2.5">
              <div className="w-8 xl:w-10 h-7 xl:h-8 rounded-lg bg-[#4D66FF] shadow-inner"></div>
              <div className="w-8 xl:w-10 h-7 xl:h-8 rounded-lg bg-[#FF3385] shadow-inner"></div>
              <div className="w-8 xl:w-10 h-7 xl:h-8 rounded-lg bg-[#D4FF00] shadow-inner"></div>
              <div className="w-8 xl:w-10 h-7 xl:h-8 rounded-lg bg-[#FF6633] shadow-inner"></div>
              <div className="w-8 xl:w-10 h-7 xl:h-8 rounded-lg bg-[#111111] shadow-inner"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}