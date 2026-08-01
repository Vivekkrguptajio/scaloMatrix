import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import HappyClients from './components/HappyClients'
import GuestList from './components/GuestList'
import CaseStudiesGrid from './components/CaseStudiesGrid'
import Calculator from './components/Calculator'
import Intersection from './components/Intersection'
import Services from './components/Services'
import AiManifesto from './components/AiManifesto'
import CroBrandExercise from './components/CroBrandExercise'
import HowItWorks from './components/HowItWorks'
import HiringPhilosophy from './components/HiringPhilosophy'
import WhoWeDontWorkWith from './components/WhoWeDontWorkWith'
import ContactUs from './components/ContactUs'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <ScrollReveal><FeaturedCaseStudy /></ScrollReveal>
        <ScrollReveal><HappyClients /></ScrollReveal>
        <ScrollReveal><GuestList /></ScrollReveal>
        <ScrollReveal><CaseStudiesGrid /></ScrollReveal>
        <ScrollReveal><Calculator /></ScrollReveal>
        <ScrollReveal><Intersection /></ScrollReveal>
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><AiManifesto /></ScrollReveal>
        <ScrollReveal><CroBrandExercise /></ScrollReveal>
        <ScrollReveal><HowItWorks /></ScrollReveal>
        <ScrollReveal><HiringPhilosophy /></ScrollReveal>
        <ScrollReveal><WhoWeDontWorkWith /></ScrollReveal>
        <ContactUs />
      </main>

      <Contact reveal={true} />
    </div>
  )
}

export default App

