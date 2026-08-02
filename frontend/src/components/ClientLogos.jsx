import { memo } from 'react';
;

const topRowBrands = [
  'Tanishq', 'Prime Video', 'Xiaomi', 'Jio', 'Pidilite', 'Nykaa', 'Zomato', 'Swiggy', 'Paytm', 'Flipkart'
];

const bottomRowBrands = [
  'Cipla', 'Garnier', 'BBLUNT', 'Britannia', 'Bath & Body Works', 'Loreal', 'Mamaearth', 'Myntra'
];

const ClientLogos = memo(function ClientLogos() {
  return (
    <section className="w-full bg-white py-8 md:py-12 border-b border-gray-100 overflow-hidden">
      
      {/* Top Row - Smaller Logos */}
      <div className="relative flex overflow-x-hidden group mb-10 md:mb-16">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee flex whitespace-nowrap py-4 items-center gap-10 sm:gap-16 md:gap-24 px-8">
          {[...topRowBrands, ...topRowBrands, ...topRowBrands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                {brand}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Bigger Logos */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-reverse flex whitespace-nowrap py-4 items-center gap-10 sm:gap-16 md:gap-24 px-8">
          {[...bottomRowBrands, ...bottomRowBrands, ...bottomRowBrands].map((brand, index) => (
            <div key={index} className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                {brand}
              </h2>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
});

export default ClientLogos;
