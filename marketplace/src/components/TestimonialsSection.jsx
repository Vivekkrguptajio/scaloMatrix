import React, { useState } from 'react';

// Exact SVGs matching the provided image style
const LogoGoldline = () => (
  <div className="flex items-center gap-3 text-gray-300">
    <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
      <path d="M14 14V26M20 10V30M26 16V24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
    <span className="text-[34px] font-semibold tracking-tight text-[#d4d4d8]">goldline</span>
  </div>
);

const LogoAven = () => (
  <div className="flex items-center gap-3 text-gray-300">
    <svg width="48" height="48" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6C20 6 13 14 13 22C13 26 16 29 20 29C24 29 27 26 27 22C27 14 20 6 20 6Z" />
      <path d="M11 25C11 25 5 21 5 15C5 11 8 8 12 8C16 8 20 14 20 14" fill="currentColor" opacity="0.6"/>
      <path d="M29 25C29 25 35 21 35 15C35 11 32 8 28 8C24 8 20 14 20 14" fill="currentColor" opacity="0.6"/>
    </svg>
    <span className="text-[34px] font-semibold tracking-tighter text-[#d4d4d8]">aven.</span>
  </div>
);

const LogoKanba = () => (
  <div className="flex items-center gap-3 text-gray-400">
    <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28C8.68629 28 6 25.3137 6 22C6 18.6863 8.68629 16 12 16C15.3137 16 24.6863 28 28 28C31.3137 28 34 25.3137 34 22C34 18.6863 31.3137 16 28 16C24.6863 16 15.3137 28 12 28Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 22L16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-[34px] font-sans font-semibold tracking-tight text-[#d4d4d8]">kanba</span>
  </div>
);

const testimonialsData = [
  {
    id: 't1',
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    quote: "I've seen a significant improvement in our team's productivity since we started using this service.",
  },
  {
    id: 't2',
    name: 'Jane Smith',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.',
  },
  {
    id: 't3',
    name: 'Daniel Martinez',
    role: 'Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The best investment we\'ve made! The support team is also super responsive and helpful.',
  }
];

export default function TestimonialsSection() {
  const [dismissed, setDismissed] = useState([]);

  const handleDismiss = (id) => {
    setDismissed((prev) => [...prev, id]);
  };

  const TestimonialCard = ({ item }) => {
    if (dismissed.includes(item.id)) {
      return <div className="w-[380px] h-[200px] flex-shrink-0" />;
    }

    return (
      <div className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 w-[380px] h-[200px] flex-shrink-0 relative flex flex-col group">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-11 h-11 rounded-full object-cover grayscale-[20%] opacity-90"
            />
            <div>
              <h4 className="text-[15px] font-semibold text-[#f4f4f5] leading-tight">{item.name}</h4>
              <p className="text-[13px] text-[#a1a1aa] mt-0.5">{item.role}</p>
            </div>
          </div>
          <button
            onClick={() => handleDismiss(item.id)}
            className="text-[#a1a1aa] hover:text-white transition-colors"
            aria-label="Dismiss testimonial"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <p className="text-[#d4d4d8] text-[16px] leading-[1.6] font-normal pr-2">
          {item.quote}
        </p>
      </div>
    );
  };

  const LogoCard = ({ children }) => (
    <div className="bg-[#18181B] border border-[#222] rounded-2xl h-[160px] w-[380px] flex-shrink-0 flex items-center justify-center relative overflow-hidden group">
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent opacity-60 pointer-events-none" />
      <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
        {children}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#09090B] text-white relative overflow-hidden font-sans border-t border-[#222]">
      
      {/* Marquee Track Container */}
      <div className="flex relative overflow-hidden">
        
        {/* Left & Right Gradients for Marquee fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#09090B] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#09090B] to-transparent z-20 pointer-events-none" />

        {/* Single Marquee Row containing Columns */}
        <div className="flex w-max relative">
          <div className="animate-marquee flex gap-6 w-max">
            
            {/* Set 1 */}
            {/* Column A: Testimonial Tall, Logo Short */}
            <div className="flex flex-col gap-6">
              <TestimonialCard item={testimonialsData[0]} />
              <LogoCard><LogoAven /></LogoCard>
            </div>

            {/* Column B: Logo Short, Testimonial Tall */}
            <div className="flex flex-col gap-6">
              <LogoCard><LogoGoldline /></LogoCard>
              <TestimonialCard item={testimonialsData[2]} />
            </div>

            {/* Column C: Testimonial Tall, Logo Short */}
            <div className="flex flex-col gap-6">
              <TestimonialCard item={testimonialsData[1]} />
              <LogoCard><LogoKanba /></LogoCard>
            </div>

            {/* Set 2 (Duplicate for infinite loop) */}
            <div className="flex flex-col gap-6">
              <TestimonialCard item={testimonialsData[0]} />
              <LogoCard><LogoAven /></LogoCard>
            </div>

            <div className="flex flex-col gap-6">
              <LogoCard><LogoGoldline /></LogoCard>
              <TestimonialCard item={testimonialsData[2]} />
            </div>

            <div className="flex flex-col gap-6">
              <TestimonialCard item={testimonialsData[1]} />
              <LogoCard><LogoKanba /></LogoCard>
            </div>
            
            {/* Set 3 (Duplicate to ensure smooth scrolling on wide screens) */}
            <div className="flex flex-col gap-6">
              <TestimonialCard item={testimonialsData[0]} />
              <LogoCard><LogoAven /></LogoCard>
            </div>

            <div className="flex flex-col gap-6">
              <LogoCard><LogoGoldline /></LogoCard>
              <TestimonialCard item={testimonialsData[2]} />
            </div>

            <div className="flex flex-col gap-6">
              <TestimonialCard item={testimonialsData[1]} />
              <LogoCard><LogoKanba /></LogoCard>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
