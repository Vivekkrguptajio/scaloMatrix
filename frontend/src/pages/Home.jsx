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

  const sectionOffsets = useRef({ definesus: { top: 0, bottom: 0 }, showreel: { top: 0, bottom: 0 }, services: { top: 0, bottom: 0 }, about: { top: 0, bottom: 0 }, team: { top: 0, bottom: 0 }, faq: { top: 0, bottom: 0 }, founder: { top: 0, bottom: 0 }, contact: { top: 0, bottom: 0 } })

  // Monitor Scroll using Framer Motion (Off-thread)
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const updateOffsets = () => {
      const getOffset = (id) => {
        const el = document.getElementById(id);
        if (!el) return { top: 0, bottom: 0 };
        // window.scrollY is safe here for offset calculation
        const rect = el.getBoundingClientRect();
        return { top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY };
      };

      sectionOffsets.current = {
        definesus: getOffset('definesus'),
        showreel: getOffset('showreel'),
        services: getOffset('services'),
        about: getOffset('about'),
        team: getOffset('team'),
        faq: getOffset('faq'),
        founder: getOffset('founder'),
        contact: getOffset('contact')
      };
    };

    updateOffsets();
    const t1 = setTimeout(updateOffsets, 300);
    const t2 = setTimeout(updateOffsets, 1000);
    window.addEventListener('resize', updateOffsets, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', updateOffsets);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 20;
    if (scrolled !== isScrolled) setScrolled(isScrolled);

    let dark = false;
    let hidden = false;
    const navBottom = latest + 80;
    const { definesus, showreel, services, about, team, faq, founder, contact } = sectionOffsets.current;

    if (showreel && showreel.bottom > 0 && navBottom >= showreel.top && navBottom < showreel.bottom) dark = true;
    if (services && services.bottom > 0 && navBottom >= services.top && navBottom < services.bottom) dark = true;
    if (founder && founder.bottom > 0 && navBottom >= founder.top && navBottom < founder.bottom) dark = true;
    if (team && team.bottom > 0 && navBottom >= team.top && navBottom < team.bottom) dark = true;
    if (contact && contact.top > 0 && navBottom >= contact.top) dark = true;
    
    if (definesus && definesus.bottom > 0 && latest >= definesus.top - 100 && latest < about.bottom - 100) hidden = true;
    
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
