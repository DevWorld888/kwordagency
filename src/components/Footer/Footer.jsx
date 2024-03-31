
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logok.png'
const Footer = () => {
  return (
    <div  style={{background:'#1E3868',padding: '40px'}}>
        <div className="container " >
        <div className="row">
            {/* Columna 1 */}
            <div className="col-md-4 d-flex flex-column align-items-center">
            <div className="footer-icons" >
                <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '10px',color:"#FFF" ,fontSize:'2em' }}  />
                <FontAwesomeIcon icon={faFacebook}  style={{ marginRight: '10px',color:"#FFF",fontSize:'2em' }}/>
                <FontAwesomeIcon icon={faLinkedin} style={{ color:"#FFF",fontSize:'2em' }}/>
            </div>
            <div className="brand-logo">
                {/* Inserta aquí el logo de tu marca */}
                <img src={logo} alt="Logo" width={350} />
            </div>
            </div>
            {/* Columna 2 */}
            <div className="col-md-4 ">
            <div className="contact-info mb-3">
                <FontAwesomeIcon icon={faPhone} style={{color:"#FFF",marginRight:"5px"}} />
                <span style={{color:"#FFF"}}>+57 318380620</span>
            </div>
            <div className="contact-info  mb-3">
                <FontAwesomeIcon icon={faEnvelope} style={{color:"#FFF",marginRight:"5px"}} />
                <span style={{color:"#FFF"}}> Escribenos a : info@kwordagency.com</span>
            </div>
            <a href="https://wa.me/message/LTCNZ2HVXPKGA1" target="_blank">
                <button className="btn btn-success" style={{background:"#25D366",fontWeight:'bold'}}>Escríbenos por WhatsApp</button>
            </a>
            <p style={{color:"#FFF"}} className='mt-3'>Bucaramanga, Colombia</p>
            </div>
            {/* Columna 3 (vacia para ocupar espacio) */}
            <div className="col-md-4"></div>
        </div>
        </div>
    </div>
    
  );
};

export default Footer;

