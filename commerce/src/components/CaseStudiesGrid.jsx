import React from 'react';

const SuperYouMockup = () => (
  <div className="flex gap-3 h-[180px] w-full">
    {/* Desktop */}
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       {/* Header */}
       <div className="h-6 border-b border-gray-100 flex items-center px-4 gap-4">
         <div className="w-12 h-1.5 bg-red-500"></div>
         <div className="w-6 h-1.5 bg-gray-200"></div>
       </div>
       {/* Content */}
       <div className="flex flex-1 p-3 gap-3">
         {/* Left col */}
         <div className="w-1/3 flex flex-col gap-2">
           <div className="h-3 w-3/4 bg-black"></div>
           <div className="h-1.5 w-1/2 bg-gray-300"></div>
           <div className="h-8 w-full bg-gray-100 mt-3 rounded-sm border border-gray-200"></div>
           <div className="flex gap-2 mt-2">
             <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
             <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
           </div>
           <div className="h-5 w-full bg-red-500 mt-auto rounded-sm"></div>
           <div className="h-5 w-full bg-black rounded-sm"></div>
         </div>
         {/* Mid col */}
         <div className="w-1/3 bg-pink-100 flex items-center justify-center relative overflow-hidden">
            <div className="h-24 w-8 bg-gradient-to-b from-red-400 to-red-600 rounded-lg shadow-sm border border-red-300"></div>
         </div>
         {/* Right col */}
         <div className="w-1/3 bg-[#ffdbb2] p-2 flex flex-col justify-center">
           <div className="h-4 w-full bg-orange-600 mb-1.5 rounded-sm"></div>
           <div className="h-4 w-3/4 bg-orange-600 mb-1.5 rounded-sm"></div>
           <div className="h-4 w-5/6 bg-orange-600 rounded-sm"></div>
         </div>
       </div>
       {/* Bottom */}
       <div className="h-12 border-t border-gray-100 flex gap-2 p-2 bg-gray-50">
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
       </div>
    </div>
    
    {/* Mobile */}
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-5 border-b border-gray-100 flex items-center px-2 justify-between">
        <div className="w-3 h-1 bg-gray-300"></div>
        <div className="w-8 h-1.5 bg-red-500"></div>
      </div>
      <div className="h-20 bg-pink-100 m-1.5 flex items-center justify-center rounded-sm">
        <div className="h-12 w-4 bg-gradient-to-b from-red-400 to-red-600 rounded-sm shadow-sm"></div>
      </div>
      <div className="px-1.5 flex flex-col gap-1.5">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-1 w-2/3 bg-gray-300"></div>
        <div className="flex gap-1 mt-1">
          <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
          <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
        </div>
        <div className="h-4 w-full bg-red-500 mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const BoldCareMockup = () => (
  <div className="flex gap-3 h-[180px] w-full">
    {/* Desktop */}
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       {/* Header */}
       <div className="h-4 border-b border-gray-100 bg-black flex items-center px-3 gap-2">
         <div className="w-6 h-1 bg-white"></div>
       </div>
       {/* Content */}
       <div className="flex flex-1 p-3 gap-4">
         {/* Left col - Image */}
         <div className="w-1/2 flex items-center justify-center relative bg-gray-50 rounded-lg">
            <div className="w-16 h-20 bg-slate-800 rounded-lg shadow-md z-10 mr-6 border border-slate-700"></div>
            <div className="w-12 h-24 bg-slate-600 rounded-t-2xl absolute right-6 bottom-0 shadow-sm"></div>
         </div>
         {/* Right col - Details */}
         <div className="w-1/2 flex flex-col gap-2 py-1 pr-2">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-2 w-2/3 bg-black"></div>
           <div className="flex gap-1 mt-1">
             {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>)}
           </div>
           <div className="h-1.5 w-full bg-gray-200 mt-3"></div>
           <div className="h-1.5 w-full bg-gray-200"></div>
           <div className="h-1.5 w-3/4 bg-gray-200"></div>
           
           <div className="flex gap-2 mt-4">
             <div className="h-6 flex-1 border border-gray-200 rounded flex items-center justify-center"><div className="w-6 h-1.5 bg-red-400"></div></div>
             <div className="h-6 flex-1 border border-green-500 rounded bg-green-50 flex items-center justify-center"><div className="w-6 h-1.5 bg-green-500"></div></div>
           </div>
           
           <div className="h-6 w-full bg-[#d97757] mt-auto rounded-md shadow-sm"></div>
         </div>
       </div>
       {/* Bottom Reviews */}
       <div className="h-10 border-t border-gray-100 flex items-center justify-center gap-3 p-1 bg-gray-50">
         {[1,2,3,4].map(i => (
            <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></div>
         ))}
       </div>
    </div>
    
    {/* Mobile */}
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center justify-between px-2 bg-black">
        <div className="w-4 h-1 bg-white"></div>
        <div className="w-5 h-1 bg-white"></div>
      </div>
      <div className="h-20 bg-gray-50 flex items-center justify-center relative m-1 rounded-sm">
        <div className="w-8 h-10 bg-slate-800 rounded-md shadow-sm z-10 mr-4 border border-slate-700"></div>
        <div className="w-6 h-14 bg-slate-600 rounded-t-xl absolute right-1 bottom-0"></div>
      </div>
      <div className="px-1.5 flex flex-col gap-1.5 mt-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-1.5 w-2/3 bg-black"></div>
        <div className="flex gap-1 mt-1">
           <div className="h-4 flex-1 border border-green-500 rounded bg-green-50"></div>
        </div>
        <div className="h-5 w-full bg-[#d97757] mt-2 rounded-sm shadow-sm"></div>
      </div>
    </div>
  </div>
);

const EmmaMockup = () => (
  <div className="flex gap-3 h-[180px] w-full">
    {/* Desktop */}
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       {/* Header */}
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-8 h-2 bg-orange-500 rounded-sm"></div>
         <div className="flex gap-2">
            <div className="w-3 h-1 bg-gray-300"></div>
            <div className="w-3 h-1 bg-gray-300"></div>
            <div className="w-3 h-1 bg-gray-300"></div>
         </div>
       </div>
       {/* Banner */}
       <div className="h-4 bg-[#1c2c44]"></div>
       
       {/* Content */}
       <div className="flex flex-1 p-3 gap-4">
         {/* Left col - Mattress */}
         <div className="w-3/5 bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-sm">
            {/* Draw a mattress-like shape */}
            <div className="w-28 h-20 bg-white shadow-md border border-gray-200 skew-x-[15deg] transform -rotate-6 flex flex-col justify-end mt-4">
              <div className="h-3 bg-gray-300 w-full border-t border-gray-400"></div>
            </div>
         </div>
         {/* Right col - Details */}
         <div className="w-2/5 flex flex-col gap-2 py-1 pr-1">
           <div className="h-2.5 w-full bg-black"></div>
           <div className="flex gap-1 mt-1">
             {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>)}
           </div>
           
           <div className="h-1.5 w-full bg-gray-200 mt-2"></div>
           <div className="h-1.5 w-full bg-gray-200"></div>
           <div className="h-1.5 w-full bg-gray-200"></div>
           <div className="h-1.5 w-3/4 bg-gray-200"></div>
           
           {/* Badges */}
           <div className="flex gap-2 mt-3">
             <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200"></div>
             <div className="w-6 h-6 rounded-full bg-purple-50 border border-purple-200"></div>
             <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200"></div>
           </div>
           
           <div className="h-3 w-1/2 bg-orange-500 mt-auto rounded-sm"></div>
           <div className="h-6 w-full bg-orange-500 rounded-md shadow-sm mt-1"></div>
         </div>
       </div>
    </div>
    
    {/* Mobile */}
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center justify-between px-1.5 bg-[#1c2c44]">
        <div className="w-5 h-1 bg-white"></div>
        <div className="w-4 h-1 bg-white"></div>
      </div>
      <div className="h-4 border-b border-gray-100 flex items-center px-1.5">
        <div className="w-6 h-1.5 bg-orange-500 rounded-sm"></div>
      </div>
      <div className="h-20 bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="w-16 h-12 bg-white shadow-sm border border-gray-200 skew-x-[15deg] transform -rotate-6 flex flex-col justify-end mt-2">
          <div className="h-2 bg-gray-300 w-full border-t border-gray-400"></div>
        </div>
      </div>
      <div className="px-1.5 flex flex-col gap-1.5 mt-2">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="flex gap-0.5">
           {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>)}
        </div>
        <div className="h-1 w-full bg-gray-200"></div>
        <div className="h-1 w-2/3 bg-gray-200"></div>
        
        <div className="h-5 w-full bg-orange-500 mt-2 rounded-sm shadow-sm"></div>
      </div>
    </div>
  </div>
);

const BeautywiseMockup = () => (
  <div className="flex gap-3 h-[180px] w-full">
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-12 h-2 bg-black font-serif italic text-[8px]">Beautywise</div>
         <div className="flex gap-1 text-[6px] text-gray-400">
           <span>ELLE</span><span>GRAZIA</span><span>VOGUE</span>
         </div>
       </div>
       <div className="flex flex-1 p-2 gap-2">
         <div className="w-1/2 bg-blue-600 rounded-sm flex items-center justify-center text-white text-[10px] font-bold">
           DS-I Daily
         </div>
         <div className="w-1/2 flex flex-col gap-1">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-1 w-3/4 bg-gray-300"></div>
           <div className="h-10 w-full bg-gray-100 mt-1 rounded-sm border border-gray-200 p-1 flex gap-1">
             <div className="w-8 h-8 bg-blue-500 rounded-sm"></div>
             <div className="flex-1 flex flex-col gap-1">
               <div className="h-1 w-full bg-black"></div>
               <div className="h-1 w-1/2 bg-gray-300"></div>
             </div>
           </div>
         </div>
       </div>
    </div>
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center justify-between px-1.5">
        <div className="w-8 h-1.5 bg-black"></div>
      </div>
      <div className="h-16 bg-blue-600 m-1 flex items-center justify-center text-white text-[8px] font-bold rounded-sm">
        DS-I
      </div>
      <div className="px-1.5 flex flex-col gap-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-1 w-2/3 bg-gray-300"></div>
        <div className="h-4 w-full bg-black mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const TheGoodBugMockup = () => (
  <div className="flex gap-3 h-[180px] w-full">
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-12 h-2 bg-orange-500 rounded-sm"></div>
         <div className="w-8 h-1 bg-gray-300"></div>
       </div>
       <div className="flex flex-1 p-2 gap-2 bg-orange-50/50">
         <div className="w-1/2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-sm flex items-center justify-center text-white text-[9px] font-bold p-1 text-center">
           Bye Bye Bloat
         </div>
         <div className="w-1/2 flex flex-col gap-1 justify-center">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-1 w-2/3 bg-orange-400"></div>
           <div className="h-5 w-full bg-orange-500 mt-2 rounded-sm"></div>
         </div>
       </div>
    </div>
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center px-1.5">
        <div className="w-6 h-1.5 bg-orange-500"></div>
      </div>
      <div className="h-16 bg-gradient-to-br from-orange-400 to-amber-500 m-1 flex items-center justify-center text-white text-[7px] font-bold rounded-sm text-center p-0.5">
        Bye Bye Bloat
      </div>
      <div className="px-1.5 flex flex-col gap-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-4 w-full bg-orange-500 mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const WellbeingMockup = () => (
  <div className="flex gap-3 h-[180px] w-full">
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[7px] font-bold">W</div>
         <div className="w-10 h-1.5 bg-gray-300"></div>
       </div>
       <div className="flex flex-1 p-2 gap-2 bg-red-50/40">
         <div className="w-1/2 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm flex items-center justify-center text-white text-[9px] font-bold p-1 text-center">
           Hydrasolt
         </div>
         <div className="w-1/2 flex flex-col gap-1 justify-center">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-1 w-3/4 bg-red-400"></div>
           <div className="h-5 w-full bg-black mt-2 rounded-sm"></div>
         </div>
       </div>
    </div>
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center px-1.5 justify-between">
        <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center text-[5px]">W</div>
      </div>
      <div className="h-16 bg-gradient-to-r from-red-500 to-orange-500 m-1 flex items-center justify-center text-white text-[7px] font-bold rounded-sm text-center p-0.5">
        Hydrasolt
      </div>
      <div className="px-1.5 flex flex-col gap-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-4 w-full bg-black mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const CaseStudiesGrid = () => {
  return (
    <section className="w-full py-16 lg:py-24 font-sans bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-6 md:px-12 xl:px-16 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-black mb-4 tracking-tight" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            Things we are happy<br />about.
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            We don't do testimonials until there's a number next to them. Each tile is<br className="hidden sm:block" /> areal page, shipped, measured over n≥10,000 sessions.
          </p>
        </div>

        {/* Row 1: Top 3 Cards */}
        <div className="bg-white border border-black w-full grid grid-cols-1 lg:grid-cols-3 mb-8 md:mb-10">
          
          {/* Case Study 1: Superyou */}
          <div className="p-6 md:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-black">
            <div className="bg-[#e8e8e8] border border-gray-400 p-4 md:p-6 mb-8 flex-1 flex items-center justify-center min-h-[280px]">
              <SuperYouMockup />
            </div>
            <div className="flex justify-between items-end mt-auto">
              <div className="bg-[#ff2020] text-white font-black italic text-xl px-2 py-0.5 tracking-tighter">
                SUPER<span className="text-white/90">YOU</span>
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+14%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">AOV</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+33%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">REVENUE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: Bold Care */}
          <div className="p-6 md:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-black">
            <div className="bg-[#e8e8e8] border border-gray-400 p-4 md:p-6 mb-8 flex-1 flex items-center justify-center min-h-[280px]">
              <BoldCareMockup />
            </div>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex items-center gap-1.5 text-black">
                <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="2.5">
                  <path d="M6 4h8a4 4 0 010 8H6V4z" />
                  <path d="M6 12h9a4 4 0 010 8H6v-8z" />
                </svg>
                <span className="font-semibold text-lg tracking-tight">Bold Care</span>
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+22%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">AOV</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+50%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">REVENUE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3: Emma */}
          <div className="p-6 md:p-8 flex flex-col border-b lg:border-b-0 border-black">
            <div className="bg-[#e8e8e8] border border-gray-400 p-4 md:p-6 mb-8 flex-1 flex items-center justify-center min-h-[280px]">
              <EmmaMockup />
            </div>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex flex-col text-[#ff9900]">
                <span className="font-bold text-2xl tracking-tight leading-none">Emma</span>
                <span className="text-[8px] font-mono tracking-widest uppercase mt-0.5">GERMANY</span>
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+18%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">AOV</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+20%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">REVENUE</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Row 2: Bottom 3 Cards */}
        <div className="bg-white border border-black w-full grid grid-cols-1 lg:grid-cols-3">
          
          {/* Case Study 4: Beautywise */}
          <div className="p-6 md:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-black">
            <div className="bg-[#e8e8e8] border border-gray-400 p-4 md:p-6 mb-8 flex-1 flex items-center justify-center min-h-[280px]">
              <BeautywiseMockup />
            </div>
            <div className="flex justify-between items-end mt-auto">
              <div className="font-serif italic font-bold text-xl text-black tracking-tight">
                Beautywise
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+27%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">AOV</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+44%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">REVENUE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 5: The Good Bug */}
          <div className="p-6 md:p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-black">
            <div className="bg-[#e8e8e8] border border-gray-400 p-4 md:p-6 mb-8 flex-1 flex items-center justify-center min-h-[280px]">
              <TheGoodBugMockup />
            </div>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex flex-col text-black">
                <span className="font-bold text-lg leading-none">GoodBug</span>
                <span className="text-[7px] font-mono tracking-widest uppercase text-gray-500 mt-0.5">DAILY PROBIOTICS</span>
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+16%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">AOV</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+50%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">REVENUE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 6: Wellbeing Nutrition */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="bg-[#e8e8e8] border border-gray-400 p-4 md:p-6 mb-8 flex-1 flex items-center justify-center min-h-[280px]">
              <WellbeingMockup />
            </div>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center font-bold text-xs">W</div>
                <div className="flex flex-col leading-none">
                  <span className="text-[7px] font-mono uppercase text-gray-500">WELLBEING</span>
                  <span className="text-[9px] font-bold uppercase text-black">NUTRITION</span>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+16%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">AOV</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2942ff]">+43%</div>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mt-1">REVENUE</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel / Pagination Dots */}
        <div className="flex gap-1.5 justify-center mt-8">
          <div className="w-3 h-3 bg-[#e8ff00] border border-black"></div>
          <div className="w-3 h-3 bg-black"></div>
          <div className="w-3 h-3 bg-black"></div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesGrid;

