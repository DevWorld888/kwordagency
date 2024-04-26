import banner from './images/banner2.png'
import { motion } from 'framer-motion';

export default function Consultoria() {
    const buttonStyle = {
        backgroundColor: '#FF914D',
        fontWeight: 'bold',
        width: '9em',
        border:'none',
        height:'3em',
        borderRadius:'10px',
        color:'#FFF'
        
    }
    const bannerStyle = {
        backgroundColor: '#F2F2F2', // Color de fondo 
        padding: '1px 10px',
    };
    //endStyles
    return (
        <div style={bannerStyle} id='consul'>
            <div className="container my-5" >
                <div className="row align-items-center">
                    {/* Texto a la izquierda */}
                    <div className="col-md-6">
                        <span style={{ fontWeight: 'bold', fontSize: '3em', color: '#1E3868' }} className='mainFontBold'>Consultor&iacute;a</span>
                        <p style={{ fontSize: '1.5em', color: '#1E3868', textAlign: 'justify' }} className='mainFontRegular'>
                            Revisamos tus campañas de Facebook ads o Google ads y te damos una lista de recomendaciones para mejorar tus resultados. Adem&aacute;s, tendr&aacute;s un seguimiento para ayudarte a mantener o incluso escalar tus ventas.
                        </p>
                        <a href='#contact'>
                            <button className='btn btn-primary mainFontBold shadow' style={buttonStyle}>Cont&aacute;ctanos</button>
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
