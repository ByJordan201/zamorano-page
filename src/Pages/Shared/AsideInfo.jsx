import React from 'react';

const AsideInfo = () => {
    return (
        <div className="aside_info_wrapper">
            <button className="aside_close"><i className="bi bi-x-lg"></i></button>
            <div className="aside_logo">
                <a href="/" className="light_logo"><img id="logo_lateral" src="images/logo-light.png" alt="logo" /></a>
                
                {/* <a href="/" className="dark_logo"><img src="images/logo-dark-lg.png" alt="logo" /></a> */}
            </div >
            <div className="aside_info_inner">
                <p>Ralizamos proyectos estructurales con altos estándares de calidad, superando las expectativas de nuestros clientes, buscando la mejor opción para cada proyecto, a través de un sólido equipo de trabajo.</p>

                <div className="aside_info_inner_box">
                    <h5>Información de contacto</h5>
                    <p>+52 612 125 95 86</p>
                    {/* <p>3 Madison Street, NY <br /> United States of America</p> */}
                    <p>contacto@zamoranoie.com</p>

                    <h5>Localidad</h5>
                    <p>La Paz, B.C.S.<br /> México </p>
                </div>
                <div className="social_sites">
                    <ul className="d-flex align-items-center justify-content-center">
                        <li><a id='base-icon-social' href="https://www.facebook.com/ZIELPZ" target="_blank" rel="noreferrer"><i id='icon-social' className="bi bi-facebook"></i></a></li>
                        <li><a id='base-icon-social' href="https://www.instagram.com/zamorano.ingestructural/" target="_blank" rel="noreferrer"><i id='icon-social' className="bi bi-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div >

    );
};

export default AsideInfo;