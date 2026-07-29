import React from 'react';

export const approachIcons = [
  { src: "/logo/Frame 1.svg", text: "love what we do" },
  { src: "/logo/Frame 2.svg", text: "roots to visuals" },
  { src: "/logo/Frame 3.svg", text: "calm process" },
  { src: "/logo/Frame 4.svg", text: "efficiency first" },
  { src: "/logo/Frame 5.svg", text: "creative minds" },
  { src: "/logo/Frame 6.svg", text: "fueled by curiosity" }
];

export const solutions = [
  {
    id: "01",
    title: "Brand",
    desc: "Build a lasting legacy and connect deeply with your audience through powerful storytelling.",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    list: ["Brand Strategy", "Visual Identity", "Packaging Design", "UI/UX Experience", "Messaging & Voice"]
  },
  {
    id: "02",
    title: "Commerce",
    desc: "Scale your revenue seamlessly with high-converting, lightning-fast storefronts.",
    link: "http://commerce.localhost:5173",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["Shopify Plus Development", "Conversion Rate (CRO)", "Custom Landing Pages"]
  },
  {
    id: "03",
    title: "Growth",
    desc: "Accelerate your market presence and acquire high-LTV customers worldwide.",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    list: ["Performance Marketing", "UGC & Creators", "SEO, SEM & Retention"]
  },
  {
    id: "04",
    title: "Media",
    desc: "Drive growth and maximize ROI with data-driven media and performance marketing solutions.",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    list: ["Media Planning", "Media Buying", "Content Creation"]
  },
  {
    id: "05",
    title: "MarketPlace",
    desc: "Dominate online marketplaces with optimized product listings and ad strategies.",
    link: "http://marketplace.localhost:5174",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["Amazon Optimization", "E-commerce SEO", "Listing Management"]
  },
  {
    id: "06",
    title: "Finance",
    desc: "Optimize your budget allocation and scale your marketing efficiently with clear ROI tracking.",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    list: ["Financial Planning", "Budget Allocation", "ROI Tracking"]
  },
  {
    id: "07",
    title: "Lead Gen",
    desc: "Build highly converting funnels to capture and nurture quality inbound leads at scale.",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["B2B Leads", "Funnel Optimization", "Inbound Marketing"]
  }
];
