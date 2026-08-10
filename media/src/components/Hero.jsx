import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const caseStudyImages = [
  '/images/68b69b5022644c08e48b9405_Happydent.jpg',
  '/images/669f9fbcc3481015e0e2112f_MOTOR.png',
  '/images/669fa0f361c519d7bc7b7084_cards.png',
  '/images/68e4b82d7c62d5759deaecd4_Mentos%2520website.jpg',
  '/images/6a22d3c2280604b61b881a82_TATA%2520capital%2520women%2527s%2520day%2520cover.jpg',
  '/images/6a50f13e8e27025e5f498bb4_image%2520(13).png',
  '/images/6a75d1097b618207b8a68fe3_MIAN-JULY-THUMBNAIL%2520(1).png',
]

const stats = [
  { value: '500', suffix: 'Cr+', label: 'Ad Spend Managed' },
  { value: '3.2', suffix: 'x', label: 'Average ROAS' },
  { value: '120', suffix: '+', label: 'Brands Scaled' },
  { value: '98', suffix: '%', label: 'Client Retention' },
]

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const target = parseFloat(value)
          const isDecimal = value.includes('.')
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col overflow-hidden bg-white">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient Glow */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[#FD5800]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8 max-w-4xl"
        >
          We scale brands
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] via-[#FF8C42] to-[#FD5800]">
            with precision media.
          </span>
        </motion.h1>
        

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 items-center"
        >
          <a 
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FD5800] text-white font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_10px_25px_rgba(253,88,0,0.3)] hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start Your Campaign</span>
            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FD5800] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a 
            href="#case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-800 font-bold text-sm tracking-wide hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Case Studies
          </a>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full border-t border-gray-100 bg-gray-50/50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center justify-center py-8 md:py-10 ${
                i < stats.length - 1 ? 'border-r border-gray-100' : ''
              } ${i < 2 ? 'border-b md:border-b-0 border-gray-100' : ''}`}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-1 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-gray-400 text-xs md:text-sm font-semibold tracking-wider uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Marquee Section - Case Study Images */}
      <div className="relative z-10 w-full py-10 md:py-14 border-t border-gray-100 bg-white overflow-hidden">
        <div className="mb-6 text-center">
          <span className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Trusted by leading brands</span>
        </div>
        
        {/* Marquee Row 1 */}
        <div className="flex gap-5 animate-marquee mb-5">
          {[...caseStudyImages, ...caseStudyImages].map((img, i) => (
            <div 
              key={`r1-${i}`} 
              className="flex-shrink-0 w-[280px] md:w-[340px] h-[160px] md:h-[200px] rounded-2xl overflow-hidden group relative border border-gray-100 shadow-sm"
            >
              <img 
                src={img} 
                alt="Case Study" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Marquee Row 2 - Reverse */}
        <div className="flex gap-5 animate-marquee-reverse">
          {[...caseStudyImages.slice().reverse(), ...caseStudyImages.slice().reverse()].map((img, i) => (
            <div 
              key={`r2-${i}`} 
              className="flex-shrink-0 w-[280px] md:w-[340px] h-[160px] md:h-[200px] rounded-2xl overflow-hidden group relative border border-gray-100 shadow-sm"
            >
              <img 
                src={img} 
                alt="Case Study" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}