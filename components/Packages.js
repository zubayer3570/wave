import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const Packages = () => {
    return (
        <>
            <p className="font-bold text-[60px] text-[#486A6F] text-center mt-40 mb-8">
                Our <span className='text-red-500'>Pricing</span>
            </p>
            <div className='mx-[9%] hidden lg:block'>
                <div className='grid grid-cols-2 gap-8 lg:grid-cols-4 my-8'>
                    <div className='flex justify-center w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-blue-500'>Basic</p>
                            <p className="font-bold text-[35px] ml-4">
                                $20
                            </p>
                            <p className='font-bold text-[15px]'>
                                - 1 Page Website <br />
                                - Unlimited Sections<br />
                                - Responsive Web Pages <br />
                                - Professional Designs<br />
                                - Fast and Interactive UI<br />
                                - 5 Revisions<br />
                                - 2 Days Delivery<br />
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-green-500'>Standard</p>
                            <p className="font-bold text-[35px] ml-4">
                                $50
                            </p>
                            <p className='font-bold'>
                                - 4 to 6 Pages Website <br />
                                - Responsive Web Pages <br />
                                - Unlimited Sections <br />
                                - Professional Designs <br />
                                - Fast and Interactive UI<br />
                                - Unlimited Revisions <br />
                                - 1 Week delivery <br />
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-red-500'>Premium</p>
                            <p className="font-bold text-[35px] ml-4">
                                $100
                            </p>
                            <p className='font-bold'>
                                - 10 to 15 Pages Website <br />
                                - Unlimited Sections <br />
                                - Responsive Web Pages <br />
                                - Professional Design <br />
                                - Fast and Interactive UI <br />
                                - Unlimited Revisions <br />
                                - 2 Weeks delivery <br />
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-orange-500'>Custom</p>
                            <p className="font-bold text-[35px] ml-4">
                                $500
                            </p>
                            <p className='font-bold'>
                                - No limit to page count<br />
                                - Any Kind of Website<br />
                                - Responsive Web Pages <br />
                                - Professional Designs <br />
                                - Fast and Interactive UI <br />
                                - Unlimited Sections <br />
                                - Flexible Delivery Time <br />
                            </p>
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
                        <div className='flex justify-center h-[400px] w-full '>
                            <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                                <p className='font-bold text-blue-500'>Basic</p>
                                <p className="font-bold text-[35px] ml-4">
                                    $20
                                </p>
                                <p className='font-bold text-[15px]'>
                                    - 1 Page Website <br />
                                    - Unlimited Sections<br />
                                    - Responsive Web Pages <br />
                                    - Professional Designs<br />
                                    - Fast and Interactive UI<br />
                                    - 5 Revisions<br />
                                    - 2 Days Delivery<br />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center h-[400px] w-full '>
                            <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                                <p className='font-bold text-blue-500'>Basic</p>
                                <p className="font-bold text-[35px] ml-4">
                                    $50
                                </p>
                                <p className='font-bold'>
                                    - 4 to 6 Pages Website <br />
                                    - Personal Blog, Portfolio, Event, Agency etc. <br />
                                    - Responsive Web Pages <br />
                                    - Unlimited Sections <br />
                                    - Professional Designs <br />
                                    - Fast and Interactive UI<br />
                                    - Unlimited Revisions <br />
                                    - 1 Week delivery <br />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center h-[400px] w-full '>
                            <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                                <p className='font-bold text-blue-500'>Basic</p>
                                <p className="font-bold text-[35px] ml-4">
                                    $100
                                </p>
                                <p className='font-bold'>
                                    - 10 to 15 Pages Website <br />
                                    - ECommerce, News Portal Website, Learning Management System etc. <br />
                                    - Unlimited Sections <br />
                                    - Responsive Web Pages <br />
                                    - Professional Design <br />
                                    - Fast and Interactive UI <br />
                                    - Unlimited Revisions <br />
                                    - 2 Weeks delivery <br />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center h-[400px] w-full '>
                            <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                                <p className='font-bold text-blue-500'>Custom</p>
                                <p className="font-bold text-[35px] ml-4">
                                    $500
                                </p>
                                <p className='font-bold'>
                                    - Page count: according to requirement <br />
                                    - Any Kinds of Website <br />
                                    - Responsive Web Pages <br />
                                    - Professional Designs <br />
                                    - Fast and Interactive UI <br />
                                    - Unlimited Sections <br />
                                    - Delivery: Depends on project <br />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    );
};

export default Packages;