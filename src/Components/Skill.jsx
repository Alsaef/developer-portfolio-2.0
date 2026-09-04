import React from 'react';
import { motion } from 'framer-motion';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiGithub,
    SiLinux,
    SiTypescript,
    SiVisualstudiocode
} from "react-icons/si";

// Categorized arrays for cleaner rendering and easier future updates
const skillSet = [
    { icon: DiJavascript1, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: DiReact, name: "React JS", color: "text-sky-400" },
    { icon: SiNextdotjs, name: "Next JS", color: "text-white" },
    { icon: DiNodejs, name: "Node JS", color: "text-green-500" },
    { icon: SiExpress, name: "Express JS", color: "text-gray-300" },
    { icon: DiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: DiPython, name: "Python", color: "text-blue-500" },
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
];

const toolSet = [
    { icon: SiLinux, name: "Linux", color: "text-yellow-500" },
    { icon: SiVisualstudiocode, name: "VS Code", color: "text-blue-500" },
    { icon: DiGit, name: "Git", color: "text-orange-600" },
    { icon: SiGithub, name: "GitHub", color: "text-white" },
    { icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
    { icon: SiPostman, name: "Postman", color: "text-orange-500" },
    { icon: SiVercel, name: "Vercel", color: "text-white" },
    { icon: SiNetlify, name: "Netlify", color: "text-teal-400" },
];

const Skill = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const renderCards = (items) => (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:-translate-y-2 hover:border-[var(--color-primary)]/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)] transition-all duration-300 cursor-pointer"
                >
                    <item.icon className={`text-5xl md:text-6xl ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    <p className="text-gray-300 group-hover:text-white text-sm font-medium tracking-wide mt-4 transition-colors duration-300">
                        {item.name}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <section className="mt-32 max-w-6xl mx-auto px-4 relative z-10">
            {/* Languages & Frameworks Section */}
            <div className="mb-20">
                <h2 className="text-white text-3xl md:text-4xl text-center font-bold tracking-wide">
                    Professional <span className="text-[var(--color-primary)]">Skillset</span>
                </h2>
                {renderCards(skillSet)}
            </div>

            {/* Tools & Platforms Section */}
            <div>
                <h2 className="text-white text-3xl md:text-4xl text-center font-bold tracking-wide">
                    Tools & <span className="text-[var(--color-primary)]">Platforms</span>
                </h2>
                {renderCards(toolSet)}
            </div>
        </section>
    );
};

export default Skill;