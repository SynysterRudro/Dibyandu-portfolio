import React from 'react';


const Project = ({ project }) => {
    const { title, Category, img, liveServer } = project;
    console.log(liveServer);
    return (
        <div>
            <div className="shadow-xl">
                <figure><img style={{ width: '300px' }} src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{Category}</p>
                    <div className="card-actions justify-end">
                        <a className='btn btn-primary' href={liveServer}>Live link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;