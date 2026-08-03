import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/95 backdrop-blur-md py-4 shadow-lg shadow-brand-accent/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-black text-brand-white tracking-tighter">
              scalo<span className="text-brand-accent">Matrix</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-brand-text hover:text-brand-accent transition-colors font-medium">About</a>
            <a href="#services" className="text-brand-text hover:text-brand-accent transition-colors font-medium">Services</a>
            <a href="#results" className="text-brand-text hover:text-brand-accent transition-colors font-medium">Results</a>
            <a href="#testimonials" className="text-brand-text hover:text-brand-accent transition-colors font-medium">Testimonials</a>
            <a href="https://shopify.sclomatrix.com" className="text-brand-text hover:text-brand-accent transition-colors font-medium">Commerce</a>
            <button className="neon-btn">
              Free Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-white hover:text-brand-accent transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-surface border-t border-brand-surface-hover shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-brand-text hover:text-brand-accent font-medium">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-brand-text hover:text-brand-accent font-medium">Services</a>
            <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-brand-text hover:text-brand-accent font-medium">Results</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-brand-text hover:text-brand-accent font-medium">Testimonials</a>
            <a href="https://shopify.sclomatrix.com" className="block px-3 py-2 text-brand-text hover:text-brand-accent font-medium">Commerce</a>
            <button className="neon-btn w-full mt-4">
              Free Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
