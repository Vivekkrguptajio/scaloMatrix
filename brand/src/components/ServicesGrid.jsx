import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const services = [
  {
    id: '01',
    title: 'Brand Strategy',
    tagline: 'The foundation.',
    description: 'We define your core positioning, messaging architecture, and competitive edge — so every move you make is intentional.',
    deliverables: ['Brand Audit', 'Positioning Framework', 'Messaging Pillars', 'Competitive Analysis'],
    gradient: 'from-[#1A1A1A] to-[#111]',
    accentColor: '#FD5800',
    textColor: 'text-white',
    iconBg: 'bg-white/5',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Visual Identity',
    tagline: 'The look & feel.',
    description: 'Logos, typography, colour systems, and assets — crafted so your brand is impossible to ignore and impossible to forget.',
    deliverables: ['Logo System', 'Typography', 'Colour Palette', 'Brand Guidelines'],
    gradient: 'from-[#1A1A1A] to-[#111]',
    accentColor: '#FD5800',
    textColor: 'text-white',
    iconBg: 'bg-white/5',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Content & Social',
    tagline: 'The voice.',
    description: 'Content strategy, social media execution, and storytelling that turns attention into trust, and trust into revenue.',
    deliverables: ['Content Strategy', 'Social Calendar', 'Copywriting', 'Video Production'],
    gradient: 'from-[#FD5800] to-[#FF7022]',
    accentColor: '#FFF',
    textColor: 'text-white',
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'UI/UX Design',
    tagline: 'The experience.',
    description: 'Seamless digital products that convert — websites, apps, and funnels designed with obsessive attention to every pixel.',
    deliverables: ['Web Design', 'App Design', 'Wireframing', 'Prototyping'],
    gradient: 'from-[#1A1A1A] to-[#111]',
    accentColor: '#FD5800',
    textColor: 'text-white',
    iconBg: 'bg-white/5',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Campaign Design',
    tagline: 'The impact.',
    description: 'High-impact campaigns — from ideation to media buying — that drive measurable results and real growth.',
    deliverables: ['Campaign Ideation', 'Media Planning', 'Performance Ads', 'Analytics'],
    gradient: 'from-[#1A1A1A] to-[#111]',
    accentColor: '#FD5800',
    textColor: 'text-white',
    iconBg: 'bg-white/5',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'D2C Growth',
    tagline: 'The scale engine.',
    description: 'CAC optimization, LTV maximization, CRO, and retention systems that turn your D2C brand into a compounding machine.',
    deliverables: ['CAC Optimization', 'CRO', 'Retention Programs', 'Tech Stack Audit'],
    gradient: 'from-[#1A1A1A] to-[#111]',
    accentColor: '#FD5800',
    textColor: 'text-white',
    iconBg: 'bg-white/5',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function ServicesGrid() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#FD5800]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FD5800] uppercase">What We Do</span>
            <div className="h-[2px] w-12 bg-[#FD5800]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase text-white mb-6">
            Our <span className="text-[#FD5800] drop-shadow-[0_0_20px_rgba(253,88,0,0.4)]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to build, grow, and scale — engineered for brands that refuse to blend in.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const isHovered = hoveredId === service.id
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-gradient-to-br ${service.gradient} rounded-[24px] p-8 md:p-10 overflow-hidden transition-all duration-500 border border-white/5 hover:border-[#FD5800]/50 ${isHovered ? 'shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-[1.02]' : 'shadow-lg'}`}
              >
                {/* Large Background Number */}
                <span className="absolute -right-4 -top-6 text-[8rem] font-black leading-none text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
                  {service.id}
                </span>

                {/* Icon */}
                <div className={`${service.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.textColor} backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FD5800] group-hover:text-white`}>
                  {service.icon}
                </div>

                {/* Title & Tagline */}
                <h3 className={`text-2xl md:text-3xl font-black ${service.textColor} mb-1 tracking-tight`}>
                  {service.title}
                </h3>
                <p className="text-sm font-bold mb-4 opacity-80" style={{ color: service.accentColor }}>
                  {service.tagline}
                </p>

                {/* Description */}
                <p className={`${service.textColor} opacity-60 text-sm leading-relaxed mb-8 group-hover:opacity-100 transition-opacity`}>
                  {service.description}
                </p>

                {/* Deliverables Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm group-hover:border-white/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA Arrow */}
                <div className={`flex items-center gap-2 text-[#FD5800] font-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                  <span className="text-sm">Learn more</span>
                  <FaArrowRight size={12} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}