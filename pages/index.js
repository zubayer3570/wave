import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import FAQ from "../components/FAQ";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import WorkingProcess from "../components/WorkingProcess";
import Contact from "../components/Contact";
import { Oxygen, Josefin_Slab, Source_Sans_Pro, Calistoga, Nunito } from '@next/font/google'
import Typewriter from "typewriter-effect";

const oxygen = Oxygen({ weight: "700" })
// const sourceSansPro = Source_Sans_Pro({weight: '400'})
const josefinSlab = Josefin_Slab({ weight: "400", subsets: ['latin'] })
const calistoga = Calistoga({ weight: "400", subsets: ['latin'] })
const nunito = Nunito({ weight: "400", subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <div className="bg-gradient-to-r from-[#1746A2] to-[#5F9DF7]"> */}
      <div className="bg-[#FCFDF2]">
        <div className="bg-[url('/vector-svg.svg')] bg-cover lg:bg-contain bg-no-repeat bg-right-top h-[100vh]">
          <Navbar />
          <div className="lg:grid grid-cols-5 mx-[9%] mt-[30px]">
            <div className="col-span-3 flex flex-col justify-center items-center">
              <div className="mt-12">
                <div className={calistoga.className}>
                  <div className=" text-[60px] text-[#486A6F] lg:h-[140px] leading-[70px] mb-[20px]">
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
                  <div className="mr-8">
                    <p className="mb-8 text-[22px] text-[#678C92]">
                      Want to give your business an online presence? We are ready to provide 	you an unique, professional and creative one that can assist you build a loyal and 	strong customer base!
                    </p>
                  </div>
                </div>
                <div className={nunito.className}>
                  <button className="bg-[#5F9DF7] rounded px-6 py-3 text-[white] text-[16px] font-bold m-2 shadow-2xl">Services</button>
                  <button className="bg-[#C6DBFF] rounded px-6 py-3 text-[#486A6F] text-[16px] font-bold m-2">Contact Us</button>
                </div>
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
          <p className="font-bold text-[60px] text-[#486A6F] text-center mt-20 mb-8">
            {/* Our <span className='text-red-500'>Services</span> */}
            Our Services
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-[9%] lg:p-4 rounded-2xl shadow-custom-1">
          <div className="h-[350px] flex justify-center items-center overflow-hidden rounded-xl px-4 mt-[20px] lg:mt-0 lg:p-0">
            <div className="h-[600px]">
              <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_oezdywcm.json" autoplay loop speed='1' background="#C6DBFF" />
            </div>
          </div>
          <div className="mx-8 mb-8 lg:mb-0 flex items-center">
            <div>
              <p className="text-text-color-1 font-bold text-[40px]">Heading</p>
              <div className={josefinSlab.className}>
                <p className="mb-4 text-[18px] text-[#678C92]">
                  We provide web services both in WordPress and React according to clients requirements. Being confident enough to establish your online presense through a website, we offer website creation in different categories such as ECommerce, Blog, Portfolio, Learning Management System, News, Event, etc. If you are interested to explore our services in detail, click on the button below.
                </p>
              </div>
              <Link href='/services'>
                <button className="block mt-4 bg-[#4397A4] rounded px-4 py-3 text-[white] text-[16px] font-bold shadow-2xl">See All Services</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Packages />
      <WorkingProcess />
      <FAQ />
      <div className="mb-24">
        <p className="font-bold text-[40px] lg:text-[60px] text-[#486A6F] text-center mt-20 mb-8">
          Connect with Us!
          {/* <span className='text-red-500'>Connected</span> */}
        </p>
        <Contact />
      </div>
      <Footer />
    </>
  )
}
