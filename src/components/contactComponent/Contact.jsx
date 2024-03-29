

const Contact = () => {
    //Styles
    const titleStyle = {
        color: '#1E3868',
        fontSize: '3.5em'
    };
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
                    {/* Texto a la izquierda */}
                    <div className="col-md-6">
                        <h2 style={titleStyle} >¿Cu&aacute;l es tu reto en Marketing Digital? </h2>

                        <p style={{ fontSize: '1.5em', color: '#1E3868' }}>Complete los datos de el formulrio, lo contactaremos en las pr&oacute;ximas horas. Tambi&eacute;n puede escribirnos a</p>
                        <span style={{ fontWeight: 'bold', fontSize: '2em', color: '#1E3868' }}>info@kwordagency.com</span>

                    </div>
                    {/* Imagen a la derecha  */}
                    <div className="col-md-6">
                        <div className="container " >
                            <form className="p-3" style={{border: '6px solid #1E3868',borderRadius:'20px', backgroundColor: '#FFF'}}>
                                <h2 className="text-center mb-4" style={{color: '#1E3868', fontWeight:'bold'}}>Cont&aacute;ctanos</h2>
                                <div className="form-group mb-2">
                                    <input type="text" className="form-control" placeholder="Nombre" style={{ backgroundColor: '#E3E1D9' }} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type="email" className="form-control" placeholder="Correo" style={{ backgroundColor: '#E3E1D9' }} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type="tel" className="form-control" placeholder="Teléfono" style={{ backgroundColor: '#E3E1D9' }} />
                                </div>
                                <div className="form-group mb-2">
                                    <input type="text" className="form-control" placeholder="Empresa" style={{ backgroundColor: '#E3E1D9' }} />
                                </div>
                                <div className="form-group mb-2">
                                    <select className="form-control" style={{ backgroundColor: '#E3E1D9' }}>
                                        <option value="none" selected>Seleccione un país</option>
                                        <option value="ARG">Argentina</option>
                                        <option value="BOL">Bolivia</option>
                                        <option value="BRA">Brasil</option>
                                        <option value="CHL">Chile</option>
                                        <option value="COL">Colombia</option>
                                        <option value="ECU">Ecuador</option>
                                        <option value="GTM">Guatemala</option>
                                        <option value="HND">Honduras</option>
                                        <option value="MEX">México</option>
                                        <option value="PER">Perú</option>
                                        <option value="USA">Estados Unidos</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2">
                                    <textarea className="form-control" placeholder="Mensaje" rows="3" style={{ backgroundColor: '#E3E1D9' }}></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary" style={buttonStyle}>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
               
    )
}

export default Contact
