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
    <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden font-sans border-t border-gray-100">
      
      {/* Blueprint/Wireframe Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              {/* Horizontal Lines (Top, Center, Bottom) */}
              <line x1="0" y1="0" x2="300" y2="0" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="0" y1="150" x2="300" y2="150" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="0" y1="300" x2="300" y2="300" stroke="#E5E7EB" strokeWidth="1" />
              
              {/* Vertical Line (Right Edge) */}
              <line x1="300" y1="0" x2="300" y2="300" stroke="#E5E7EB" strokeWidth="1" />
              
              {/* Centered Circle */}
              <circle cx="150" cy="150" r="150" stroke="#E5E7EB" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:w-1/4 shrink-0 relative">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-[1.1]"
              >
                What defines us
              </motion.h2>

              {/* Cursor-Following Black Arrow */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
                className="hidden md:flex mt-8 w-[180px] h-[180px] items-center justify-center text-[#FD5800]"
              >
                <div 
                  ref={arrowRef}
                  style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s ease-out' }}
                  className="w-full h-full flex items-center justify-center will-change-transform"
                >
                  <svg width="180" height="100" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Thick Arrow Pointing Right (rotation handles direction) */}
                    <path d="M5 25 L95 25 M70 5 L95 25 L70 45" stroke="currentColor" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="square" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-3/4 flex flex-col gap-6 md:gap-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-[34px] font-bold text-gray-900 leading-[1.3] tracking-tight w-full"
            >
              We're brand builders at heart, creators by design, tech<br className="hidden md:block"/> enthusiasts in practice, and integrated at our core.
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
              transition={{ delay: 0.2 }}
              className="text-base md:text-[17px] text-gray-500 font-medium leading-[1.85] max-w-[850px]"
            >
              We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-[15px] w-max overflow-hidden bg-black text-white">
                <span className="absolute inset-0 bg-[#FD5800] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center"></span>
                <span className="relative z-10 flex items-center">
                  Dive Into Our Culture <span className="ml-2 font-normal text-lg leading-none">&rarr;</span>
                </span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
