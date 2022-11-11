import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Head from 'next/head';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-[9%]'>
            <div>
                <p className='font-bold text-[24px] text-[#486A6F]'>Wave</p>
            </div>
            <div>
                <ul className='flex text-[#678C92] font-medium'>
                    <li className='px-4'>About</li>
                    <li className='px-4'>Services</li>
                    <li className='px-4'>Projects</li>
                    <li className='px-4'>Contact</li>
                </ul>
            </div>
            <div className='font-bold text-[16px] w-[165px] h-[40px] bg-[#4397A4] text-[white] rounded flex justify-center items-center'>Need a Website?</div>
        </div>

    );
};

export default Navbar;