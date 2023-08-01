import React, { useState, useEffect } from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';

function Projects() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all(
            projects.map((project) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = project.img;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            })
        ).then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <main className='section'>
            <div className='container'>
                <h2 className='title-1'>Projects</h2>
                {loading ? (
                    <p className='loading-state'>Завантаження...</p>
                ) : (
                    <ul className='projects'>
                        {projects.map((project, index) => {
                            return <Project key={index} title={project.title} img={project.img} index={index} />;
                        })}
                    </ul>
                )}
            </div>
        </main>
    );
}

export default Projects;
