
import facebook from './images/faceebook.png';
import google from './images/google.png';
export default function PlatformsComponent() {
    const bannerStyle = {
        backgroundColor: '#F2F2F2', // Color de fondo 
        padding: '20px',
    };
    return (
        <div style={bannerStyle}>
            <div className="container my-5" >
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3">
                        <span style={{ fontWeight: 'bold', fontSize: '3em', color: '#1E3868' }}>Plataformas</span>
                    </div>
                    <div className="col-md-3">
                        <img src={facebook} alt="Descripción de la imagen" className="img-fluid" width={200}/>
                    </div>
                    <div className="col-md-3 mt-3">
                        <img src={google} alt="Descripción de la imagen" className="img-fluid" width={200}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
