import React from 'react';
import { motion } from 'framer-motion';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
} from "react-icons/ai";

const MainSection = () => {
    // Animation variants for smooth, staggered reveals
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative mt-28 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-primary)] opacity-5 blur-[120px] pointer-events-none" />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
                >
                    LET ME <span className="text-[var(--color-primary)]">INTRODUCE</span> MYSELF
                </motion.h1>

                <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12 mt-16">
                    
                    {/* Text Section */}
                    <motion.div variants={itemVariants} className="text-left max-w-2xl flex-1">
                        <p className="text-gray-300 text-lg leading-relaxed space-y-6">
                            <span>
                                Hi, I'm <strong>Md. Al Saef Ratul</strong>. As a Computer Science student and a dedicated Frontend Web Developer, I fell in love with programming and have focused on mastering the tools that bring ideas to life on the web.
                            </span>
                            <br /><br />
                            <span>
                                I am highly fluent in modern <i><b className="text-[var(--color-primary)]">JavaScript</b></i> and specialize in the <i><b className="text-[var(--color-primary)]">MERN stack</b></i>. My core technical expertise lies in building robust applications using <i><b className="text-[var(--color-primary)]">React.js, Node.js, Express.js, and MongoDB</b></i>.
                            </span>
                            <br /><br />
                            <span>
                                My areas of interest include developing complete, scalable web products—from open-source educational platforms to seamless business solutions with real-time integrations. 
                            </span>
                            <br /><br />
                            <span>
                                I am passionate about sticking to the core fundamentals of web development and leveraging modern tools (like VS Code Insiders on Linux environments) to write clean, highly efficient code.
                            </span>
                        </p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        variants={itemVariants} 
                        className="flex-1 flex justify-center items-center w-full"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--color-primary)] to-transparent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
                            <img
                                src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
                                alt="Al Saef Ratul avatar"
                                className="relative w-[280px] md:w-[320px] rounded-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Social Connect Section */}
                <motion.div variants={itemVariants} className="mt-24 pt-12 border-t border-white/10">
                    <h2 className="text-3xl text-center text-white font-bold tracking-wider">FIND ME ON</h2>
                    <p className="text-gray-300 text-center text-lg leading-relaxed mt-3">
                        Feel free to <span className="text-[var(--color-primary)] font-semibold">connect</span> with me
                    </p>

                    <div className="flex justify-center space-x-6 mt-8">
                        {[
                            { icon: <AiFillGithub />, url: "https://github.com/Alsaef", name: "GitHub" },
                            { icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/al-saef-ratul-b0a380276/", name: "LinkedIn" },
                            { icon: <AiFillFacebook />, url: "https://www.facebook.com/a.s.ratul.102391", name: "Facebook" }
                        ].map((social) => (
                            <a 
                                key={social.name}
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative p-4 rounded-full bg-white/5 hover:bg-[var(--color-primary)]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] border border-transparent hover:border-[var(--color-primary)]/50"
                                aria-label={social.name}
                            >
                                <span className="text-white text-3xl md:text-4xl group-hover:text-[var(--color-primary)] transition-colors duration-300 block">
                                    {social.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default MainSection;