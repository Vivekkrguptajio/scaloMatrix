import { motion } from 'framer-motion'

export default function ServicesBento() {
  const CheckIcon = () => (
    <div className="w-[18px] h-[18px] rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-[1px]">
      <svg className="w-2.5 h-2.5 text-[#FD5800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  return (
    <section className="w-full bg-[#FAFAFA] py-12 md:py-24 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto bg-[#FDF8F5] rounded-[48px] p-6 md:p-12 shadow-sm border border-orange-50">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Card: Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-white rounded-[32px] p-6 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col border border-white group"
          >
            {/* Gradient Header */}
            <div className="w-full h-[240px] rounded-[24px] bg-gradient-to-br from-[#E10098] to-[#FF2D73] flex items-center justify-center mb-8 shadow-inner overflow-hidden relative">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-16 h-16 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            
            <h3 className="text-[26px] font-black text-gray-900 mb-3 tracking-tight">Brand</h3>
            <p className="text-gray-500 text-[14px] md:text-[15px] font-medium leading-relaxed mb-8">
              Build a lasting legacy and connect deeply with your audience through powerful storytelling.
            </p>
            
            <ul className="flex flex-col gap-3.5 mt-auto">
              <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Brand Strategy</li>
              <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Visual Identity</li>
              <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Packaging Design</li>
              <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> UI/UX Experience</li>
              <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Messaging & Voice</li>
            </ul>
          </motion.div>

          {/* Right Column (2 Stacked Cards) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Top Right: Commerce */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-6 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col-reverse md:flex-row gap-8 items-stretch flex-1 border border-white group"
            >
              <div className="flex-1 flex flex-col py-2 md:pl-2">
                <h3 className="text-[26px] font-black text-gray-900 mb-3 tracking-tight">Commerce</h3>
                <p className="text-gray-500 text-[14px] md:text-[15px] font-medium leading-relaxed mb-8 max-w-[90%]">
                  Scale your revenue seamlessly with high-converting, lightning-fast storefronts.
                </p>
                <ul className="flex flex-col gap-3.5 mt-auto">
                  <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Shopify Plus Development</li>
                  <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Conversion Rate (CRO)</li>
                  <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Custom Landing Pages</li>
                </ul>
              </div>
              <div className="w-full md:w-[320px] h-[240px] md:h-auto rounded-[24px] bg-gradient-to-br from-[#00C6FF] to-[#0072FF] flex items-center justify-center shrink-0 shadow-inner overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-16 h-16 text-white drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </motion.div>

            {/* Bottom Right: Growth */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[32px] p-6 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col-reverse md:flex-row gap-8 items-stretch flex-1 border border-white group"
            >
              <div className="flex-1 flex flex-col py-2 md:pl-2">
                <h3 className="text-[26px] font-black text-gray-900 mb-3 tracking-tight">Growth</h3>
                <p className="text-gray-500 text-[14px] md:text-[15px] font-medium leading-relaxed mb-8 max-w-[90%]">
                  Accelerate your market presence and acquire high-LTV customers worldwide.
                </p>
                <ul className="flex flex-col gap-3.5 mt-auto">
                  <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> Performance Marketing</li>
                  <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> UGC & Creators</li>
                  <li className="flex items-center gap-3 text-[14.5px] font-bold text-gray-700"><CheckIcon /> SEO, SEM & Retention</li>
                </ul>
              </div>
              <div className="w-full md:w-[320px] h-[240px] md:h-auto rounded-[24px] bg-gradient-to-br from-[#FFB75E] to-[#ED8F03] flex items-center justify-center shrink-0 shadow-inner overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-16 h-16 text-white drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
