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
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
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
      <Footer />
    </div>
  )
}

export default App

