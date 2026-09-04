import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import aboutImg from '../assets/Images/Banner/about.webp';
import Github from '../Components/Github';
import ParticlesBackground from '../Components/ParticlesBackground';
import Skill from '../Components/Skill';

const About = () => {
    // Animation variants for smooth scroll reveals
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden pb-20">
            <Helmet>
                <title>About Me | AL SAEF RATUL</title>
                <meta
                    name="description"
                    content="Learn more about Md. Al Saef Ratul, a Frontend MERN Stack Developer building robust web applications and open-source platforms."
                />
                <link rel="canonical" href="https://developer-ratul.netlify.app/about" />

                {/* Open Graph */}
                <meta property="og:type" content="profile" />
                <meta property="og:title" content="About Me | AL SAEF RATUL" />
                <meta
                    property="og:description"
                    content="Frontend React.js Developer with real-world project experience in modern web technologies."
                />
                <meta property="og:url" content="https://developer-ratul.netlify.app/about" />
                <meta property="og:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Me | AL SAEF RATUL" />
                <meta
                    name="twitter:description"
                    content="Frontend React.js Developer with real-world project experience."
                />
                <meta name="twitter:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />
            </Helmet>

            {/* Fixed Background */}
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            {/* Main Content */}
            <motion.div 
                className="relative z-10 max-w-7xl mx-auto mt-24 px-6 md:px-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Intro Section */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Text Content */}
                    <motion.div variants={itemVariants} className="flex-1 w-full">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl">
                            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                                Know Who <span className="text-[var(--color-primary)]">I'M</span>
                            </h2>
                            
                            <div className="text-gray-300 text-lg leading-relaxed mt-8 space-y-6">
                                <p>
                                    Hi, I'm <strong>Md. Al Saef Ratul</strong>, a dedicated web developer specializing in the MERN stack. I build dynamic, highly responsive applications relying on strong <span className="text-[var(--color-primary)] font-semibold">core React.js principles</span>, Tailwind CSS, Node.js, Express.js, and MongoDB.
                                </p>
                                <p>
                                    My focus is on writing clean, efficient code—often developed using VS Code Insiders in a Linux environment—to engineer seamless user experiences. I have deep experience implementing secure JWT authentication, robust pagination, and dynamic filtering.
                                </p>
                                <p>
                                    Beyond foundational projects like <em>Code Blog, Photo Gram,</em> and <em>DNK Shop</em>, I actively build real-world solutions. Recently, I developed <strong>English Window</strong>, a fully open-source MERN stack platform for learning vocabulary, and engineered custom business components, such as a seamless WhatsApp ordering integration for <strong>Rizik Restaurant</strong>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div variants={itemVariants} className="flex-1 flex justify-center w-full">
                        <div className="relative group">
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 bg-[var(--color-primary)] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
                            
                            {/* Floating Image */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img 
                                    src={aboutImg} 
                                    alt="Md. Al Saef Ratul" 
                                    className="relative w-[280px] md:w-[350px] object-cover rounded-2xl md:rounded-full border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills & Github Sections */}
                <motion.div variants={itemVariants} className="mt-32 space-y-24">
                    <Skill />
                    <Github />
                </motion.div>
                
            </motion.div>
        </section>
    );
};

export default About;