import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

const ProjectId = () => {
    const { projectType } = useRouter().query
    const selected = projectType == "all" ? projects : projects.filter(project => project.type == projectType)
    const [tab, setTab] = useState(0)
    return (
        <>
            <Navbar />
            <div className='mt-8'>
                <ul className='flex justify-between items-end lg:justify-start mx-[5%] lg:mx-[9%] mb-8 font-bold text-[#486A6F]'>
                    <Link href='/projects/all' onClick={() => setTab(0)} ><li className={`p-2 ${tab == 0 ? 'bg-[#4397A4] text-[white]' : 'bg-[#C6DBFF]'}  lg:mr-2 rounded cursor-default lg:cursor-pointer`}>All</li></Link>
                    <Link href='/projects/blog' onClick={() => setTab(1)} ><li className={`p-2 ${tab == 1 ? 'bg-[#4397A4] text-[white]' : 'bg-[#C6DBFF]'}  lg:mr-2 rounded cursor-default lg:cursor-pointer`}>Blog</li></Link>
                    <Link href='/projects/eCommerce' onClick={() => setTab(2)} ><li className={`p-2 ${tab == 2 ? 'bg-[#4397A4] text-[white]' : 'bg-[#C6DBFF]'}  lg:mr-2 rounded cursor-default lg:cursor-pointer`}>Ecommerce</li></Link>
                    <Link href='/projects/news' onClick={() => setTab(3)} ><li className={`p-2 ${tab == 3 ? 'bg-[#4397A4] text-[white]' : 'bg-[#C6DBFF]'}  lg:mr-2 rounded cursor-default lg:cursor-pointer`}>News</li></Link>
                    <Link href='/projects/business' onClick={() => setTab(4)} ><li className={`p-2 ${tab == 4 ? 'bg-[#4397A4] text-[white]' : 'bg-[#C6DBFF]'}  lg:mr-2 rounded cursor-default lg:cursor-pointer`}>Business</li></Link>
                </ul>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-[9%] mb-16'>
                {
                    selected.map(project => <ProjectCard imgSrc={project.imgSrc} type={project.type} developer={project.developer} key={project.id} />)
                }
            </div>
            <Footer />
        </>
    );
};

export default ProjectId;