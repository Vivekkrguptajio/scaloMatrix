import Marquee from './Marquee'
import { FaShopify } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

export function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let animationFrameId
    let startTime = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0)
          startTime = null
          const animate = (now) => {
            if (!startTime) startTime = now
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const currentVal = Math.floor(eased * target)
            setCount(currentVal)
            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }
          animationFrameId = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [target, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const rotatingWords = ['Shopify Stores', 'Landing Pages', 'Custom Themes', 'D2C Brands']

function RotatingText() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block text-[#5a8a00] py-1 px-1">
      <span 
        className={`inline-block transition-all duration-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-3'
        }`}
      >
        {rotatingWords[index]}
      </span>
      <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
        <path d="M2 6C75 2 225 2 298 6" stroke="#5a8a00" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </svg>
    </span>
  )
}

export default function Hero() {
  const storeImages = ['/vcard/vcard1.png', '/vcard/vcard2.png', '/vcard/vcard3.png']

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-20 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden"
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-2deg); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(2deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 20px rgba(253, 88, 0, 0.15); } 50% { box-shadow: 0 0 40px rgba(253, 88, 0, 0.3); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .hero-animate-1 { animation: slideInLeft 0.8s ease-out both; }
        .hero-animate-2 { animation: slideInLeft 0.8s ease-out 0.15s both; }
        .hero-animate-3 { animation: slideInUp 0.8s ease-out 0.3s both; }
        .hero-animate-4 { animation: slideInUp 0.8s ease-out 0.45s both; }
        .hero-animate-5 { animation: slideInUp 0.8s ease-out 0.6s both; }
        .hero-cards-animate { animation: slideInRight 1s ease-out 0.5s both; }
      `}</style>

      {/* Animated gradient orbs background */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FD5800]/[0.04] to-[#FF9066]/[0.02] blur-3xl pointer-events-none" style={{ animation: 'gradientMove 8s ease infinite' }} />
      <div className="absolute bottom-20 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#95BF47]/[0.04] to-[#5a8a00]/[0.02] blur-3xl pointer-events-none" style={{ animation: 'gradientMove 10s ease infinite reverse' }} />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Main Content - Two Column Layout on Desktop */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 mt-8 md:mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8 xl:gap-12">
          
          {/* LEFT COLUMN - Text Content */}
          <div className="flex-1 w-full lg:max-w-[58%] xl:max-w-[55%]">
            
            {/* Top Badges */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-5 hero-animate-1">
              <div className="inline-flex items-center gap-2.5 bg-[#f0fdf4] border border-[#95BF47]/30 text-[#5a8a00] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                <FaShopify className="w-4 h-4 text-[#95BF47]" />
                <span>Shopify Partner</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 bg-orange-50 border border-[#FD5800]/20 text-[#FD5800] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                <span className="w-2 h-2 rounded-full bg-[#FD5800] animate-pulse" />
                <span>CRO-Led</span>
              </div>
            </div>

            {/* Main Heading with Rotating Text */}
            <h1 
              className="text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[52px] font-black font-sans text-black leading-[1.25] md:leading-[1.15] tracking-tight mb-4 md:mb-5 text-center md:text-left hero-animate-2"
            >
              We build <RotatingText />
              <span className="block mt-1 md:mt-2" />
              that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">print money.</span>
            </h1>

            {/* Sub Heading */}
            <p 
              className="text-[14px] sm:text-[15px] md:text-base text-[#555] font-medium max-w-[620px] leading-relaxed mb-6 md:mb-7 text-center md:text-left mx-auto md:mx-0 hero-animate-3"
            >
              From custom Shopify themes to high-converting landing pages — we ship stores that convert <strong className="font-bold text-black">at least 20% better</strong> than what's running today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 mb-7 hero-animate-4">
              <a 
                href="#contact" 
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-full font-bold text-[12px] sm:text-[13px] bg-[#FD5800] text-white border-2 border-transparent hover:shadow-[0_0_30px_rgba(253,88,0,0.3)] hover:scale-105 transition-all duration-300 tracking-wide overflow-hidden"
                style={{ animation: 'pulseGlow 3s ease infinite' }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <FaShopify className="w-5 h-5" />
                  Get your Shopify store
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#math" 
                className="group flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-full font-bold text-[12px] sm:text-[13px] text-gray-700 border-2 border-black/10 hover:border-[#FD5800]/40 hover:text-[#FD5800] hover:bg-orange-50/50 hover:scale-105 hover:shadow-md transition-all duration-300"
              >
                <span>See our work</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 lg:gap-7 hero-animate-5">
              {[
                { value: 20, prefix: '+', suffix: '%', label: 'Guaranteed CVR Lift' },
                { value: 450, prefix: '', suffix: '+', label: 'Stores Shipped' },
                { value: 98, prefix: '', suffix: '+', label: 'NPS Score · 2025' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start group cursor-default">
                  <span className="text-[#FD5800] text-2xl md:text-3xl font-black tracking-tighter group-hover:scale-110 transition-transform duration-300">
                    {stat.prefix}<AnimatedCounter target={stat.value} />{stat.suffix}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-500 tracking-wide uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Floating Store Previews */}
          <div className="flex-1 w-full lg:max-w-[45%] xl:max-w-[48%] relative hidden lg:flex items-center justify-center hero-cards-animate overflow-hidden p-2" style={{ minHeight: '440px' }}>
            
            {/* Main large card */}
            <div 
              className="relative z-20 w-[230px] xl:w-[280px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white group cursor-pointer hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
              style={{ animation: 'float1 6s ease-in-out infinite' }}
            >
              <div className="relative">
                <img src={storeImages[0]} alt="Shopify Store Preview" className="w-full h-[300px] xl:h-[360px] object-cover object-top" />
                <div className="absolute top-3 left-3">
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#95BF47] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    <FaShopify className="w-3 h-3" />
                    Shopify Store
                  </div>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-[#FD5800] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                    <AnimatedCounter target={44} prefix="+" suffix="% CVR ↑" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second card - offset behind */}
            <div 
              className="absolute z-10 top-2 right-2 xl:right-0 w-[185px] xl:w-[225px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white opacity-90"
              style={{ animation: 'float2 7s ease-in-out infinite', transform: 'rotate(4deg)' }}
            >
              <img src={storeImages[1]} alt="Shopify Store" className="w-full h-[240px] xl:h-[290px] object-cover object-top" />
              <div className="absolute top-3 left-3">
                <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#95BF47] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  <FaShopify className="w-3 h-3" />
                  Shopify Store
                </div>
              </div>
            </div>

            {/* Third card - offset other side */}
            <div 
              className="absolute z-30 bottom-2 left-2 xl:left-0 w-[160px] xl:w-[195px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white"
              style={{ animation: 'float3 5s ease-in-out infinite', transform: 'rotate(-3deg)' }}
            >
              <img src={storeImages[2]} alt="Shopify Store" className="w-full h-[200px] xl:h-[245px] object-cover object-top" />
              <div className="absolute bottom-3 left-3">
                <div className="bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                  <AnimatedCounter target={50} prefix="+" suffix="% Sales ↑" />
                </div>
              </div>
            </div>

            {/* Floating Stats Bubble - Revenue */}
            <div 
              className="absolute z-40 top-2 left-2 bg-white rounded-xl shadow-lg border border-gray-100 px-2.5 py-2"
              style={{ animation: 'float2 4s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase">Revenue</div>
                  <div className="text-xs font-black text-green-600">
                    <AnimatedCounter target={127} prefix="+" suffix="%" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Bubble - Orders */}
            <div 
              className="absolute z-40 top-[42%] right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-2.5 py-2"
              style={{ animation: 'float3 5s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#FD5800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase">Orders</div>
                  <div className="text-xs font-black text-[#FD5800]">
                    <AnimatedCounter target={89} prefix="+" suffix="%" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Bubble - AOV */}
            <div 
              className="absolute z-40 bottom-2 left-[28%] bg-white rounded-xl shadow-lg border border-gray-100 px-2.5 py-2"
              style={{ animation: 'float1 6s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase">Avg. AOV</div>
                  <div className="text-xs font-black text-purple-600">
                    <AnimatedCounter target={2450} prefix="₹" />
                  </div>
                </div>
              </div>
            </div>

            {/* Shopify bag floating icon */}
            <div 
              className="absolute z-40 bottom-8 right-6 w-10 h-10 rounded-lg bg-[#95BF47] shadow-lg flex items-center justify-center"
              style={{ animation: 'float1 5s ease-in-out infinite' }}
            >
              <FaShopify className="w-6 h-6 text-white" />
            </div>
          </div>

        </div>


      </div>

      {/* Marquee at the bottom */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 z-30 mt-10 md:mt-14">
        <Marquee />
      </div>
    </section>
  )
}
