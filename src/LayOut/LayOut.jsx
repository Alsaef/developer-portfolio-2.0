
import { Outlet, useLocation } from 'react-router-dom';
import ParticlesBackground from '../Components/ParticlesBackground';
import AppBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';
import { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import ReactGA from '../analytics';



const LayOut = () => {
    const location = useLocation()

    useEffect(()=>{
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    },[location])


    return (
        <div>
            <Scroll></Scroll>
            <ParticlesBackground></ParticlesBackground>
            <AppBar></AppBar>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;