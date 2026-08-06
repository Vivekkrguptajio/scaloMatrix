
import { AnimatedCounter } from './Hero'

const HappyClients = () => {
  const testimonials = [
    {
      logo: (
        <div className="flex flex-col items-center">
          <span className="text-[6px] uppercase tracking-widest text-gray-500">Wellbeing</span>
          <span className="text-2xl font-bold">W</span>
          <span className="text-[6px] uppercase tracking-widest text-gray-500">Nutrition</span>
        </div>
      ),
      text: "One of the pages we have made with TLPC team has resulted into 44% increase in conversion rate",
      author: "Vatsala Singh",
      title: "AVP, Wellbeing Nutrition",
      avatarColor: "bg-orange-200"
    },
    {
      logo: (
        <div className="flex items-center gap-2 text-green-700 font-bold text-xl tracking-tight">
          <span className="text-green-500 text-2xl">🌱</span> ZEROHARM
        </div>
      ),
      text: "The strategic approach they brought to the project resulted in a revenue jump by 35%",
      author: "Sachin Darbarwar",
      title: "Founder Zeroharm",
      avatarColor: "bg-gray-300"
    },
    {
      logo: (
        <div className="font-bold text-2xl text-[#FD5800] tracking-tight">
          Health<span className="text-[#111]">Fab</span>
        </div>
      ),
      text: "The improved user experience has led to higher engagement and a more satisfied customer base.",
      author: "Sourav",
      title: "Co-founder, Healthfab",
      avatarColor: "bg-orange-200"
    },
    {
      logo: (
        <div className="font-serif text-2xl text-red-400 italic font-bold">
          the basics
        </div>
      ),
      text: "Our customers are more engaged, and our sales have never been better.",
      author: "Suchita A Mukerji",
      title: "Founder - The Basic Women",
      avatarColor: "bg-pink-200"
    },
    {
      logo: (
         <div className="font-bold text-2xl tracking-tight">
          Brand<span className="text-gray-400">X</span>
        </div>
      ),
      text: "The changes they made to our landing pages have led to an immediate spike in our daily orders.",
      author: "Rahul Sharma",
      title: "CMO, BrandX",
      avatarColor: "bg-yellow-200"
    }
  ];

  const tickerItems = [
    { name: "DECODE AGE", stat: "+20% CVR" },
    { name: "EMMA MATTRESS", stat: "+20% CVR" },
    { name: "THE GOOD BUG", stat: "+50% CVR" },
    { name: "SUPERYOU", stat: "+33% CVR" },
    { name: "BOLD CARE", stat: "+50% CVR" },
    { name: "ZEROHARM", stat: "+35% REV" },
    { name: "WELLBEING", stat: "+44% CVR" }
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-14 font-sans bg-white relative z-10">
      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: flex;
            width: max-content;
          }
          /* Hide scrollbar for clean look */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="max-w-[1024px] mx-auto flex flex-col items-center px-2.5 sm:px-5 md:px-16 xl:px-0 mb-6 w-full">
        
        {/* Header Content Wrapper */}
        <div className="flex flex-col w-full items-center justify-center mb-0 gap-3 text-center">
          
          {/* Avatars */}
          <div className="flex -space-x-3 mb-2 justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-gray-300 overflow-hidden shadow-sm">
                <img src="/image.png" alt="Client" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] text-black tracking-tight">
            <AnimatedCounter target={1000} suffix="+" /> <span className="text-[#FD5800]">Happy Clients</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Trusted by thousands of people
          </p>
        </div>
      </div>

      {/* Testimonials Slider/Grid */}
      <div className="w-full border-t-[0.5px] border-b-[0.5px] md:border-t md:border-b border-black bg-white overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '50s' }}>
          {[...testimonials, ...testimonials, ...testimonials].map((client, idx) => (
            <div key={idx} className="min-w-[340px] max-w-[340px] flex flex-col border-r-[0.5px] md:border-r border-black shrink-0 bg-white">
              
              {/* Logo Section */}
              <div className="h-[84px] flex items-center justify-center p-4 border-b border-black">
                {client.logo}
              </div>

              {/* Content Section */}
              <div className="flex-1 px-6 py-7 flex flex-col items-center text-center">
                
                {/* Stars */}
                <div className="flex gap-[3px] mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FD5800" stroke="#FD5800" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[16px] md:text-[17px] font-medium text-[#111] mb-8 leading-[1.55]">
                  "{client.text}"
                </p>

                {/* Author Info */}
                <div className="mt-auto flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full mb-3 border border-black overflow-hidden ${client.avatarColor}`}>
                    <img src="/image copy.png" alt={client.author} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-black text-[15px]">{client.author}</h4>
                  <p className="text-[13px] text-gray-500 mt-0.5">{client.title}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Orange Straight Ticker Banner */}
      <div className="relative z-50 w-full bg-[#FD5800] overflow-hidden whitespace-nowrap py-3 mt-10 shadow-md">
        <div className="animate-marquee flex gap-8 items-center" style={{ animationDirection: 'reverse', animationDuration: '80s' }}>
          {/* Double the items to create seamless loop effect */}
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <div className="flex items-center gap-3 font-mono text-base lg:text-lg font-bold tracking-wider">
                <span className="text-black uppercase">{item.name}</span>
                <span className="text-white/80 text-lg leading-none mt-[-2px]">•</span>
                <span className="text-white uppercase">{item.stat}</span>
              </div>
              <span className="text-black/20 text-lg">|</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HappyClients;

