import React, { useState } from 'react';

const Calculator = () => {
  const [adSpend, setAdSpend] = useState(30); // in Lakhs
  const [roas, setRoas] = useState(5);
  const [lift, setLift] = useState(20); // in percentage

  // Calculations
  const beforeRevLakhs = adSpend * roas;
  const afterRevLakhs = beforeRevLakhs * (1 + lift / 100);
  const extraRevLakhs = afterRevLakhs - beforeRevLakhs;
  const yearlyNetGainLakhs = extraRevLakhs * 12;

  // Format helpers
  const formatMoney = (lakhs) => {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(1).replace('.0', '')}Cr`;
    }
    return `₹${lakhs.toFixed(1).replace('.0', '')}L`;
  };

  const formatExtra = (lakhs) => {
    if (lakhs >= 100) {
      return `+₹${(lakhs / 100).toFixed(1)}Cr`;
    }
    return `+₹${lakhs.toFixed(1)}L`;
  };

  return (
    <section className="w-full py-12 lg:py-20 font-sans bg-[#f3f2eb]">
      <style>
        {`
          .custom-slider {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
          }
          .custom-slider:focus {
            outline: none;
          }
          .custom-slider::-webkit-slider-runnable-track {
            width: 100%;
            height: 2px;
            cursor: pointer;
            background: black;
          }
          .custom-slider::-webkit-slider-thumb {
            height: 24px;
            width: 24px;
            background: #e8ff00;
            border: 2px solid black;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -11px;
          }
          .custom-slider::-moz-range-track {
            width: 100%;
            height: 2px;
            cursor: pointer;
            background: black;
          }
          .custom-slider::-moz-range-thumb {
            height: 24px;
            width: 24px;
            background: #e8ff00;
            border: 2px solid black;
            cursor: pointer;
            border-radius: 0;
          }
        `}
      </style>

      <div className="max-w-[1024px] mx-auto flex flex-col items-center px-16 xl:px-0 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-black mb-6">
            Do the math
          </h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto leading-snug">
            Move the sliders. The only section on this site that makes you do work. The numbers move. Your decision gets easier.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white border border-black w-full flex flex-col lg:flex-row shadow-sm">
          
          {/* Left Side: Sliders */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-center gap-16">
            
            {/* Slider 1: Ad Spend */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-mono tracking-widest text-gray-500 uppercase">Monthly Ad Spend</label>
                <span className="text-xl md:text-2xl font-bold text-[#2942ff]">{formatMoney(adSpend)}</span>
              </div>
              <div className="relative pt-2 pb-6">
                <input 
                  type="range" 
                  min="5" max="200" step="5"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="custom-slider"
                />
                <div className="flex justify-between absolute bottom-0 w-full text-[10px] font-mono text-gray-400 mt-2">
                  <span>₹5L</span>
                  <span>₹2CR</span>
                </div>
              </div>
            </div>

            {/* Slider 2: ROAS */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-mono tracking-widest text-gray-500 uppercase">ROAS</label>
                <span className="text-xl md:text-2xl font-bold text-[#2942ff]">{roas}x</span>
              </div>
              <div className="relative pt-2 pb-6">
                <input 
                  type="range" 
                  min="1" max="20" step="0.5"
                  value={roas}
                  onChange={(e) => setRoas(Number(e.target.value))}
                  className="custom-slider"
                />
                <div className="flex justify-between absolute bottom-0 w-full text-[10px] font-mono text-gray-400 mt-2">
                  <span>1X</span>
                  <span>20X</span>
                </div>
              </div>
            </div>

            {/* Slider 3: Lift */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-mono tracking-widest text-gray-500 uppercase">Our Promise on Lift</label>
                <span className="text-xl md:text-2xl font-bold text-[#2942ff]">+{lift}%</span>
              </div>
              <div className="relative pt-2 pb-6">
                <input 
                  type="range" 
                  min="20" max="120" step="5"
                  value={lift}
                  onChange={(e) => setLift(Number(e.target.value))}
                  className="custom-slider"
                />
                <div className="flex justify-between absolute bottom-0 w-full text-[10px] font-mono text-gray-400 mt-2">
                  <span>+20%</span>
                  <span>+120%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Results */}
          <div className="w-full lg:w-1/2 bg-[#f6f5ef] flex flex-col">
            <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col gap-10">
              
              {/* Extra Revenue */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase flex items-center gap-2 mb-2">
                  <span className="text-gray-400">↘</span> EXTRA REVENUE / MONTH
                </div>
                <div className="text-6xl md:text-7xl lg:text-[80px] font-bold text-[#2942ff] tracking-tight">
                  {formatExtra(extraRevLakhs)}
                </div>
              </div>

              {/* Before Revenue */}
              <div className="border-b border-gray-300 pb-6">
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
                  BEFORE · REV / MONTH
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-black">
                  {formatMoney(beforeRevLakhs)}
                </div>
              </div>

              {/* After Revenue */}
              <div className="border-b border-gray-300 pb-6">
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
                  AFTER · REV / MONTH
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-[#10b981]">
                  {formatMoney(afterRevLakhs)}
                </div>
              </div>

              {/* 12-Month Net Gain */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-2">
                  12-MONTH NET GAIN
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-[#10b981]">
                  {formatMoney(yearlyNetGainLakhs)}
                </div>
              </div>

            </div>

            {/* Verdict Banner */}
            <div className="bg-[#e8ff00] border-t border-black p-6 md:p-8 mt-auto">
              <p className="text-sm font-mono tracking-wide text-black font-semibold leading-snug">
                Verdict → Payback under a quarter. This is what we exist for. Book the call.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
