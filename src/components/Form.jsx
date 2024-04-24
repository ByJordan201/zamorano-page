import React from 'react';

const Form = () => {

     // Función para manejar el envío del formulario
     const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Capturar los valores de los campos del formulario
        const nombre = document.getElementById("name").value;
        const mensaje = document.getElementById("message").value;

        // Construir el mensaje de WhatsApp con el nombre y la descripción
        const mensajeWhatsApp = `${nombre}
        ${mensaje}`; // %0A se utiliza para agregar un salto de línea en el mensaje

        // Construir el enlace de WhatsApp con el mensaje personalizado
        const enlaceWhatsApp = `https://wa.me/526121259586?text=${encodeURIComponent(mensajeWhatsApp)}`;

        // Abrir el enlace en una nueva pestaña
        window.open(enlaceWhatsApp, "_blank");
    };
    return (
        <div className="home_contact">
            <form onSubmit={handleSubmit} action="contact.php" method="POST">
                <input className="form-control form-control-lg" name="name" id="name" type="text" placeholder="Nombre completo" required aria-label=".form-control-lg example" />
                {/* <input className="form-control form-control-lg" name="phone" id="phone" type="tel" placeholder="Número de teléfono" aria-label=".form-control-lg example" />
                <input className="form-control form-control-lg" name="email" id="email" type="email" placeholder="Correo electrónico" required aria-label=".form-control-lg example" /> */}
                <textarea className="form-control pt-4" name="message" id="message" placeholder="Describe brevemente tu proyecto" rows="3"></textarea>
                <div className="btn_group">
                    <button  type="submit" className="btn olive" value="Enviar mensaje"> <i class="bi bi-whatsapp whatsapp-icon"></i></button>
                    
                </div>
            </form>
        </div>

    );
};

export default Form;