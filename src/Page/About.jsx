import aboutImg from '../assets/Images/Banner/about.webp';
import Github from '../Components/Github';
import ParticlesBackground from '../Components/ParticlesBackground';
import Skill from '../Components/Skill';

const About = () => {
    return (
        <div>
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