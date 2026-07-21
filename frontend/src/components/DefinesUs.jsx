import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function DefinesUs() {
  const arrowRef = useRef(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!arrowRef.current) return
      
      const arrowRect = arrowRef.current.getBoundingClientRect()
      // Center of the arrow
      const arrowCenterX = arrowRect.left + arrowRect.width / 2
      const arrowCenterY = arrowRect.top + arrowRect.height / 2
      
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      // Calculate angle in radians and convert to degrees
      const angleRad = Math.atan2(mouseY - arrowCenterY, mouseX - arrowCenterX)
      const angleDeg = (angleRad * 180) / Math.PI
      
      setRotation(angleDeg)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden font-sans border-t border-gray-100">
      
      {/* Blueprint/Wireframe Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" x="0" y="0" width="400" height="300" patternUnits="userSpaceOnUse" patternTransform="scale(0.4)">
              {/* Horizontal Lines */}
              <line x1="0" y1="150" x2="400" y2="150" stroke="#FD5800" strokeWidth="2" />
              <line x1="0" y1="300" x2="400" y2="300" stroke="#FD5800" strokeWidth="2" strokeDasharray="6 6" />
              
              {/* Vertical Lines */}
              <line x1="300" y1="0" x2="300" y2="300" stroke="#FD5800" strokeWidth="2" />
              
              {/* Circles */}
              <circle cx="300" cy="300" r="150" stroke="#FD5800" strokeWidth="2" fill="none" />
              <circle cx="100" cy="300" r="300" stroke="#FD5800" strokeWidth="2" fill="none" />
              
              {/* Center Dot */}
              <circle cx="300" cy="300" r="6" fill="#FD5800" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:w-1/3 shrink-0 relative">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-gray-900 leading-[1.1]"
              >
                What defines us
              </motion.h2>

              {/* Hand-drawn Arrow Pointing to Cursor */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="hidden md:flex mt-16 ml-8 lg:ml-12 relative z-20 w-[320px] h-[320px] items-center justify-center"
              >
                <div 
                  ref={arrowRef}
                  style={{ transform: `rotate(${rotation}deg)` }}
                  className="w-full h-full flex items-center justify-center will-change-transform"
                >
                  <svg width="320" height="320" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FD5800] drop-shadow-xl">
                    {/* Extra Long Straight Arrow Tail */}
                    <path d="M10 80 L140 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                    {/* Straight Arrow Head */}
                    <path d="M100 40 L140 80 L100 120" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-8 md:gap-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-[40px] font-extrabold text-gray-900 leading-[1.3] tracking-tight"
            >
              We're brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.
            </motion.h3>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[1px] bg-gray-200 origin-left"
            ></motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-[17px] text-gray-500 font-medium leading-[1.8] max-w-3xl"
            >
              We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#FD5800] hover:scale-105 transition-all duration-300 group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_-10px_rgba(253,88,0,0.5)]">
                Dive Into Our Culture
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
