// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectData from './ProjectData';
import Footer from '../Footer/Footer';

const Project = () => {
    const projects=useLoaderData()
    console.log(projects)
    return (
        <div className=' bg-[#fef1e2] '>
               <div className='py-5'>
               <h2 className=' text-4xl font-bold text-center py-3'>My Realtime Project</h2>
            <p className='text-xl text-orange-600 text-center py-2'>What I Know</p>
               </div>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-6 mb-2'>
                {
                    projects.map(project => console.log(project))
                }
                {
                    projects.map((project,index) => <ProjectData key={index} project={project}></ProjectData>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project;