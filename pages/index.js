import Lottie from "react-lottie";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import style from "../styles/Home.module.css"
import animationData from '../lottie-animations/animation1.json'

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <>
      <div className={style.home}>
        <div className="pt-12 pb-8">
          <Navbar />
        </div>
        <div className="grid grid-cols-2 mx-[9%] h-[70%]">
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="font-bold text-[60px] text-[#486A6F]">
                We Build Website
              </p>
              <p className="font-bold text-[60px] text-[#486A6F]">
                For You!
              </p>
              <p className="mb-16 text-[22px] text-[#678C92]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="bg-[#4397A4] rounded px-6 py-3 text-[white] text-[16px] font-bold m-2 shadow-2xl">Services</button>
              <button className="bg-[#C6DBFF] rounded px-6 py-3 text-[#486A6F] text-[16px] font-bold m-2">About our company</button>
            </div>
          </div>
          <div className="ml-40 mt-[-30px]">
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
