
import './App.css'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import HeroSection from './pages/Hero'
import Navbar from './pages/Navbar'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import WhatsAppButton from './pages/WhatsAppButton'

function App() {
  
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <Services/>
    <Portfolio/>
    <Team/>
    <Testimonials/>
    <Contact/>
    <WhatsAppButton/>
    <Footer/>
    {/* <h1 className="bg-amber-200">helo</h1> */}
    </>
  )
}

export default App
