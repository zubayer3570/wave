import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react'
const Navbar = () => {
    const router = useRouter()
    const [menuShow, setMenuShow] = useState(false)
    const toggleMenu = () => {
        setMenuShow(!menuShow);
    }
    return (
        <div className='flex justify-between px-[9%] pt-[50px]'>
            <div className='flex items-center'>
                <Link href='/'>
                    <p className='font-bold text-[24px] text-[#486A6F]'>Wave</p>
                </Link>
            </div>
            <div className='hidden lg:flex items-center'>
                <ul className='flex text-[#678C92] font-medium'>
                    <Link href='/about'><li className='px-4'>About</li></Link>
                    <Link href='/services'><li className='px-4'>Services</li></Link>
                    <Link href='/projects'><li className='px-4'>Projects</li></Link>
                    <Link href='/contact'><li className='px-4'>Contact</li></Link>
                </ul>
            </div>
            <div>
                <p onClick={() => router.push('/contact')} className='cursor-pointer font-bold text-[16px] w-[165px] h-[40px] bg-[#4397A4] text-[white] rounded flex justify-center items-center lg:ml-auto'>
                    Need a Website?
                </p>
            </div>
            <div className='lg:hidden flex justify-end items-center'>
                <div className='w-[25px] h-[25px]' onClick={toggleMenu}>
                    {
                        menuShow ? <img className='w-full' src="/svgs/xmark.svg" /> : <img className='w-full' src="/menu.svg" />
                    }
                </div>
            </div>
            <div className={`${menuShow ? 'lg:hidden' : 'hidden'} absolute top-[100px] right-[10px] z-[10] p-4 bg-[#4397A4] font-bold text-[white] rounded-xl`}>
                <ul>
                    <Link href='/about'><li className='px-2 pb-2 text-[white]'>About</li></Link>
                    <Link href='/services'><li className='px-2 pb-2'>Services</li></Link>
                    <Link href='/projects'><li className='px-2 pb-2'>Projects</li></Link>
                    <Link href='/contact'><li className='px-2 pb-2'>Contact</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;