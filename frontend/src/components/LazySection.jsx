import React, { useState, useEffect, useRef } from 'react';

export default function LazySection({ children, minHeight = "400px", className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '600px 0px 600px 0px', // Render section when within 600px of viewport (current + adjacent sections)
        threshold: 0
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ minHeight: !isVisible ? minHeight : undefined }}>
      {isVisible ? children : null}
    </div>
  );
}
