import { useRouter } from 'next/router';
import React from 'react';
import { services } from '../../data/services'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from '../../components/Navbar';

const Id = () => {
    const { id } = useRouter().query
    const selected = services.find(service => service.id === id)
    return (
        <div>
            <Navbar />
            <div className='mx-[9%]'>
                <Swiper
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <div className='h-[300px] overflow-hidden'>
                            <img src="/man-photo.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[300px] overflow-hidden'>
                            <img src="/man-photo.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[300px] overflow-hidden'>
                            <img src="/man-photo.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <p className='font-bold text-[35px] p-4 text-[#486A6F] text-center' >Page Name</p>
            <p className='text-[#5BCCDE] text-center'>Developer Name</p>
            <p className='text-[#5BCCDE] text-center'>Technologies Used</p>
        </div>
    );
};

export default Id;