import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    description: 'We deep-dive into your current campaigns, analytics, and competitive landscape. No guesswork — just data.',
    highlight: 'Week 1',
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    description: 'Custom media plans with channel mix, budget allocation, audience segmentation, and KPI frameworks — all before we spend a rupee.',
    highlight: 'Week 2',
  },
  {
    num: '03',
    title: 'Creative Production',
    description: 'Scroll-stopping ad creatives, video assets, and landing pages — tested and iterated for maximum performance in the feed.',
    highlight: 'Week 2-3',
  },
  {
    num: '04',
    title: 'Launch & Optimize',
    description: 'Go live with precision targeting. Daily monitoring, bid optimization, creative testing, and budget pacing in real-time.',
    highlight: 'Week 3+',
  },
  {
    num: '05',
    title: 'Scale & Report',
    description: 'Double down on winners, cut losers. Monthly performance reviews with actionable insights and clear growth roadmaps.',
    highlight: 'Ongoing',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-[#FD5800]/15 text-[#FD5800] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800]" />
              How We Work
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-[1.1]"
          >
            A process built{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">for velocity.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed"
          >
            From discovery to scale — our battle-tested workflow gets campaigns live faster and performing harder.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[#FD5800]/30 via-[#FD5800]/10 to-transparent" />
          
          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-10 group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center group-hover:border-[#FD5800] group-hover:bg-[#FD5800] transition-all duration-500 shadow-sm group-hover:shadow-[0_0_30px_rgba(253,88,0,0.2)]">
                    <span className="text-lg md:text-2xl font-black text-gray-300 group-hover:text-white transition-colors duration-500 font-sans">{step.num}</span>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 pb-8 md:pb-10 border-b border-gray-100 group-last:border-b-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-[#FD5800] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-[15px] md:text-base max-w-xl">
                        {step.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-gray-400 tracking-wider uppercase whitespace-nowrap group-hover:bg-[#FD5800]/5 group-hover:border-[#FD5800]/20 group-hover:text-[#FD5800] transition-all duration-300">
                      {step.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}