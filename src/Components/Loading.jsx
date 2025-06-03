import React from 'react';
import ParticlesBackground from './ParticlesBackground';


const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
            <ParticlesBackground></ParticlesBackground>
                <div className="rounded-full h-20 w-20 bg-[var(--color-primary)] animate-ping"></div>
            </div>
        </div>
    );
};

export default Loading;