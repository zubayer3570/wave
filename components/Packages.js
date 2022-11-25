import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const Packages = () => {
    return (
        <>
            <p className="font-bold text-[60px] text-[#486A6F] text-center mt-20 mb-8">
                {/* Our <span className='text-red-500'>Pricing</span> */}
                Our Pricing
            </p>
            <div className='mx-[9%] hidden lg:block'>
                <div className='grid grid-cols-2 gap-8 lg:grid-cols-4 my-8'>
                    <div className='flex justify-center w-full '>
                        <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16'>
                            <p className='font-bold text-blue-500'>Basic</p>
                            <p className="font-bold text-[25px] py-[15px]">
                                2500<span className='text-[20px]'>BDT</span>
                            </p>
                            <div className='text-[13px]'>
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  1 Page Website </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections</p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Designs</p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI</p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  5 Revisions</p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  2 Days Delivery</p> <br />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-full '>
                        <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16'>
                            <p className='font-bold text-green-500'>Standard</p>
                            <p className="font-bold text-[25px] py-[15px]">
                                5000<span className='text-[20px]'>BDT</span>
                            </p>
                            <div className='text-[13px]'>
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  4 to 6 Pages Website </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Designs </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI</p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Revisions </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  1 Week delivery </p> <br />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-full '>
                        <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16'>
                            <p className='font-bold text-red-500'>Premium</p>
                            <p className="font-bold text-[25px] py-[15px]">
                                10000<span className='text-[20px]'>BDT</span>
                            </p>
                            <div className='text-[13px]'>
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  10 to 15 Pages Website </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Design </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Revisions </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  2 Weeks delivery </p> <br />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center w-full '>
                        <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16'>
                            <p className='font-bold text-orange-500'>Custom</p>
                            <p className="font-bold text-[25px] py-[15px]">
                                Negotiable
                            </p>
                            <div className='text-[13px]'>
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  No limit to page count</p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Any Kind of Website</p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Designs </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections </p> <br />
                                <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Flexible Delivery Time </p> <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='shadow-custom-1 m-8 lg:hidden'>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-center w-full '>
                            <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16 '>
                                <p className='font-bold text-blue-500'>Basic</p>
                                <p className="font-bold text-[25px] py-[15px]">
                                    2500<span className='text-[20px]'>BDT</span>
                                </p>
                                <div className='text-[13px]'>
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  1 Page Website </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections</p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Designs</p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI</p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  5 Revisions</p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  2 Days Delivery</p> <br />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center w-full '>
                            <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16'>
                                <p className='font-bold text-green-500'>Standard</p>
                                <p className="font-bold text-[25px] py-[15px]">
                                    5000<span className='text-[20px]'>BDT</span>
                                </p>
                                <div className='text-[13px]'>
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  4 to 6 Pages Website </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Designs </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI</p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Revisions </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  1 Week delivery </p> <br />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center w-full '>
                            <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16'>
                                <p className='font-bold text-red-500'>Premium</p>
                                <p className="font-bold text-[25px] py-[15px]">
                                    10000<span className='text-[20px]'>BDT</span>
                                </p>
                                <div className='text-[13px]'>
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  10 to 15 Pages Website </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Design </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Revisions </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  2 Weeks delivery </p> <br />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center w-full '>
                            <div className='flex flex-col items-center w-full rounded-xl shadow-custom-1 h-full p-4 pb-16'>
                                <p className='font-bold text-orange-500'>Custom</p>
                                <p className="font-bold text-[20px] py-[15px]">
                                    Negotiable
                                </p>
                                <div className='text-[13px]'>
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  No limit to page count</p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Any Kind of Website</p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Responsive Web Pages </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Professional Designs </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Fast and Interactive UI </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Unlimited Sections </p> <br />
                                    <img src="/svgs/tick.svg" className=' mr-2 inline-block' alt="" /><p className='my-[3px] inline-block'>  Flexible Delivery Time </p> <br />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Packages;



