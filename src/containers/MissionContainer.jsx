import React from 'react';

const MissionContainer = () => {
    return (
        <section className="mission">
            <div className="container">
                <div className="mission_top_part">
                    <div className="section-header text-center">
                        <h6 className="text-white text-uppercase">Our MISSION</h6>
                        <p className="text-gray-600">Our organizational sprit believes that where design meets passion & love with space, good architecture happens here</p>
                    </div>
                    <div className="has_line"></div>
                    <img src="images/bg/lobby.jpg" alt="" />
                </div>

                <div className="mission_bottom_part">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 pe-lg-4">
                            <div className="section-header">
                                <h3 className="text-white text-uppercase border-line">Zamorano Ingeniería Estructural</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-4">
                            <div className="mission_content">
                                <p>Nace en el año 2005 en la ciudad de La Paz, Baja California Sur, para desarrollar proyectos de ingeniería estructural en el ámbito habitacional, industrial, comercial, turístico y educativo. Conformado por ingenieros civiles egresados del Instituto Tecnológico de La Paz, coordinados por Ricardo O. Zamorano Romero, Maestro en Mecánica de Suelos y Cimentación catedrático del Instituto Tecnológico de La Paz y bajo la dirección de Luis Manuel Reyes González (Finado en 2009), Doctor en Ciencias de la Tierra del Centro de Investigación Científica y de Educación Superior de Ensenada. </p>
                                <p>El principal objetivo en el desarrollo de proyectos es lograr un justo equilibrio entre la economía y la seguridad, es decir, mediante el cumplimiento de las normas vigentes para el diseño estructural, se encuentra la solución más económica para el proyecto. Se cuenta, además, con programas computacionales, desarrollados por el equipo de trabajo para el análisis y diseño estructural. Así mismo, se cuentan con los programas más avanzados para el dibujo de planos estructurales.</p>
                                <p>Contamos con un equipo de trabajo conformado por Ingenieros Civiles y Arquitectos altamente capacitados y con alto sentido social dispuestos a cumplir los estándares de nuestros clientes. El profesionalismo de nuestro equipo de trabajo ha permitido que Zamorano Ingeniería Estructural crezca y se consolide como uno de los despachos más confiables en el desarrollo del diseño estructural en la región.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="mission_bottom_part">
                            <img src="images/bg/ingeniero-sitio-.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionContainer;