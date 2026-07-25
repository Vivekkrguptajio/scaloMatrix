import { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'

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
        showreel: getOffset('showreel'),
        about: getOffset('about'),
        team: getOffset('team-spacer'),
        faq: getOffset('faq-spacer'),
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
    const { showreel, about, team, faq, founder, contact } = sectionOffsets.current;

    if (founder && founder.bottom > 0 && navBottom >= founder.top && navBottom < founder.bottom) dark = true;
    if (team && team.bottom > 0 && navBottom >= team.top && navBottom < team.bottom) dark = true;
    if (contact && contact.top > 0 && navBottom >= contact.top) dark = true;
    
    if (showreel && showreel.bottom > 0 && latest >= showreel.top - 100 && latest < showreel.bottom) hidden = true;
    if (about && about.bottom > 0 && latest >= about.top - 100 && latest < about.bottom - 100) hidden = true;
    if (team && team.bottom > 0 && latest >= team.top - 500 && latest < team.bottom - 100) hidden = true;
    if (faq && faq.bottom > 0 && latest >= faq.top - 100 && latest < faq.bottom - 100) hidden = true;
    
    if (isDarkTheme !== dark) setIsDarkTheme(dark);
    if (isNavbarHidden !== hidden) setIsNavbarHidden(hidden);
  });

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-clip">
      
      {/* ═══════ NAVBAR ═══════ */}
      <Navbar scrolled={scrolled} activeSection={activeSection} isDarkTheme={isDarkTheme} isHidden={isNavbarHidden} />

      {/* ═══════ MAIN CONTENT (z-20) ═══════ */}
      <main className="relative z-20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero startAnimation={true} />
        <Showreel />
        <About />
        <div className="content-auto min-h-[600px]"><DefinesUs /></div>
        <div className="content-auto min-h-[600px]"><Toolkit /></div>
        <div className="content-auto min-h-[800px]"><HowWeWork /></div>
        <div className="content-auto min-h-[600px]"><SelectedWork /></div>
        <div className="content-auto min-h-[600px]"><Testimonials /></div>
        <div className="content-auto min-h-[600px]"><Insights /></div>
        <div className="content-auto min-h-[300px]"><ClientLogos /></div>
        <Founder />
      </main>
      
      {/* ═══════ TEAM MEMBERS 1 (z-15) ═══════ */}
      <div id="team-spacer" ref={teamSpacerRef} className="w-full h-screen relative z-10 pointer-events-none" />
      <motion.div 
        style={{ y: teamY }} 
        className="fixed bottom-0 left-0 w-full h-screen z-[15] bg-[#0a0a0a] will-change-transform transform-gpu"
      >
        <TeamMembers />
      </motion.div>

      {/* ═══════ FAQ (z-10) ═══════ */}
      <div id="faq-spacer" ref={teamSpacerRef2} className="w-full h-screen relative z-10 pointer-events-none" />
      <motion.div 
        style={{ y: teamY2 }} 
        className="fixed bottom-0 left-0 w-full h-screen z-10 bg-[#0a0a0a] will-change-transform transform-gpu"
      >
        <FAQ />
      </motion.div>

      {/* ═══════ CONTACT / FOOTER (z-0) ═══════ */}
      <Contact reveal={true} />
    </div>
  )
}
