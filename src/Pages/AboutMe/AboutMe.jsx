import Banner2 from '../../assets/Images/Banner/ratul-bg2.png'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div>
            <div className="hero mt-9 g background">
                <div className="hero-content flex-col-reverse lg:flex-row gap-8">
                    <img src={Banner2} style={{ width: '400px' }} />
                    <div className='p-6'>
                        <p className=' text-2xl font-semibold text-orange-600 py-4'>Hello There, I am</p>
                        <h1 className="text-3xl font-bold">AL SAEF RATUL</h1>
                        <div className='py-4'>
                            <p className=' font-semibold'> <span className=' text-orange-500'>&#10003;</span>  Web Developer (Frontend-React.JS)</p>
                            <p className='py-2 font-semibold'> <span className=' text-orange-500'>&#10003;</span> 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management</p>
                            <p className='py-2 font-semibold'><span className=' text-orange-500'>&#10003;</span> Data Management And Server System</p>
                        </div>
                        <a href="https://www.facebook.com/profile.php?id=100064069724626"><button className='btn btn-success mx-1 text-white text-2xl'><FaFacebook /></button></a>
                        <a href="https://github.com/Alsaef"><button className='btn btn-success mx-1 text-white text-2xl'><FaGithub /></button></a>
                        <a href="https://www.linkedin.com/in/al-saef-ratul-b0a380276/"> <button className='btn btn-success mx-1 text-white text-2xl'><FaLinkedin /></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;