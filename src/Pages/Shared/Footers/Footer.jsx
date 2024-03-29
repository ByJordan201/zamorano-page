import $ from 'jquery';
import React, { useEffect } from 'react';
import SectionGridLines from '../../../components/SectionGridLines';

const Footer = () => {
    //  

    useEffect(() => {
        // Totop Button
        $('.totop a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

        // Hide header on scroll down
        const nav = document.querySelector(".header");
        const scrollUp = "top-up";
        let lastScroll = 800;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 800) {
                nav.classList.remove(scrollUp);
                $('.totop').removeClass('show');
                return;
            }

            if (currentScroll > lastScroll) {
                // down
                nav.classList.add(scrollUp);
                $('.totop').addClass('show');

            } else if (currentScroll < lastScroll) {
                // up
                nav.classList.remove(scrollUp);
                $('.totop').removeClass('show');
            }
            lastScroll = currentScroll;
        });

    }, []);
    return (
        <div className='base-footer'>
            <footer className="footer bg-dark-200" id='fixed-footer'>
                <div className="footer_inner bg-black">
                    <div className="container">
                        <div className="container-module">
                            {/* <div className="col-lg-4 col-md-2 col-sm-2">
                                <div className="section-header">
                                    <h2>Contacto</h2>
                                </div>
                            </div> */}
                            <div className="col-lg-3 col-md-5 col-sm-5">
                                <div className="communication">
                                    {/* <div className="info_body">
                                        <h6>Studio Website</h6>
                                        <h5>www.mrittikarchitects.com</h5>
                                    </div> */}
                                    <div className="info_body">
                                        <h6>Correo de contacto</h6>
                                        <h5>contacto@zamoranoie.com</h5>
                                    </div>
                                    <div className="info_body">
                                        <h6>Teléfono</h6>
                                        <h5>+52 612 125 95 86</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-5 col-sm-5">
                                <div className="communication">
                                    <div className="info_body">
                                        <h6>Página de FB</h6>
                                       <a href="https://www.facebook.com/ZIELPZ" ><h5>ZIELPZ</h5></a>
                                    </div>
                                    <div className="info_body">
                                        <h6>Página de IG</h6>
                                        <a href="https://www.instagram.com/zamorano.ingestructu" ><h5>zamorano.ingestructural</h5></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-5">
                                <div className="footer_elements d-flex align-items-center justify-content-center">
                                    <div className="footer_elements_inner">
                                        <div className="footer_logo">
                                            <a href="/" className="light_logo"><img className="logo_footer" src="images/logo-light.png" alt="logo" /></a>
                                        </div>
                                        <div className="footer_social">
                                            <ul className="social_list">
                                                <li className="facebook"><a id='base-icon-social' href="https://www.facebook.com/ZIELPZ" target="_blank"><i id='icon-social' className="bi bi-facebook" ></i></a></li>
                                                {/* <li className="twitter"
                                                ><a><i className="bi bi-twitter"></i></a></li> */}
                                                <li className="instagram"><a id='base-icon-social' href="https://www.instagram.com/zamorano.ingestructural/" target="_blank"><i id='icon-social' className="bi bi-instagram"></i></a></li>
                                                {/* <li className="youbetube"><a><i className="bi bi-youtube"></i></a></li> */}
                                            </ul>
                                        </div>
                                        {/* <div className="terms_condition">
                                            <ul>
                                                <li><a>Terms</a></li>
                                                <li><a>Condition</a></li>
                                                <li><a>Policy</a></li>
                                            </ul>
                                        </div>
                                        <div className="copyright"
                                        >
                                            <p>Mrittik 2023. All Rights Reserved</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SectionGridLines />
                </div>
            </footer >

            <div className="totop">
                <a href="#">UP</a>
            </div>
        </div>
    );
};

export default Footer;