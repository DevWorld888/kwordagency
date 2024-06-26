
import banner from './images/banner5.png'
// import { motion } from 'framer-motion';

const Banner = () => {

    // <motion.div
    //     initial={{ opacity: 0, y: -100 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 1 }}
    // >
    //     <motion.img
    //         src={banner}
    //         alt="banner Image"
    //         whileHover={{ scale: 1.1 }} // Escala la imagen al pasar el ratón sobre ella
    //         whileTap={{ scale: 0.9 }} // Escala la imagen al hacer clic sobre ella
    //         className="img-fluid"
    //     />
    // </motion.div>
    //Styles

    const titleStyle = {
        color: '#1E3868',
        fontSize: '3.1em',
    };
    const buttonStyle = {
        backgroundColor: '#FF914D',
        fontWeight: 'bold',
        width: '9em',
        border: 'none',
        height: '3em',
        borderRadius: '10px',
        color: '#FFF'

    }
    const bannerStyle = {
        backgroundColor: '#F2F2F2', // Color de fondo
        padding: '20px',
        paddingBottom: '0px'
    };

    //endStyles
    return (
        <div style={bannerStyle} id='home'>
            <div className="container py-0" >
                <div className="row align-items-center">
                    {/* Texto a la izquierda */}
                    <div className="col-md-6" >
                        <div style={titleStyle} className='mainFontRegular mi-span'>Agencia de</div>
                        <div style={titleStyle} className='mainFontBold mi-span'>Performance</div>
                        <span style={titleStyle} className='mainFontRegular mi-span'>Marketing</span>
                        <p style={{ fontSize: '1.7em', color: '#1E3868' }} className='mainFontRegular'>Escalamos tus ventas con anuncios en Facebook, Instagram Y Google.</p>
                        <a href='#contact'>
                            <button className='btn btn-primary mainFontBold shadow' style={buttonStyle} >Cont&aacute;ctanos</button>
                        </a>
                    </div>
                    {/* Imagen a la derecha  */}
                    <div className="col-md-6">
                        <img src={banner} className="img-fluid" alt="Descripción de la imagen"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
