import React from 'react';

const Footer = () => {
    return (
        <div className='p-8  lg:p-20 bg-[#486A6F] grid grid-cols-1 lg:grid-cols-4 text-[#F4F7FF] text-[13px]' >
            <div className='lg:flex flex-wrap justify-center'>
                <div>
                    <p className='font-bold mb-4 text-[24px]'>Wave</p>
                    <p className='mb-4 lg:mb-20'>Website Developing Company</p>
                    <p>Site Design - Team Wave</p>
                </div>
            </div>
            <div className='hidden lg:flex justify-center'>
                <div>
                    <ul>
                        <li className='py-1'>Services 1</li>
                        <li className='py-1'>Services 2</li>
                        <li className='py-1'>Services 3</li>
                        <li className='py-1'>Services 4</li>
                    </ul>
                </div>
            </div>
            <div className='hidden lg:flex justify-center'>
                <div>
                    <ul>
                        <li className='py-1'>About us</li>
                        <li className='py-1'>Services</li>
                        <li className='py-1'>Projects</li>
                        <li className='py-1'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex justify-center mt-8 lg:mt-0'>
                <div>
                    <p className='py-1'>Get in touch</p>
                    <p className='py-1'>Block-D, Mirpur-12</p>
                    <p className='py-1 mb-4 lg:mb-12'>Dhaka, Bangladesh</p>
                    <p>01823-323854</p>
                    <p>wave.coredevs@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;