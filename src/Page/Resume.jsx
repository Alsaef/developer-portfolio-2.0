import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ParticlesBackground from '../Components/ParticlesBackground';
import PdfView from '../Components/PdfView';

const Resume = () => {
    // Reusable button component for top and bottom placement
    const DownloadButton = () => (
        <a 
            href='/al-saef-ratut-cv.pdf' 
            target='_blank'
            rel='noopener noreferrer'
            className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.6)]"
        >
            {/* Animated shine sweep effect on hover */}
            <span className="absolute inset-0 w-full h-full -ml-10 bg-white opacity-20 group-hover:ml-full transition-all duration-700 ease-out skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%]"></span>
            
            <AiOutlineDownload className="text-xl group-hover:animate-bounce" />
            <span>Download Resume</span>
        </a>
    );

    return (
        <section className="relative min-h-screen pb-24 overflow-hidden">
            <Helmet>
                <title>Resume | AL SAEF RATUL</title>
                <meta
                    name="description"
                    content="View and download the resume of AL SAEF RATUL, Frontend React.js Developer with MERN stack experience."
                />
                <link rel="canonical" href="https://developer-ratul.netlify.app/resume" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Resume | AL SAEF RATUL" />
                <meta
                    property="og:description"
                    content="Frontend React.js Developer resume with skills, experience, and projects."
                />
                <meta property="og:url" content="https://developer-ratul.netlify.app/resume" />
                <meta property="og:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Resume | AL SAEF RATUL" />
                <meta
                    name="twitter:description"
                    content="Frontend React.js Developer resume with skills, experience, and projects."
                />
                <meta name="twitter:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />
            </Helmet>

            {/* Fixed Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <ParticlesBackground />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 mt-28">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        My <span className="text-[var(--color-primary)]">Resume</span>
                    </h2>
                </motion.div>

                {/* Top Download Button */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center mt-10"
                >
                    <DownloadButton />
                </motion.div>

                {/* PDF Viewer Component */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-8"
                >
                    <PdfView />
                </motion.div>

                {/* Bottom Download Button (UX improvement) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <DownloadButton />
                </motion.div>

            </div>
        </section>
    );
};

export default Resume;