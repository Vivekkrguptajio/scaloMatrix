import React from 'react';
import { motion } from 'framer-motion';

export default function Showreel() {
  return (
    <section id="showreel" className="w-full bg-white relative z-20 pb-0 px-0 mt-0">
      <motion.div 
        className="w-full relative aspect-video bg-black overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
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
