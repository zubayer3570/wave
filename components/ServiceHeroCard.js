import Image from 'next/image';
import React from 'react';

const ServiceHeroCard = ({ name, price, id }) => {
    return (
        <div className={`bg-gradient-to-r ${id % 2 ? "from-[#C6DBFF] to-[#E1EBFA]" : 'from-[#E1EBFA] to-[#C6DBFF]' } grid grid-cols-5 w-full rounded overflow-hidden my-8`}>
            <div className={`${id % 2 || "order-3"} col-span-2 m-4`}>
                <img src='/man-photo.jpg' className='rounded-xl' />
            </div>
            <div className='order-1 col-span-3'>
                <div className='pl-2 py-4'>
                    <p className='font-bold text-[16px] text-[#486A6F]'>{name}</p>
                    <p className='font-medium text-[16px] text-[#678C92]'>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceHeroCard;