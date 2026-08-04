
export default function Marquee() {
  const repetitions = 4;
  
  return (
    <section className="w-full bg-[#FD5800] overflow-hidden py-2 md:py-2.5 flex items-center transform -rotate-2 scale-105 z-20 relative shadow-xl">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee-reverse inline-block whitespace-nowrap flex items-center">
          {Array(repetitions).fill(0).map((_, i) => (
            <div key={i} className="inline-flex items-center text-xl md:text-2xl lg:text-4xl font-black font-sans tracking-tighter uppercase text-white">
              <span className="px-6 flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" alt="WordPress" className="h-8 md:h-10 object-contain" />
              </span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6 flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-8 md:h-10 object-contain" />
              </span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6 flex items-center">
                <span className="inline-flex items-center gap-2 bg-white text-[#FD5800] px-4 md:px-6 py-1 md:py-1.5 rounded-full shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7V6c0-2.206-1.794-4-4-4S8 3.794 8 6v1H3v13c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7h-5zM10 6c0-1.103.897-2 2-2s2 .897 2 2v1h-4V6zm9 14H5V9h3v2h2V9h4v2h2V9h3v11z"/></svg>
                  E commerce
                </span>
              </span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6 flex items-center">
                <span className="inline-flex items-center gap-2 border-[3px] border-white text-white px-4 md:px-6 py-1 md:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
                  <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5.4l-7.5-4.2c-.3-.2-.7-.2-1 0L4 5.4C3.4 5.7 3 6.3 3 7v10c0 .7.4 1.3 1 1.6l7.5 4.2c.1.1.3.1.5.1s.4 0 .5-.1l7.5-4.2c.6-.3 1-.9 1-1.6V7c0-.7-.4-1.3-1-1.6zM12 3.1l6.2 3.4-6.2 3.5-6.2-3.5L12 3.1zM5 16.5V8.8l6 3.4v7.7l-6-3.4zm14 0l-6 3.4v-7.7l6-3.4v7.7z"/></svg>
                  D2C
                </span>
              </span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
