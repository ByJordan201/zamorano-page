import React from 'react';

const TeamProjectCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="project">
                <a href="/project-details">
                    {/** 
                     * 
                        <LazyLoad height={800} offset={100} once>
                        </LazyLoad>
                    */}
                        <img src={props.img} alt="img" />
                </a>
            </div>
        </div>

    );
};

export default TeamProjectCard;