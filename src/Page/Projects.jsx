
import React from 'react';
import ParticlesBackground from '../Components/ParticlesBackground';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
    return (
        <div>
            <ParticlesBackground></ParticlesBackground>

            <div className='mt-20'>
                <h1 className="text-4xl text-center text-white">
                    My Personal <strong className="text-[var(--color-primary)]">Works </strong>
                </h1>
                <p className='text-white text-lg text-center py-2'>
                    Here are a few projects I've worked on recently.
                </p>

                <div className='mx-auto w-[90%]'>
                    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-movie-box-dusky.vercel.app.png'

                            title="Movie Box (Soraflix)"
                            description="Movie Box (Soraflix) A responsive movie discovery web application built with React.js and Tailwind CSS. The app interfaces with a REST API to fetch real-time movie data, including ratings and popularity. It features a dynamic Watch List managed via the Context API for global state management, allowing users to save their favorite films across the session."
                            ghLink="https://github.com/Alsaef/movie-box"
                            demoLink="https://movie-box-dusky.vercel.app/"
                        />


                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-euit-ms-250701-frontend.vercel.app.png'
                            title="Task Management"
                            description="Task Manager (Full Stack) A full-stack productivity application designed to help users organize and track daily tasks efficiently. Built using the MERN stack (MongoDB, Express, React, Node.js)."
                            ghLink="https://github.com/Alsaef/EUIT-MS250701-frontend"
                            demoLink="https://euit-ms-250701-frontend.vercel.app/"
                        />


   {/* <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-the-white-hall.vercel.app%20(1).png'

                            title="The White Hall"
                            description="The White Hall is a full-stack web application for community center management, allowing customers to book events and administrators to manage services. Users can check availability, review food packages, and book slots, while admins confirm reservations and update content via a dedicated portal. Built with React.js, Context API, Bootstrap, Node.js, Express.js, MongoDB, and Firebase, it provides a secure, responsive, and feature-rich platform for both customers and staff."
                            ghLink="https://github.com/Alsaef/the-white-hall-front-end"
                            demoLink="https://the-white-hall.vercel.app/"
                        /> */}
                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-the-white-hall.vercel.app%20(1).png'

                            title="The White Hall"
                            description="The White Hall is a full-stack web application for community center management, allowing customers to book events and administrators to manage services. Users can check availability, review food packages, and book slots, while admins confirm reservations and update content via a dedicated portal. Built with React.js, Context API, Bootstrap, Node.js, Express.js, MongoDB, and Firebase, it provides a secure, responsive, and feature-rich platform for both customers and staff."
                            ghLink="https://github.com/Alsaef/the-white-hall-front-end"
                            demoLink="https://the-white-hall.vercel.app/"
                        />

                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-code-blog-2-0.vercel.app.png'

                            title="Code Blog"
                            description="Code Blog is a modern blogging platform for developers to share insights, tutorials, and experiences. Users can create, edit, and read tech-focused blogs in a clean, responsive interface. Built with Next.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase, it ensures smooth performance and efficient state management for a seamless user experience."
                            ghLink="https://github.com/Alsaef/code-blog"
                            demoLink="https://code-blog-2-0.vercel.app/"
                        />
                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-dnk-nu.vercel.app.png'

                            title="Dnk Shop"
                            description="DNK is a dynamic e-commerce platform offering a seamless shopping experience. Users can explore and purchase products through a sleek and responsive interface. Built with Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB, it combines modern design with robust functionality to ensure efficient performance and user satisfaction."
                            ghLink="https://github.com/Alsaef/Dnk"
                            demoLink="https://dnk-nu.vercel.app/"
                        />

                    </div>


                </div>



                
            </div>
        </div>
    );
};

export default Projects;