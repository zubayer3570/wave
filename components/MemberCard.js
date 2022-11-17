import Image from 'next/image';
import React from 'react';

const MemberCard = ({ name, position }) => {
    return (
        <>
            <div className='rounded-xl shadow-custom-1 overflow-hidden'>
                <div>
                    <img src='/man-photo.jpg' className='w-full' />
                </div>
                <div className='bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]'>
                    <div className='pl-2 py-4'>
                        <p className='font-bold text-[16px] text-[#486A6F] text-center'>{name}</p>
                        <p className='font-medium text-[16px] text-[#678C92] text-center'>{position}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemberCard;