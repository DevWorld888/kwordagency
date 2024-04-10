import { motion } from 'framer-motion';
import shopify from './images/shopify.png'
import tiktokAds from './images/tiktok.png'
import googleAds from './images/4.png'
import facebookAds from './images/3.png'


const PlatformsComponent = () => {
  // const floatVariant = {
  //   initial: { y: 0 },
  //   animate: {
  //     y: [0, -20, 0], // Mueve la imagen 20px hacia arriba y luego vuelve a la posición original
  //     transition: {
  //       duration: 4, // Duración total de la animación
  //       ease: "easeInOut", // Tipo de "ease" para la animación
  //       repeat: Infinity, // Repetir la animación indefinidamente
  //     },
  //   },
  // };
  // const fadeInVariant = {
  //   initial: { opacity: 0 },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5, // Duración de la animación
  //     },
  //   },

  // };
  const scaleVariant = {
    hover: { scale: 1.1 }, // Escalar la imagen al 110% cuando se pasa el mouse por encima
    tap: { scale: 0.9 }, // Escalar la imagen al 90% cuando se hace clic
  };
  return (
    <div className="container" style={{ width: '70%' }}>
      <h2 className="text-center mt-5 mb-4 mainFontBold" style={{ fontWeight: 'bold', fontSize: '3em', color: '#1E3868' }} >Plataformas</h2>
      <div className="row mb-5 text-center">
        <div className="col-md-3 col-sm-6 mb-3">
          <motion.img
            src={facebookAds}
            alt="Platform 2"
            className="img-fluid"
            variants={scaleVariant}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="animate"
          />

        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <motion.img
            src={googleAds}
            alt="Platform 2"
            className="img-fluid"
            variants={scaleVariant}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="animate"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <motion.img
            src={tiktokAds}
            alt="Platform 2"
            className="img-fluid"
            variants={scaleVariant}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="animate"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3" style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
          <motion.img
            src={shopify}
            alt="Platform 1"
            width={200}
            height={200}
            className="img-fluid"
            variants={scaleVariant}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="animate"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformsComponent;


