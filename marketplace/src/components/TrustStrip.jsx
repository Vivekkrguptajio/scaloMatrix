import React from 'react';

const TrustStrip = () => {
  const logos = [
    "Amazon", "Shopify", "Walmart", "Etsy", "Target", "Wayfair"
  ];

  return (
    <section className="py-10 border-y border-brand-surface bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-widest text-brand-text uppercase mb-8">
          Brands we've scaled
        </p>
        
        {/* Simple Marquee container */}
        <div className="flex justify-center flex-wrap items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="text-2xl font-black text-brand-white tracking-tighter">
              {logo.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
