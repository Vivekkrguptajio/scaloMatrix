import React, { useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroVCards from './components/HeroVCards'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './index.css'

const FeaturedCaseStudy = lazy(() => import('./components/FeaturedCaseStudy'))
const HappyClients = lazy(() => import('./components/HappyClients'))
const GuestList = lazy(() => import('./components/GuestList'))
const CaseStudiesGrid = lazy(() => import('./components/CaseStudiesGrid'))
const Calculator = lazy(() => import('./components/Calculator'))
const AiManifesto = lazy(() => import('./components/AiManifesto'))
const CroBrandExercise = lazy(() => import('./components/CroBrandExercise'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const HiringPhilosophy = lazy(() => import('./components/HiringPhilosophy'))
const WhoWeDontWorkWith = lazy(() => import('./components/WhoWeDontWorkWith'))
const TeamMembers = lazy(() => import('./components/TeamMembers'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const ThePromise = lazy(() => import('./components/ThePromise'))
const Offers = lazy(() => import('./components/Offers'))
const Contact = lazy(() => import('./components/Contact'))
const ScrollReveal = lazy(() => import('./components/ScrollReveal'))
const CustomCursor = lazy(() => import('./components/CustomCursor'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.8,
      infinite: false,
      syncTouch: true,
      syncTouchLerp: 0.04,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <Suspense fallback={null}>
        <CustomCursor />
        <ScrollToTop />
      </Suspense>
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <HeroVCards />
        
        <Suspense fallback={<div className="w-full h-[50vh] flex items-center justify-center bg-gray-50"><div className="w-8 h-8 border-4 border-[#FD5800] border-t-transparent rounded-full animate-spin"></div></div>}>
          <ScrollReveal><FeaturedCaseStudy /></ScrollReveal>
          <ScrollReveal><HappyClients /></ScrollReveal>
          <ScrollReveal><GuestList /></ScrollReveal>
          <ScrollReveal><CaseStudiesGrid /></ScrollReveal>
          <ScrollReveal><Calculator /></ScrollReveal>
          <ScrollReveal><Offers /></ScrollReveal>
          <ScrollReveal><AiManifesto /></ScrollReveal>
          <ScrollReveal><CroBrandExercise /></ScrollReveal>
          <ScrollReveal><HowItWorks /></ScrollReveal>
          <ScrollReveal><HiringPhilosophy /></ScrollReveal>
          <ScrollReveal><WhoWeDontWorkWith /></ScrollReveal>
          <ScrollReveal><TeamMembers /></ScrollReveal>
          <ContactUs />
          <ScrollReveal><ThePromise /></ScrollReveal>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Contact reveal={true} />
      </Suspense>
    </div>
  )
}

export default App

