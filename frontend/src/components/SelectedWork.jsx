import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: "Global FinTech App Restructure",
    client: "Finova",
    category: "UX/UI Design",
    metric: "+150%",
    metricLabel: "User Conversion",
    description: "Simplified complex financial data into an intuitive, frictionless user experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    color: "bg-blue-500",
    textColor: "text-blue-500",
    bgLight: "bg-blue-50"
  },
  {
    id: 2,
    title: "E-Commerce Replatforming",
    client: "StyleStore",
    category: "Development",
    metric: "3.2x",
    metricLabel: "Faster Page Load",
    description: "Migrated a legacy monolith to modern headless architecture for better SEO.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    color: "bg-[#FD5800]",
    textColor: "text-[#FD5800]",
    bgLight: "bg-orange-50"
  },
  {
    id: 3,
    title: "Healthcare SaaS Platform",
    client: "MedSync",
    category: "Product Design",
    metric: "40%",
    metricLabel: "Less Support Tickets",
    description: "Unified portal for doctors and patients that streamlined communication.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
    bgLight: "bg-emerald-50"
  },
  {
    id: 4,
    title: "AI CRM Integration",
    client: "SalesPro",
    category: "AI & Automation",
    metric: "2.5x",
    metricLabel: "Lead Conversion",
    description: "Automated follow-ups and lead scoring using AI, boosting sales velocity.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070",
    color: "bg-purple-500",
    textColor: "text-purple-500",
    bgLight: "bg-purple-50"
  }
];

function CaseCard({ study, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Image Header */}
      <div className="relative w-full aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
          <span className="text-[10px] font-black tracking-wider text-black uppercase">{study.client}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FD5800] mb-2 block">
          {study.category}
        </span>
        
        <h3 className="text-base md:text-lg font-black mb-3 leading-snug text-gray-900 group-hover:text-[#FD5800] transition-colors line-clamp-2">
          {study.title}
        </h3>

        {/* Big Metric Highlight */}
        <div className={`mt-auto mb-3 p-2.5 rounded-xl ${study.bgLight} border border-gray-100/50 flex flex-col xl:flex-row xl:items-center gap-2`}>
          <div className="flex-shrink-0">
            <span className={`text-xl xl:text-2xl font-black ${study.textColor} tracking-tight block leading-none`}>
              {study.metric}
            </span>
          </div>
          <div className="xl:border-l-2 border-gray-200/50 xl:pl-2">
            <span className="text-xs font-bold text-gray-800 leading-tight block">
              {study.metricLabel}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4 line-clamp-3">
          {study.description}
        </p>

        <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-auto">
          <span className="text-xs font-bold text-black group-hover:text-[#FD5800] transition-colors">
            Read Case Study
          </span>
          <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#FD5800] group-hover:text-white text-gray-400 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
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
