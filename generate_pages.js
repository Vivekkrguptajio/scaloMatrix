const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Vivek kumar Gupta\\Desktop\\Dhiraj';
const targets = ['brand', 'commerce', 'finance', 'growth', 'leadgen', 'media'];

const contentData = {
  brand: {
    hero: { subtitle: "Brand Identity & Strategy", title1: "Build a lasting", title2: "legacy.", desc: "Connect deeply with your audience through powerful storytelling and visual identity." },
    services: [
      { id: '01', title: 'Brand Strategy', desc: 'Defining your core message and positioning.' },
      { id: '02', title: 'Visual Identity', desc: 'Crafting stunning logos, typography, and assets.' },
      { id: '03', title: 'UI/UX Experience', desc: 'Designing seamless and beautiful digital products.' }
    ],
    process: { title: "Our Branding Process", steps: ["Discovery & Research", "Conceptualization", "Design Execution", "Brand Guidelines"] }
  },
  commerce: {
    hero: { subtitle: "E-Commerce Solutions", title1: "Lightning-fast", title2: "storefronts.", desc: "Scale your revenue seamlessly with high-converting custom platforms." },
    services: [
      { id: '01', title: 'Custom Development', desc: 'Bespoke storefronts tailored for maximum speed.' },
      { id: '02', title: 'CRO', desc: 'Data-driven conversion rate optimization.' },
      { id: '03', title: 'Migration', desc: 'Seamless replatforming without losing SEO traffic.' }
    ],
    process: { title: "Our Commerce Blueprint", steps: ["Audit & Strategy", "Wireframing UX", "Development", "Launch & Optimize"] }
  },
  finance: {
    hero: { subtitle: "Financial Analytics", title1: "Optimize your", title2: "budget & ROI.", desc: "Scale your marketing efficiently with clear financial planning and ROI tracking." },
    services: [
      { id: '01', title: 'Financial Planning', desc: 'Strategic allocation of your marketing spend.' },
      { id: '02', title: 'Budget Allocation', desc: 'Maximizing returns across high-performing channels.' },
      { id: '03', title: 'ROI Tracking', desc: 'Real-time dashboards for financial attribution.' }
    ],
    process: { title: "Financial Engineering", steps: ["Data Consolidation", "Spend Analysis", "Forecasting", "Continuous Optimization"] }
  },
  growth: {
    hero: { subtitle: "Growth & Scaling", title1: "Accelerate your", title2: "market presence.", desc: "Acquire high-LTV customers worldwide using full-funnel growth engines." },
    services: [
      { id: '01', title: 'Performance Marketing', desc: 'Scalable paid acquisition across platforms.' },
      { id: '02', title: 'SEO & SEM', desc: 'Dominating search intent and organic traffic.' },
      { id: '03', title: 'Retention Strategies', desc: 'Maximizing LTV through email and SMS flows.' }
    ],
    process: { title: "The Growth Framework", steps: ["Audience Modeling", "Channel Testing", "Rapid Scaling", "Retention Loops"] }
  },
  leadgen: {
    hero: { subtitle: "B2B Lead Generation", title1: "High-converting", title2: "inbound funnels.", desc: "Build highly converting systems to capture and nurture quality inbound leads at scale." },
    services: [
      { id: '01', title: 'B2B Leads', desc: 'Targeted outreach and account-based marketing.' },
      { id: '02', title: 'Funnel Optimization', desc: 'Reducing drop-offs at every stage of the pipeline.' },
      { id: '03', title: 'Inbound Marketing', desc: 'Creating magnets that draw your ideal ICP.' }
    ],
    process: { title: "Lead Generation System", steps: ["ICP Definition", "Funnel Architecture", "Traffic Generation", "Lead Nurturing"] }
  },
  media: {
    hero: { subtitle: "Media Buying & Content", title1: "Data-driven", title2: "media scaling.", desc: "Drive growth and maximize ROI with strategic media planning and content creation." },
    services: [
      { id: '01', title: 'Media Planning', desc: 'Omni-channel strategies for maximum reach.' },
      { id: '02', title: 'Content Creation', desc: 'Scroll-stopping creatives and video assets.' },
      { id: '03', title: 'Programmatic Ads', desc: 'Automated bidding and inventory acquisition.' }
    ],
    process: { title: "Media Buying Lifecycle", steps: ["Market Research", "Creative Production", "Campaign Launch", "A/B Testing & Scaling"] }
  }
};

const getHeroTemplate = (data) => `import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white px-6">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#FD5800] text-sm font-bold tracking-wide mb-6 uppercase"
        >
          ${data.hero.subtitle}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8"
        >
          ${data.hero.title1} <br/>
          <span className="text-[#FD5800]">${data.hero.title2}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          ${data.hero.desc}
        </motion.p>
      </div>
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>
    </section>
  )
}`;

const getServicesTemplate = (data) => `export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-gray-50 rounded-[40px] md:rounded-[60px] mx-4 md:mx-8 mb-20 shadow-sm border border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to scale, engineered for maximum performance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${data.services.map(s => `
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="text-4xl font-black text-[#FD5800]/20 mb-6 group-hover:text-[#FD5800] transition-colors">${s.id}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">${s.title}</h3>
            <p className="text-gray-600 leading-relaxed">${s.desc}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>
  )
}`;

const getProcessTemplate = (data) => `export default function Process() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 text-center">${data.process.title}</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#FD5800]/30 before:to-transparent">
          ${data.process.steps.map((step, idx) => `
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#FD5800] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              ${idx + 1}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#FD5800]/30 transition-colors shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-2">${step}</h3>
              <p className="text-gray-600">Executing precise strategies to ensure maximum impact in this phase of the journey.</p>
            </div>
          </div>
          `).join('')}
        </div>
      </div>
    </section>
  )
}`;

const getAppTemplate = () => `import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import Process from './components/Process'
import TeamMembers from './components/TeamMembers'
import ContactUs from './components/ContactUs'
import ThePromise from './components/ThePromise'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './index.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, 
      wheelMultiplier: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
  
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-24">
        <Hero />
        <ScrollReveal><ServicesGrid /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><TeamMembers /></ScrollReveal>
        <ContactUs />
        <ScrollReveal><ThePromise /></ScrollReveal>
      </main>

      <Contact reveal={true} />
    </div>
  )
}

export default App
`;

targets.forEach(target => {
  const targetDir = path.join(root, target);
  const componentsDir = path.join(targetDir, 'src', 'components');
  
  if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });

  const data = contentData[target];

  fs.writeFileSync(path.join(componentsDir, 'Hero.jsx'), getHeroTemplate(data));
  fs.writeFileSync(path.join(componentsDir, 'ServicesGrid.jsx'), getServicesTemplate(data));
  fs.writeFileSync(path.join(componentsDir, 'Process.jsx'), getProcessTemplate(data));
  
  fs.writeFileSync(path.join(targetDir, 'src', 'App.jsx'), getAppTemplate());
});

console.log("Custom pages successfully generated for all 6 micro-services!");
