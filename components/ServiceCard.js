import React from 'react';

const ServiceCard = ({ data }) => {
    return (
        <div className='flex justify-center' >
            <div className='w-[300px] rounded overflow-hidden'>
                <div>
                    <Image src='/man-photo.jpg' width={300} height={300} />
                </div>
                <div className={style.background}>
                    <div className='pl-2 py-4'>
                        <p className='font-bold text-[16px] text-[#486A6F]'>{name}</p>
                        <p className='font-medium text-[16px] text-[#678C92]'>{position}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;