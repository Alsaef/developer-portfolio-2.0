
import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import ParticlesBackground from '../Components/ParticlesBackground';
import PdfView from '../Components/PdfView';
import { Helmet } from 'react-helmet-async';
const Resume = () => {
    return (
        <div className="">
                <Helmet>
      <title>Resume | AL SAEF RATUL</title>

      <meta
        name="description"
        content="View and download the resume of AL SAEF RATUL, Frontend React.js Developer with MERN stack experience."
      />

      <link
        rel="canonical"
        href="https://developer-ratul.netlify.app/resume"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Resume | AL SAEF RATUL" />
      <meta
        property="og:description"
        content="Frontend React.js Developer resume with skills, experience, and projects."
      />
      <meta
        property="og:url"
        content="https://developer-ratul.netlify.app/resume"
      />
      <meta
        property="og:image"
        content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Resume | AL SAEF RATUL" />
      <meta
        name="twitter:description"
        content="Frontend React.js Developer resume with skills, experience, and projects."
      />
      <meta
        name="twitter:image"
        content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
      />
    </Helmet>
            <ParticlesBackground />

            <div className='mt-7'>
                <h2 className='text-4xl text-center text-white'>My <strong className='text-[var(--color-primary)]'>Resume</strong></h2>
            </div>
            <div className="flex items-center justify-center mt-10">
                <a href='https://drive.google.com/file/d/1ODrGf5itJjGd7aLCeyI1_Hrwn0hNQQUC/view?usp=sharing' target='_blank'><button className="px-4 py-2 text-white bg-[var(--color-primary)] rounded flex items-center">
                <AiOutlineDownload />  &nbsp; Download Resume
                </button></a>
            </div>

            {/* <PdfView></PdfView> */}
        </div>
    );
};

export default Resume;