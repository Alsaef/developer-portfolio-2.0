import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ParticlesBackground from '../Components/ParticlesBackground';
import ProjectCard from '../Components/ProjectCard';

// Extracted data for cleaner JSX and easier future updates
const projectsData = [
    {
        title: "English Window",
        description: "A fully open-source vocabulary learning platform built with the MERN stack. Designed to make language learning engaging, it features interactive multiple-choice testing, real-time scoring, and comprehensive user feedback. Built entirely with core React principles, Node.js, Express, and MongoDB.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-english-window-eight.vercel.app.png", // Replace with your actual screenshot
        ghLink: "https://github.com/Alsaef/english-window", // Update with your actual link
        demoLink: "https://english-window-eight.vercel.app/" // Update with your actual link
    },
    {
        title: "Movie Box (Soraflix)",
        description: "A responsive movie discovery web application built with React.js and Tailwind CSS. The app interfaces with a REST API to fetch real-time movie data, including ratings and popularity. It features a dynamic Watch List managed via the Context API for global state management, allowing users to save their favorite films across the session.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-movie-box-dusky.vercel.app.png",
        ghLink: "https://github.com/Alsaef/movie-box",
        demoLink: "https://movie-box-dusky.vercel.app/"
    },
    {
        title: "Task Management",
        description: "A full-stack productivity application designed to help users organize and track daily tasks efficiently. Built using the complete MERN stack (MongoDB, Express, React, Node.js), featuring secure data handling and an intuitive user interface.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-euit-ms-250701-frontend.vercel.app.png",
        ghLink: "https://github.com/Alsaef/EUIT-MS250701-frontend",
        demoLink: "https://euit-ms-250701-frontend.vercel.app/"
    },
    {
        title: "The White Hall",
        description: "A full-stack web application for community center management, allowing customers to book events and administrators to manage services. Users can check availability and book slots, while admins confirm reservations via a dedicated portal. Built with React.js, Context API, Bootstrap, Node.js, Express.js, MongoDB, and Firebase.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-the-white-hall.vercel.app%20(1).png",
        ghLink: "https://github.com/Alsaef/the-white-hall-front-end",
        demoLink: "https://the-white-hall.vercel.app/"
    },
    {
        title: "Code Blog",
        description: "A modern blogging platform for developers to share insights, tutorials, and experiences. Users can create, edit, and read tech-focused blogs in a clean, responsive interface. Built with Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, ensuring smooth performance and efficient state management using core React hooks.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-code-blog-2-0.vercel.app.png",
        ghLink: "https://github.com/Alsaef/code-blog",
        demoLink: "https://code-blog-2-0.vercel.app/"
    },
    {
        title: "Dnk Shop",
        description: "A dynamic e-commerce platform offering a seamless shopping experience. Users can explore and purchase products through a sleek and responsive interface. Built with Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB, combining modern design with robust functionality for optimal performance.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-dnk-nu.vercel.app.png",
        ghLink: "https://github.com/Alsaef/Dnk",
        demoLink: "https://dnk-nu.vercel.app/"
    }
];

const Projects = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen pb-24">
            <Helmet>
                <title>Personal Projects | AL SAEF RATUL</title>
                <meta
                    name="description"
                    content="Explore personal projects by Md. Al Saef Ratul built using React, Node.js, Express, MongoDB, and modern UI libraries."
                />
                <link rel="canonical" href="https://developer-ratul.netlify.app/projects" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Personal Projects | AL SAEF RATUL" />
                <meta
                    property="og:description"
                    content="React & MERN stack personal projects showcasing real-world problem solving."
                />
                <meta property="og:url" content="https://developer-ratul.netlify.app/projects" />
                <meta property="og:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Personal Projects | AL SAEF RATUL" />
                <meta
                    name="twitter:description"
                    content="React & MERN stack personal projects showcasing real-world problem solving."
                />
                <meta name="twitter:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />
            </Helmet>

            {/* Fixed Background */}
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 mt-28">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        My Personal <span className="text-[var(--color-primary)]">Works</span>
                    </h1>
                    <p className="text-gray-300 text-lg mt-4 font-medium">
                        Here are a few projects I've built to solve real-world problems.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                >
                    {projectsData.map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ProjectCard
                                imgPath={project.imgPath}
                                title={project.title}
                                description={project.description}
                                ghLink={project.ghLink}
                                demoLink={project.demoLink}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;