import './normalize.css'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/landing/Landing'
import './css/all.min.css'
import Articles from './components/SectionArticle/Articles'
import Gallery from './components/Gallery/Gallery'
import Features from './components/Features/Features'
import Testimonials from './components/Testimonials/Testimonials'
import TestMembers from './components/Test-members/TestMembers'
import Services from './components/Services/Services'
import OurSkills from './components/OurSkills/OurSkills'
import HowItWorks from './components/HowItWorks/HowItWorks'
import LatesEvents from './components/LatestEvents/LatesEvents'
import PricingPlans from './components/PricingPlans/PricingPlans'
import Topvideos from './components/TopVideos/Topvideos'
import SectionsStats from './components/SectionsStats/SectionsStats'
import Discount from './components/Discount/Discount'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react'
function App() {
useEffect(()=>{
    document.title='Templete one'
})
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Articles/>
      <Gallery/>
      <Features/>
      <Testimonials/>
      <TestMembers/>
      <Services/>
      <OurSkills/>
      <HowItWorks/>
      <LatesEvents/>
      <PricingPlans/>
      <Topvideos/>
      <SectionsStats/>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default App
