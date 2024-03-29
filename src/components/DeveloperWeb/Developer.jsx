import banner from './images/banner2.png'
import { motion } from 'framer-motion';

const Developer = () => {

    const buttonStyle = {
        backgroundColor: '#4ABCC9',
        fontWeight: 'bold',
        width: '8em'
    }
    const bannerStyle = {
        backgroundColor: '#F2F2F2', // Color de fondo 
        padding: '20px',
    };
    //endStyles
    return (
        <div style={bannerStyle}>
            <div className="container my-5" >
                <div className="row align-items-center">
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
                    {/* Texto a la izquierda */}
                    <div className="col-md-6">
                        <span style={{ fontWeight: 'bold', fontSize: '3em', color: '#1E3868' }}>Desarrollo Web</span>
                        <p style={{ fontSize: '1.5em', color: '#1E3868', textAlign: 'justify' }}>
                            Diseñamos experiencias de usaurio memorables,traducidas en sitios web de primer nivel que aportan resultados a las metas de nuestros clientes.
                        </p>
                        <button className='btn btn-primary' style={buttonStyle}>Cont&aacute;ctanos</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Developer
