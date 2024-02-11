// eslint-disable-next-line no-unused-vars
import React from 'react';
import js from '../../assets/Images/skill/js.png'
import react from '../../assets/Images/skill/react.png'
import node from '../../assets/Images/skill/nodejs.png'
import mongo from '../../assets/Images/skill/mongo.png'
import Progress from '../Progress/Progress';
import MySkill from '../My Skill/MySkill';
const Skill = () => {
    return (
        <div className=' mt-24 bg-[#d6f1ff] p-4'>
           <div className='py-6'>
           <p className=' text-xl text-orange-600 text-center py-2'>What I Do</p>
            <h3 className=' text-4xl font-bold text-center py-3 '>My Featured Services</h3>
           </div>
            <section className=' mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8'>
                <div>
                    <div className="card bg-base-100 shadow-2xl">
                    <div className=' flex justify-center p-2'>
                            <img style={{width:"60px"}} src={js} alt="" />
                        </div>
                        <div className="card-body ">
                            <h2 className="card-title">
                            Vanilla JavaScript
                            </h2>
                            <p><span className=' text-orange-500'>&#10003;</span> Dom Manipulation</p>
                            <p><span className=' text-orange-500'>&#10003;</span>Creating Elements</p>
                            <p><span className=' text-orange-500'>&#10003;</span>Introduction To projects</p>
                          
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-2xl pb-2">
                    <div className=' flex justify-center p-2'>
                            <img style={{width:"60px"}} src={react} alt="" />
                        </div>
                        <div className="card-body ">
                            <h2 className="card-title">
                            React
                            </h2>
                            <p><span className=' text-orange-500'>&#10003;</span> React Web Application </p>
                            <p><span className=' text-orange-500'>&#10003;</span> Single Page Application </p>
                            <p><span className=' text-orange-500'>&#10003;</span> Introduction To projects </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-2xl">
                    <div className=' flex justify-center p-2'>
                            <img style={{width:"56.5px"}} src={node} alt="" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                            Node JS
                            </h2>
                            <p><span className=' text-orange-500'>&#10003;</span>Server Management</p>
                            <p><span className=' text-orange-500'>&#10003;</span> handling JSON</p>
                            <p><span className=' text-orange-500'>&#10003;</span>Cross-Platform Compatibility</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card  bg-base-100 shadow-2xl">
                        <div className=' flex justify-center p-2'>
                            <img style={{width:"60px"}} src={mongo} alt="Shoes" />
                        </div>
                        <div className="card-body mb-1">
                            <h2 className="card-title">
                            Mongodb
                            </h2>
                            <p><span className=' text-orange-500 p-0'>&#10003;</span>MERN Project Development</p>
                            <p><span className=' text-orange-500'>&#10003;</span>User Rights Management</p>
                            <p><span className=' text-orange-500'>&#10003;</span>Data Managment</p>
                           
                        </div>
                    </div>
                </div>
            </section>
            <MySkill></MySkill>
            <Progress></Progress>
        </div>
    );
};

export default Skill;