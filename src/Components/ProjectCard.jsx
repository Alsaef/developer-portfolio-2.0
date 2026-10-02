import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imgPath, title, description, ghLink, demoLink, tags = [] }) => {
    return (
        <div className="group relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(var(--color-primary-rgb),0.25)] hover:border-[var(--color-primary)]/40">
            
            {/* Image Section with smooth scale on hover */}
            <div className="w-full h-56 overflow-hidden relative border-b border-white/10 bg-black/40">
                {/* Ambient glow behind image */}
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                    src={imgPath} 
                    alt={`${title} project preview`} 
                    loading="lazy"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 md:p-7 z-20">
                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {title}
                </h3>
                
                {/* flex-grow ensures this takes up available space, pushing buttons to the bottom */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Buttons Section */}
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    {/* GitHub link */}
                    {ghLink && ghLink !== "#" && ghLink.length > 1 && (
                        <a
                            href={ghLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${title} source code on GitHub`}
                            className="flex-1 flex justify-center items-center gap-2 bg-white/5 border border-white/20 text-white font-medium py-2.5 px-3 rounded-xl hover:bg-[var(--color-primary)] hover:border-transparent hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)] transition-all duration-300 text-sm"
                        >
                            <BsGithub size={17} />
                            <span>Code</span>
                        </a>
                    )}
                    
                    {/* Demo button */}
                    {demoLink && demoLink !== "#" && demoLink.length > 1 && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit live demo of ${title}`}
                            className="flex-1 flex justify-center items-center gap-2 bg-[var(--color-primary)] border border-transparent text-white font-medium py-2.5 px-3 rounded-xl hover:opacity-90 hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)] transition-all duration-300 text-sm"
                        >
                            <CgWebsite size={17} />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;