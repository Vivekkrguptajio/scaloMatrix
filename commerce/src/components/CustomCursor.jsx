import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsHovered(true);
    const onMouseUp = () => setIsHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#FD5800]/80 pointer-events-none z-[9999] transition-transform duration-200 ease-out transform hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
        }}
      />
      {/* Inner Bada Dot */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-[#FD5800] rounded-full pointer-events-none z-[9999] shadow-[0_0_12px_rgba(253,88,0,0.6)] transition-transform duration-75 ease-out transform hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0.75 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
