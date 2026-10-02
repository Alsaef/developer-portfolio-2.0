import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../Components/ProjectCard';
import { AiOutlineSearch } from 'react-icons/ai';

const projectsData = [
    {
        id: 1,
        title: "English Window",
        category: "MERN Stack",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        description: "A fully open-source vocabulary learning platform built with the MERN stack. Designed to make language learning engaging, it features interactive multiple-choice testing, real-time scoring, and comprehensive user feedback. Built entirely with core React principles, Node.js, Express, and MongoDB.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-english-window-eight.vercel.app.png",
        ghLink: "https://github.com/Alsaef/english-window",
        demoLink: "https://english-window-eight.vercel.app/"
    },
    {
        id: 2,
        title: "Movie Box (Soraflix)",
        category: "Frontend & API",
        tags: ["React.js", "Tailwind CSS", "REST API", "Context API"],
        description: "A responsive movie discovery web application built with React.js and Tailwind CSS. The app interfaces with a REST API to fetch real-time movie data, including ratings and popularity. It features a dynamic Watch List managed via the Context API for global state management, allowing users to save their favorite films across the session.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-movie-box-dusky.vercel.app.png",
        ghLink: "https://github.com/Alsaef/movie-box",
        demoLink: "https://movie-box-dusky.vercel.app/"
    },
    {
        id: 3,
        title: "Task Management",
        category: "MERN Stack",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
        description: "A full-stack productivity application designed to help users organize and track daily tasks efficiently. Built using the complete MERN stack (MongoDB, Express, React, Node.js), featuring secure data handling and an intuitive user interface.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-euit-ms-250701-frontend.vercel.app.png",
        ghLink: "https://github.com/Alsaef/EUIT-MS250701-frontend",
        demoLink: "https://euit-ms-250701-frontend.vercel.app/"
    },
    {
        id: 4,
        title: "The White Hall",
        category: "Full Stack",
        tags: ["React.js", "Firebase", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
        description: "A full-stack web application for community center management, allowing customers to book events and administrators to manage services. Users can check availability and book slots, while admins confirm reservations via a dedicated portal. Built with React.js, Context API, Bootstrap, Node.js, Express.js, MongoDB, and Firebase.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-the-white-hall.vercel.app%20(1).png",
        ghLink: "https://github.com/Alsaef/the-white-hall-front-end",
        demoLink: "https://the-white-hall.vercel.app/"
    },
    {
        id: 5,
        title: "Code Blog",
        category: "Next.js & Full Stack",
        tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
        description: "A modern blogging platform for developers to share insights, tutorials, and experiences. Users can create, edit, and read tech-focused blogs in a clean, responsive interface. Built with Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, ensuring smooth performance and efficient state management.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-code-blog-2-0.vercel.app.png",
        ghLink: "https://github.com/Alsaef/code-blog",
        demoLink: "https://code-blog-2-0.vercel.app/"
    },
    {
        id: 6,
        title: "Dnk Shop",
        category: "Next.js & Full Stack",
        tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "E-commerce"],
        description: "A dynamic e-commerce platform offering a seamless shopping experience. Users can explore and purchase products through a sleek and responsive interface. Built with Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB, combining modern design with robust functionality for optimal performance.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-dnk-nu.vercel.app.png",
        ghLink: "https://github.com/Alsaef/Dnk",
        demoLink: "https://dnk-nu.vercel.app/"
    }
];

const categories = ["All", "MERN Stack", "Next.js & Full Stack", "Frontend & API"];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter projects based on category and search query
    const filteredProjects = useMemo(() => {
        return projectsData.filter((proj) => {
            const matchesCategory =
                selectedCategory === "All" ||
                proj.category === selectedCategory ||
                (selectedCategory === "MERN Stack" && (proj.tags.includes("MongoDB") || proj.tags.includes("Node.js")));
            
            const matchesSearch =
                proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                proj.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen pb-24">
            <Helmet>
                <title>Projects & Portfolio Works | AL SAEF RATUL</title>
                <meta
                    name="description"
                    content="Explore software and web development projects by Md. Al Saef Ratul built with React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS."
                />
                <link rel="canonical" href="https://developer-ratul.netlify.app/projects" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Projects & Portfolio Works | AL SAEF RATUL" />
                <meta
                    property="og:description"
                    content="React & MERN stack personal projects showcasing real-world problem solving."
                />
                <meta property="og:url" content="https://developer-ratul.netlify.app/projects" />
                <meta property="og:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Projects & Portfolio Works | AL SAEF RATUL" />
                <meta
                    name="twitter:description"
                    content="React & MERN stack personal projects showcasing real-world problem solving."
                />
                <meta name="twitter:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />
            </Helmet>

            <div className="relative z-10 max-w-7xl mx-auto px-6 mt-28">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        My Featured <span className="text-[var(--color-primary)]">Projects</span>
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg mt-3 font-medium max-w-2xl mx-auto">
                        Explore my applications built with modern tools to solve practical problems with clean architecture.
                    </p>

                    {/* Interactive Filter & Search Controls */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
                        {/* Search Input */}
                        <div className="relative w-full sm:w-72">
                            <AiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search by title, stack (e.g. MERN)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/15 focus:border-[var(--color-primary)] rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                            />
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-xs md:text-sm px-3.5 py-1.5 rounded-xl font-medium transition-all duration-200 ${
                                        selectedCategory === cat
                                            ? 'bg-[var(--color-primary)] text-white shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)]'
                                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Count indicator */}
                    <p className="text-xs text-gray-400 mt-4">
                        Showing {filteredProjects.length} of {projectsData.length} projects
                    </p>
                </motion.div>

                {/* Project Grid */}
                <AnimatePresence mode="wait">
                    {filteredProjects.length === 0 ? (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 max-w-md mx-auto"
                        >
                            <p className="text-gray-400 text-base">No projects matched your criteria.</p>
                            <button
                                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                                className="mt-4 text-xs font-semibold text-[var(--color-primary)] hover:underline"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key={selectedCategory + searchQuery}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                        >
                            {filteredProjects.map((project) => (
                                <motion.div key={project.id} variants={itemVariants}>
                                    <ProjectCard
                                        imgPath={project.imgPath}
                                        title={project.title}
                                        description={project.description}
                                        ghLink={project.ghLink}
                                        demoLink={project.demoLink}
                                        tags={project.tags}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;