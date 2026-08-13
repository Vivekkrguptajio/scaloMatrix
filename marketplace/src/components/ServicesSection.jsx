import React from 'react';
import { motion } from 'framer-motion';

// Cartoon 3D Blue Sports Car Vector Illustration
const CartoonBlueCar = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#09152a] to-[#040a16] p-4 overflow-hidden">
    {/* Blue Neon Road Underglow */}
    <div className="absolute bottom-2 w-4/5 h-8 bg-blue-500/40 rounded-full blur-xl animate-pulse" />
    <svg viewBox="0 0 400 180" className="w-full h-auto max-h-36 drop-shadow-[0_15px_25px_rgba(59,130,246,0.6)]">
      {/* Shadow */}
      <ellipse cx="200" cy="160" rx="170" ry="12" fill="#000" opacity="0.6" />
      {/* Car Body Base */}
      <path d="M 40 135 Q 20 135 15 120 Q 10 100 35 95 L 90 90 Q 130 50 190 45 L 280 48 Q 340 55 365 95 L 385 110 Q 395 125 380 135 Z" fill="url(#blueGrad)" stroke="#60A5FA" strokeWidth="3" />
      {/* Roof & Windshield */}
      <path d="M 100 90 Q 135 52 190 48 L 275 51 Q 315 65 330 90 Z" fill="#1E293B" stroke="#38BDF8" strokeWidth="2.5" />
      {/* Windows Glare */}
      <path d="M 115 85 Q 145 58 190 54 L 265 56 Q 295 68 310 85 Z" fill="#38BDF8" opacity="0.4" />
      {/* Side Mirror */}
      <ellipse cx="120" cy="85" rx="8" ry="5" fill="#2563EB" stroke="#60A5FA" strokeWidth="1.5" />
      {/* Headlights (Glowing Neon) */}
      <ellipse cx="20" cy="115" rx="10" ry="6" fill="#60A5FA" className="animate-pulse" />
      <ellipse cx="20" cy="115" rx="5" ry="3" fill="#FFF" />
      <polygon points="20,115 -40,90 -40,140" fill="url(#headlightBlueGlow)" opacity="0.5" />
      {/* Taillights */}
      <ellipse cx="380" cy="115" rx="6" ry="8" fill="#EF4444" />
      {/* Front Wheel */}
      <circle cx="85" cy="135" r="28" fill="#0F172A" stroke="#334155" strokeWidth="4" />
      <circle cx="85" cy="135" r="16" fill="#2563EB" stroke="#93C5FD" strokeWidth="3" />
      <circle cx="85" cy="135" r="6" fill="#FFF" />
      {/* Rear Wheel */}
      <circle cx="310" cy="135" r="28" fill="#0F172A" stroke="#334155" strokeWidth="4" />
      <circle cx="310" cy="135" r="16" fill="#2563EB" stroke="#93C5FD" strokeWidth="3" />
      <circle cx="310" cy="135" r="6" fill="#FFF" />
      {/* Speed Lines Accent */}
      <line x1="330" y1="40" x2="390" y2="40" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <line x1="350" y1="28" x2="395" y2="28" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="headlightBlueGlow" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Cartoon 3D Green Sports Car Vector Illustration
const CartoonGreenCar = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#061e14] to-[#020b07] p-4 overflow-hidden">
    {/* Green Neon Road Underglow */}
    <div className="absolute bottom-2 w-4/5 h-8 bg-emerald-500/40 rounded-full blur-xl animate-pulse" />
    <svg viewBox="0 0 400 180" className="w-full h-auto max-h-36 drop-shadow-[0_15px_25px_rgba(16,185,129,0.6)]">
      {/* Shadow */}
      <ellipse cx="200" cy="160" rx="170" ry="12" fill="#000" opacity="0.6" />
      {/* Car Body Base */}
      <path d="M 40 135 Q 20 135 15 120 Q 10 100 35 95 L 90 90 Q 130 50 190 45 L 280 48 Q 340 55 365 95 L 385 110 Q 395 125 380 135 Z" fill="url(#greenGrad)" stroke="#34D399" strokeWidth="3" />
      {/* Roof & Windshield */}
      <path d="M 100 90 Q 135 52 190 48 L 275 51 Q 315 65 330 90 Z" fill="#064E3B" stroke="#6EE7B7" strokeWidth="2.5" />
      {/* Windows Glare */}
      <path d="M 115 85 Q 145 58 190 54 L 265 56 Q 295 68 310 85 Z" fill="#6EE7B7" opacity="0.4" />
      {/* Side Mirror */}
      <ellipse cx="120" cy="85" rx="8" ry="5" fill="#059669" stroke="#34D399" strokeWidth="1.5" />
      {/* Headlights (Glowing Neon) */}
      <ellipse cx="20" cy="115" rx="10" ry="6" fill="#34D399" className="animate-pulse" />
      <ellipse cx="20" cy="115" rx="5" ry="3" fill="#FFF" />
      <polygon points="20,115 -40,90 -40,140" fill="url(#headlightGreenGlow)" opacity="0.5" />
      {/* Taillights */}
      <ellipse cx="380" cy="115" rx="6" ry="8" fill="#EF4444" />
      {/* Front Wheel */}
      <circle cx="85" cy="135" r="28" fill="#022C22" stroke="#065F46" strokeWidth="4" />
      <circle cx="85" cy="135" r="16" fill="#059669" stroke="#A7F3D0" strokeWidth="3" />
      <circle cx="85" cy="135" r="6" fill="#FFF" />
      {/* Rear Wheel */}
      <circle cx="310" cy="135" r="28" fill="#022C22" stroke="#065F46" strokeWidth="4" />
      <circle cx="310" cy="135" r="16" fill="#059669" stroke="#A7F3D0" strokeWidth="3" />
      <circle cx="310" cy="135" r="6" fill="#FFF" />
      {/* Racing Stripes */}
      <path d="M 60 92 L 350 94" stroke="#A7F3D0" strokeWidth="4" opacity="0.6" strokeDasharray="15,10" />

      {/* Gradients */}
      <defs>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="headlightGreenGlow" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const servicesData = [
  {
    id: 'audit',
    lane: 'ORANGE LANE',
    titleLine1: 'PPC AUDIT &',
    titleLine2: 'STRATEGY',
    desc: 'Identify gaps, wasted spend, and low-ROI areas with a professional 90-point review of your ad account.',
    features: [
      'Search term waste & negative keyword audit',
      'ACoS & TACOS benchmark analysis',
      'Listing conversion & placement review',
      'Custom 90-day action roadmap'
    ],
    cta: 'Book PPC Audit',
    theme: {
      cardBg: 'bg-[#0E0E12] border border-orange-500/40 shadow-[0_0_35px_rgba(253,88,0,0.15)]',
      titleColor: 'text-[#FD5800]',
      iconBg: 'bg-gradient-to-br from-[#FD5800] to-amber-600 shadow-lg shadow-[#FD5800]/30',
      checkBg: 'bg-[#FD5800] text-white',
      badgeBg: 'bg-orange-500/10 text-[#FD5800] border-orange-500/30',
      carGlow: 'from-orange-500/40 via-orange-500/10 to-transparent',
      btnBg: 'bg-[#FD5800] hover:bg-orange-600 text-white shadow-lg shadow-[#FD5800]/30'
    },
    // Using generated Pixar style 3D cartoon orange car image!
    carType: 'image',
    carImage: '/cartoon_orange_car.png',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 'management',
    lane: 'BLUE LANE',
    tag: '★ MOST POPULAR • FULL AGENCY',
    titleLine1: 'FULL-FUNNEL',
    titleLine2: 'CAMPAIGN MANAGEMENT',
    desc: 'End-to-end setup, optimization, bid strategies, and reporting—managed directly by senior agency strategists.',
    features: [
      'Sponsored Products, Brands & Display Ads',
      'Daily bid adjustments & dayparting',
      'Product launch & keyword ranking pushes',
      'Weekly transparent video reports'
    ],
    cta: 'Explore Full Management',
    featured: true,
    theme: {
      cardBg: 'bg-[#0B132B] border-2 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.35)]',
      titleColor: 'text-blue-400',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/40',
      checkBg: 'bg-blue-500 text-white',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
      carGlow: 'from-blue-500/50 via-blue-500/15 to-transparent',
      btnBg: 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/40'
    },
    carType: 'component',
    carComponent: <CartoonBlueCar />,
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'coaching',
    lane: 'GREEN LANE',
    titleLine1: '1-ON-1',
    titleLine2: 'MENTORSHIP',
    desc: 'Ideal for DIY sellers. Learn to run, analyze, and scale campaigns through personalized private sessions.',
    features: [
      'Direct 1-on-1 private mentorship with senior PPC leads',
      'Step-by-step account teardowns',
      'Bid optimization templates & SOPs',
      'Private Q&A support line'
    ],
    cta: 'Apply for Coaching',
    theme: {
      cardBg: 'bg-[#0B1510] border border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.15)]',
      titleColor: 'text-emerald-400',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30',
      checkBg: 'bg-emerald-500 text-white',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      carGlow: 'from-emerald-500/40 via-emerald-500/10 to-transparent',
      btnBg: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
    },
    carType: 'component',
    carComponent: <CartoonGreenCar />,
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export default function ServicesSection({ onOpenModal }) {
  return (
    <section id="services" className="py-24 bg-[#050608] text-white relative overflow-hidden font-sans border-t border-gray-800">
      
      {/* Background Racing Glows & Speed Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(253,88,0,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD5800]/40 bg-orange-500/10 text-[#FD5800] font-black text-xs uppercase tracking-widest">
            STRUGGLING TO SCALE ON AMAZON?
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] via-orange-400 to-amber-500">GROWTH LANE</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you need hands-off full management, a diagnostic audit, or 1-on-1 coaching — choose the high-speed strategy for your store.
          </p>
        </div>

        {/* 3 Growth Lane Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {servicesData.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl ${srv.theme.cardBg} p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden group`}
            >
              {/* Featured Top Ribbon Badge */}
              {srv.tag && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-b-xl shadow-lg border border-blue-400/40 z-20 whitespace-nowrap">
                  {srv.tag}
                </div>
              )}

              <div>
                {/* Header Icon & Title */}
                <div className="flex items-start gap-4 mb-6 pt-2">
                  <div className={`w-12 h-12 rounded-2xl ${srv.theme.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {srv.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-black leading-tight tracking-tight uppercase ${srv.theme.titleColor}`}>
                      {srv.titleLine1} <br />
                      {srv.titleLine2}
                    </h3>
                  </div>
                </div>

                {/* Subtitle Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {srv.desc}
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/10 mb-6" />

                {/* Features Checkmark List */}
                <div className="space-y-3 mb-8">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs text-gray-200">
                      <div className={`w-4 h-4 rounded-full ${srv.theme.checkBg} flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 shadow-sm`}>
                        ✓
                      </div>
                      <span className="font-medium leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Cartoon Sports Car Graphic & CTA Action Button */}
              <div className="relative pt-4 mt-auto">
                
                {/* Cartoon Sports Car Container */}
                <div className="relative w-full h-44 mb-6 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {srv.carType === 'image' ? (
                    <img
                      src={srv.carImage}
                      alt={srv.titleLine2}
                      className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 transition-all"
                    />
                  ) : (
                    srv.carComponent
                  )}
                  {/* Bottom Gradient Underglow Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${srv.theme.carGlow} pointer-events-none`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent opacity-70 pointer-events-none" />
                </div>

                {/* Action CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenModal(srv.id === 'audit' ? 'audit' : 'strategy')}
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-2 ${srv.theme.btnBg}`}
                >
                  <span>{srv.cta}</span>
                  <span className="text-sm">→</span>
                </motion.button>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
