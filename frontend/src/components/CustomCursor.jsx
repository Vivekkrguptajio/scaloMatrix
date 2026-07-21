import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for smooth trailing effect
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for that buttery, liquid feel
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 16); // Center the 32px cursor
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
    >
      {/* Outer Ring */}
      <motion.div
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          x: isHovering ? -8 : 0, // offset for size change
          y: isHovering ? -8 : 0,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
          border: isHovering ? '2px solid rgba(255, 255, 255, 1)' : '2px solid rgba(255, 255, 255, 0.6)',
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-full flex items-center justify-center overflow-hidden"
      >
        {/* Inner Dot */}
        <motion.div 
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1
          }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
