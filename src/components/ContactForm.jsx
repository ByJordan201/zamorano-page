import React from 'react';
import Form from './Form';
import Paragraph from './Paragraph';
import SectionGridLines from './SectionGridLines';

const ContactForm = () => {
    return (
        <section className="contact_us bg-dark-200">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="section-header">
                            <h1 className="text-white text-uppercase mb-4">Envía tu información </h1>
                            <Paragraph text='En breve nos pondremos en contacto.' />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <Form />
                    </div>
                </div>
            </div>

            <SectionGridLines />
        </section>
    );
};

export default ContactForm;