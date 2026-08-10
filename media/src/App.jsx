import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import ServicesGrid from './components/ServicesGrid'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import TeamMembers from './components/TeamMembers'
import ContactUs from './components/ContactUs'
import ThePromise from './components/ThePromise'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './index.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, 
      wheelMultiplier: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
  
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      {/* Hero - Dark full-screen */}
      <Hero />

      {/* Main Content Block */}
      <main className="relative z-20 bg-white">
        <ScrollReveal><ServicesGrid /></ScrollReveal>
        <ScrollReveal><WhyUs /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><TeamMembers /></ScrollReveal>
        <ScrollReveal><ThePromise /></ScrollReveal>
      </main>

      {/* Case Studies - Dark section */}
      <CaseStudies />

      {/* Contact Form - Dark section */}
      <ContactUs />

      {/* Footer */}
      <Contact reveal={false} />
    </div>
  )
}

export default App
