import React from 'react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: "01",
    name: "Dhiraj",
    role: "Founder & CEO",
    desc: "Visionary leader driving the strategic direction of scaloMATRIX, focused on scalable growth and innovation.",
    image: "/image.png",
  },
  {
    id: "02",
    name: "Jane Smith",
    role: "Chief Creative Officer",
    desc: "Award-winning designer with 10+ years experience crafting unforgettable brand identities and digital experiences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "03",
    name: "Michael Chen",
    role: "Head of Engineering",
    desc: "Technical powerhouse architecting robust, high-performance commerce and tech solutions for global brands.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "04",
    name: "Sarah Williams",
    role: "Growth Director",
    desc: "Data-driven marketer specializing in rapid scaling, performance marketing, and customer acquisition.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "05",
    name: "David Kumar",
    role: "Lead Strategist",
    desc: "Market analyst and strategic thinker helping brands navigate complex digital landscapes and beat competitors.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function TeamMembers() {
  return (
    <section id="team" className="relative w-full min-h-[100svh] md:h-[100svh] flex flex-col bg-[#0a0a0a] font-sans overflow-hidden">

      
      <div className="w-full h-full flex flex-col relative z-10 pt-4 md:pt-6">
        
        {/* ─── Header Section ─── */}
        <div className="w-full text-center flex flex-col items-center mb-4 md:mb-6 px-4">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-black tracking-tight text-white leading-[1.1] mb-2"
          >
            Meet Our <span className="text-[#FD5800]">Experts</span>
          </motion.h2>
          

        </div>

        {/* ─── Team Grid / Carousel ─── */}
        <div className="w-full max-w-[1400px] mx-auto flex-1 flex md:grid md:grid-cols-5 gap-4 md:gap-6 px-4 md:px-8 pb-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {teamMembers.map((item) => (
            <div 
              key={item.id}
              className="relative w-[85vw] md:w-full shrink-0 snap-center aspect-[3/4] md:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                <h4 className="text-[#FD5800] font-bold tracking-widest uppercase text-xs md:text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.role}
                </h4>
                <h3 className="text-2xl md:text-3xl font-black leading-tight text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm font-medium leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-150 line-clamp-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
