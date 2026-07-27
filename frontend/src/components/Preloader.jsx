import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  { text: "BRAND", color: "text-[#FD5800]" },
  { text: "COMMERCE", color: "text-black" },
  { text: "GROWTH", color: "text-black" }
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cycle through the words
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < words.length - 1) return prev + 1;
        return prev;
      });
    }, 800); // 800ms per word

    const handleLoad = () => {
      // Delay closing until animation finishes
      setTimeout(() => setIsLoading(false), 2800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const fallback = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div className="relative flex items-center justify-center h-20 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ rotateX: -90, opacity: 0, y: 40 }}
                animate={{ rotateX: 0, opacity: 1, y: 0 }}
                exit={{ rotateX: 90, opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-widest font-sans ${words[index].color}`}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
              >
                {words[index].text}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
