import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import FAQ from "../components/FAQ";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import WorkingProcess from "../components/WorkingProcess";
import Contact from "../components/Contact";
import { Oxygen, Josefin_Slab, Source_Sans_Pro } from '@next/font/google'
import Typewriter from "typewriter-effect";

// const oxygen = Oxygen({ weight: "700" })
// const sourceSansPro = Source_Sans_Pro({weight: '400'})
const josefinSlab = Josefin_Slab({ weight: "400" })

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]">
        <div className="bg-[url('/hero-img-bg-element.png')] h-[100vh]">
          <Navbar />
          <div className="lg:grid grid-cols-5 mx-[9%] mt-[30px]">
            <div className="col-span-3 flex flex-col justify-center items-center">
              <div className="mt-12">
                <div>
                  <div className="font-bold text-[60px] text-[#486A6F] lg:h-[140px] leading-[70px] mb-[20px]">
                    <Typewriter
                      onInit={(typeWriter) => (
                        typeWriter.typeString("We Help <span class='text-red-500' >Businesses</span> Shine on the <span class='text-red-500' >Web</span>").pauseFor(3000).deleteAll().start()
                      )}
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 30,
                      }}
                    />
                  </div>
                  {/* <p className="font-bold text-[60px] text-[#486A6F]">
                    Shine on the Web
                  </p> */}
                </div>
                <div className={josefinSlab.className}>
                  <p className="mb-8 text-[22px] text-[#678C92]">
                    Want to give your business an online presence? We are ready to provide 	you an unique, professional and creative one that can assist you build a loyal and 	strong customer base!
                  </p>
                </div>
                <button className="bg-[#4397A4] rounded px-6 py-3 text-[white] text-[16px] font-bold m-2 shadow-2xl">Services</button>
                <button className="bg-[#C6DBFF] rounded px-6 py-3 text-[#486A6F] text-[16px] font-bold m-2">Contact Us</button>
              </div>
            </div>
            <div className="hidden lg:block col-span-2">
              <div className="w-[450px] ml-12 mt-[-50px]">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_jtbfg2nb.json" background="transparent" speed="1" loop autoplay />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="font-bold text-[60px] text-[#486A6F] text-center mt-20 mb-12">
            Our <span className='text-red-500'>Services</span>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 mx-[9%] rounded-2xl  shadow-custom-1">
          <div className="h-[350px] flex justify-center items-center overflow-hidden m-4 mr-8 rounded-xl">
            <div className="h-[600px">
              <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_oezdywcm.json" autoplay loop speed='1' background="#C6DBFF" />
            </div>
          </div>
          <div className="mr-8 mt-6">
            <p className="text-text-color-1 font-bold text-[40px]">Heading</p>
            <p className="text-text-color-2 font-medium">We provide the following services. However, our team is always ready to build any custom website for you.</p>
            <p className="text-text-color-2 font-medium">We provide the following services. However, our team is always ready to build any custom website for you.</p>
            <p className="text-text-color-2 font-medium">We provide the following services. However, our team is always ready to build any custom website for you.</p>
            <p className="text-text-color-2 font-medium">We provide the following services. However, our team is always ready to build any custom website for you.</p>
            <Link href='/services'>
              <button className="block mt-4 bg-[#4397A4] rounded px-4 py-3 text-[white] text-[16px] font-bold shadow-2xl">See All Services</button>
            </Link>
          </div>
        </div>
      </div>
      <Packages />
      <WorkingProcess />
      <FAQ />
      <div>
        <p className="font-bold text-[60px] text-[#486A6F] text-center mt-40 mb-16">
          Our <span className='text-red-500'>Connected</span>
        </p>
        <Contact />
      </div>
      <Footer />
    </>
  )
}
