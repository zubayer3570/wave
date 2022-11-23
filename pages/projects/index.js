import Link from 'next/link';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects'

const index = () => {
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
                    projects.map(project => <ProjectCard key={project.id} type={project.type} developer={project.developer} imgSrc={project.imgSrc} />)
                }
            </div>
            <Footer />
        </>
    );
};

export default index;