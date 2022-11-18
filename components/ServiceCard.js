import React from 'react';

const ServiceCard = ({ name, price }) => {
    return (
        <div className='rounded-xl shadow-custom-1 overflow-hidden'>
            <div>
                <img src='/man-photo.jpg' className='w-full' />
            </div>
            <div className='bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]'>
                <div className='pl-2 pb-12 pt-6 lg:py-4'>
                    <p className='font-bold text-[16px] text-[#486A6F] text-center'>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;