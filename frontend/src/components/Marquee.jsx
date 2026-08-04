export default function Marquee() {
  const repetitions = 4;
  
  return (
    <section className="w-full bg-white overflow-hidden py-3.5 md:py-5 flex items-center z-20 relative">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee-reverse inline-block whitespace-nowrap flex items-center">
          {Array(repetitions).fill(0).map((_, i) => (
            <div key={i} className="inline-flex items-center text-lg md:text-2xl lg:text-3xl font-black font-sans tracking-tight uppercase text-black">
              <span className="px-8">Brand</span>
              <span className="text-gray-300 text-base md:text-xl">✦</span>
              <span className="px-8">Commerce</span>
              <span className="text-gray-300 text-base md:text-xl">✦</span>
              <span className="px-8">Growth</span>
              <span className="text-gray-300 text-base md:text-xl">✦</span>
              <span className="px-8">Strategy</span>
              <span className="text-gray-300 text-base md:text-xl">✦</span>
              <span className="px-8">Design</span>
              <span className="text-gray-300 text-base md:text-xl">✦</span>
              <span className="px-8">scaloMATRIX</span>
              <span className="text-gray-300 text-base md:text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
