import React from 'react';

const ProjectCard = ({ imgSrc, type, developer }) => {
    return (
        <div className='rounded-xl shadow-custom-1 overflow-hidden'>
            <div>
                <img src={imgSrc} className='w-full' />
            </div>
            <div className='bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]'>
                <div className='pl-4 py-4 font-medium'>
                    <p className='text-[16px] text-[#486A6F]'> <span className='font-bold'>Type:</span> {type}</p>
                    <p className='text-[16px] text-[#486A6F]'> <span className='font-bold'>Developer:</span> {developer}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;