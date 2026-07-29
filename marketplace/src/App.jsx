import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Masterclass from './components/Masterclass'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <Masterclass />
      </main>

      <Footer />
    </div>
  )
}

export default App
