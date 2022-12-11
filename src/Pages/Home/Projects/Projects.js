import React, { useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))

    return (
        <div>

            <h2 className="text-center text-4xl font-bold">My Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-6'>
                {
                    projects.map((project, i) => <Project
                        key={i}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;