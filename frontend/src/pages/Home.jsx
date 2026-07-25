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
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import LazySection from '../components/LazySection'

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
        showreel: getOffset('showreel'),
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
          const { showreel, about, team, faq, founder, contact } = sectionOffsets.current;

          if (founder && founder.bottom > 0 && navBottom >= founder.top && navBottom < founder.bottom) dark = true;
          if (team && team.bottom > 0 && navBottom >= team.top && navBottom < team.bottom) dark = true;
          if (contact && contact.top > 0 && navBottom >= contact.top) dark = true;
          
          if (showreel && showreel.bottom > 0 && window.scrollY >= showreel.top - 100 && window.scrollY < showreel.bottom) hidden = true;
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

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="relative z-20 bg-white">
        <Hero startAnimation={true} />
        <Showreel />
        <About />
        <div className="content-auto"><DefinesUs /></div>
        <div className="content-auto"><Toolkit /></div>
        <div className="content-auto"><HowWeWork /></div>
        <div className="content-auto"><SelectedWork /></div>
        <div className="content-auto"><Testimonials /></div>
        <div className="content-auto"><Insights /></div>
        <div className="content-auto"><ClientLogos /></div>
        <div className="content-auto"><Founder /></div>
        <div className="content-auto" id="team"><TeamMembers /></div>
        <div className="content-auto" id="faq"><FAQ /></div>
        <Contact reveal={true} />
      </main>
    </div>
  )
}
