import React, { useEffect, useState } from 'react';
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
    { name: 'HOME', path: '/', icon: <AiOutlineHome size={18} /> },
    { name: 'ABOUT', path: '/about', icon: <AiOutlineUser size={18} /> },
    { name: 'PROJECTS', path: '/projects', icon: <AiOutlineFundProjectionScreen size={18} /> },
    { name: 'CLIENTS', path: '/clients', icon: <AiOutlineFundProjectionScreen size={18} /> },
    { name: 'RESUME', path: '/resume', icon: <CgFileDocument size={18} /> },
];

const AppBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderNavLinks = (isMobile = false) => (
        <>
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                        `group relative flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-300 ${
                            isActive
                                ? 'text-[var(--color-primary)] font-semibold'
                                : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                                {item.icon}
                            </span>
                            <span className="tracking-wide">{item.name}</span>
                            
                            {/* Animated underline indicator */}
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 ${
                                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                            />
                        </>
                    )}
                </NavLink>
            ))}

            {/* External Blog Button */}
            <a
                href="https://code-blog-2-0.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[var(--color-primary)]/40 text-[var(--color-secondary)] hover:text-white hover:bg-[var(--color-primary)] hover:border-transparent transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)]"
            >
                <ImBlog className="transition-transform duration-300 group-hover:rotate-6" size={16} />
                <span>BLOGS</span>
            </a>
        </>
    );

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'py-2 bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10'
                    : 'py-4 bg-transparent border-b border-transparent'
            }`}
        >
            <Navbar className="bg-transparent border-0 px-4 md:px-8 max-w-7xl mx-auto">
                <NavbarContainer className="flex items-center justify-between w-full">
                    {/* Brand Logo with glowing hover */}
                    <NavbarBrand>
                        <Link to="/" className="group flex items-center gap-1">
                            <span className="text-[var(--color-primary)] text-2xl font-bold tracking-wider transition-all duration-300 group-hover:tracking-widest">
                                A S RATUL
                            </span>
                            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                        </Link>
                    </NavbarBrand>

                    {/* Desktop Menu */}
                    <NavbarList className="hidden md:flex items-center space-x-1 lg:space-x-3">
                        {renderNavLinks()}
                    </NavbarList>

                    {/* Mobile Menu Toggle & Drawer */}
                    <NavbarCollapseBtn className="md:hidden text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors" />
                    
                    <NavbarCollapse className="bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4">
                        {renderNavLinks(true)}
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </header>
    );
};

export default AppBar;