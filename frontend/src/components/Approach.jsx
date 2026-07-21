import { motion } from 'framer-motion'

export default function Approach() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="approach" className="w-full bg-white text-black py-24 md:py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-40">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          {/* Left Side: Small Title */}
          <div className="w-full md:w-1/4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-base md:text-lg font-neuebit font-semibold tracking-normal uppercase mt-2 md:mt-[16px]"
            >
              OUR APPROACH AND VALUES
            </motion.p>
          </div>

          {/* Right Side: Main Text */}
          <div className="w-full md:w-3/4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-neuebit font-medium tracking-tight mt-0"
            >
              <span className="text-[#111111]">
                We combine creativity, strategic ideas <br className="hidden lg:block" />
                and technology{" "}
              </span>
              <span className="text-gray-400">
                to create bespoke <br className="hidden lg:block" />
                solutions that drive your success.
              </span>
            </motion.h2>
          </div>
        </div>

        {/* End of content */}

      </div>
    </section>
  )
}
