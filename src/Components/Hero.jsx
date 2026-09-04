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
                    
                    <div className="text-xl md:text-2xl font-medium text-gray-300 min-h-[60px]">
                        <Type />
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