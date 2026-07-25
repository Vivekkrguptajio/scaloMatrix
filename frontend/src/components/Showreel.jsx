import React from 'react';
import { motion } from 'framer-motion';

export default function Showreel() {
  return (
    <section className="w-full bg-white relative z-20 pb-0 md:pb-4 px-4 md:px-12 lg:px-24 mt-4 md:mt-8">
      <motion.div 
        className="w-full max-w-[1400px] mx-auto rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(253,88,0,0.15)] relative aspect-video bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <iframe 
          className="absolute inset-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/L9V2lbljBa4?autoplay=1&mute=1&loop=1&playlist=L9V2lbljBa4&controls=0&showinfo=0&rel=0&modestbranding=1&background=1" 
          title="scaloMATRIX Showreel" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
}
