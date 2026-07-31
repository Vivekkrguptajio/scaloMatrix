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
      {/* Outer Negative Ring */}
      <div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-white pointer-events-none z-[99999] mix-blend-difference transition-transform duration-150 ease-out transform hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
        }}
      />
      {/* Inner Negative / Inverted Dot */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference transition-transform duration-75 ease-out transform hidden md:block"
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
