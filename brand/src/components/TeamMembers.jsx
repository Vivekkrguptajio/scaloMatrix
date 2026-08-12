import { motion } from 'framer-motion'
import { getIkUrl } from '../utils/imagekit'

const teamMembers = [
  {
    id: "01",
    name: "KAANYA",
    role: "CO-FOUNDER & BRAND STRATEGIST",
    image: "/team/adi.png", 
    description: "She builds brands by turning audiences into communities. Her own Instagram climbed from 2K to 100K in six months, the same playbook she now runs for the brands she partners with.",
  },
  {
    id: "02",
    name: "SAMARTH",
    role: "CO-FOUNDER & D2C GROWTH STRATEGIST",
    image: "/team/shreyas.png",
    description: "7 years building and scaling D2C brands from the ground up. He sharpens positioning, storytelling, and customer experience until the message earns attention and converts.",
  },
  {
    id: "03",
    name: "NAYAN",
    role: "WEBSITE DEVELOPER",
    image: "/team/nayan.png",
    description: "Turns strategic vision into pixel-perfect digital experiences. Fast, responsive, and designed to convert visitors into loyal customers.",
  },
  {
    id: "04",
    name: "YADU",
    role: "PROJECT MANAGER",
    image: "/team/yadu.png",
    description: "The glue that holds everything together. Ensures campaigns ship on time, workflows are seamless, and quality never drops.",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="w-full py-24 bg-[#5D42F5] text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header Section */}
        <div className="w-full mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.1] mb-8 uppercase">
              We don't hand over decks.<br/>
              We build <span className="text-[#D4FF00]">Direction.</span>
            </h2>
            <div className="max-w-2xl space-y-5">
              <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed">
                We partner with brands beyond strategy: bringing clarity, guiding teams, and staying close enough to ensure every idea is implemented as intended.
              </p>
              <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed">
                We're not your agency. And we're not just consultants. We're your fractional CMO, helping your team turn good ideas into meaningful progress.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
          {teamMembers.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] relative overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-300">
                <img 
                  src={getIkUrl(item.image)} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay for text legibility at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                
                {/* Name & Role Badge Overlay */}
                <div className="absolute bottom-6 left-6 pr-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-3">
                    {item.name}
                  </h3>
                  <div className="inline-block bg-[#D4FF00] text-black text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 shadow-sm">
                    {item.role}
                  </div>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="flex flex-col">
                <div className="w-8 h-[3px] bg-[#D4FF00] mb-5"></div>
                <p className="text-white/90 text-sm md:text-[15px] font-medium leading-relaxed pr-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
