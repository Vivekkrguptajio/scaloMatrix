import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'

// Above-the-fold components (eager load)
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

// Below-the-fold components (lazy load for faster initial paint)
const Showreel = lazy(() => import('../components/Showreel'))
const ServicesCards = lazy(() => import('../components/ServicesCards'))
const About = lazy(() => import('../components/About'))
const DefinesUs = lazy(() => import('../components/DefinesUs'))
const Toolkit = lazy(() => import('../components/Toolkit'))
const HowWeWork = lazy(() => import('../components/HowWeWork'))
const SelectedWork = lazy(() => import('../components/SelectedWork'))
const Insights = lazy(() => import('../components/Insights'))
const Founder = lazy(() => import('../components/Founder'))
const TeamMembers = lazy(() => import('../components/TeamMembers'))
const Contact = lazy(() => import('../components/Contact'))
const ClientLogos = lazy(() => import('../components/ClientLogos'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const FAQ = lazy(() => import('../components/FAQ'))
const ContactUs = lazy(() => import('../components/ContactUs'))

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)

  // Removed static sectionOffsets due to lazy loading issues.
  
  // Monitor Scroll using Framer Motion (Off-thread)
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 20;
    if (scrolled !== isScrolled) setScrolled(isScrolled);

    let dark = false;
    let hidden = false;
    
    // Dynamically check bounds to avoid Suspense/lazy-load measurement issues
    const checkDark = (id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // If the navbar (approx 80px tall) is over the element
        if (rect.top <= 80 && rect.bottom >= 80) {
          return true;
        }
      }
      return false;
    };

    if (checkDark('showreel') || checkDark('services') || checkDark('founder') || checkDark('team') || checkDark('contact')) {
      dark = true;
    }
    
    const definesusEl = document.getElementById('definesus');
    const aboutEl = document.getElementById('about');
    if (definesusEl && aboutEl) {
      const defRect = definesusEl.getBoundingClientRect();
      const aboutRect = aboutEl.getBoundingClientRect();
      // Original logic: hidden if latest >= definesus.top - 100 && latest < about.bottom - 100
      if (defRect.top <= 100 && aboutRect.bottom >= 100) hidden = true;
    }
    
    if (isDarkTheme !== dark) setIsDarkTheme(dark);
    if (isNavbarHidden !== hidden) setIsNavbarHidden(hidden);
  });

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      
      {/* ═══════ NAVBAR ═══════ */}
      <Navbar scrolled={scrolled} activeSection={activeSection} isDarkTheme={isDarkTheme} isHidden={isNavbarHidden} />

      {/* ═══════ MAIN CONTENT (z-20) ═══════ */}
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero startAnimation={true} />
        <Suspense fallback={null}>
          <Showreel />
          <ServicesCards />
          <div className="content-auto"><DefinesUs /></div>
          <About />
          <div className="content-auto min-h-[600px]"><Toolkit /></div>
          <div className="content-auto min-h-[800px]"><HowWeWork /></div>
          <div className="content-auto min-h-[600px]"><SelectedWork /></div>
          <div className="content-auto min-h-[600px]"><Testimonials /></div>
          <div className="content-auto min-h-[600px]"><Insights /></div>
          <div className="content-auto min-h-[300px]"><ClientLogos /></div>
          <Founder />
          <TeamMembers />
          <FAQ />
          <ContactUs />
        </Suspense>
      </main>

      {/* ═══════ CONTACT / FOOTER (z-0) ═══════ */}
      <Suspense fallback={null}>
        <Contact reveal={true} />
      </Suspense>
    </div>
  )
}
