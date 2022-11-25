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
            <div className='grid grid-cols-3 px-[9%] pt-[50px]'>
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