import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import FAQ from "../components/FAQ";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import WorkingProcess from "../components/WorkingProcess";
import { auth } from "../firebase.init";
import Contact from "../components/Contact";

export default function Home() {
  const user = auth.currentUser
  console.log(user)
  return (
    <>
      <div className="bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]">
        <div className="bg-[url('/Figure.svg')] bg-no-repeat bg-right-top h-[100vh]">
          <Navbar />
          <div className="lg:grid grid-cols-2 mx-[9%] mt-[30px]">
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
          <p className="font-bold text-[60px] text-[#486A6F] text-center mt-20 mb-12">
            Our <span className='text-red-500'>Services</span>
          </p>
        </div>
        <div className="grid grid-cols-2 mx-[9%] rounded-2xl overflow-hidden shadow-custom-1">
          <div className="h-[350px] flex justify-center items-center">
            <div className="h-[600px]">
              <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_oezdywcm.json" autoplay loop speed='1' background="transparent" />
            </div>
          </div>
          <div className="mr-8 mt-6">
            <p className="text-text-color-1 font-bold text-[40px]">Heading</p>
            <p className="text-text-color-2 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt adipisci dicta, ratione distinctio recusandae laborum sapiente nihil odit eligendi iusto.</p>
            <p className="text-text-color-2 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt adipisci dicta, ratione distinctio recusandae laborum sapiente nihil odit eligendi iusto.</p>
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
