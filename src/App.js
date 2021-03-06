import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './assets/index.css';

const fadeIn = () => keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
const AppWrapper = styled.div`
    animation: ${fadeIn} 1s ease-in-out;
    background-color: var(--background-one);
`;

function App() {
    useEffect(() => {
        if (window.location.hash) {
            window.location.assign(window.location.href);
        }
    }, []);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    });

    return (
        <AppWrapper>
            <Header />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </AppWrapper>
    );
}

export default App;
