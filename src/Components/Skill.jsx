import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
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
    SiRedux,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiGithub
} from "react-icons/si";

const Skill = () => {
        return (
                <div className='mt-20'>
                        <h2 className='text-white text-4xl text-center font-medium'>
                                Professional <span className='text-[var(--color-primary)]'>Skillset And Tools</span>
                        </h2>
                        <div>
                                <div className='flex flex-wrap justify-center mt-10'>
                                        <div className='m-4'>
                                                <DiJavascript1 className='text-6xl text-yellow-500' />
                                                <p className='text-white text-center mt-2'>JavaScript</p>
                                        </div>
                                        <div className='m-4'>
                                                <DiReact className='text-6xl text-blue-500' />
                                                <p className='text-white text-center mt-2'>React JS</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiRedux className='text-6xl text-[var(--color-primary)]' />
                                                <p className='text-white text-center mt-2'>Redux</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiNextdotjs className='text-6xl text-gray-500' />
                                                <p className='text-white text-center mt-2'>Next JS</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiExpress className='text-6xl text-gray-500' />
                                                <p className='text-white text-center mt-2'>Express JS</p>
                                        </div>
                                        <div className='m-4'>
                                                <DiNodejs className='text-6xl text-green-500' />
                                                <p className='text-white text-center mt-2'>Node JS</p>
                                        </div>
                                        <div className='m-4'>
                                                <DiMongodb className='text-6xl text-green-500' />
                                                <p className='text-white text-center mt-2'>MongoDB</p>
                                        </div>
                                      
                                        <div className='m-4'>
                                                <DiPython className='text-6xl text-blue-500' />
                                                <p className='text-white text-center mt-2'>Python</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiHtml5 className='text-6xl text-orange-500' />
                                                <p className='text-white text-center mt-2'>HTML</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiCss3 className='text-6xl text-blue-500' />
                                                <p className='text-white text-center mt-2'>CSS</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiTailwindcss className='text-6xl text-blue-300' />
                                                <p className='text-white text-center mt-2'>Tailwind CSS</p>
                                        </div>
                                       
                                </div>
                                <div className='flex flex-wrap justify-center mt-10'>
                                   
                                        <div className='m-4'>
                                                <SiFirebase className='text-6xl text-yellow-500' />
                                                <p className='text-white text-center mt-2'>Firebase</p>
                                        </div>
                                        <div className='m-4'>
                                                <DiGit className='text-6xl text-orange-400' />
                                                <p className='text-white text-center mt-2'>Git</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiPostman className='text-6xl text-orange-400' />
                                                <p className='text-white text-center mt-2'>Post Man</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiVercel className='text-6xl text-white' />
                                                <p className='text-white text-center mt-2'>Vercel</p>
                                        </div>
                                        <div className='m-4'>
                                                <SiNetlify className='text-6xl text-sky-500' />
                                                <p className='text-white text-center mt-2'>Netlify</p>
                                        </div>
                                        <div className='m-4'>
                                                < SiGithub className='text-6xl text-gray-500' />
                                                <p className='text-white text-center mt-2'>GitHub</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Skill;