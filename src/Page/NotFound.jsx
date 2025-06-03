import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../Components/ParticlesBackground';



const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ParticlesBackground />
            <h1 className="text-6xl font-bold text-[var(--color-primary)]">404</h1>
            <p className="mt-4 text-lg text-white">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 text-[var(--color-primary)] hover:underline">Go back to Home</Link>
        </div>
    );
};

export default NotFound;