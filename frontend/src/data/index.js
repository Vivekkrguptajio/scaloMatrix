import fintechImg from './images/case-studies/fintech.jpg';
import ecommerceImg from './images/case-studies/ecommerce.jpg';
import healthcareImg from './images/case-studies/healthcare.jpg';
import crmImg from './images/case-studies/crm.jpg';

import geoAeoImg from './images/insights/geo-aeo.png';
import aeo101Img from './images/insights/aeo-101.jpg';
import omnichannelImg from './images/insights/omnichannel.png';

export const caseStudies = [
  {
    id: 1,
    title: "Global FinTech App Restructure",
    client: "Finova",
    category: "UX/UI Design",
    metric: "+150%",
    metricLabel: "User Conversion",
    description: "Simplified complex financial data into an intuitive, frictionless user experience.",
    image: fintechImg,
    color: "bg-blue-500",
    textColor: "text-blue-500",
    bgLight: "bg-blue-50"
  },
  {
    id: 2,
    title: "E-Commerce Replatforming",
    client: "StyleStore",
    category: "Development",
    metric: "3.2x",
    metricLabel: "Faster Page Load",
    description: "Migrated a legacy monolith to modern headless architecture for better SEO.",
    image: ecommerceImg,
    color: "bg-[#FD5800]",
    textColor: "text-[#FD5800]",
    bgLight: "bg-orange-50"
  },
  {
    id: 3,
    title: "Healthcare SaaS Platform",
    client: "MedSync",
    category: "Product Design",
    metric: "40%",
    metricLabel: "Less Support Tickets",
    description: "Unified portal for doctors and patients that streamlined communication.",
    image: healthcareImg,
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
    bgLight: "bg-emerald-50"
  },
  {
    id: 4,
    title: "AI CRM Integration",
    client: "SalesPro",
    category: "AI & Automation",
    metric: "2.5x",
    metricLabel: "Lead Conversion",
    description: "Automated follow-ups and lead scoring using AI, boosting sales velocity.",
    image: crmImg,
    color: "bg-purple-500",
    textColor: "text-purple-500",
    bgLight: "bg-purple-50"
  }
];

export const faqs = [
  {
    question: "How do you blend creativity with technology?",
    answer: "We believe magic happens at the intersection of art and code. Our award-winning creatives work hand-in-hand with our engineering team from day one. This ensures every bold idea is not just visually stunning, but technically robust and infinitely scalable."
  },
  {
    question: "What is your approach to brand transformation?",
    answer: "We don't just refresh logos; we engineer holistic brand experiences. By diving deep into consumer insights and cultural trends, we build immersive digital ecosystems that drive real business growth and leave a lasting cultural legacy."
  },
  {
    question: "How long does it take to see tangible results?",
    answer: "While our rapid prototyping allows us to launch impactful campaigns within weeks, true transformation is a journey. We focus on quick wins to generate immediate ROI, while laying the robust groundwork for sustainable, long-term market dominance."
  },
  {
    question: "Do you collaborate with in-house marketing teams?",
    answer: "Absolutely. We view ourselves as a seamless extension of your team. Whether you need us to take the reins completely or co-create alongside your internal experts, our agile pods adapt to your unique workflow to maximize impact."
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Working with scaloMATRIX was a game-changer. They completely transformed our brand identity and helped us 10x our organic traffic in just 6 months.",
    name: "Sarah Jenkins",
    role: "CMO, TechNova",
    rating: 5,
  },
  {
    id: 2,
    quote: "Their attention to detail and strategic approach is unmatched. The web app they built for us not only looks stunning but performs flawlessly under heavy load.",
    name: "David Chen",
    role: "Founder, ScaleUp SaaS",
    rating: 5,
  },
  {
    id: 3,
    quote: "We hired them for a complete rebrand. What we got was a masterclass in modern digital strategy. I highly recommend Ranjeet and his incredible team.",
    name: "Elena Rodriguez",
    role: "VP of Growth, FinEdge",
    rating: 5,
  }
];

export const insights = [
  {
    id: 1,
    category: "Marketing Strategy",
    title: "The Complete GEO + AEO Checklist For Brand Marketers In 2026",
    date: "July 12, 2026",
    excerpt: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are the new frontiers of search. Here is your ultimate checklist to stay ahead.",
    image: geoAeoImg
  },
  {
    id: 2,
    category: "AI & Tech",
    title: "AEO 101: How Brands Get Featured In AI-Generated Answers",
    date: "June 28, 2026",
    excerpt: "Discover the exact mechanics behind how AI search engines decide which brands to feature, and what might be stopping your brand from appearing.",
    image: aeo101Img
  },
  {
    id: 3,
    category: "Case Study",
    title: "Making Headlines: Omnichannel Launch for an Original News Show",
    date: "May 15, 2026",
    excerpt: "How we crafted a bold, multi-platform campaign that disrupted the digital news space and garnered millions of views in its opening weekend.",
    image: omnichannelImg
  }
];
