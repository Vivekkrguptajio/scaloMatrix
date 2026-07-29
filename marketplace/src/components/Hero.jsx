import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center md:text-left md:mx-0">
          
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/5">
            <span className="text-brand-accent font-semibold text-sm tracking-wider uppercase">
              Amazon PPC Expert
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-white leading-[1.1] mb-6 tracking-tight">
            Scale Your Amazon Brand <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-500">
              Profitably
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text mb-10 max-w-2xl leading-relaxed">
            Stop wasting ad spend. We engineer data-driven PPC strategies that lower ACoS, maximize ROI, and dominate your niche. Let's unlock your brand's true revenue potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="neon-btn-solid">
              Book a Strategy Call
            </button>
            <button className="neon-btn">
              View Case Studies
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-bg bg-brand-surface flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-brand-accent">
                {/* 5 Stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-text font-medium mt-1">Trusted by 50+ 7-Figure Sellers</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
