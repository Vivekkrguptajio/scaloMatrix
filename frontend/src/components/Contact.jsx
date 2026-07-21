import { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Contact() {
  const { profileDetails } = useContext(PortfolioContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-black text-white pt-16 md:pt-24 pb-6 relative overflow-hidden font-sans border-t border-white/10 scroll-mt-24">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FD5800] rounded-full blur-[200px] opacity-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Section: CTA & Email */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[0.9] tracking-tighter mb-6">
              Got a project? <br />
              <span className="text-[#FD5800]">Let's talk.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md">
              We're always looking for ambitious brands to partner with. Drop us a line and let's build something extraordinary.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="lg:text-right"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Email Us</p>
            <a 
              href={`mailto:${profileDetails?.email || 'hello@scalomatrix.com'}`} 
              className="text-2xl md:text-4xl font-bold hover:text-[#FD5800] transition-colors inline-block border-b-2 border-transparent hover:border-[#FD5800] pb-1"
            >
              {profileDetails?.email || 'hello@scalomatrix.com'}
            </a>
            
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Call Us</p>
              <a 
                href={`tel:${profileDetails?.phone || '+91 98765 43210'}`} 
                className="text-xl md:text-2xl font-medium hover:text-[#FD5800] transition-colors"
              >
                {profileDetails?.phone || '+91 98765 43210'}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 py-10 border-t border-white/10">
          
          {/* Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Navigation</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#how-we-work" className="text-gray-400 hover:text-white transition-colors">Process</a>
          </div>

          {/* Agency */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Agency</h4>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Insights</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Socials</h4>
            <a href={profileDetails?.socialLinks?.instagram || '#'} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FD5800] transition-colors flex items-center gap-2">
              Instagram <span className="text-xs">↗</span>
            </a>
            <a href={profileDetails?.socialLinks?.twitter || '#'} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FD5800] transition-colors flex items-center gap-2">
              Twitter <span className="text-xs">↗</span>
            </a>
            <a href={profileDetails?.socialLinks?.linkedin || '#'} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FD5800] transition-colors flex items-center gap-2">
              LinkedIn <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col space-y-4 md:col-span-1 col-span-2 mt-8 md:mt-0">
            <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Location</h4>
            <p className="text-gray-400 leading-relaxed max-w-[200px]">
              {profileDetails?.location || 'Chas Bokaro Jharkhand, India'}
            </p>
            <div className="mt-4">
              <h4 className="text-white font-bold mb-1 uppercase tracking-widest text-sm">Founder</h4>
              <p className="text-[#FD5800] font-medium">{profileDetails?.firstName} {profileDetails?.lastName}</p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} scaloMATRIX. All rights reserved.</p>
          <p>Made with ❤️ by Ranjeet</p>
        </div>

      </div>
    </footer>
  );
}
