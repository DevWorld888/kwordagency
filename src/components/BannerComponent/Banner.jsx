
import banner from './images/banner4.png'
import { motion } from 'framer-motion';

const Banner = () => {
    //Styles

    const titleStyle = {
        color: '#1E3868',
        fontSize:'3.4em',
    };
    const buttonStyle = {
        backgroundColor: '#4ABCC9',
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
    };

    //endStyles
    return (
        <div style={bannerStyle} id='home'>
            <div className="container my-5" >
                <div className="row align-items-center">
                    {/* Texto a la izquierda */}
                    <div className="col-md-6" >
                        <div style={titleStyle} className='mainFontRegular mi-span'>Agencia de</div>
                        <div style={titleStyle} className='mainFontBold mi-span performanceTxt'>Performance</div>
                        <span style={titleStyle} className='mainFontRegular mi-span'>Marketing</span>
                        <p style={{ fontSize: '1.7em', color: '#1E3868' }} className='mainFontRegular'>Escalamos tus ventas con anuncios en Facebook, Instagram Y Google.</p>
                        <a href='#contact'>
                        <button className='btn btn-primary mainFontBold shadow' style={buttonStyle} >Cont&aacute;ctanos</button>
                        </a>
                    </div>
                    {/* Imagen a la derecha  */}
                    <div className="col-md-6">
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.img
                                src={banner}
                                alt="banner Image"
                                whileHover={{ scale: 1.1 }} // Escala la imagen al pasar el ratón sobre ella
                                whileTap={{ scale: 0.9 }} // Escala la imagen al hacer clic sobre ella
                                className="img-fluid"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
