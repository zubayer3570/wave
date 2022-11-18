import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects'

const index = () => {
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-3 gap-12 mx-[9%]'>
                {
                    projects.map(project => <ProjectCard key={project.id} type={project.type} developer={project.developer} imgSrc={project.imgSrc} />)
                }
            </div>
            <Footer />
        </>
    );
};

export default index;