// import { useState } from 'react'

// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import ChangesLives from "./components/changeLivesComponent/ChangesLives";
import WhatsAppButton from "./components/WhatsappButton/WhatsAppButton ";


function App() {

  return  (
    <>
      <NavComponent />
      <Banner />
      <CallAction />
      <Paid />
      <Consultoria />
      <Developer />
      <PlatformsComponent />
      <Contact />
      <ChangesLives />
      <Footer />
      <WhatsAppButton />
    </>
  )

}

export default App
