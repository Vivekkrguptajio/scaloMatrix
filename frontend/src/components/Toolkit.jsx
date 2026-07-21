import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Fashion Brands',
    description: 'Crafting immersive digital experiences and high-converting storefronts that reflect your unique aesthetic and style.',
    icon: (
      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: 'from-fuchsia-500 to-pink-500',
    shadow: 'shadow-pink-500/40',
    glow: 'from-pink-500/10 to-transparent',
    linkColor: 'text-pink-500'
  },
  {
    name: 'Beauty',
    description: 'Designing elegant, high-performance platforms that build trust and drive conversions for premium beauty products.',
    icon: (
      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: 'from-rose-500 to-red-500',
    shadow: 'shadow-rose-500/40',
    glow: 'from-rose-500/10 to-transparent',
    linkColor: 'text-rose-500'
  },
  {
    name: 'Lifestyle',
    description: 'Creating lifestyle-focused digital touchpoints that connect with audiences on a deeper, more personal level.',
    icon: (
      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: 'from-amber-400 to-orange-500',
    shadow: 'shadow-orange-500/40',
    glow: 'from-orange-500/10 to-transparent',
    linkColor: 'text-orange-500'
  },
  {
    name: 'Premium D2C',
    description: 'Scaling direct-to-consumer brands with data-driven design, seamless user journeys, and robust technical foundations.',
    icon: (
      <svg className="w-7 h-7 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-blue-500/40',
    glow: 'from-blue-500/10 to-transparent',
    linkColor: 'text-blue-500'
  }
];

export default function Toolkit() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 md:py-32 overflow-hidden border-t border-gray-100 font-sans relative">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FD5800]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-8 mb-16 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold tracking-tight text-[#111827] leading-[1.2]">
          Who We <span className="text-[#FD5800]">Work With</span>
        </h2>
        <p className="text-base md:text-lg text-gray-500 font-medium mt-4 max-w-2xl mx-auto">
          Partnering with ambitious brands across various industries to drive growth, innovation, and digital excellence.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-white rounded-[32px] p-8 lg:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle top gradient glow on hover */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[32px] pointer-events-none`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg ${item.shadow} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10`}>
                {item.icon}
              </div>
              
              <h3 className="font-extrabold text-2xl text-gray-900 mb-4 tracking-tight relative z-10 group-hover:text-gray-950 transition-colors">
                {item.name}
              </h3>
              
              <p className="text-gray-500 font-medium leading-relaxed text-[15px] relative z-10">
                {item.description}
              </p>

              {/* Arrow Indicator - ALWAYS VISIBLE NOW */}
              <div className={`mt-auto pt-8 flex items-center gap-2 text-sm font-bold ${item.linkColor} relative z-10`}>
                Explore Expertise
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
