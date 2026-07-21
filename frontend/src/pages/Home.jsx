import { useState, useEffect } from 'react'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
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

  // Monitor Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Scroll spy logic removed based on user request

      // Check for dark theme
      let dark = false;
      const navBottom = window.scrollY + 80;
      const founder = document.getElementById('founder');
      const contact = document.getElementById('contact');

      if (founder && navBottom >= founder.offsetTop && navBottom < founder.offsetTop + founder.offsetHeight) {
        dark = true;
      }
      if (contact && navBottom >= contact.offsetTop) {
        dark = true;
      }
      setIsDarkTheme(dark);
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-white overflow-x-clip font-sans">
      
      {/* ═══════ NAVBAR ═══════ */}
      <Navbar scrolled={scrolled} activeSection={activeSection} isDarkTheme={isDarkTheme} />

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="transition-all duration-1000 opacity-100 blur-0">
        <Hero startAnimation={true} />
        <ClientLogos />
        <About />
        <Toolkit />
        <HowWeWork />
        <SelectedWork />
        <Testimonials />
        <Insights />
        <FAQ />
        <Founder />
        <Contact />
      </main>
    </div>
  )
}
