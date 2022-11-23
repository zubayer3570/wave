import { useRouter } from 'next/router';
import React from 'react';

const Contact = () => {
    const router = useRouter()
    console.log(router)
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://mailing-service.onrender.com/sendmail", {
            name: e.target.name.value,
            email: e.target.email.value,
            text: e.target.message.value
        }).then(data => router.push('/'))
    }
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-[9%]'>
                <div className='mx-8 lg:mx-0'>
                    <p className='text-[#5BCCDE]'>Contact</p>
                    <p className='font-bold text-[36px] text-[#486A6F] mb-16'>Get In Touch</p>
                    <div className='text-[#678C92] my-8 flex'>
                        <div>
                            <img src="/telephone-icon.png" alt="" />
                        </div>
                        <div className='ml-8'>
                            <p className='text-[16px] font-medium'>Phone</p>
                            <p className='font-bold text-[20px]'>01823-323854</p>
                        </div>
                    </div>
                    <div className='text-[#678C92] my-8 flex'>
                        <div>
                            <img src="/telephone-icon.png" alt="" />
                        </div>
                        <div className='ml-8 overflow-wrap'>
                            <p className='text-[16px] font-medium'>Email</p>
                            <p className='font-bold text-[16px] lg:text-[20px]'>wave.coredevs@gmail.com</p>
                        </div>
                    </div>
                    <div className='text-[#678C92] my-8 flex'>
                        <div>
                            <img src="/telephone-icon.png" alt="" />
                        </div>
                        <div className='ml-8'>
                            <p className='text-[16px] font-medium'>Office</p>
                            <p className='font-bold text-[20px]'>Don't have office yet!</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='mx-8 bg-[#D7E5FC] p-8 shadow-2xl text-[#678C92] rounded'>
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
                            <input type="submit" value='Send Message' className='font-bold text-[16px] w-full h-[40px] bg-[#4397A4] text-[white] rounded flex justify-center items-center' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Contact;