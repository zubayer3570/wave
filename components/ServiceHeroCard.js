import Link from 'next/link';
import React from 'react';
import { Josefin_Slab } from '@next/font/google'
const josefinSlab = Josefin_Slab({ weight: "400", subsets: ['latin'] })

const ServiceHeroCard = ({ name, text, id, img }) => {
    return (
        <div className={`bg-gradient-to-r ${id % 2 ? "from-[#C6DBFF] to-[#E1EBFA]" : 'from-[#E1EBFA] to-[#C6DBFF]'} grid grid-cols-5 w-full rounded overflow-hidden my-8 p-4`}>
            <div className={`${id % 2 || "order-3"} col-span-2 h-[300px] overflow-hidden`}>
                <lottie-player src={img} autoplay loop speed='1' background="#C6DBFF" />
            </div>
            <div className='order-1 col-span-3 px-8'>
                <div className='py-4 text-justify'>
                    <p className='font-bold text-[25px] text-[#486A6F]'>{name.toUpperCase()}</p>
                    <div className={josefinSlab.className}>
                        <p className='font-medium text-[16px] text-[#678C92]'>{text}</p>
                    </div>
                </div>
                <Link href={`/projects/${name}`}>
                    <button className="block bg-[#4397A4] rounded px-4 py-3 text-[white] text-[16px] font-bold shadow-2xl">See Projects on {name}</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceHeroCard;