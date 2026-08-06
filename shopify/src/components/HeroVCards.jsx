export default function HeroVCards() {
  const row1Cards = [
    { 
      id: 1, 
      img: '/vcard/vcard1.png', 
      title: 'Vamshi Farms', 
      url: 'vamshifarms.com',
      stat: '+44% CVR',
      category: 'Health & Organic' 
    },
    { 
      id: 2, 
      img: '/vcard/vcard2.png', 
      title: 'Pizzeria Authentic', 
      url: 'pizzeria.store',
      stat: '+35% Orders',
      category: 'Food & Beverage' 
    },
    { 
      id: 3, 
      img: '/vcard/vcard3.png', 
      title: 'Super Kaju', 
      url: 'superkaju.in',
      stat: '+50% Sales',
      category: 'D2C Gourmet' 
    },
    { 
      id: 4, 
      img: '/vcard/vcard4.png', 
      title: 'Desi Classics', 
      url: 'desiclassics.shop',
      stat: '+28% AOV',
      category: 'Apparel & Fashion' 
    },
  ];

  return (
    <section className="w-full pt-6 md:pt-8 pb-10 md:pb-16 bg-white text-black font-sans overflow-hidden relative z-10">
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 55s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>

      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full mb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-gray-100">
          
          {/* Left Controls */}
          <div className="flex flex-col items-start gap-4">


            <a 
              href="#services" 
              className="group bg-black text-white font-bold py-3 px-7 rounded-full inline-flex items-center gap-3.5 hover:bg-[#FD5800] transition-all duration-300 shadow-lg hover:shadow-orange-500/25 text-sm md:text-base"
            >
              <span>View Services & Case Studies</span>
              <span className="w-7 h-7 rounded-full bg-[#FD5800] group-hover:bg-white text-black flex items-center justify-center font-black transition-colors">
                ↗
              </span>
            </a>
          </div>

          {/* Right Social Proof Stack */}
          <div className="flex items-center gap-4 bg-gray-50/80 p-3.5 px-5 rounded-2xl border border-[#FD5800] shadow-sm">
            <div className="flex -space-x-3">
              {['/team/adi.png', '/team/shreyas.png', '/team/nayan.png', '/team/yadu.png', '/image.png'].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={src} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(star => (
                  <span key={star} className="text-amber-400 text-sm">★</span>
                ))}
                <span className="text-xs font-bold text-black ml-1">4.9/5</span>
              </div>
              <span className="font-bold text-gray-900 text-sm tracking-tight">
                500+ Happy Clients
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-2">

        {/* Row 1: Left Moving Marquee */}
        <div className="w-full overflow-hidden group">
          <div className="flex animate-marquee-left gap-3 md:gap-4 group-hover:[animation-play-state:paused] [transform:translateZ(0)] will-change-transform">
            {[...row1Cards, ...row1Cards, ...row1Cards, ...row1Cards].map((card, idx) => (
              <div 
                key={idx} 
                className="w-[335px] sm:w-[388px] md:w-[423px] min-w-[335px] sm:min-w-[388px] md:min-w-[423px] max-w-[335px] sm:max-w-[388px] md:max-w-[423px] h-[550px] md:h-[607px] rounded-xl md:rounded-2xl overflow-hidden shadow-md bg-white shrink-0 group/card cursor-pointer flex flex-col"
              >

                {/* Screenshot Image Container */}
                <div className="relative flex-1 w-full overflow-hidden bg-gray-50">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-top"
                  />

                  {/* View Project Button on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-end p-5">
                    <span className="bg-white text-black font-bold text-xs px-3 py-1.5 rounded-full shadow-md">
                      View Project →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
