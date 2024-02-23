import $ from 'jquery';
import React, { useEffect } from 'react';

import FunFact from '../../components/FunFactElements/FunFact';
import Paragraph from '../../components/Paragraph';

const FunFacts = (props) => {
    const FunFactData = [
        {
            id: '1',
            contentName: 'Design Drawing',
            contentNumber: '120',
            img: 'images/fact-1.png'
        },
        {
            id: '2',
            contentName: 'Project Completed',
            contentNumber: '210',
            plus: '+',
            img: 'images/fact-2.png'
        },
        {
            id: '3',
            contentName: 'Design Drawing',
            contentNumber: '15',
            img: 'images/fact-3.png'
        },
        {
            id: '4',
            contentName: 'Project Running',
            contentNumber: '62',
            img: 'images/fact-4.png'
        },
    ];

    /* useEffect(() => {
        var a = 0;
        $(window).on("scroll", function () {

            var oTop = $('#funfacts').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.fun-number').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        });
    }, []); */
    return (
        <section className={props.className} id="funfacts">
            <section className='funfact-grid'>
                <div className="section-header medium">
                    <div style={{textAlign:"center"}}>
                        <h2 className='heading'>Nuestra visión</h2>
                    </div>
                    <div className="">
                        <div style={{textAlign:"center"}} className="">
                            <Paragraph text="Nuestra visión es ser la empresa de diseño estructural líder a nivel regional en 2025, comprometidos siempre con la calidad en nuestros servicios y la satisfacción de nuestros clientes." />
                        </div>
                    </div>
                </div>
                <div className="section-header medium">
                    <div style={{textAlign:"center"}}>
                        <h2 className='heading'>Nuestros valores</h2>
                    </div>
                    <div className="">
                        <div style={{textAlign:"center"}} className="">
                            <Paragraph text="Nuestros valores nos dan una pauta del camino seguido, nos dan identidad empresarial y nos distinguen de los demás." />
                            <Paragraph text="Trabajo en equipo"/>
                            <Paragraph text="Honestidad"/>
                            <Paragraph text="Transparencia" />
                            <Paragraph text="Responsabilidad"/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="funfacts_inner">
                            {
                                FunFactData.map(data =>
                                    <FunFact
                                        key={data.id}
                                        data={data}
                                    />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFacts;