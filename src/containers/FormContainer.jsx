import React from 'react';
import Form from '../components/Form';
import SectionGridLines from '../components/SectionGridLines';

const FormContainer = () => {
    return (
        <section className="contact_us bg-dark-200">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <Form></Form>
                    </div>
                </div>
                
            </div>
            <SectionGridLines></SectionGridLines>
        </section>
    );
};

export default FormContainer;