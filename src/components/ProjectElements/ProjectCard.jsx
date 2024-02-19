import React, { useLayoutEffect, useRef, useState } from "react";

const ProjectCard = ({ data }) => {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const monitorWidth = windowSize.current[0];

    // console.log(monitorWidth);


    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    let elHeight = Number(dimensions.height);
    // console.log(typeof elHeight);

    const { img, location, details, tag } = data;

    return (
        <div className={`grid-item ${tag} width-50`}>
            <div className="thumb">
                {/*
                <LazyLoad height={monitorWidth <= 600 ? 500 : monitorWidth <= 1550 ? 680 : monitorWidth <= 2000 ? 810 : 680} once>
                </LazyLoad>
                */}
                <img className="item_image" src={img} alt="" height={`${monitorWidth <= 600 ? '500px' : monitorWidth <= 1550 ? '680px' : monitorWidth <= 2000 ? '810px' : '680px'}`}/>
                <div className="works-info">
                    <div className="label-text">
                        <h6>{location}</h6>
                        <h5>{details}</h5>
                        {/* <div className="details_link"><a href="/project-details"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;