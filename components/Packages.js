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
                    <div className='flex justify-center h-[400px] w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-blue-500'>Basic</p>
                            <p className="font-bold text-[35px] ml-4">
                                $20
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center h-[400px] w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-green-500'>Standard</p>
                            <p className="font-bold text-[35px] ml-4">
                                $50
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center h-[400px] w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-red-500'>Premium</p>
                            <p className="font-bold text-[35px] ml-4">
                                $100
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center h-[400px] w-full '>
                        <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                            <p className='font-bold text-orange-500'>Custom</p>
                            <p className="font-bold text-[35px] ml-4">
                                $500
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
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    );
};

export default Packages;