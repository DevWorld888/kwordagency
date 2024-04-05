// import { useState } from 'react'

// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/navComponent/navComponent'
import Banner from './components/BannerComponent/Banner';
import PlatformsComponent from './components/platformsComponent/PlatformsComponent';
import Paid from './components/paidComponent/Paid';
import Consultoria from './components/consulComponent/Consultoria';
import Developer from './components/DeveloperWeb/Developer';
import Contact from './components/contactComponent/Contact';
import Footer from './components/Footer/Footer';
import CallAction from './components/CallAction/CallAction';
function App() {
  

  return (
    <>
      <NavComponent/>
      <Banner />
      <CallAction/>
      <PlatformsComponent/>
      <Paid/>
      <Consultoria/>
      <Developer/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
