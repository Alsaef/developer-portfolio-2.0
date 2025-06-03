import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold">Alsaef Ratul</h2>
                <p className="mt-2">Phone: 01867781018</p>
                <p>Email: saef.ratul@gmail.com</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://github.com/Alsaef" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="text-white text-3xl hover:text-[var(--color-primary)] transition-colors duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/al-saef-ratul-b0a380276/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className="text-white text-3xl hover:text-[var(--color-primary)] transition-colors duration-300" />
                    </a>
                    <a href="https://www.facebook.com/a.s.ratul.102391" target="_blank" rel="noopener noreferrer">
                        <AiFillFacebook className="text-white text-3xl hover:text-[var(--color-primary)] transition-colors duration-300" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;