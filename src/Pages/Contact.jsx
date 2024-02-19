import React from 'react';
import ContactContainer from '../containers/ContactContainer';
import PageBanner from '../containers/PageBanner';

const Contact = () => {
    return (
        <>
            <PageBanner pageTitle='Contacto' title="Contacto" activePage="Contacto"></PageBanner>
            <ContactContainer />
        </>
    );
};

export default Contact;