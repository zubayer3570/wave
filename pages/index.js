import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import FAQ from "../components/FAQ";
import { services } from '../data/services'
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]">
        <div className="bg-[url('/Figure.svg')] bg-no-repeat bg-right-top h-[100vh]">
          <Navbar />
          <div className="lg:grid grid-cols-2 mx-[9%]">
            <div className="flex flex-col justify-center items-center">
              <div className="mt-4">
                <p className="font-bold text-[60px] text-[#486A6F]">
                  We Build Website
                </p>
                <p className="font-bold text-[60px] text-[#486A6F]">
                  For You!!!
                </p>
                <p className="mb-8 text-[22px] text-[#678C92]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-[#4397A4] rounded px-6 py-3 text-[white] text-[16px] font-bold m-2 shadow-2xl">Services</button>
                <button className="bg-[#C6DBFF] rounded px-6 py-3 text-[#486A6F] text-[16px] font-bold m-2">Contact Us</button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-[400px] ml-44 mt-[-20px]">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_jtbfg2nb.json" background="transparent" speed="1" loop autoplay />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="font-bold text-[60px] text-[#486A6F] text-center">
            Our <span className='text-red-500'>Services</span>
          </p>
        </div>
        <div>
          <div className="lg:grid grid-cols-3 gap-12 mx-[9%] hidden">
            {
              services.map(service => (
                <Link href={`/serviceDetails/${service.id}`}>
                  <ServiceCard name={service.name} price={service.price} />
                </Link>
              ))
            }
          </div>
          <div className="lg:hidden shadow-custom-1 m-8 lg:hidden">
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
              {
                services.map(service => (
                  <div key={service.id}>
                    <SwiperSlide>
                      <Link href={`/serviceDetails/${service.id}`}>
                        <ServiceCard name={service.name} price={service.price} />
                      </Link>
                    </SwiperSlide>
                  </div>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
      <Packages />
      <FAQ />
      <Footer />
    </>
  )
}
