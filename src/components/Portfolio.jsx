import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectElements/ProjectCard';
import SectionGridLines from '../components/SectionGridLines';

const Portfolio = () => {
    const ProjectData01 = [
        {
            id: '1',
            img: 'images/portfolio/packery/Caplan.jpeg',
            location: 'Los Cabos, B.C.S., 2019',
            details: 'Casa Caplan',
            tag: 'exterior'
        },
        {
            id: '2',
            img: 'images/portfolio/packery/Agora.jpg',
            location: 'Hermosillo, Sonora 2021',
            details: 'Ágora',
            tag: 'exterior'
        },
        {
            id: '3',
            img: 'images/portfolio/packery/L24.png',
            location: 'Los Cabos, B.C.S. 2022',
            details: 'Lote 24',
            tag: 'interiors'
        },
        {
            id: '4',
            img: 'images/portfolio/packery/Fundadores26-2.png',
            location: 'Los Cabos, B.C.S. 2022',
            details: 'Fundadores 26',
            tag: 'interiors'
        },
        {
            id: '5',
            img: 'images/portfolio/packery/CHIREY.jpeg',
            location: 'La Paz, B.C.S. 2022',
            details: 'CHIREY',
            tag: 'landscape'
        },
        {
            id: '6',
            /* img: 'images/portfolio/packery/Chable.png', */
            img: 'images/portfolio/packery/Chablé.png',
            location: 'La Paz, B.C.S., 2022',
            details: 'Hotel Chablé Mar de Cortés',
            tag: 'residences'
        },
        {
            id: '7',
            img: 'images/portfolio/packery/Grieve.png',
            location: 'Los Cabos, B.C.S., 2023',
            details: 'Casa Grieve',
            tag: 'interiors'
        },
    ];

    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
        })

        // cleanup
        return () => Isotope.current.destroy()
    }, []);

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? Isotope.current.arrange({ filter: `*` })
            : Isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key)


    return (
        <section className="projects packery">
            <SectionGridLines />
            <div className="container">

                {/* <div className="portfolio-filters-content">
                    <div className="filters-button-group">
                        <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('residences')}>Residences <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup className="filter-count"></sup></button>
                    </div>
                </div> */}
                <div className="grid gutter-20 clearfix">
                    <div className="grid-sizer"></div>
                    {
                        ProjectData01.map(data => <ProjectCard
                            key={data.id}
                            data={data}
                        />)
                    }

                </div>
                {/* <LoadmoreBtn text='Discover All Projects' className='btn olive w-100' /> */}
            </div>
        </section>
    );
};

export default Portfolio;