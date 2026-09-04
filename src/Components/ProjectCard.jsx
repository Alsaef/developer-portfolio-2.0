import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imgPath, title, description, ghLink, demoLink }) => {
    return (
        <div className="group relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(var(--color-primary-rgb),0.2)] hover:border-[var(--color-primary)]/40">
            
            {/* Image Section with smooth scale on hover */}
            <div className="w-full h-56 overflow-hidden relative border-b border-white/10">
                {/* Ambient glow behind image */}
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                    src={imgPath} 
                    alt={`${title} screenshot`} 
                    loading="lazy"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 md:p-8 z-20">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {title}
                </h3>
                
                {/* flex-grow ensures this takes up available space, pushing buttons to the bottom */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify mb-8 flex-grow">
                    {description}
                </p>

                {/* Buttons Section */}
                <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-white/5">
                    
                    {/* Only render GitHub button if a valid link exists */}
                    {ghLink && ghLink !== "#" && ghLink.length > 1 && (
                        <a
                            href={ghLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex justify-center items-center gap-2 bg-white/5 border border-white/20 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-[var(--color-primary)] hover:border-transparent hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)] transition-all duration-300"
                        >
                            <BsGithub size={18} />
                            <span>GitHub</span>
                        </a>
                    )}
                    
                    {/* Only render Demo button if a valid link exists */}
                    {demoLink && demoLink !== "#" && demoLink.length > 1 && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex justify-center items-center gap-2 bg-[var(--color-primary)] border border-transparent text-white font-medium py-2.5 px-4 rounded-lg hover:bg-opacity-80 hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)] transition-all duration-300"
                        >
                            <CgWebsite size={18} />
                            <span>Demo</span>
                        </a>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;