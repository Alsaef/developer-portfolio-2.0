// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Full = () => {
    const project = useLoaderData()
    console.log(project)
    return (
        <div>
           <div className="hero min-h-screen bg-[#fef1e2]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={project.project_image_section} className=" w-56 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{project.project_name}</h1>
    <div>
        {
            project.resources.map((data,index)=> <p key={index}>{data}</p>)
        }
    </div>
   <div className=' mt-2'>
   <a href={project.git_Link}><button className="btn btn-primary">Source Code Link</button></a>
    <Link to='/project'><button className='btn ms-2 btn-success text-white'>Back</button></Link>
   </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Full;