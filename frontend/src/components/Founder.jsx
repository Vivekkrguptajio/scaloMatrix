import { motion } from 'framer-motion';

export default function Founder() {
  return (
    <section id="founder" className="py-24 md:py-32 bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-[#FD5800] rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image & Quote Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=2000" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-black italic text-white leading-tight mb-4">
                  "We don't just build software. We architect unfair advantages."
                </p>
                <div>
                  <h4 className="font-bold text-[#FD5800] uppercase tracking-widest text-sm">John Doe</h4>
                  <p className="text-gray-400 text-sm font-medium">Founder & CEO, scaloMATRIX</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
              Why our approach is <br />
              <span className="text-[#FD5800]">radically different.</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-12">
              <p>
                Most agencies focus on delivering features. We focus on delivering <span className="text-white font-bold">business outcomes</span>. 
              </p>
              <p>
                I started scaloMATRIX because I was tired of seeing brilliant ideas fail due to poor execution and generic design. Our philosophy is simple: every line of code we write and every pixel we place must tie directly back to your bottom line.
              </p>
              <p>
                We act as your strategic partners, diving deep into your market mechanics, user psychology, and revenue models before we ever open a code editor. <span className="text-white font-bold">We don't want to just be your agency—we want to be your unfair advantage.</span>
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-white/10">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-[#FD5800] text-white rounded-full font-black text-lg text-center hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(253,88,0,0.3)]"
              >
                Let's Talk Growth
              </a>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Or see our pricing plans
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
