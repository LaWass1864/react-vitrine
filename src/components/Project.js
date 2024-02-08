import React, { useState } from 'react';
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
    //  on va aller recuperer la BDD
    const [currentProject] = useState(projectsData[projectNumber])

    return (
        //   On va aller chercher nos projets 
        <div className="project-main">
            <div className="project-content">
                <h1>{currentProject.title}</h1>
                <p>{currentProject.date}</p>
                {/* pas besoin de return car sur une ligne */}
                <ul className="languages">
                    {currentProject.languages.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="img-content">
                <div className='img-container hover'>

                    <span>
                        <h3> {currentProject.title}</h3>
                        <p> {currentProject.infos}</p>
                    </span>
                    <img 
                    src={currentProject.img} 
                    alt={currentProject.title}
                    className='img'/>
                </div>
            </div>
        </div>

    )
};

export default Project;