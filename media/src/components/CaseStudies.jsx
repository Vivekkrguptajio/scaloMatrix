import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const caseStudies = [
  {
    brand: 'Happydent',
    category: 'Social Media',
    image: '/images/68b69b5022644c08e48b9405_Happydent.jpg',
    result: '4.2x ROAS',
  },
  {
    brand: 'Mentos',
    category: 'Content Production',
    image: '/images/68e4b82d7c62d5759deaecd4_Mentos%2520website.jpg',
    result: '2.8M Reach',
  },
  {
    brand: 'TATA Capital',
    category: 'Campaign Strategy',
    image: '/images/6a22d3c2280604b61b881a82_TATA%2520capital%2520women%2527s%2520day%2520cover.jpg',
    result: '320% Growth',
  },
  {
    brand: 'Motor Launch',
    category: 'Performance Marketing',
    image: '/images/669f9fbcc3481015e0e2112f_MOTOR.png',
    result: '5.1x ROAS',
  },
  {
    brand: 'Brand Cards',
    category: 'Digital Strategy',
    image: '/images/669fa0f361c519d7bc7b7084_cards.png',
    result: '180% CTR lift',
  },
  {
    brand: 'Mian Launch',
    category: 'Influencer Campaign',
    image: '/images/6a75d1097b618207b8a68fe3_MIAN-JULY-THUMBNAIL%2520(1).png',
    result: '1.2M Views',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#FD5800] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800]" />
              Case Studies
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              The receipts{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">speak louder.</span>
            </h2>
            <p className="text-white/40 text-base md:text-lg max-w-md leading-relaxed font-medium">
              Real campaigns. Real numbers. Every case study is a brand that trusted us to deliver — and we did.
            </p>
          </motion.div>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {/* Image */}
              <img 
                src={cs.image} 
                alt={cs.brand}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Category Tag */}
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-wider uppercase">
                  {cs.category}
                </span>
              </div>

              {/* Result Badge */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="px-4 py-2 bg-[#FD5800] rounded-full text-white text-sm font-black tracking-wide shadow-[0_0_30px_rgba(253,88,0,0.5)]">
                  {cs.result}
                </span>
              </div>
              
              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#FD5800] transition-colors duration-300">
                  {cs.brand}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <span>View Case Study</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
