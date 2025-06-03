import React from 'react';
import Hero from '../Components/Hero';
import MainSection from '../Components/MainSection';
import ParticlesBackground from '../Components/ParticlesBackground';

const Home = () => {
    return (
        <div>
             <ParticlesBackground></ParticlesBackground>
            <Hero></Hero>
            <MainSection></MainSection>
        </div>
    );
};

export default Home;