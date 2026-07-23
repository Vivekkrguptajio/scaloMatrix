import { motion } from 'framer-motion';
import { caseStudies } from '../data';

function CaseCard({ study, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      className="group flex flex-col w-full cursor-pointer"
    >
      {/* Image Header */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[20px] mb-5">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
          <span className="text-[10px] font-bold tracking-widest text-black uppercase">{study.client}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
            {study.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#FD5800]">
            {study.metric} {study.metricLabel}
          </span>
        </div>
        
        <h3 className="text-[20px] md:text-[22px] font-black mb-3 leading-tight text-gray-900 group-hover:text-[#FD5800] transition-colors line-clamp-2">
          {study.title}
        </h3>

        <p className="text-[14px] text-gray-500 font-medium leading-relaxed mb-6 line-clamp-2">
          {study.description}
        </p>

        <div className="mt-auto flex items-center gap-2">
          <span className="text-[13px] font-bold text-black group-hover:text-[#FD5800] transition-colors uppercase tracking-wide">
            View Case Study
          </span>
          <svg className="w-4 h-4 text-black group-hover:text-[#FD5800] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  return (
    <section className="relative w-full bg-[#FAFAFA] text-black font-sans py-20 md:py-32">
      <div className="w-full flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8">
          
          {/* Header - Compact to save space */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight">
                Selected <span className="text-[#FD5800]">Work</span>
              </h2>
              <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl">
                Case studies with business outcomes, not just visuals. Pick a project below to explore the impact.
              </p>
            </div>
            <div>
              <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-full font-bold text-sm hover:border-[#FD5800] hover:text-[#FD5800] transition-colors shadow-sm">
                View All Work
              </button>
            </div>
          </div>

          {/* Grid Layout - 4 Cards Side by Side, animated by scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, i) => (
              <CaseCard key={study.id} study={study} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
