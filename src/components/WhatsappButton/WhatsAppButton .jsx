
import { motion } from 'framer-motion';
import './WhatsAppButton.css'; // Asegúrate de crear este archivo CSS para estilos
const WhatsAppButton = () => {

    const buttonVariants = {
        hover: {
            scale: 1.1, // Escalar el botón a 1.1 veces su tamaño original al pasar el mouse
            transition: {
                duration: 0.3, // Duración de la transición de 0.3 segundos
            },
        },
        float: {
            y: ["-10%", "10%"], // Mover el botón arriba y abajo para la animación flotante
            transition: {
                repeat: Infinity, // Repetir la animación indefinidamente
                repeatType: "reverse", // Hacer que la animación se invierta en cada iteración
                duration: 2, // Duración de cada ciclo de la animación
            },
        },
    };
    // Define tu número de teléfono en formato internacional sin el '+'
    const phoneNumber = 'LTCNZ2HVXPKGA1';
    return (
        <motion.a
            href={`https://wa.me/message/${phoneNumber}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            variants={buttonVariants}
            whileHover="hover"
            animate="float"
        >
            <i className="fa fa-whatsapp whatsapp-icon"></i> {/* Utilizando Font Awesome */}
        </motion.a>
    );
};

export default WhatsAppButton;
