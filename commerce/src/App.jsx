import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import HappyClients from './components/HappyClients'
import GuestList from './components/GuestList'
import CaseStudiesGrid from './components/CaseStudiesGrid'
import Calculator from './components/Calculator'
import Intersection from './components/Intersection'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import HiringPhilosophy from './components/HiringPhilosophy'
import WhoWeDontWorkWith from './components/WhoWeDontWorkWith'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f3f2eb]">
      <Navbar />
      <Hero />
      <FeaturedCaseStudy />
      <HappyClients />
      <GuestList />
      <CaseStudiesGrid />
      <Calculator />
      <Intersection />
      <Services />
      <HowItWorks />
      <HiringPhilosophy />
      <WhoWeDontWorkWith />
      <Footer />
    </div>
  )
}

export default App
