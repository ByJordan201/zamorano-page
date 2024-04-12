import React from 'react';
import ServiceCard from '../components/ServiceCard';
import FormContainer from '../containers/FormContainer';

const ServiceContainer01 = () => {
    return (
        <main className="wrapper">
            <section className="services inner in-service pb-0">
                <div className="container">
                    <div className="section-header text-center">
                        <h1 className="text-white">Servicios</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 servicios" >
                            <ServiceCard number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Proyecto estructural" text="Con 20 años de experiencia, ofrecemos servicios de diseño estructural, análisis estructural requeridos para la construcción de espacios donde se desarrolle el dimensionamiento de un sistema estructural, con el objetivo de cumplir la normatividad y economía requerida por nuestros clientes." />
                        </div>


                        <div className="col-lg-4 servicios" >
                            <ServiceCard number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Proyectos ejecutivos" text="En Zamorano Ingeniería Estructural buscamos solucionar las necesidades de nuestros clientes de manera integral, por ello estamos comprometidos con el desarrollo de cada obra, con materiales, elementos, sistemas constructivos y equipo necesario para la ejecución de tu proyecto." />
                        </div>


                        <div className="col-lg-4 servicios" >
                            <ServiceCard number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Diseño arquitectónico" text="En Zamorano Ingeniería Estructural contamos con un gran equipo de Arquitectas comprometidas con el diseño, a través procesos creativos, técnicos y sustentables para plasmar las ideas de espacios y edificios." />
                        </div>


                        <div className="col-lg-4 servicios" >
                            <ServiceCard number="04" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Presupuesto de obra" text="En Zamorano Ingeniería Estructural estamos comprometidos con la economía de cada diseño, por lo que nos especializamos en generar estimaciones de proyectos de construcción en los cuales se incluyen todos los costos asociados a la obra." />
                        </div>


                        <div className="col-lg-4 servicios" >
                            <ServiceCard number="05" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Supervisión en construcción" text="Somos una empresa comprometida con el ciclo de vida de cada proyecto, por lo que realizamos asesorías estructurales durante el diseño y la ejecución de la obra, y revisiones periódicas en sitio al diseño estructural realizado, además ofrecemos recomendaciones y soluciones estructurales." />
                        </div>


                        <div className="col-lg-4 servicios" >
                            <ServiceCard number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Metodología BIM " text="En Zamorano Ingeniería Estructural estamos a la vanguardia en el desarrollo de proyectos para la creación y gestión de construcciones de forma integrada y colaborativa, a través de programas informáticos actualizados." />
                        </div>

                        <div className="col-lg-4 servicios" >
                            <ServiceCard number="07" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Dictámenes estructurales " text="Somos una empresa apegada a la normatividad vigente, por lo que uno de nuestros servicios es la elaboración de informes estructurales solicitados por la autoridad local, donde se detallan las acciones realizadas para garantizar las condiciones estructurales." />
                        </div>

                    </div>
                </div>
            </section>

            {/* <Testimoals /> */}
            {/* <FormContainer /> */}

        </main>
    );
};

export default ServiceContainer01;