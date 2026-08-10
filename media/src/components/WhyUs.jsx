import { motion } from 'framer-motion'

const whyItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Speed to Market',
    stat: '72h',
    statLabel: 'avg campaign launch time',
    description: 'While others are still in "discovery," we\'re already running ads. Our streamlined process gets campaigns live faster.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Data-First Approach',
    stat: '100%',
    statLabel: 'decisions backed by data',
    description: 'Every rupee is tracked. Every decision is data-backed. We don\'t do "brand awareness" without metrics.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'No Juniors on Accounts',
    stat: '8yr+',
    statLabel: 'avg team experience',
    description: 'Your account is handled by senior strategists who\'ve scaled 100+ brands. No training on your budget.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Growth Guarantee',
    stat: '20%+',
    statLabel: 'performance improvement',
    description: 'If we don\'t beat your current performance by 20%, we keep iterating — at no extra cost. That\'s our promise.',
  },
]

export default function WhyUs() {
  return (
    <section id="cro" className="relative py-24 md:py-32 px-6 bg-[#fafafa] overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-[#FD5800]/15 text-[#FD5800] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800]" />
                Why scaloMATRIX
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]"
            >
              Not another{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">agency pitch.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed font-medium"
          >
            We're a team of media strategists who've scaled 100+ brands. Here's why top companies choose us.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-white border border-gray-100 hover:border-[#FD5800]/20 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(253,88,0,0.1)]"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left: Icon + Stat */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6 md:min-w-[120px]">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#FD5800] group-hover:text-white group-hover:border-[#FD5800] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-3xl md:text-4xl font-black text-[#FD5800] tracking-tight">{item.stat}</span>
                    <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mt-0.5">{item.statLabel}</p>
                  </div>
                </div>
                
                {/* Right: Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#FD5800] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
