import { Helmet } from 'react-helmet-async';
import aboutImg from '../assets/Images/Banner/about.webp';
import Github from '../Components/Github';
import ParticlesBackground from '../Components/ParticlesBackground';
import Skill from '../Components/Skill';

const About = () => {
    return (
        <div>
                <Helmet>
      <title>About Me | AL SAEF RATUL</title>

      <meta
        name="description"
        content="Learn more about AL SAEF RATUL, a Frontend React.js Developer with 1+ year experience building modern web applications."
      />

      <link
        rel="canonical"
        href="https://developer-ratul.netlify.app/about"
      />

      {/* Open Graph */}
      <meta property="og:type" content="profile" />
      <meta property="og:title" content="About Me | AL SAEF RATUL" />
      <meta
        property="og:description"
        content="Frontend React.js Developer with real-world project experience in modern web technologies."
      />
      <meta
        property="og:url"
        content="https://developer-ratul.netlify.app/about"
      />
      <meta
        property="og:image"
        content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Me | AL SAEF RATUL" />
      <meta
        name="twitter:description"
        content="Frontend React.js Developer with real-world project experience."
      />
      <meta
        name="twitter:image"
        content="https://developer-ratul.netlify.app/assets/my-bg-02d338d3.png"
      />
    </Helmet>
            <ParticlesBackground></ParticlesBackground>
            
                <div className='mt-20 px-10'>



                    {/* flex information */}

                    <div className='flex items-center md:justify-around justify-center md:flex-row flex-col md:gap-0 gap-6'>



                        <div>
                            <h2 className='text-white text-4xl '>Know Who <span className='text-[var(--color-primary)] mb-5'>I'M</span></h2>
                            <p className='text-white text-lg text-left leading-relaxed font-medium mt-10'>
                                I'm Al Saef Ratul, a full-stack MERN developer skilled in <br /> <span className='text-[var(--color-primary)]'>React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.</span> <br /> I focus on creating dynamic, responsive applications <br /> with features like JWT authentication, pagination, and filtering. <br /> My notable projects include <span className='text-[var(--color-primary)]'>Code Blog, Photo Gram, and DNK Shop.</span>
                            </p>
                        </div>


                        <div>
                            <img src={aboutImg} alt='about image' width={280} height={280} />
                        </div>



                    </div>



                    {/* skill section */}

                    <Skill />
                    <Github />
                </div>
           
        </div>
    );
};

export default About;