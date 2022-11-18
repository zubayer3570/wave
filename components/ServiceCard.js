import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ name, price }) => {
    return (
        <div className='w-full rounded overflow-hidden'>
            <div>
                <img src='/man-photo.jpg' />
            </div>
            <div className='bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]'>
                <div className='pl-2 py-4'>
                    <p className='font-bold text-[16px] text-[#486A6F]'>{name}</p>
                    <p className='font-medium text-[16px] text-[#678C92]'>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;