import React from 'react';

const WhoWeDontWorkWith = () => {
  return (
    <section className="w-full py-8 lg:py-12 font-sans bg-white">
      <div className="max-w-[1024px] mx-auto w-full px-2.5 sm:px-5 md:px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-black" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            Who we don't<br />work with.
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md leading-snug">
            Saying no is a competitive advantage. Here's ours, in writing, so we can both save everyone a discovery call.
          </p>
        </div>

        {/* The Card */}
        <div className="bg-[#111] text-white w-full flex flex-col md:flex-row border border-[#222]">
          
          {/* Left Column (Not for you if) */}
          <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#222]">
            <h3 className="text-[#FD5800] text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
              <span>X</span> Not for you if
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
              <span>✓</span> For you if <span className="text-white animate-pulse font-light">|</span>
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

