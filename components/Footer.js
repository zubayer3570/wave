import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center items-center h-[400px] bg-[#486A6F]'>
            <div className='grid grid-cols-4 text-[#F4F7FF] text-[18px] h-[200px] grow mx-[4%]' >
                <div className='flex justify-center'>
                    <div>
                        <p className='font-bold mb-4 text-[24px]'>Wave</p>
                        <p className='mb-20'>Website Developing Company</p>
                        <p>Site Design - Team Wave</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <ul>
                            <li className='py-1'>Services 1</li>
                            <li className='py-1'>Services 2</li>
                            <li className='py-1'>Services 3</li>
                            <li className='py-1'>Services 4</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <ul>
                            <li className='py-1'>About us</li>
                            <li className='py-1'>Services</li>
                            <li className='py-1'>Projects</li>
                            <li className='py-1'>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <p className='py-1'>Get in touch</p>
                        <p className='py-1'>Block-D, Mirpur-12</p>
                        <p className='py-1 mb-12'>Dhaka, Bangladesh</p>
                        <p>01823-323854</p>
                        <p>wave.coredevs@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;