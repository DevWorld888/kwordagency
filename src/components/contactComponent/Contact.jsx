
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com'; // Importa emailjs
import { useState } from 'react';

const Contact = () => {
    // Estado para el mensaje de alerta
     const [alertMessage, setAlertMessage] = useState(null);
    // Estilos
    const titleStyle = {
        color: '#1E3868',
        fontSize: '3.5em'
    };
    const buttonStyle = {
        backgroundColor: '#4ABCC9',
        fontWeight: 'bold',
        width: '9em',
        border:'none',
        height:'3em',
        borderRadius:'10px',
        color:'#FFF' 
    };
    const bannerStyle = {
        backgroundColor: '#F2F2F2', // Color de fondo 
        padding: '20px',
    };
    // Fin estilos

    return (
        <div style={bannerStyle}  id="contact">
            <div className="container my-5" >
                <div className="row align-items-center">
                    {/* Texto a la izquierda */}
                    <div className="col-md-6">
                        <h2 style={titleStyle}>¿Cuál es tu reto en Marketing Digital? </h2>
                        <p style={{ fontSize: '1.5em', color: '#1E3868' }}>Completa los datos de el formulario y te contactaremos en las próximas horas. También puedes escribirnos a</p>
                        <span style={{ fontWeight: 'bold', fontSize: '1.5em', color: '#1E3868' }}>info@kwordagency.com</span>
                    </div>
                    {/* Imagen a la derecha */}
                    <div className="col-md-6">
                        <div className="container">
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    business: '',
                                    country: 'none',
                                    message: ''
                                }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.name) {
                                        errors.name = 'Campo requerido';
                                    }
                                    if (!values.email) {
                                        errors.email = 'Campo requerido';
                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                        errors.email = 'Dirección de correo electrónico inválida';
                                    }
                                    // Agrega más validaciones si es necesario
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting,resetForm }) => {
                                    // Enviar el formulario utilizando emailjs
                                    emailjs.send('service_n13x0xu', 'template_h92a854', values, 'Ugh5dOBr-C24shgfl')
                                        .then((response) => {
                                            console.log('Correo enviado con éxito:', response.status, response.text);
                                            setAlertMessage('Mensaje enviado con éxito');
                                            resetForm()
                                            
                                        })
                                        .catch((error) => {
                                            console.error('Error al enviar el correo:', error);
                                            setAlertMessage('Algo salió mal al enviar el Mensaje');
                                        })
                                        .finally(() => {
                                            setSubmitting(false);
                                            // Oculta la alerta después de unos segundos
                                            setTimeout(() => {
                                                setAlertMessage(null);
                                            }, 5000);
                                        });
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="p-3" style={{border: '6px solid #1E3868',borderRadius:'20px', backgroundColor: '#FFF'}}>
                                        <h2 className="text-center mb-4" style={{color: '#1E3868', fontWeight:'bold'}}>Contáctanos</h2>
                                        <div className="form-group mb-2">
                                            <Field type="text" className="form-control" placeholder="Nombre" name="name"  id="name" style={{ backgroundColor: '#E3E1D9' }} />
                                            <ErrorMessage name="name" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <Field type="email" className="form-control" placeholder="Correo" name="email" id="email" style={{ backgroundColor: '#E3E1D9' }} />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <Field type="tel" className="form-control" placeholder="Teléfono" name="phone" id="phone" style={{ backgroundColor: '#E3E1D9' }} />
                                            <ErrorMessage name="phone" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <Field type="text" className="form-control" placeholder="Empresa" name="business" id="business" style={{ backgroundColor: '#E3E1D9' }} />
                                            <ErrorMessage name="business" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <Field as="select" className="form-control" name="country" id="country" style={{ backgroundColor: '#E3E1D9' }}>
                                                <option value="none">Seleccione un país</option>
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
                                            </Field>
                                            <ErrorMessage name="country" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <Field as="textarea" className="form-control" placeholder="Mensaje" rows="3" name="message" id="message" style={{ backgroundColor: '#E3E1D9' }} />
                                            <ErrorMessage name="message" component="div" className="text-danger" />
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary" style={buttonStyle} disabled={isSubmitting}>Enviar</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            {/* Alerta Bootstrap */}
                            {alertMessage && (
                                <div className="alert alert-dismissible alert-success fade show mt-3" role="alert">
                                    {alertMessage}
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
