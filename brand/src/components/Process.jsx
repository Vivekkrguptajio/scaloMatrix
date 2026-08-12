import { useState } from 'react'
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
    color: '#5D42F5',
    gradient: 'from-[#5D42F5] to-[#714AF0]',
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
    color: '#C933C7',
    gradient: 'from-[#C933C7] to-[#FF3385]',
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
    color: '#FF6633',
    gradient: 'from-[#FF6633] to-[#FD5800]',
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
    color: '#111',
    gradient: 'from-[#111] to-[#333]',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-12 rounded-[40px] md:rounded-[60px] mx-0">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-[#FD5800]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FD5800] uppercase">How We Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase text-[#111] mb-6">
            Our Branding{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D42F5] via-[#C933C7] to-[#F1556C]">
              Process
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            A battle-tested framework that turns vague ideas into brands people obsess over.
          </p>
        </div>

        {/* Process Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">

          {/* Left: Step Selector */}
          <div className="flex flex-col gap-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative w-full text-left rounded-2xl p-6 transition-all duration-400 overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-r ' + step.gradient + ' text-white shadow-xl'
                      : 'bg-[#f8f7f4] text-gray-700 hover:bg-[#f0eeea] border border-transparent hover:border-black/5'
                  }`}
                >
                  {/* Background number */}
                  {isActive && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[5rem] font-black leading-none text-white/10 select-none pointer-events-none">
                      {step.id}
                    </span>
                  )}

                  <div className="relative z-10">
                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                      {step.phase}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <h3 className={`text-lg font-black tracking-tight ${isActive ? 'text-white' : 'text-gray-900'}`}>
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
                  className="flex-1 h-1 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: index <= activeStep ? step.color : '#e5e5e5',
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
              className="bg-[#fcfcfa] rounded-[30px] overflow-hidden shadow-2xl shadow-black/5 border border-black/5"
            >
              {/* Card Header */}
              <div
                className="relative p-10 md:p-14 overflow-hidden min-h-[260px] flex flex-col justify-end"
                style={{ background: `linear-gradient(135deg, ${steps[activeStep].color}, ${steps[activeStep].color}dd)` }}
              >
                {/* Big background number */}
                <span className="absolute -right-6 -top-8 text-[12rem] font-black leading-none text-white/[0.07] select-none pointer-events-none">
                  {steps[activeStep].id}
                </span>

                {/* Duration badge */}
                <div className="absolute top-8 right-8 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5">
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
              <div className="p-10 md:p-14">
                <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                  {steps[activeStep].description}
                </p>

                {/* Deliverables */}
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: steps[activeStep].color }}>
                      Key Deliverables
                    </h4>
                    <div className="h-[1px] flex-grow bg-black/10" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {steps[activeStep].details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-4 bg-white rounded-xl p-4 border border-black/5 shadow-sm group hover:shadow-md transition-shadow"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-sm"
                          style={{ backgroundColor: steps[activeStep].color + '15', color: steps[activeStep].color }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <span className="text-gray-800 font-semibold text-sm">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="group flex items-center gap-3 font-bold text-sm py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 text-white shadow-lg"
                  style={{ backgroundColor: steps[activeStep].color }}
                >
                  Start with this phase
                  <div className="bg-white/20 rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
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