import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ClientSuccess from './components/ClientSuccess';
import AboutPrachi from './components/AboutPrachi';
import WhyChoosePrachi from './components/WhyChoosePrachi';
import ServicesSection from './components/ServicesSection';
import PpcRoadmap from './components/PpcRoadmap';
import TestimonialsSection from './components/TestimonialsSection';
import MasterclassSection from './components/MasterclassSection';
import MarketplaceFaq from './components/MarketplaceFaq';
import ContactUs from './components/ContactUs';
import ThePromise from './components/ThePromise';
import Contact from './components/Contact';
import StrategyModal from './components/StrategyModal';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from './components/ScrollReveal';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './index.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('strategy');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenModal = (type = 'strategy') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <CustomCursor />
      <ScrollToTop />
      
      {/* Navigation Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main App Content - Rounded bottom for sticky footer reveal */}
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero onOpenModal={handleOpenModal} />
        <TrustStrip />
        <ClientSuccess onOpenModal={handleOpenModal} />
        <AboutPrachi onOpenModal={handleOpenModal} />
        <WhyChoosePrachi onOpenModal={handleOpenModal} />
        <ServicesSection onOpenModal={handleOpenModal} />
        <PpcRoadmap onOpenModal={handleOpenModal} />
        <TestimonialsSection onOpenModal={handleOpenModal} />
        <MasterclassSection onOpenModal={handleOpenModal} />
        <MarketplaceFaq onOpenModal={handleOpenModal} />
        <ContactUs />
        <ScrollReveal><ThePromise /></ScrollReveal>
      </main>

      {/* Sticky Reveal Footer copied from Shopify */}
      <Contact reveal={true} />

      {/* Interactive Booking & Audit Modal */}
      <StrategyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}

export default App;
