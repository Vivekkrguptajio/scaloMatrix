import { motion } from 'framer-motion'

export default function ThePromise() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white font-sans overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(253,88,0,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-[#FD5800]/15 text-[#FD5800] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800]" />
            The Promise
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight mb-8 leading-[1.1] text-gray-900"
        >
          Pages that earn their keep
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">
            {' '}— or we keep working.
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          We build every campaign to beat your current one by at least
          20%. If it doesn't, we don't disappear — we keep iterating.
          That's the deal, in writing.
        </motion.p>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center gap-3 bg-[#FD5800] text-white font-bold py-4 px-10 rounded-full border border-transparent hover:bg-white hover:text-gray-900 hover:border-gray-900 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(253,88,0,0.4)] hover:shadow-xl text-lg"
          >
            Request your audit
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
        
        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {['Reply within 24 hours', 'Free teardown if it\'s a fit', 'No pitch on call one'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <svg className="w-4 h-4 text-[#FD5800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
