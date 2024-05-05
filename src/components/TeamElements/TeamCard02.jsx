import React from 'react';

const TeamCard02 = ({ data }) => {
    const { name, designation } = data;

    return (
        <div className="team-block" id='member-team-grid'>
            <h5 className="text-white">{name}</h5>
            <h6 className="text-uppercase text-olive">{designation}</h6>
        </div>
    );
};

export default TeamCard02;