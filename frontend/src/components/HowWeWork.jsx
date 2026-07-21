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
    [node.isValley ? 20 : -20, node.isValley ? 20 : -20, 0, 0]
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
        className="absolute w-8 h-8 rounded-full bg-white border-[3px] border-gray-200 shadow-sm flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className={`w-3.5 h-3.5 rounded-full ${step.theme.bg.replace('50', '500')} ${step.theme.text.includes('#') ? 'bg-[#FD5800]' : ''}`} style={step.theme.text.includes('#') ? {} : { backgroundColor: 'currentColor' }} />
      </motion.div>

      {/* Card Container */}
      <motion.div 
        style={{ opacity, y: yMove }}
        className="absolute z-10 -translate-x-1/2 flex flex-col items-center"
        style={{
          opacity, 
          y: yMove,
          ...(node.isValley ? { top: '16px' } : { bottom: '16px' })
        }}
      >
        {/* Connector Line */}
        <div 
          className={`w-px ${step.theme.bg.replace('50', '200')} ${step.theme.text.includes('#') ? 'bg-orange-200' : ''} ${node.isValley ? 'mb-2 h-6' : 'mt-2 h-6 order-2'}`} 
          style={step.theme.text.includes('#') ? {} : { backgroundColor: 'currentColor' }}
        />
        
        {/* Colorful Card */}
        <div className={`w-[230px] p-5 rounded-2xl bg-white border ${step.theme.border} shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${step.theme.shadow} hover:-translate-y-1 transition-all duration-300 ${node.isValley ? '' : 'order-1'} bg-gradient-to-br from-white to-${step.theme.bg.replace('bg-', '')}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-8 h-8 rounded-full ${step.theme.bg} ${step.theme.text} text-xs font-black flex items-center justify-center flex-shrink-0 border ${step.theme.border}`}>
              {step.id}
            </span>
            <h3 className={`text-base font-extrabold text-black transition-colors`}>{step.title}</h3>
          </div>
          <p className="text-gray-600 text-[13px] font-medium leading-relaxed">{step.desc}</p>
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

  // Animated line draws from 0 to 1 based on 0 to 0.9 scroll progress
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <section 
      ref={targetRef} 
      className="relative w-full h-[250vh] bg-white font-sans" 
      id="how-we-work"
    >
      {/* Sticky container that stays on screen while we scroll 250vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />

        {/* Heading — positioned neatly above the curve */}
        <div className="relative z-10 text-center mb-6 px-4 -translate-y-8 md:-translate-y-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black">
            How We <span className="text-[#FD5800]">Work</span>
          </h2>
        </div>

        {/* ── TIMELINE CONTAINER ── */}
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-12 mt-16 md:mt-24">
          <div className="relative w-full aspect-[5/2] md:aspect-[5/1] min-h-[300px] md:min-h-[250px]">
            
            {/* SVG Curve */}
            <svg
              viewBox="0 0 1000 200"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              preserveAspectRatio="none"
            >
              <path
                d="M 0,100 C 62.5,100 62.5,150 125,150 C 250,150 250,50 375,50 C 500,50 500,150 625,150 C 750,150 750,50 875,50 C 937.5,50 937.5,100 1000,100"
                fill="none" stroke="#E5E7EB" strokeWidth="3" strokeDasharray="8 6" strokeLinecap="round"
              />
              <motion.path
                d="M 0,100 C 62.5,100 62.5,150 125,150 C 250,150 250,50 375,50 C 500,50 500,150 625,150 C 750,150 750,50 875,50 C 937.5,50 937.5,100 1000,100"
                fill="none" stroke="#FD5800" strokeWidth="4" strokeLinecap="round"
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
