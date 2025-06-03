'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const Type = () => {
    return (
        <div className="text-[var(--color-primary)]  text-2xl mt-8 font-semibold">
        <TypeAnimation
            sequence={[
                'Web Developer',
                1000,
                'FRONT-END Developer',
                1000,
                'MEARN Stack Developer',
                1000,
               
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
    </div>    
    );
};

export default Type;