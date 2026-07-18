import { motion } from 'framer-motion'
import Marquee from './Marquee'

export default function Hero({ startAnimation }) {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-24 pb-8 px-6 md:px-16 lg:px-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full relative -mt-20 md:-mt-32">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-black font-sans text-black leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Creative, Media & Technology<br className="hidden lg:block" />
          Transformation Partner
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-base md:text-[17px] text-[#222] font-medium max-w-[800px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We're a team of 1200+ Specialists delivering award-winning work for 350+ brands worldwide, 11 years and counting!
        </motion.p>
        
        {/* Tiny black dot from the image */}
        <motion.div 
          className="absolute right-4 bottom-[-100px] md:right-10 md:bottom-[-80px] lg:right-32 lg:bottom-[-120px] w-2.5 h-2.5 bg-black rounded-full"
          initial={{ opacity: 0 }}
          animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        ></motion.div>
      </div>
      
      {/* Marquee at the bottom of the hero section */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-0 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <Marquee />
      </motion.div>
    </section>
  )
}
