import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import HappyClients from './components/HappyClients'
import GuestList from './components/GuestList'
import CaseStudiesGrid from './components/CaseStudiesGrid'
import Calculator from './components/Calculator'
import Intersection from './components/Intersection'
import Services from './components/Services'
import AiManifesto from './components/AiManifesto'
import CroBrandExercise from './components/CroBrandExercise'
import HowItWorks from './components/HowItWorks'
import HiringPhilosophy from './components/HiringPhilosophy'
import WhoWeDontWorkWith from './components/WhoWeDontWorkWith'
import ContactUs from './components/ContactUs'
import ThePromise from './components/ThePromise'
import Offers from './components/Offers'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <ScrollReveal><FeaturedCaseStudy /></ScrollReveal>
        <ScrollReveal><HappyClients /></ScrollReveal>
        <ScrollReveal><GuestList /></ScrollReveal>
        <ScrollReveal><CaseStudiesGrid /></ScrollReveal>
        <ScrollReveal><Calculator /></ScrollReveal>
        <ScrollReveal><Intersection /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Offers /></ScrollReveal>
        <ScrollReveal><AiManifesto /></ScrollReveal>
        <ScrollReveal><CroBrandExercise /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal><HiringPhilosophy /></ScrollReveal>
        <ScrollReveal><WhoWeDontWorkWith /></ScrollReveal>
        <ContactUs />
        <ScrollReveal><ThePromise /></ScrollReveal>
      </main>

      <Contact reveal={true} />
    </div>
  )
}

export default App

