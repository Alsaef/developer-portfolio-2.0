// eslint-disable-next-line no-unused-vars
import React from 'react';
import BannerImg from '../../assets/Images/Banner/ratul bg.png'
import './Banner.css'
import { FaGithub,FaFacebook,FaLinkedin } from 'react-icons/fa';
const Banner = () => {
    return (
        <div>
            <div className="banner hero gap-6 bg-[#fef1e2]" style={{padding:"50px"}}>
  <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-9">
    <img src={BannerImg} style={{width:'400px'}}/>
    <div >
        <p className=' text-2xl font-semibold'>This is,</p>
      <h1 className="text-5xl font-bold text-orange-500">AL SAEF RATUL</h1>
      <p className="py-6 text-4xl">Web Developer (Frontend-React.js)</p>
      <a href="https://www.facebook.com/profile.php?id=100064069724626"><button className='btn btn-success mx-1 text-white text-2xl'><FaFacebook /></button></a>
      <a href="https://github.com/Alsaef"><button className='btn btn-success mx-1 text-white text-2xl'><FaGithub /></button></a>
     <a href="https://www.linkedin.com/in/al-saef-ratul-b0a380276/"> <button className='btn btn-success mx-1 text-white text-2xl'><FaLinkedin /></button></a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;