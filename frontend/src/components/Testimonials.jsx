import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Working with scaloMATRIX was a game-changer. They completely transformed our brand identity and helped us 10x our organic traffic in just 6 months.",
    name: "Sarah Jenkins",
    role: "CMO, TechNova",
    rating: 5,
  },
  {
    id: 2,
    quote: "Their attention to detail and strategic approach is unmatched. The web app they built for us not only looks stunning but performs flawlessly under heavy load.",
    name: "David Chen",
    role: "Founder, ScaleUp SaaS",
    rating: 5,
  },
  {
    id: 3,
    quote: "We hired them for a complete rebrand. What we got was a masterclass in modern digital strategy. I highly recommend Ranjeet and his incredible team.",
    name: "Elena Rodriguez",
    role: "VP of Growth, FinEdge",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Don't just take <br />
              <span className="text-gray-400">our word for it.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 font-medium max-w-sm"
          >
            We've partnered with industry leaders to deliver digital experiences that drive real, measurable results.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group relative bg-white p-8 md:p-10 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_-12px_rgba(253,88,0,0.15)] hover:border-[#FD5800]/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Giant Background Quote Mark */}
              <span className="absolute top-0 right-6 text-[140px] leading-none font-serif text-[#FD5800]/[0.04] group-hover:text-[#FD5800]/10 transition-colors duration-500 select-none pointer-events-none font-black">
                "
              </span>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1.5 mb-8">
                  {[...Array(t.rating)].map((_, idx) => (
                    <motion.svg 
                      key={idx} 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="w-5 h-5 text-[#FD5800] drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
                      style={{ transitionDelay: `${idx * 50}ms` }} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                
                {/* Elegant Quote Text */}
                <p className="text-[17px] md:text-[19px] font-sans font-medium leading-[1.6] text-gray-600 group-hover:text-gray-900 transition-colors mb-12 relative z-10">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-gray-100 group-hover:border-[#FD5800]/20 transition-colors">
                {/* Gradient Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FD5800] to-[#FF9066] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[17px] tracking-tight">{t.name}</h4>
                  <p className="text-sm font-bold text-[#FD5800]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
