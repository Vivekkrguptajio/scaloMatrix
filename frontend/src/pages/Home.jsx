import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Showreel from '../components/Showreel'
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

  const sectionOffsets = useRef({ about: { top: 0, bottom: 0 }, team: { top: 0, bottom: 0 }, faq: { top: 0, bottom: 0 }, founder: { top: 0, bottom: 0 }, contact: { top: 0, bottom: 0 } })
  const teamSpacerRef = useRef(null)
  const teamSpacerRef2 = useRef(null)

  // First TeamMembers scrolls out to reveal the second
  const { scrollYProgress: teamScroll } = useScroll({
    target: teamSpacerRef,
    offset: ["end end", "end start"]
  });
  const teamY = useTransform(teamScroll, [0, 1], ["0%", "-100%"]);

  // Second TeamMembers scrolls out to reveal the Footer
  const { scrollYProgress: teamScroll2 } = useScroll({
    target: teamSpacerRef2,
    offset: ["end end", "end start"]
  });
  const teamY2 = useTransform(teamScroll2, [0, 1], ["0%", "-100%"]);

  // Monitor Scroll
  useEffect(() => {
    let ticking = false;

    const updateOffsets = () => {
      const scrollY = window.scrollY;
      const getOffset = (id) => {
        const el = document.getElementById(id);
        if (!el) return { top: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        return { top: rect.top + scrollY, bottom: rect.bottom + scrollY };
      };

      sectionOffsets.current = {
        about: getOffset('about'),
        team: getOffset('team-spacer'),
        faq: getOffset('faq-spacer'),
        founder: getOffset('founder'),
        contact: getOffset('contact')
      };
    };

    // Initial offset calculation
    updateOffsets();
    const t1 = setTimeout(updateOffsets, 300);
    const t2 = setTimeout(updateOffsets, 1000);
    const t3 = setTimeout(updateOffsets, 3000);
    window.addEventListener('resize', updateOffsets);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(prev => prev !== isScrolled ? isScrolled : prev);

          let dark = false;
          let hidden = false;
          const navBottom = window.scrollY + 80;
          const { about, team, faq, founder, contact } = sectionOffsets.current;

          if (founder && founder.bottom > 0 && navBottom >= founder.top && navBottom < founder.bottom) dark = true;
          if (team && team.bottom > 0 && navBottom >= team.top && navBottom < team.bottom) dark = true;
          if (contact && contact.top > 0 && navBottom >= contact.top) dark = true;
          
          if (about && about.bottom > 0 && window.scrollY >= about.top - 100 && window.scrollY < about.bottom - 100) hidden = true;
          if (team && team.bottom > 0 && window.scrollY >= team.top - 100 && window.scrollY < team.bottom - 100) hidden = true;
          if (faq && faq.bottom > 0 && window.scrollY >= faq.top - 100 && window.scrollY < faq.bottom - 100) hidden = true;
          
          setIsDarkTheme(prev => prev !== dark ? dark : prev);
          setIsNavbarHidden(prev => prev !== hidden ? hidden : prev);
          
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
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
        <Showreel />
        <About />
        <DefinesUs />
        <Toolkit />
        <HowWeWork />
        <SelectedWork />
        <Testimonials />
        <Insights />
        <ClientLogos />
        <Founder />
      </main>
      
      {/* ═══════ TEAM MEMBERS 1 (z-15) ═══════ */}
      <div id="team-spacer" ref={teamSpacerRef} className="w-full h-screen relative z-10 pointer-events-none" />
      <motion.div 
        style={{ y: teamY }} 
        className="fixed bottom-0 left-0 w-full h-screen z-[15] bg-[#0a0a0a]"
      >
        <TeamMembers />
      </motion.div>

      {/* ═══════ FAQ (z-10) ═══════ */}
      <div id="faq-spacer" ref={teamSpacerRef2} className="w-full h-screen relative z-10 pointer-events-none" />
      <motion.div 
        style={{ y: teamY2 }} 
        className="fixed bottom-0 left-0 w-full h-screen z-10 bg-[#0a0a0a]"
      >
        <FAQ />
      </motion.div>

      {/* ═══════ CONTACT / FOOTER (z-0) ═══════ */}
      <Contact reveal={true} />
    </div>
  )
}
