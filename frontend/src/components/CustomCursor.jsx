import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isOnDark, setIsOnDark] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Exact coordinates without lag
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e) => {
      // Update instantly without lerp or requestAnimationFrame
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

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
      
      // Check for dark sections (bg-black, bg-[#0a0a0a], footer, etc.)
      const darkContainer = target.closest('.bg-black, .bg-\\[\\#0a0a0a\\], .bg-gray-900, footer, [data-dark="true"]');
      if (darkContainer) {
        setIsOnDark(true);
      } else {
        setIsOnDark(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-[10000]"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        animate={{
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          x: isHovering ? -8 : 4,
          y: isHovering ? -8 : 4,
          backgroundColor: isHovering ? 'rgba(253, 88, 0, 0.1)' : 'rgba(253, 88, 0, 0)',
          border: isHovering 
            ? '2px solid rgba(253, 88, 0, 0.8)' 
            : (isOnDark ? '2px solid rgba(253, 88, 0, 0.8)' : '2px solid rgba(0, 0, 0, 0.5)'),
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="rounded-full flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
            backgroundColor: isOnDark ? '#FD5800' : '#000000'
          }}
          transition={{ duration: 0.15 }}
          className="w-2 h-2 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
