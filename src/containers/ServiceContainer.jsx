import React from 'react';
import ServiceCard from '../components/ServiceCard';
import FormContainer from '../containers/FormContainer';

const ServiceContainer01 = () => {
    return (
        <main className="wrapper">
            <section className="services inner in-service pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" >
                            <ServiceCard number="01" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Diseño arquitectónico y urbano" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div className="col-lg-4" >
                            <ServiceCard number="02" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Proyectos ejecutivos" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div className="col-lg-4" >
                            <ServiceCard number="03" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Proyecto estructural" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div className="col-lg-4" >
                            <ServiceCard number="04" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Presupuesto de obra" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div className="col-lg-4" >
                            <ServiceCard number="05" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Supervisión en construcción" text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>


                        <div className="col-lg-4" >
                            <ServiceCard number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Metodología BIM " text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Consultoría en estrategias de mantenimiento " text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                        <div className="col-lg-4" >
                            <ServiceCard number="06" imgDark="images/icon_box/d1.svg" imgLight="images/icon_box/d1-light.svg" title="Dictámenes estructurales " text="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture." />
                        </div>

                    </div>
                </div>
            </section>

            {/* <Testimoals /> */}
            <FormContainer />

        </main>
    );
};

export default ServiceContainer01;