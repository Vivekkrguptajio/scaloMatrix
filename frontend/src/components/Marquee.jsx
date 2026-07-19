import React from 'react'

export default function Marquee() {
  const repetitions = 10

  return (
    <div className="w-full bg-white overflow-hidden py-3 md:py-4 border-t border-b border-black flex items-center">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee inline-block whitespace-nowrap flex items-center">
          {Array(repetitions).fill(0).map((_, i) => (
            <div key={i} className="inline-flex items-center text-2xl md:text-3xl lg:text-[40px] font-black font-sans tracking-tighter">
              <span 
                className="pr-2"
                style={{
                  WebkitTextStroke: '1px black',
                  color: 'transparent',
                }}
              >
                IT'S TIME TO CREATE A
              </span>
              
              <span className="pr-2 tracking-tight">
                <span className="text-[#FD5800]">scalo</span>
                <span className="text-black">MATRIX</span>
              </span>

              <span 
                className="text-[#FD5800] inline-block animate-spin mr-4 ml-2" 
                style={{ animationDuration: '4s' }}
              >
                ✹
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
