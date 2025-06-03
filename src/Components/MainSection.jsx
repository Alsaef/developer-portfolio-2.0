import React from 'react';


import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
  } from "react-icons/ai";

const MainSection = () => {
    return (
        <div className="mt-28 px-6 md:px-12">
            <h1
                className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold"
            >
                LET ME <span className="text-[var(--color-primary)]">INTRODUCE</span> MYSELF
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 mt-10">
                {/* Text Section */}
                <div className="text-left max-w-xl">
                    <p className="text-white text-lg leading-relaxed">
                      Hi I'm Al Saef Ratul  I fell in love with programming and have learned quite a bit along the way, I think… 🤷‍♂️
                        <br />
                        <br />
                        I am fluent in programming languages like{" "}
                        <i>
                            <b className="text-[var(--color-primary)]">
                                JavaScript, and Python.
                            </b>
                        </i>
                        <br />
                        <br />
                        My areas of interest include building innovative{" "}
                        <i>
                            <b className="text-[var(--color-primary)]">
                                Web Technologies and Products
                            </b>
                        </i>{" "}
                        and exploring fields related to{" "}
                        <i>
                            <b className="text-[var(--color-primary)]">Web Development.</b>
                        </i>
                        <br />
                        <br />
                        I am passionate about developing products with{" "}
                        <b className="text-[var(--color-primary)]">Node.js</b> and{" "}
                        <i>
                            <b className="text-[var(--color-primary)]">
                                Modern JavaScript Libraries and Frameworks
                            </b>
                        </i>{" "}
                        like{" "}
                        <i>
                            <b className="text-[var(--color-primary)]">React.js and Next.js.</b> 
                            <b className="text-[var(--color-primary)]"> Redux and Rtk Query</b>
                        </i>
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
                        alt="main"
                        width={250}
                        height={250}
                        className="rounded-full shadow-lg"
                    />
                </div>
            </div>


            <div className='mt-10'>
            <h1 className='text-3xl text-center text-white'>FIND ME ON</h1>
            <p className='text-white text-center text-lg leading-relaxed py-4'>
              Feel free to <span className="text-[var(--color-primary)]">connect </span>with me
            </p>

            <div>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://github.com/Alsaef" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="text-white text-5xl hover:text-[var(--color-primary)] transition-colors duration-300" />
                </a>
                <a href="hhttps://www.linkedin.com/in/al-saef-ratul-b0a380276/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className="text-white text-5xl hover:text-[var(--color-primary)] transition-colors duration-300" />
                </a>
                <a href="https://www.facebook.com/a.s.ratul.102391" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook className="text-white text-5xl hover:text-[var(--color-primary)] transition-colors duration-300" />
                </a>
            </div>
            </div>
            </div>

        </div>
    );
};

export default MainSection;