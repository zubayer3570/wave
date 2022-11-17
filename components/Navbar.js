import Link from 'next/link';
import { useState } from 'react'
const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false)
    const toggleMenu = () => {
        setMenuShow(!menuShow);
    }
    return (
        <div className='grid grid-cols-3 mx-[9%]'>
            <div>
                <Link href='/'>
                    <p className='font-bold text-[24px] text-[#486A6F]'>Wave</p>
                </Link>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex text-[#678C92] font-medium'>
                    <Link href='/about'><li className='px-4'>About</li></Link>
                    <Link href='/services'><li className='px-4'>Services</li></Link>
                    <Link href='/projects'><li className='px-4'>Projects</li></Link>
                    <Link href='/contact'><li className='px-4'>Contact</li></Link>
                </ul>
            </div>
            <div>
                <p className='font-bold text-[16px] w-[165px] h-[40px] bg-[#4397A4] text-[white] rounded flex justify-center items-center lg:ml-auto'>
                    Need a Website?
                </p>
            </div>
            <div className='lg:hidden flex justify-end items-center' onClick={toggleMenu}>
                <img className='w-[20px] h-[20px]' src="/menu.svg" />
            </div>
            <div className={menuShow ? 'absolute top-[100px] right-[10px] lg:hidden' : 'absolute top-[200px] right-[30px] hidden'}>
                <ul className='text-[#678C92] font-medium'>
                    <li className='px-4'>About</li>
                    <li className='px-4'>Services</li>
                    <li className='px-4'>Projects</li>
                    <li className='px-4'>Contact</li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;