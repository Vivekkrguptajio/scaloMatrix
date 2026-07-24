import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

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
import TeamMembers from '../components/TeamMembers'
import Contact from '../components/Contact'
import ClientLogos from '../components/ClientLogos'
import Marquee from '../components/Marquee'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)

  const sectionOffsets = useRef({ about: { top: 0, bottom: 0 }, team: { top: 0, bottom: 0 }, founder: { top: 0, bottom: 0 }, contact: { top: 0, bottom: 0 } })
  const teamSpacerRef = useRef(null)

  // When the bottom of the spacer leaves the bottom of the viewport ("end end") 
  // until the bottom of the spacer hits the top of the viewport ("end start")
  const { scrollYProgress: teamScroll } = useScroll({
    target: teamSpacerRef,
    offset: ["end end", "end start"]
  });
  
  // Translate the fixed TeamMembers component up along with the page scroll
  const teamY = useTransform(teamScroll, [0, 1], ["0%", "-100%"]);

  // Monitor Scroll
  useEffect(() => {
    let ticking = false;

    const updateOffsets = () => {
      const about = document.getElementById('about');
      const team = document.getElementById('team-spacer'); // Measure the spacer
      const founder = document.getElementById('founder');
      const contact = document.getElementById('contact');
      
      const scrollY = window.scrollY;

      if (about) {
        const rect = about.getBoundingClientRect();
        sectionOffsets.current.about = {
          top: rect.top + scrollY,
          bottom: rect.bottom + scrollY
        };
      }
      
      if (team) {
        const rect = team.getBoundingClientRect();
        sectionOffsets.current.team = {
          top: rect.top + scrollY,
          bottom: rect.bottom + scrollY
        };
      }

      if (founder) {
        const rect = founder.getBoundingClientRect();
        sectionOffsets.current.founder = {
          top: rect.top + scrollY,
          bottom: rect.bottom + scrollY
        };
      }
      
      if (contact) {
        const rect = contact.getBoundingClientRect();
        sectionOffsets.current.contact = {
          top: rect.top + scrollY,
          bottom: rect.bottom + scrollY
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

          let dark = false;
          let hidden = false;
          const navBottom = window.scrollY + 80;
          const { about, team, founder, contact } = sectionOffsets.current;

          if (founder.bottom > 0 && navBottom >= founder.top && navBottom < founder.bottom) {
            dark = true;
          }
          if (team.bottom > 0 && navBottom >= team.top && navBottom < team.bottom) {
            dark = true;
          }
          if (contact.top > 0 && navBottom >= contact.top) {
            dark = true;
          }
          
          // Hide navbar when about or team section is significantly in view
          if (about.bottom > 0 && window.scrollY >= about.top - 100 && window.scrollY < about.bottom - 100) {
            hidden = true;
          }
          if (team.bottom > 0 && window.scrollY >= team.top - 100 && window.scrollY < team.bottom - 100) {
            hidden = true;
          }
          
          setIsDarkTheme(prev => prev !== dark ? dark : prev);
          setIsNavbarHidden(prev => prev !== hidden ? hidden : prev);
          
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
    <div className="relative min-h-screen bg-white font-sans overflow-x-clip">
      
      {/* ═══════ NAVBAR ═══════ */}
      <Navbar scrolled={scrolled} activeSection={activeSection} isDarkTheme={isDarkTheme} isHidden={isNavbarHidden} />

      {/* ═══════ MAIN CONTENT (z-20) ═══════ */}
      <main className="relative z-20 bg-white transition-all duration-1000 opacity-100 blur-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
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
      
      {/* ═══════ TEAM MEMBERS (z-10) ═══════ */}
      <div id="team-spacer" ref={teamSpacerRef} className="w-full h-screen relative z-10 pointer-events-none" />
      <motion.div 
        style={{ y: teamY }} 
        className="fixed bottom-0 left-0 w-full h-screen z-10 bg-[#0a0a0a]"
      >
        <TeamMembers />
      </motion.div>

      {/* ═══════ CONTACT / FOOTER (z-0) ═══════ */}
      <Contact reveal={true} />
    </div>
  )
}
