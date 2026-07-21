import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { 
    id: '01', 
    title: 'Audit', 
    desc: 'Analyzing your current landscape and uncovering hidden opportunities.',
    theme: { text: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', shadow: 'hover:shadow-blue-500/20' }
  },
  { 
    id: '02', 
    title: 'Strategy', 
    desc: 'Crafting data-driven blueprints aligned with your business objectives.',
    theme: { text: 'text-[#FD5800]', bg: 'bg-orange-50', border: 'border-orange-200', shadow: 'hover:shadow-[#FD5800]/20' }
  },
  { 
    id: '03', 
    title: 'Execution', 
    desc: 'Turning strategy into reality with agile, precise implementation.',
    theme: { text: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-200', shadow: 'hover:shadow-purple-500/20' }
  },
  { 
    id: '04', 
    title: 'Scale', 
    desc: 'Continuous optimization and growth acceleration for maximum ROI.',
    theme: { text: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', shadow: 'hover:shadow-emerald-500/20' }
  }
];

// Nodes positioned on SVG canvas
const nodes = [
  { x: 12.5, y: 75, isValley: true },
  { x: 37.5, y: 25, isValley: false },
  { x: 62.5, y: 75, isValley: true },
  { x: 87.5, y: 25, isValley: false },
];

function StepCard({ step, index, scrollYProgress }) {
  const node = nodes[index];
  
  // Stagger the animation based on scroll progress (0 to 0.8)
  const triggerEnd = (index + 1) * 0.2; // 0.2, 0.4, 0.6, 0.8
  const triggerStart = triggerEnd - 0.15; // 0.05, 0.25, 0.45, 0.65
  
  // Explicitly map all the way to 1.0 to guarantee they stay visible!
  const opacity = useTransform(
    scrollYProgress, 
    [0, triggerStart, triggerEnd, 1], 
    [0, 0, 1, 1]
  );
  
  const yMove = useTransform(
    scrollYProgress, 
    [0, triggerStart, triggerEnd, 1], 
    [node.isValley ? 60 : -60, node.isValley ? 60 : -60, 0, 0]
  );
  
  const scale = useTransform(
    scrollYProgress, 
    [0, triggerStart, triggerEnd, 1], 
    [0, 0, 1, 1]
  );

  return (
    <div 
      className="absolute"
      style={{ 
        left: `${node.x}%`, 
        top: `${node.y}%`,
      }}
    >
      {/* Node Dot */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute w-10 h-10 rounded-full bg-white border-[3px] border-gray-200 shadow-md flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className={`w-4 h-4 rounded-full ${step.theme.bg.replace('50', '500')} ${step.theme.text.includes('#') ? 'bg-[#FD5800]' : ''}`} style={step.theme.text.includes('#') ? {} : { backgroundColor: 'currentColor' }} />
      </motion.div>

      {/* Card Container */}
      <motion.div 
        className="absolute z-10 -translate-x-1/2 flex flex-col items-center"
        style={{
          opacity, 
          scale,
          y: yMove,
          ...(node.isValley ? { top: '20px' } : { bottom: '20px' })
        }}
      >
        {/* Connector Line */}
        <div 
          className={`w-1 ${step.theme.bg.replace('50', '200')} ${step.theme.text.includes('#') ? 'bg-orange-200' : ''} ${node.isValley ? 'mb-2 h-8 md:h-12' : 'mt-2 h-8 md:h-12 order-2'}`} 
          style={step.theme.text.includes('#') ? {} : { backgroundColor: 'currentColor' }}
        />
        
        {/* Colorful Card with edge collision prevention */}
        <div className={`w-[240px] md:w-[280px] p-5 md:p-6 rounded-[24px] bg-white border-2 ${step.theme.border} shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${step.theme.shadow} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${node.isValley ? '' : 'order-1'} bg-gradient-to-br from-white to-${step.theme.bg.replace('bg-', '')} ${index === 0 ? 'translate-x-[25%] md:translate-x-0' : index === 3 ? '-translate-x-[25%] md:translate-x-0' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className={`w-10 h-10 rounded-full ${step.theme.bg} ${step.theme.text} text-sm font-black flex items-center justify-center flex-shrink-0 border-2 ${step.theme.border}`}>
              {step.id}
            </span>
            <h3 className={`text-base md:text-lg font-extrabold text-black transition-colors`}>{step.title}</h3>
          </div>
          <p className="text-gray-600 text-[13px] md:text-sm font-medium leading-relaxed">{step.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowWeWork() {
  const targetRef = useRef(null);

  // useScroll tracks the progress of the container's scroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Animated line draws from 0 to 1 based on 0 to 0.85 scroll progress
  // Finishing at 0.85 ensures the line completes as soon as the 4th card is fully visible!
  const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  return (
    <section 
      ref={targetRef} 
      className="relative w-full h-[200vh] bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] font-sans" 
      id="how-we-work"
    >
      {/* Sticky container that stays on screen while we scroll 200vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Gradient & Glow Orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA] pointer-events-none" />
        <div className="absolute top-[20%] left-[15%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-[#FD5800]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Giant Watermark Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[18vw] md:text-[220px] font-black tracking-tighter text-gray-200 uppercase whitespace-nowrap select-none leading-none"
          >
            How We Work
          </motion.h2>
        </div>

        {/* Small Label instead of large heading */}
        <div className="relative z-10 text-center mb-6 px-4 -translate-y-8 md:-translate-y-16">
          <span className="text-sm font-bold uppercase tracking-widest text-[#FD5800]"></span>
        </div>

        {/* ── TIMELINE CONTAINER ── */}
        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 mt-12 md:mt-16">
          <div className="relative w-[150%] -left-[25%] md:w-full md:left-0 aspect-[2/1] md:aspect-[6/1] min-h-[200px]">
            
            {/* SVG Curve */}
            <svg
              viewBox="0 0 1000 200"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              {/* Extended path to -100 and 1100 guarantees it shoots off the screen edges completely */}
              <path
                d="M -100,100 L 0,100 C 62.5,100 62.5,150 125,150 C 250,150 250,50 375,50 C 500,50 500,150 625,150 C 750,150 750,50 875,50 C 937.5,50 937.5,100 1000,100 L 1100,100"
                fill="none" stroke="#E5E7EB" strokeWidth="4" strokeDasharray="8 6" strokeLinecap="round"
              />
              <motion.path
                d="M -100,100 L 0,100 C 62.5,100 62.5,150 125,150 C 250,150 250,50 375,50 C 500,50 500,150 625,150 C 750,150 750,50 875,50 C 937.5,50 937.5,100 1000,100 L 1100,100"
                fill="none" stroke="#FD5800" strokeWidth="6" strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(253,88,0,0.5)]"
                style={{ pathLength }}
              />
            </svg>

            {/* Nodes and Cards overlay driven by scroll progress */}
            {steps.map((step, i) => (
              <StepCard key={step.id} step={step} index={i} scrollYProgress={scrollYProgress} />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
