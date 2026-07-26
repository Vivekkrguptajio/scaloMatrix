import { motion } from 'framer-motion'

const industries = [
  {
    num: '01',
    name: 'Fashion Brands',
    description: 'Crafting immersive digital experiences and high-converting storefronts that reflect your unique aesthetic and style.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    hoverColor: 'bg-pink-600',
  },
  {
    num: '02',
    name: 'Beauty',
    description: 'Designing elegant, high-performance platforms that build trust and drive conversions for premium beauty products.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    hoverColor: 'bg-rose-600',
  },
  {
    num: '03',
    name: 'Lifestyle',
    description: 'Creating lifestyle-focused digital touchpoints that connect with audiences on a deeper, more personal level.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    hoverColor: 'bg-[#FD5800]',
  },
  {
    num: '04',
    name: 'Premium D2C',
    description: 'Scaling direct-to-consumer brands with data-driven design, seamless user journeys, and robust technical foundations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    hoverColor: 'bg-blue-600',
  }
];

export default function Toolkit() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden border-t border-gray-100 font-sans relative">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(253,88,0,0.02)_0%,transparent_70%)] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight text-gray-900 leading-[1.1]">
            Who We <span className="text-[#FD5800]">Work With</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-base md:text-lg text-gray-500 font-medium">
            Partnering with ambitious brands across specialized industries to drive growth, innovation, and uncompromising digital excellence.
          </p>
        </div>
      </motion.div>

      {/* Wireframe Grid Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200">
          
          {industries.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-[400px] p-8 md:p-10 border-r border-b border-gray-200 bg-white overflow-hidden cursor-pointer"
            >
              
              {/* Color Flood Fill Animation */}
              <div className={`absolute bottom-0 left-0 w-full h-0 ${item.hoverColor} transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:h-full z-0`}></div>

              {/* Massive Background Number */}
              <div className="absolute -bottom-8 -right-4 text-[180px] leading-none font-black text-gray-100 group-hover:text-white/10 transition-colors duration-500 z-0 pointer-events-none select-none">
                {item.num}
              </div>

              {/* Content (Z-10 to stay above flood) */}
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Icon */}
                <div className="w-14 h-14 mb-8 text-gray-900 group-hover:text-white transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-3 ease-out">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-extrabold text-2xl lg:text-[28px] text-gray-900 group-hover:text-white mb-4 tracking-tight transition-colors duration-500 leading-tight">
                  {item.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 group-hover:text-white/90 font-medium leading-relaxed text-[15px] transition-colors duration-500 flex-grow">
                  {item.description}
                </p>

                {/* Arrow / CTA */}
                <div className="mt-auto pt-6 flex items-center gap-3 text-sm font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                  <span className="uppercase tracking-widest text-[11px]">Explore</span>
                  <div className="w-8 h-[1px] bg-gray-900 group-hover:bg-white transition-colors duration-500 transform origin-left group-hover:scale-x-150"></div>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
