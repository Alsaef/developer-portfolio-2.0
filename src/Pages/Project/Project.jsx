// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProjectData from './ProjectData';
import Footer from '../Footer/Footer';
import Loading from '../../Components/Loading';
import { useGetProjectQuery } from '../../features/projectApi/project';

const Project = () => {
   
  const {data,isLoading,isError}=useGetProjectQuery()

    if (isLoading) {
        return (
            <Loading></Loading>
        )
    }
    
    if(isError){
return(
    <div className='h-screen py-8'>
        <h2 className='text-center text-4xl font-semibold '>Internal Error 503</h2>
    </div>
)
    }
    return (
        <div className=' bg-[#fef1e2] h-screen '>
               <div className='py-5'>
               <h2 className=' text-4xl font-bold text-center py-3'>My Realtime Project</h2>
            <p className='text-xl text-orange-600 text-center py-2'>What I Know</p>
               </div>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-6 mb-2'>
                {
                    data.map((project,index) => <ProjectData key={index} project={project}></ProjectData>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Project;