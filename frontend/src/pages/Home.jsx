import { useState, useEffect, useRef } from 'react'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import DefinesUs from '../components/DefinesUs'
import Toolkit from '../components/Toolkit'
import HowWeWork from '../components/HowWeWork'
import SelectedWork from '../components/SelectedWork'
import Insights from '../components/Insights'
import Founder from '../components/Founder'
import Contact from '../components/Contact'
import ClientLogos from '../components/ClientLogos'
import Marquee from '../components/Marquee'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const sectionOffsets = useRef({ founder: { top: 0, bottom: 0 }, contact: { top: 0, bottom: 0 } })

  // Monitor Scroll
  useEffect(() => {
    let ticking = false;

    const updateOffsets = () => {
      const founder = document.getElementById('founder');
      const contact = document.getElementById('contact');
      if (founder) {
        sectionOffsets.current.founder = {
          top: founder.offsetTop,
          bottom: founder.offsetTop + founder.offsetHeight
        };
      }
      if (contact) {
        sectionOffsets.current.contact = {
          top: contact.offsetTop,
          bottom: contact.offsetTop + contact.offsetHeight
        };
      }
    };

    // Initial offset calculation
    setTimeout(updateOffsets, 500);
    window.addEventListener('resize', updateOffsets);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(prev => prev !== isScrolled ? isScrolled : prev);

          // Check for dark theme efficiently
          let dark = false;
          const navBottom = window.scrollY + 80;
          const { founder, contact } = sectionOffsets.current;

          if (founder.bottom > 0 && navBottom >= founder.top && navBottom < founder.bottom) {
            dark = true;
          }
          if (contact.top > 0 && navBottom >= contact.top) {
            dark = true;
          }
          
          setIsDarkTheme(prev => prev !== dark ? dark : prev);
          
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateOffsets);
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-white font-sans">
      
      {/* ═══════ NAVBAR ═══════ */}
      <Navbar scrolled={scrolled} activeSection={activeSection} isDarkTheme={isDarkTheme} />

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="relative z-10 bg-white transition-all duration-1000 opacity-100 blur-0">
        <Hero startAnimation={true} />
        <ClientLogos />
        <About />
        <DefinesUs />
        <Toolkit />
        <HowWeWork />
        <SelectedWork />
        <Testimonials />
        <Insights />
        <FAQ />
        <Founder />
      </main>
      <Contact reveal={true} />
    </div>
  )
}
