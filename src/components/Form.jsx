import React from 'react';

const Form = () => {
    return (
        <div className="home_contact">
            <form action="contact.php" method="POST">
                <input className="form-control form-control-lg" name="name" id="name" type="text" placeholder="Nombre completo" required aria-label=".form-control-lg example" />
                <input className="form-control form-control-lg" name="phone" id="phone" type="tel" placeholder="Número de teléfono" aria-label=".form-control-lg example" />
                <input className="form-control form-control-lg" name="email" id="email" type="email" placeholder="Correo electrónico" required aria-label=".form-control-lg example" />
                <textarea className="form-control pt-4" name="message" id="message" placeholder="Describe brevemente tu proyecto" rows="3"></textarea>
                <div className="btn_group">
                    <button type="submit" className="btn olive">Enviar</button>
                </div>
            </form>
        </div>

    );
};

export default Form;