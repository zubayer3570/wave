import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

const ProjectId = () => {
    const { projectType } = useRouter().query
    console.log(projectType)
    const selected = projects.filter(project => project.type == projectType)
    console.log(selected)
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <ul className='flex  mb-12 font-bold text-text-color-1'>
                    <Link href='/projects' ><li className='mx-4'>All</li></Link>
                    <Link href='/projects/blog' ><li className='mx-4'>Blog</li></Link>
                    <Link href='/projects/eCommerce' ><li className='mx-4'>E-commerce</li></Link>
                    <Link href='/projects/news' ><li className='mx-4'>News</li></Link>
                    <Link href='/projects/business' ><li className='mx-4'>Business</li></Link>
                </ul>
            </div>
            <div className='grid grid-cols-3 gap-12 mx-[9%]'>
                {
                    selected.map(project => <ProjectCard imgSrc={project.imgSrc} type={project.type} developer={project.developer} key={project.id} />)
                }
            </div>
        </>
    );
};

export default ProjectId;