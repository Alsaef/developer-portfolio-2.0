
import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import ParticlesBackground from '../Components/ParticlesBackground';
import PdfView from '../Components/PdfView';
const Resume = () => {
    return (
        <div className="">
            <ParticlesBackground />

            <div className='mt-7'>
                <h2 className='text-4xl text-center text-white'>My <strong className='text-[var(--color-primary)]'>Resume</strong></h2>
            </div>
            <div className="flex items-center justify-center mt-10">
                <a href='https://drive.google.com/file/d/1ODrGf5itJjGd7aLCeyI1_Hrwn0hNQQUC/view?usp=sharing' target='_blank'><button className="px-4 py-2 text-white bg-[var(--color-primary)] rounded flex items-center">
                <AiOutlineDownload />  &nbsp; Download Resume
                </button></a>
            </div>

            <PdfView></PdfView>
        </div>
    );
};

export default Resume;