import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import ParticlesBackground from '../Components/ParticlesBackground';
import { Helmet } from 'react-helmet-async';

const Clients = () => {
    return (
        <div>
                <Helmet>
      <title>Client Projects | AL SAEF RATUL</title>

      <meta
        name="description"
        content="Client projects delivered by AL SAEF RATUL including production-ready web applications and business solutions."
      />

      <link
        rel="canonical"
        href="https://developer-ratul.netlify.app/client-projects"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Client Projects | AL SAEF RATUL" />
      <meta
        property="og:description"
        content="Production-ready client projects using React, Node.js, and modern web tools."
      />
      <meta
        property="og:url"
        content="https://developer-ratul.netlify.app/client-projects"
      />
      <meta
        property="og:image"
        content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Client Projects | AL SAEF RATUL" />
      <meta
        name="twitter:description"
        content="Production-ready client projects using React, Node.js, and modern web tools."
      />
      <meta
        name="twitter:image"
        content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
      />
    </Helmet>
             <ParticlesBackground></ParticlesBackground>

            <div className='mt-20'>
                <h1 className="text-4xl text-center text-white">
                    Work For <strong className="text-[var(--color-primary)]">Clients </strong>
                </h1>
                <p className='text-white text-lg text-center py-2'>
                    Here are a few projects I've worked on recently.
                </p>

                <div className='mx-auto w-[90%]'>
                    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-3mi-studio.vercel.app.png'

                            title="3MI STUDIO"
                            description="Studio 3 Marketing is a full-service creative agency building results-oriented digital experiences for high-growth businesses. Clients partner with the studio to receive custom website design, performance marketing, brand strategy, and video production. Built with modern, high-performance technologies like React, Next.js, GSAP, and Contentful, the portfolio ensures every digital product is a scalable, conversion-focused asset."
                            ghLink=""
                            demoLink="https://3mi-studio.vercel.app/"
                        />


                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-byteonsoft.vercel.app.png'
                            title="ByteOnSoft"
                            description="ByteOnSoft is a premier IT agency and software development firm specializing in custom solutions that help modern businesses thrive. Clients partner with the agency for web development, e-commerce platforms, and mobile app development, all delivered with a clean, user-centric interface. Built with a high-performance stack including Next.js, React, and Node.js, ByteOnSoft ensures scalable, secure, and reliable applications for a seamless user experience."
                            ghLink=""
                            demoLink="https://byteonsoft.vercel.app/"
                        />

                        <ProjectCard
                            imgPath='https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/Macbook-Air-banglaversity.com.png'

                            title="BanglaVersity"
                            description="BanglaVersity is a modern digital library and book reading platform, offering a vast collection of Bengali literature, academic texts, and articles. Users can discover, read, and organize their favorite books in a clean, responsive, and user-friendly interface. Built with React.js, Tailwind CSS, and a Node.js backend, the site ensures an exceptionally fast, SEO-friendly, and seamless reading experience for book lovers everywhere."
                            ghLink=""
                            demoLink="https://banglaversity.com/"
                        />
                       

                    </div>


                </div>



                
            </div>
        </div>
    );
};

export default Clients;