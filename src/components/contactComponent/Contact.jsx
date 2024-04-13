
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // Importa emailjs
import { useState } from 'react';
import TagManager from 'react-gtm-module';
const Contact = () => {
    // Estado para el mensaje de alerta
    const [alertMessage, setAlertMessage] = useState(null);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => {
        setShowModal(true);
        // TagManager.dataLayer({
        //     dataLayer: {
        //         event: 'modal_displayed',
        //         modalName: 'contactModal',
        //     },
        // });
    };
    // Estilos
    const titleStyle = {
        color: '#FFF',
        fontSize: '3.5em'
    };
    const buttonStyle = {
        backgroundColor: '#4ABCC9',
        fontWeight: 'bold',
        width: '9em',
        border: 'none',
        height: '3em',
        borderRadius: '10px',
        color: '#FFF'
    };
    const bannerStyle = {
        backgroundColor: '#1E3868', // Color de fondo 
        padding: '20px',
    };
    // Fin estilos
    // const handleClick = () => {
    //     gtag_report_conversion('https://www.kwordagency.com/#contact');
    // };
    return (
        <div style={bannerStyle} id="contact">
            <div className="container my-5" >
                <div className="row align-items-center">
                    {/* Texto a la izquierda */}
                    <div className="col-md-6">
                        <h2 style={titleStyle} className='mainFontBold'>¿Cuál es tu reto en Marketing Digital? </h2>
                        <p style={{ fontSize: '1.5em', color: '#FFF' }} className='mainFontRegular'>Completa los datos de el formulario y te contactaremos en las próximas horas. También puedes escribirnos a <b>info@kwordagency.com</b></p>
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
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    
                                    // Enviar el formulario utilizando emailjs
                                    emailjs.send('service_n13x0xu', 'template_h92a854', values, 'Ugh5dOBr-C24shgfl')
                                        .then((response) => {
                                            console.log('Correo enviado con éxito:', response.status, response.text);
                                            setAlertMessage('Mensaje enviado con éxito');
                                            handleShowModal()
                                            TagManager.dataLayer({
                                                dataLayer: {
                                                    event: 'form_submit',
                                                    formName: 'contactform',
                                                    formId: 'formToSendTagManager',
                                                },
                                            });
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
                                    <Form className="p-3" style={{ border: '6px solid #B4B4B8', borderRadius: '20px', backgroundColor: '#FFF' }} id='formToSendTagManager' formId='formToSendTagManager' formName='contactform'>
                                        <h2 className="text-center mb-4 mainFontBold" style={{ color: '#1E3868', fontWeight: 'bold' }} >Contáctanos</h2>
                                        <div className="form-group mb-2">
                                            <Field type="text" className="form-control" placeholder="Nombre" name="name" id="name" style={{ backgroundColor: '#E3E1D9' }} />
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
                                            <button type="submit shadow" className="btn btn-primary mainFontBold" style={buttonStyle} disabled={isSubmitting} >Enviar</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            {/* Modal Bootstrap */}
                            <Modal show={showModal} onHide={handleCloseModal} id='ModalTag'>
                                <Modal.Header closeButton>
                                    <Modal.Title>¡Mensaje enviado con éxito!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo lo antes posible.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseModal}>
                                        Cerrar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
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


// Crea un nuevo evento personalizado llamado "modal_displayed" y agrega una variable modalName para almacenar el nombre del modal.
// Configura una nueva regla para activar una etiqueta cuando el evento "modal_displayed" ocurra.
// Crea una etiqueta que realice el seguimiento deseado (por ejemplo, enviar un evento de Google Analytics) cuando se active la regla.
// Con esto, estarás enviando un evento a GTM cada vez que se muestre el modal, y podrás realizar el seguimiento deseado utilizando las etiquetas y reglas configuradas en GTM.







