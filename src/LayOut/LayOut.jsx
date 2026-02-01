
import { Outlet, useLocation } from 'react-router-dom';
import ParticlesBackground from '../Components/ParticlesBackground';
import AppBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';
import { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import ReactGA from '../analytics';
import { Helmet } from 'react-helmet-async';



const LayOut = () => {
    const location = useLocation()

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location])


    return (
        <div>
            <Helmet>
                {/* Basic Meta */}
                <title>AL SAEF RATUL - Portfolio</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management."
                />

                {/* Canonical */}
                <link rel="canonical" href="https://developer-ratul.netlify.app/" />

                {/* Favicon */}
                <link rel="icon" type="image/png" href="/my-bg.png" />

                {/* Open Graph / Facebook */}
                <meta property="og:url" content="https://developer-ratul.netlify.app/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AL SAEF RATUL" />
                <meta
                    property="og:description"
                    content="AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management."
                />
                <meta
                    property="og:image"
                    content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
                />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AL SAEF RATUL" />
                <meta
                    name="twitter:description"
                    content="AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management."
                />
                <meta
                    name="twitter:image"
                    content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
                />
            </Helmet>
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