import Image from 'next/image';
import React from 'react';
import style from '../styles/MemberCard.module.css'

const MemberCard = ({ name, position }) => {
    return (
        <>
            <div className='flex justify-center shadow-custom-1' >
                <div className='rounded overflow-hidden'>
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
        </>
    );
};

export default MemberCard;