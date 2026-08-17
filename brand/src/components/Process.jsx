import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const steps = [
  {
    id: '01',
    phase: 'Phase 01',
    title: 'Discovery & Research',
    description: 'We dig deep — audits, interviews, competitor analysis, and audience research. We don\'t assume. We uncover what actually matters.',
    details: [
      'Brand & market audit',
      'Competitor deep-dive',
      'Audience persona mapping',
      'Stakeholder interviews',
    ],
    duration: '1–2 Weeks',
    color: '#1A1A1A',
    gradient: 'from-[#111] to-[#222]',
  },
  {
    id: '02',
    phase: 'Phase 02',
    title: 'Conceptualization',
    description: 'Strategy meets imagination. We define your positioning, craft your narrative, and build mood boards that set the creative direction.',
    details: [
      'Positioning framework',
      'Narrative architecture',
      'Mood boards & direction',
      'Content strategy outline',
    ],
    duration: '2–3 Weeks',
    color: '#2A2A2A',
    gradient: 'from-[#222] to-[#333]',
  },
  {
    id: '03',
    phase: 'Phase 03',
    title: 'Design Execution',
    description: 'This is where it gets real — logos, typography, assets, digital products, and campaigns. Pixel-perfect, purpose-driven.',
    details: [
      'Visual identity design',
      'UI/UX prototyping',
      'Campaign creative',
      'Asset production',
    ],
    duration: '3–4 Weeks',
    color: '#3A3A3A',
    gradient: 'from-[#333] to-[#444]',
  },
  {
    id: '04',
    phase: 'Phase 04',
    title: 'Brand Guidelines & Launch',
    description: 'We hand you a comprehensive brand bible and launch roadmap. Your team knows exactly how to use every element. No ambiguity.',
    details: [
      'Complete brand guidelines',
      'Usage documentation',
      'Launch strategy & rollout',
      'Team onboarding session',
    ],
    duration: '1–2 Weeks',
    color: '#FD5800',
    gradient: 'from-[#FD5800] to-[#FF7022]',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [glowingStep, setGlowingStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingStep((prev) => (prev + 1) % steps.length);
    }, 2000); // Change glowing border every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-6 lg:px-12 rounded-[40px] md:rounded-[60px] mx-0 border border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#FD5800]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FD5800] uppercase">How We Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase text-white mb-6">
            Our Branding{' '}
            <span className="text-[#FD5800] drop-shadow-[0_0_20px_rgba(253,88,0,0.4)]">
              Process
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            A battle-tested framework that turns vague ideas into brands people obsess over.
          </p>
        </div>

        {/* Process Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">

          {/* Left: Step Selector */}
          <div className="flex flex-col gap-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index
              const isGlowing = glowingStep === index
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative w-full text-left rounded-2xl p-6 transition-all duration-400 overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-r ' + step.gradient + ' text-white shadow-xl shadow-black/50'
                      : 'bg-[#111] text-gray-400 hover:bg-[#1a1a1a]'
                  } ${
                    isGlowing 
                      ? 'border border-[#FD5800] ring-2 ring-[#FD5800]/50 shadow-[0_0_15px_rgba(253,88,0,0.3)] z-10' 
                      : (isActive ? 'border border-white/10' : 'border border-white/5 hover:border-white/20')
                  }`}
                >
                  {/* Background number */}
                  {isActive && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[5rem] font-black leading-none text-white/5 select-none pointer-events-none">
                      {step.id}
                    </span>
                  )}

                  <div className="relative z-10">
                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isActive ? 'text-white/70' : 'text-gray-500'}`}>
                      {step.phase}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <h3 className={`text-lg font-black tracking-tight ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {step.title}
                      </h3>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm"
                        >
                          <FaArrowRight size={10} className="text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}

            {/* Timeline progress bar */}
            <div className="flex items-center gap-2 mt-4 px-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex-1 h-1 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{
                    backgroundColor: index <= activeStep ? (index === steps.length -1 ? '#FD5800' : '#444') : '#222',
                    boxShadow: index <= activeStep && index === steps.length -1 ? '0 0 10px #FD5800' : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Active Step Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#111] rounded-[30px] overflow-hidden shadow-2xl shadow-black/50 border border-white/5"
            >
              {/* Card Header */}
              <div
                className="relative p-10 md:p-14 overflow-hidden min-h-[260px] flex flex-col justify-end"
                style={{ background: `linear-gradient(135deg, ${steps[activeStep].color}, ${steps[activeStep].color}dd)` }}
              >
                {/* Big background number */}
                <span className="absolute -right-6 -top-8 text-[12rem] font-black leading-none text-white/[0.03] select-none pointer-events-none">
                  {steps[activeStep].id}
                </span>

                {/* Duration badge */}
                <div className="absolute top-8 right-8 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5">
                  <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                    ⏱ {steps[activeStep].duration}
                  </span>
                </div>

                <span className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                  {steps[activeStep].phase}
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] max-w-[85%]">
                  {steps[activeStep].title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-10 md:p-14 bg-[#111]">
                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                  {steps[activeStep].description}
                </p>

                {/* Deliverables */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: activeStep === 3 ? '#FD5800' : '#fff' }}>
                      Key Deliverables
                    </h4>
                    <div className="h-[1px] flex-grow bg-white/10" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {steps[activeStep].details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-4 bg-[#1A1A1A] rounded-xl p-4 border border-white/5 shadow-sm group hover:border-[#FD5800]/50 transition-colors"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-sm"
                          style={{ backgroundColor: activeStep === 3 ? '#FD5800' : '#333' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <span className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="group flex items-center gap-3 font-bold text-sm py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 text-white shadow-lg"
                  style={{ backgroundColor: activeStep === 3 ? '#FD5800' : '#222', border: activeStep === 3 ? 'none' : '1px solid rgba(255,255,255,0.1)' }}
                >
                  Start with this phase
                  <div className="bg-white/10 group-hover:bg-white group-hover:text-black rounded-full p-1.5 flex items-center justify-center transition-colors duration-300 group-hover:translate-x-1">
                    <FaArrowRight size={10} />
                  </div>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}