import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../Components/Hero';
import MainSection from '../Components/MainSection';
import MailBox from '../Components/MailBox';
import { BsCodeSlash, BsFolderCheck, BsStarFill, BsAward } from 'react-icons/bs';

const stats = [
    { icon: <BsFolderCheck className="text-[var(--color-primary)] text-2xl" />, count: "15+", label: "Projects Completed" },
    { icon: <BsCodeSlash className="text-sky-400 text-2xl" />, count: "MERN", label: "Core Stack Fluency" },
    { icon: <BsStarFill className="text-yellow-400 text-2xl" />, count: "100%", label: "Client Satisfaction" },
    { icon: <BsAward className="text-emerald-400 text-2xl" />, count: "1+ Year", label: "Practical Experience" },
];

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>AL SAEF RATUL | Frontend & MERN Stack Web Developer Portfolio</title>
                <meta
                    name="description"
                    content="Official portfolio of Md. Al Saef Ratul - Frontend React.js & MERN Stack Developer. Explore high-performance web applications, client projects, and contact for hiring or collaborations."
                />
                <link rel="canonical" href="https://developer-ratul.netlify.app/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AL SAEF RATUL | Frontend & MERN Stack Web Developer" />
                <meta
                    property="og:description"
                    content="Explore modern web applications, interactive interfaces, and full-stack solutions built by Md. Al Saef Ratul."
                />
                <meta property="og:url" content="https://developer-ratul.netlify.app/" />
                <meta property="og:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AL SAEF RATUL | Frontend & MERN Stack Web Developer" />
                <meta
                    name="twitter:description"
                    content="Explore modern web applications and interactive solutions built by Md. Al Saef Ratul."
                />
                <meta name="twitter:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />
            </Helmet>

            <Hero />

            {/* Interactive Highlights & Stats Banner */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 mt-12 relative z-10"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                            <div className="mb-2 p-2.5 rounded-full bg-white/5">
                                {stat.icon}
                            </div>
                            <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                                {stat.count}
                            </span>
                            <span className="text-xs md:text-sm text-gray-400 mt-1 font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.section>

            <MainSection />

            {/* Mail Send Box on Home Page */}
            <MailBox />
        </div>
    );
};

export default Home;