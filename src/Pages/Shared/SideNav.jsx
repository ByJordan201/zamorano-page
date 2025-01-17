import React from 'react';

const SideNav = () => {
    return (
        <div className="mr_menu">
            <div className="mr_menu_overlay"></div>
            <div className="logo_left_menu"><a href="/" className="light_logo"><img src="images/" alt="logo" /></a></div>

            {/* MainMenu */}
            <ul className="main_menu">
                <li className="menu-item menu-item-has-children active"><a href="/">Home</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="/">Home One</a></li>
                        <li className="menu-item"><a href="/home-2">Home Two</a></li>
                        <li className="menu-item"><a href="/home-3">Home Three</a></li>
                        <li className="menu-item"><a href="/home-4">Home Four</a></li>
                        <li className="menu-item"><a href="/home-5">Home Five</a></li>
                        <li className="menu-item"><a href="/home-6">Home Six</a></li>
                        <li className="menu-item"><a href="/home-7">Home Seven</a></li>
                        <li className="menu-item"><a href="/home-8">Home Eight</a></li>
                        <li className="menu-item"><a href="/home-9">Home Nine</a></li>
                        <li className="menu-item active"><a href="/home-10">Home Ten</a></li>
                    </ul>
                    <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span></li>
                <li className="menu-item menu-item-has-children"><a href="#">Gallery</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="/project-1">Projects One</a></li>
                        <li className="menu-item"><a href="/project-2">Projects Two</a></li>
                        <li className="menu-item"><a href="/project-3">Peojects Three</a></li>
                        <li className="menu-item"><a href="/project-details">Peoject Details</a></li>
                        <li className="menu-item"><a href="/project-details-2">Peoject Details Two</a></li>
                    </ul>
                    <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span></li>
                <li className="menu-item menu-item-has-children"><a href="#">Pages</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="/about">About Us</a></li>
                        <li className="menu-item menu-item-has-children"><a href="#">Team</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/team">Our Team</a></li>
                                <li className="menu-item"><a href="/team-details">Team Details</a></li>
                            </ul>
                            <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span></li>
                        <li className="menu-item menu-item-has-children"><a href="#">Services</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/service-1">Service One</a></li>
                                <li className="menu-item"><a href="/service-2">Service Two</a></li>
                                <li className="menu-item"><a href="/service-details">Service Details</a></li>
                            </ul>
                            <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span></li>
                        <li className="menu-item menu-item-has-children"><a href="#">Shop</a>
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="/shop-1">Shop One</a></li>
                                <li className="menu-item"><a href="/shop-2">Shop Two</a></li>
                                <li className="menu-item"><a href="/shop-3">Shop Three</a></li>
                                <li className="menu-item"><a href="/shop-product">Product Details</a></li>
                                <li className="menu-item"><a href="/shop-cart">Shop Cart</a></li>
                                <li className="menu-item"><a href="/shop-checkout">Checkout</a></li>
                                <li className="menu-item"><a href="/login">Login</a></li>
                            </ul>
                            <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span></li>
                        <li className="menu-item"><a href="/404">404 Page</a></li>
                        <li className="menu-item"><a href="/coming-soon">Coming Soon</a></li>
                    </ul>
                    <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span></li>
                <li className="menu-item"><a href="/contact">Contacts</a></li>
                <li className="menu-item menu-item-has-children"><a href="#">Blog</a>
                    <ul className="sub-menu">
                        <li className="menu-item"><a href="/blog">Blog</a></li>
                        <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                    </ul>
                    <span className="submenu_opener"><i className="bi bi-chevron-right"></i></span></li>
            </ul>

            {/* <!-- Footer--> */}
            <footer className="footer p-0">
                <div className="footer_inner pb-0">
                    <div className="footer_elements d-flex align-items-center justify-content-center">
                        <div className="footer_elements_inner">
                            <div className="footer_social">
                                <ul className="social_list justify-content-center">
                                    <li className="facebook"><a href="#"><i className="bi bi-facebook"></i></a></li>
                                    <li className="twitter"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                    <li className="instagram"><a href="#"><i className="bi bi-instagram"></i></a></li>
                                    <li className="youbetube"><a href="#"><i className="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div className="terms_condition">
                                <ul>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Condition</a></li>
                                    <li><a href="#">Policy</a></li>
                                </ul>
                            </div>
                            <div className="copyright">
                                <p>Mrittik 2023. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SideNav;