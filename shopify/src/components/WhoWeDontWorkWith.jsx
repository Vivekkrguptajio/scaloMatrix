import React from 'react';

const WhoWeDontWorkWith = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 font-sans bg-white">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-6 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] text-black lg:w-[60%]">
            Who we don't<br /><span className="text-[#FD5800]">work with.</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-600 text-sm md:text-base leading-snug lg:text-right">
              Saying no is a competitive advantage. Here's ours, in writing, so we can both save everyone a discovery call.
            </p>
          </div>
        </div>

        {/* The Card */}
        <div className="bg-[#111] text-white w-full flex flex-col md:flex-row border border-[#222] rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300">
          
          {/* Left Column (Not for you if) */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#222]">
            <h3 className="text-[#FD5800] text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FD5800] text-white text-sm flex items-center justify-center">✕</span> Not for you if
            </h3>

            <ul className="flex flex-col gap-4 font-mono text-xs md:text-sm leading-snug text-gray-300">
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → Your CEO has a doc of 47 things the page must say. <span className="text-gray-500">(It should say one.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You haven't talked to a customer in 90 days. <span className="text-gray-500">(We won't guess for you.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You need deliverables measured in pages, not revenue. <span className="text-gray-500">(Hire a freelancer.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You treat agencies like vendors, not partners. <span className="text-gray-500">(Life's too short.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You sell vapes, predatory lending, or MLMs. <span className="text-gray-500">(Hard no.)</span>
              </li>
            </ul>
          </div>

          {/* Right Column (For you if) */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10">
            <h3 className="text-[#FD5800] text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500 text-white text-sm flex items-center justify-center">✓</span> For you if
            </h3>

            <ul className="flex flex-col gap-4 font-mono text-xs md:text-sm leading-snug text-gray-300">
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You've hit a ceiling on CVR and don't know why.
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You have a product that actually works. <span className="text-gray-500">(We can't fix a bad one.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You'd rather see a 14-day test than a 40-slide deck.
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You want the person writing the page to take the first call.
              </li>
              <li className="pb-3.5 border-b border-dashed border-[#333]">
                → You think design and performance are the same fight.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeDontWorkWith;

