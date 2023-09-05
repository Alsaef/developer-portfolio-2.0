/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectData = ({project}) => {
    return (
        <div>
          <div className="card bg-base-100 shadow-xl p-2">
  <div className=' flex justify-center items-center'><img style={{height:"200px"}} src={project.project_image_section} alt="" /></div>
  <div className="card-body">
    <h2 className="card-title">{project.project_name}</h2>
    <p>{project.category}</p>
    <div className="card-actions justify-end">
     <Link to={`/project/${project._id}`}><button className="btn btn-primary">See Full Project</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProjectData;