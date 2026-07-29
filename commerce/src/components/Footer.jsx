import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 font-sans border-t border-black">
      <div className="max-w-[1024px] mx-auto w-full px-16 xl:px-0">
        
        {/* Top Huge Typography */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="block text-white">landing</span>
            <span className="block text-white">pages that</span>
            <span className="block text-[#e8ff00]">earn their keep.</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#2a2a2a] mb-12"></div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Column 1: The Promise */}
          <div className="lg:w-5/12 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">The Promise</h3>
            </div>
            <p className="text-gray-300 text-lg leading-snug mb-8 max-w-md">
              We ship landing pages that convert at least <span className="text-[#e8ff00]">+20%</span> better than what's running today. If they don't, we keep working. No retainer theatre.
            </p>
            <a href="#" className="inline-block bg-[#e8ff00] text-black font-semibold py-3 px-6 text-sm hover:bg-yellow-400 transition-colors">
              Send your URL →
            </a>
          </div>

          {/* Column 2: Work */}
          <div className="lg:w-2/12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">Work</h3>
            </div>
            <ul className="flex flex-col gap-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Receipts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hall of Fame</a></li>
            </ul>
          </div>

          {/* Column 3: Words */}
          <div className="lg:w-2/12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">Words</h3>
            </div>
            <ul className="flex flex-col gap-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">The math</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why CRO</a></li>
            </ul>
          </div>

          {/* Column 4: Info/More */}
          <div className="lg:w-3/12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">Find Us</h3>
            </div>
            <ul className="flex flex-col gap-4 text-gray-300 text-sm">
              <li className="text-gray-300">Surat · IN</li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
            </ul>
          </div>

          {/* Scroll to Top Circle */}
          <div className="absolute right-0 top-0 lg:-top-4 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-[#333] cursor-pointer hover:border-gray-500 transition-colors">
            <div className="w-1.5 h-1.5 bg-[#e8ff00] rounded-full"></div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#2a2a2a] mt-20 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#555] text-[10px] tracking-widest font-mono uppercase">
          <p>© THE LANDING PAGE COMPANY · EST. 2024 - 2026</p>
          <p>BUILT IN INDIA · UNDER 1.8S MOBILE · WE PRACTISE WHAT WE PITCH.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
