import React from 'react';
import styled from 'styled-components';
// import { ReactComponent as LaptopSVG } from '../../assets/images/laptop.svg';

const ContactWrapper = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Contact() {
    return (
        <ContactWrapper id="contact">
            {/* <LaptopSVG /> */}
            <h1>Contact</h1>
        </ContactWrapper>
    );
}

export default Contact;
