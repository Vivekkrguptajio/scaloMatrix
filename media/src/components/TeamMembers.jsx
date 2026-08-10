import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: "01",
    name: "Adi",
    role: "Founder & Lead Strategist",
    image: "/team/adi.png",
    tagline: "CRO obsessed. Revenue driven.",
    socials: { linkedin: '#' },
  },
  {
    id: "02",
    name: "Shreyas",
    role: "Design & Branding",
    image: "/team/shreyas.png",
    tagline: "Pixels with purpose.",
    socials: { linkedin: '#' },
  },
  {
    id: "03",
    name: "Nayan",
    role: "Website Developer",
    image: "/team/nayan.png",
    tagline: "Code that converts.",
    socials: { linkedin: '#' },
  },
  {
    id: "04",
    name: "Yadu",
    role: "Project Manager",
    image: "/team/yadu.png",
    tagline: "Ships on time. Every time.",
    socials: { linkedin: '#' },
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="w-full py-24 md:py-32 bg-[#fafafa] text-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-8 w-full">
        
        {/* Header Section */}
        <div className="w-full mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-[#FD5800]/15 text-[#FD5800] text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD5800] animate-pulse" />
                The People
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1.1]">
                Meet the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">team.</span>
              </h2>
            </div>
            <p className="text-gray-500 font-medium text-base md:text-lg max-w-[400px] leading-relaxed">
              A small, senior team. No juniors. No layers. Just people who ship great work.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
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
              <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden mb-5 bg-gray-100 relative border border-gray-100 group-hover:border-[#FD5800]/20 transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(253,88,0,0.15)]">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm font-medium italic tracking-wide">
                    "{item.tagline}"
                  </span>
                </div>

                {/* ID Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/50">
                  <span className="text-[11px] font-black text-[#FD5800]">{item.id}</span>
                </div>
              </div>

              {/* Name & Role */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-black tracking-tight mb-1 group-hover:text-[#FD5800] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-[15px] text-gray-500 font-medium">
                    {item.role}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center mt-1 group-hover:border-[#FD5800] group-hover:bg-[#FD5800] transition-all duration-300 shrink-0">
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors duration-300 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
