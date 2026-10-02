import React from 'react';
import { motion } from 'framer-motion';
import homeHero from '../assets/Images/Banner/my-bg.png';
import Type from './Type';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center px-6 mt-20 md:mt-0 overflow-hidden">
            {/* Subtle background glow for modern glassmorphism depth */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)] rounded-full mix-blend-multiply filter blur-[120px] opacity-20" />
            
            <div className="z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                
                {/* Left side: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left flex-1 space-y-6"
                >
                    {/* Live Availability Status */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for Freelance & Full-time Roles
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-secondary)] leading-tight">
                        Hi There!{' '}
                        <motion.span 
                            className="inline-block origin-bottom-right"
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                        >
                            👋🏻
                        </motion.span> 
                        <br className="hidden md:block my-2" /> 
                        I'M <span className="text-[var(--color-primary)] tracking-wide">AL SAEF RATUL</span>
                    </h1>
                    
                    <div className="text-xl md:text-2xl font-medium text-gray-300 min-h-[50px]">
                        <Type />
                    </div>

                    {/* Interactive Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="#contact"
                            className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[#a844da] text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.5)] hover:scale-105 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span>Get In Touch</span>
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </span>
                            <span className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
                        </a>

                        <a
                            href="/projects"
                            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[var(--color-primary)]/50 text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
                        >
                            View Projects
                        </a>

                        <a
                            href="/al-saef-ratut-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-xl bg-white/5 hover:bg-[var(--color-primary)]/15 border border-white/10 hover:border-[var(--color-primary)]/40 text-gray-300 hover:text-white font-medium text-sm transition-all duration-300"
                        >
                            Download CV 📄
                        </a>
                    </div>
                </motion.div>

                {/* Right side: Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end w-full"
                >
                    <div className="relative group">
                        {/* Soft ambient glow behind the original image shape */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-white blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
                        
                        {/* Floating animation for the image */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img 
                                src={homeHero} 
                                alt="Al Saef Ratul" 
                                className="relative w-[250px] md:w-[350px] lg:w-[420px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Hero;