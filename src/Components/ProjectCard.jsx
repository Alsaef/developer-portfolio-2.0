
import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
const ProjectCard = ({ imgPath, title, description, ghLink, demoLink }) => {
    return (

        <div className="bg-transparent text-white shadow-lg shadow-[rgba(119,53,136,0.459)] opacity-90  hover:shadow-[0_4px_4px_5px_rgba(129,72,144,0.561)] p-6 h-full">
            <img className=" " src={imgPath} alt="card-img" width={500} height={300} />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-justify">{description}</p>
                <div className="flex items-center mt-4">
                 {ghLink.length>=1&&   <a
                        className="bg-[var(--color-primary)] text-white font-medium py-2 px-4 rounded hover:bg-opacity-90 transition duration-300 flex items-center"
                        href={ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub className="mr-2" /> GitHub
                    </a>}
                    {"\n"}
                    {"\n"}
                    <a
                        className="bg-[var(--color-primary)] text-white font-medium py-2 px-4 rounded hover:bg-opacity-90 transition duration-300 flex items-center ml-3"
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CgWebsite className="mr-2" /> Demo
                    </a>

                </div>
            </div>
        </div>


    );
};

export default ProjectCard;