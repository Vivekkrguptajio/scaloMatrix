import { motion } from 'framer-motion';

const insights = [
  {
    id: 1,
    category: "Growth Breakdown",
    title: "How We Scaled a SaaS to $1M ARR",
    metric: "12",
    metricLabel: "Months",
    excerpt: "A deep dive into the marketing channels, sales funnels, and retention strategies that fueled hyper-growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    color: "text-blue-500",
    bgLight: "bg-blue-50"
  },
  {
    id: 2,
    category: "Creative Analysis",
    title: "Psychology of Micro-Interactions",
    metric: "3x",
    metricLabel: "Retention",
    excerpt: "Why the smallest animations and transitions hold the biggest power for user retention and delight.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    color: "text-[#FD5800]",
    bgLight: "bg-orange-50"
  },
  {
    id: 3,
    category: "Article",
    title: "Headless Commerce Future",
    metric: "50%",
    metricLabel: "Faster Load",
    excerpt: "Decoupling front-end from back-end isn't just a trend; it's a necessity for speed and scalability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    color: "text-emerald-500",
    bgLight: "bg-emerald-50"
  }
];

function InsightCard({ item, index }) {
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
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
          <span className="text-[10px] font-black tracking-wider text-black uppercase">{item.category}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base md:text-lg font-black mb-3 leading-snug text-gray-900 group-hover:text-[#FD5800] transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Big Metric Highlight (Similar to Selected Work) */}
        <div className={`mt-auto mb-3 p-2.5 rounded-xl ${item.bgLight} border border-gray-100/50 flex flex-col xl:flex-row xl:items-center gap-2`}>
          <div className="flex-shrink-0">
            <span className={`text-xl xl:text-2xl font-black ${item.color} tracking-tight block leading-none`}>
              {item.metric}
            </span>
          </div>
          <div className="xl:border-l-2 border-gray-200/50 xl:pl-2">
            <span className="text-xs font-bold text-gray-800 leading-tight block">
              {item.metricLabel}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4 line-clamp-3">
          {item.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-auto">
          <span className="text-xs font-bold text-black group-hover:text-[#FD5800] transition-colors">
            Read Article
          </span>
          <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#FD5800] group-hover:text-white text-gray-400 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" stroke="currentColor" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Insights() {
  return (
    <section className="relative w-full bg-[#FAFAFA] text-black font-sans py-20 md:py-32">
      <div className="w-full flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight">
                <span className="text-[#FD5800]">Insights</span>
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base font-bold text-gray-400">
                <span className="text-gray-900">Articles.</span>
                <span className="text-gray-900">Growth breakdowns.</span>
                <span className="text-gray-900">Creative analysis.</span>
              </div>
            </div>
            <div>
              <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-full font-bold text-sm hover:border-[#FD5800] hover:text-[#FD5800] transition-colors shadow-sm">
                Read Our Blog
              </button>
            </div>
          </div>

          {/* Grid Layout - 3 Cards Side by Side, animated by scroll */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((item, i) => (
              <InsightCard key={item.id} item={item} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
