import React, { useState } from 'react';
import style from '../../styles/Contact.module.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { sendEmail } from '../../utilities/sendEmail';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        sendEmail({
            name: e.target.name.value,
            name: e.target.email.value,
            name: e.target.subject.value,
            name: e.target.message.value,
        })
    }
    return (
        <>
            <div className="bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]">
                <div className="bg-[url('/Figure.svg')] bg-no-repeat bg-right-top py-8">
                    <div className="pt-12 pb-8">
                        <Navbar />
                    </div>
                    <div className='grid grid-cols-2 mx-[9%]'>
                        <div>
                            <p className='text-[#5BCCDE]'>Contact</p>
                            <p className='font-bold text-[36px] text-[#486A6F] mb-16'>Get In Touch</p>
                            <div className='text-[#678C92] my-8'>
                                <p className='text-[16px] font-medium'>Phone</p>
                                <p className='font-bold text-[20px]'>01823-323854</p>
                            </div>
                            <div className='text-[#678C92] my-8'>
                                <p className='text-[16px] font-medium'>Email</p>
                                <p className='font-bold text-[20px]'>wave.coredevs@gmail.com</p>
                            </div>
                            <div className='text-[#678C92] my-8'>
                                <p className='text-[16px] font-medium'>Office</p>
                                <p className='font-bold text-[20px]'>We do not have office yet!</p>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='w-[450px] bg-[#D7E5FC] p-8 shadow-2xl text-[#678C92]'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div>
                                            <p className='text-[14px] mb-[5px] '>Name</p>
                                            <input type="text" name="name" id="" className='border-[1.5px] outline-0 rounded-[3px] h-[40px] mb-[20px] border-[#486A6F] w-full bg-[#D7E5FC]' />
                                        </div>
                                        <div>
                                            <p className='text-[14px] mb-[5px] '>Email</p>
                                            <input type="text" name="email" id="" className='border-[1.5px] outline-0 rounded-[3px] h-[40px] mb-[20px] border-[#486A6F] w-full bg-[#D7E5FC]' />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[14px] mb-[5px] '>Subject</p>
                                        <input type="text" name="subject" id="" className='border-[1.5px] outline-0 rounded-[3px] h-[40px] mb-[20px] border-[#486A6F] w-full bg-[#D7E5FC]' />
                                    </div>
                                    <div>
                                        <p className='text-[14px] mb-[5px] '>Message</p>
                                        <textarea name="message" id="" cols="30" rows="5" className='border-[1.5px] rounded-[3px] border-[#486A6E] w-full bg-[#D7E5FC] border-[#486A6F] resize-none outline-0 mb-[20px]'></textarea>
                                    </div>
                                    <button className='font-bold text-[16px] w-full h-[40px] bg-[#4397A4] text-[white] rounded flex justify-center items-center'>Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;