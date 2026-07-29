import React from 'react';

const WhoWeDontWorkWith = () => {
  return (
    <section className="w-full py-12 lg:py-20 font-sans bg-[#f3f2eb]">
      <div className="max-w-[1024px] mx-auto w-full px-16 xl:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-black">
            Who we don't<br />work with.
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-md leading-snug">
            Saying no is a competitive advantage. Here's ours, in writing, so we can both save everyone a discovery call.
          </p>
        </div>

        {/* The Card */}
        <div className="bg-[#111] text-white w-full flex flex-col md:flex-row border border-[#222]">
          
          {/* Left Column (Not for you if) */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[#222]">
            <h3 className="text-[#2942ff] text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
              <span>X</span> Not for you if
            </h3>

            <ul className="flex flex-col gap-6 font-mono text-sm leading-snug text-gray-300">
              <li className="pb-6 border-b border-dashed border-[#333]">
                → Your CEO has a doc of 47 things the page must say. <span className="text-gray-500">(It should say one.)</span>
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You haven't talked to a customer in 90 days. <span className="text-gray-500">(We won't guess for you.)</span>
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You need deliverables measured in pages, not revenue. <span className="text-gray-500">(Hire a freelancer.)</span>
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You treat agencies like vendors, not partners. <span className="text-gray-500">(Life's too short.)</span>
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You sell vapes, predatory lending, or MLMs. <span className="text-gray-500">(Hard no.)</span>
              </li>
            </ul>
          </div>

          {/* Right Column (For you if) */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
            <h3 className="text-[#e8ff00] text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
              <span>✓</span> For you if <span className="text-white animate-pulse font-light">|</span>
            </h3>

            <ul className="flex flex-col gap-6 font-mono text-sm leading-snug text-gray-300">
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You've hit a ceiling on CVR and don't know why.
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You have a product that actually works. <span className="text-gray-500">(We can't fix a bad one.)</span>
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You'd rather see a 14-day test than a 40-slide deck.
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
                → You want the person writing the page to take the first call.
              </li>
              <li className="pb-6 border-b border-dashed border-[#333]">
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
