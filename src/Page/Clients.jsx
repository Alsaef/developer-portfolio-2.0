import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ProjectCard from '../Components/ProjectCard';
import ParticlesBackground from '../Components/ParticlesBackground';

// Extracted data for cleaner JSX and easier future updates
const clientProjectsData = [
    {
        title: "3MI STUDIO",
        description: "Studio 3 Marketing is a full-service creative agency building results-oriented digital experiences for high-growth businesses. Clients partner with the studio to receive custom website design, performance marketing, brand strategy, and video production. Built with modern, high-performance technologies like React, Next.js, GSAP, and Contentful.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-3mi-studio.vercel.app.png",
        ghLink: "",
        demoLink: "https://3mi-studio.vercel.app/"
    },
    {
        title: "ByteOnSoft",
        description: "ByteOnSoft is a premier IT agency and software development firm specializing in custom solutions that help modern businesses thrive. Clients partner with the agency for web development, e-commerce platforms, and mobile app development, all delivered with a clean, user-centric interface. Built with a high-performance stack including Next.js, React, and Node.js.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-byteonsoft.vercel.app.png",
        ghLink: "",
        demoLink: "https://byteonsoft.vercel.app/"
    },
    {
        title: "BanglaVersity",
        description: "BanglaVersity is a modern digital library and book reading platform, offering a vast collection of Bengali literature, academic texts, and articles. Users can discover, read, and organize their favorite books in a clean, responsive, and user-friendly interface. Built with React.js, Tailwind CSS, and a Node.js backend for an SEO-friendly experience.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-banglaversity.com.png",
        ghLink: "",
        demoLink: "https://banglaversity.com/"
    },
    {
        title: "Rizik Restaurant",
        description: "A custom web component engineered for Rizik Restaurant in Comilla. It features dynamic food details and rich metadata, integrated seamlessly with a WhatsApp API ordering link. This direct-to-messaging pipeline streamlines the customer purchasing process and increases conversion rates for the business.",
        imgPath: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-www.rizikrestaurant.com.png", // Update with your actual image
        ghLink: "",
        demoLink: "https://www.rizikrestaurant.com/" // Update with the live link if available
    }
];

const Clients = () => {
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
                <title>Client Projects | AL SAEF RATUL</title>
                <meta
                    name="description"
                    content="Client projects delivered by Md. Al Saef Ratul including production-ready web applications and business solutions."
                />
                <link rel="canonical" href="https://developer-ratul.netlify.app/client-projects" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Client Projects | AL SAEF RATUL" />
                <meta
                    property="og:description"
                    content="Production-ready client projects using React, Node.js, and modern web tools."
                />
                <meta property="og:url" content="https://developer-ratul.netlify.app/client-projects" />
                <meta property="og:image" content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Client Projects | AL SAEF RATUL" />
                <meta
                    name="twitter:description"
                    content="Production-ready client projects using React, Node.js, and modern web tools."
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
                        Work For <span className="text-[var(--color-primary)]">Clients</span>
                    </h1>
                    <p className="text-gray-300 text-lg mt-4 font-medium">
                        Production-ready solutions delivered for high-growth businesses.
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
                    {clientProjectsData.map((project, index) => (
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

export default Clients;