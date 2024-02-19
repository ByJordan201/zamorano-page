import React from 'react';
import PageBanner from '../../containers/PageBanner';
import TeamContainer from '../../containers/TeamContainers/TeamContainer';

const Team = () => {
    return (
        <>
            <PageBanner pageTitle='Quiénes somos' title="Nosotros" activePage="Nosotros" />
            <main className="wrapper">
                <TeamContainer />
            </main>
        </>
    );
};

export default Team;