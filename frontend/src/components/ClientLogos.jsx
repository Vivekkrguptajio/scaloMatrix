import { motion } from 'framer-motion';

const logos = [
  { id: 1, name: 'Acme Corp', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' },
  { id: 2, name: 'Globex', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { id: 3, name: 'Soylent', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { id: 4, name: 'Initech', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { id: 5, name: 'Umbrella', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Spotify_logo_with_text.svg' },
  { id: 6, name: 'Stark', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
];

export default function ClientLogos() {
  return (
    <section className="w-full bg-white py-12 md:py-20 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-8 text-center md:text-left">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Trusted by ambitious brands worldwide
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks for smooth fading edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee flex whitespace-nowrap py-4 items-center gap-16 md:gap-24 px-8">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-32 md:w-40 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
              <img 
                src={logo.url} 
                alt={logo.name} 
                loading="lazy"
                className="w-full h-auto object-contain max-h-12" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
