import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import PageHeader from '../../components/PageHeder';
import Paragraph from '../../components/Paragraph';
import TeamCard from '../../components/TeamElements/TeamCard';

const TeamContainer = () => {
    /* const TeamData = [
        {
            id: '1',
            img: 'images/team/1.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '2',
            img: 'images/team/2.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '3',
            img: 'images/team/3.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '4',
            img: 'images/team/4.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '5',
            img: 'images/team/5.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '6',
            img: 'images/team/6.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '7',
            img: 'images/team/7.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '8',
            img: 'images/team/8.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '9',
            img: 'images/team/9.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
    ] */
    return (
        <section className="team in-team">
            <div className="container-sm">
                <div className="section-header medium">
                    <PageHeader className='heading' title="Nuestra misión " />
                    <div className="section-desc row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <Paragraph text="Es realizar proyectos estructurales con altos estándares de calidad, superando las expectativas de nuestros clientes, buscando la mejor opción para cada proyecto, a través de un sólido equipo de trabajo." />
                        </div>
                        <div className="col-lg-7">
                            <Paragraph text="Nuestra visión es ser la empresa de diseño estructural líder a nivel regional en 2025, comprometidos siempre con la calidad en nuestros servicios y la satisfacción de nuestros clientes." />
                        </div>
                    </div>
                </div>

                {/* <div className="team_inner">
                    <div className="row">
                        {
                            TeamData.map(data =>
                                <TeamCard
                                    key={data.id}
                                    data={data}
                                />)
                        }
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default TeamContainer;