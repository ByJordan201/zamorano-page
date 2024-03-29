import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const UpperHeader = () => {
    // Hide header on scroll down
    window.onscroll = function () { myFunction() }; function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector('header .container').classList.add('.top-up');
        } else {
            document.querySelector('header .container').classList.remove('.top-up');
        }
    }

    useEffect(() => {
        // Aside info bar
        $('.aside_open').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').addClass('show');
        });
        $('.aside_close').click(function (e) {
            e.preventDefault();
            $('.aside_info_wrapper').removeClass('show');
        });

        // Sticky Header
        var header = $("header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.addClass("bg-dark sticky");
            } else {
                header.removeClass("bg-dark sticky");
            }
        });
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header_inner d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <a href='/' className="light_logo"><img className='img-logo' src="images/logo-light.png" alt="logo" /></a>
                        <a href='/' className="dark_logo"><img src="images/logo-dark.png" alt="logo" /></a>
                    </div>


                    <div className="mainnav d-none d-lg-block">
                        <ul className="main_menu">
                            <li className="menu-item "><NavLink to={"/"}>INICIO</NavLink>
                            </li>
                            <li className="menu-item "><NavLink to={"/project-1"}>PROYECTOS</NavLink>
                            </li>
                            <li className="menu-item "><NavLink to={"/about"}>QUIÉNES SOMOS</NavLink>
                            </li>
                            <li className="menu-item"><NavLink to={"/contact"}>CONTACTO</NavLink></li>
                            <li className="menu-item "><NavLink to={"/blog"}>NOTICIAS ZIE</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="header_right_part d-flex align-items-center">
                        <button className="aside_open">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>

                        {/* Mobile Responsive Menu Toggle Button */}
                        <button type="button" className="mr_menu_toggle d-lg-none">
                            <i className="bi bi-list"></i>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default UpperHeader;