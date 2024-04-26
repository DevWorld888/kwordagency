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
import { MutatingDots } from 'react-loader-spinner'


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga asincrónica
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#1E3868', zIndex: 999, display: loading ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#FFF"
        secondaryColor="#3CB9BB"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  ) : (
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
