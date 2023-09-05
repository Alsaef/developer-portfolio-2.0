// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Skill from '../WhatIDo/Skill';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AboutMe></AboutMe>
          <Skill></Skill>
          <Footer></Footer>
        </div>
    );
};

export default Home;