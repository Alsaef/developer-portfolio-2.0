import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Type = () => {
    return (
        <div className="text-[var(--color-primary)] text-2xl mt-4 font-semibold tracking-wide">
            <TypeAnimation
                sequence={[
                    'Frontend Web Developer',
                    1500,
                    'MERN Stack Developer',
                    1500,
                    'React.js Specialist',
                    1500,
                    'Interactive UI/UX Creator',
                    1500,
                    'Open Source Contributor',
                    1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </div>    
    );
};

export default Type;