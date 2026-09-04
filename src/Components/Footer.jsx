import React from 'react';
import { 
    AiFillGithub, 
    AiFillLinkedin, 
    AiFillFacebook,
    AiOutlineMail,
    AiOutlinePhone
} from 'react-icons/ai';

const socialLinks = [
    {
        name: 'GitHub',
        icon: <AiFillGithub size={24} />,
        url: 'https://github.com/Alsaef',
    },
    {
        name: 'LinkedIn',
        icon: <AiFillLinkedin size={24} />,
        url: 'https://www.linkedin.com/in/al-saef-ratul-b0a380276/',
    },
    {
        name: 'Facebook',
        icon: <AiFillFacebook size={24} />,
        url: 'https://www.facebook.com/a.s.ratul.102391',
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-16 overflow-hidden bg-black text-gray-300 border-t border-white/10">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[var(--color-primary)] opacity-5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center text-center space-y-6">
                    
                    {/* Brand & Identity */}
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-wider">
                            A S RATUL
                        </h2>
                        <p className="mt-2 text-[var(--color-primary)] font-medium tracking-wide">
                            Frontend Web Developer
                        </p>
                    </div>

                    {/* Interactive Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 text-sm font-medium">
                        <a 
                            href="tel:01867781018" 
                            className="group flex items-center justify-center gap-2 hover:text-white transition-colors duration-300"
                        >
                            <span className="p-2 rounded-full bg-white/5 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                <AiOutlinePhone className="text-[var(--color-primary)] group-hover:text-white" />
                            </span>
                            01867781018
                        </a>
                        
                        <a 
                            href="mailto:saef.ratul@gmail.com" 
                            className="group flex items-center justify-center gap-2 hover:text-white transition-colors duration-300"
                        >
                            <span className="p-2 rounded-full bg-white/5 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                <AiOutlineMail className="text-[var(--color-primary)] group-hover:text-white" />
                            </span>
                            saef.ratul@gmail.com
                        </a>
                    </div>

                    {/* Animated Social Links */}
                    <div className="flex justify-center space-x-5 pt-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="group relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)] border border-white/5 hover:border-[var(--color-primary)]/50"
                            >
                                <span className="text-gray-400 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                    {social.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p>© {currentYear} Md. Al Saef Ratul. All rights reserved.</p>
                    <p>Built with <span className="text-red-500 animate-pulse">❤</span> in React</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;