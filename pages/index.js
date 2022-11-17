import Lottie from "react-lottie";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import style from "../styles/Home.module.css"
import animationData from '../lottie-animations/animation.json'
import Packages from "../components/Packages";
import FAQ from "../components/FAQ";

export default function Home() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // }
  return (
    <>
      <div className={style.home}>
        <div className="pt-12 pb-8">
          <Navbar />
        </div>
        <div className="lg:grid grid-cols-2 mx-[9%]">
          <div className="flex flex-col justify-center items-center">
            <div>
              <p className="font-bold text-[60px] text-[#486A6F]">
                We Build Website
              </p>
              <p className="font-bold text-[60px] text-[#486A6F]">
                For You!!!
              </p>
              <p className="mb-16 text-[22px] text-[#678C92]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="bg-[#4397A4] rounded px-6 py-3 text-[white] text-[16px] font-bold m-2 shadow-2xl">Services</button>
              <button className="bg-[#C6DBFF] rounded px-6 py-3 text-[#486A6F] text-[16px] font-bold m-2">Contact Us</button>
            </div>
          </div>
          <div className="ml-40 mt-[-30px] hidden lg:block">
            {/* <Lottie
              options={defaultOptions}
              height={400}
              width={400}
            /> */}
          </div>
        </div>
      </div>
      <Packages />
      <FAQ />
      <Footer />
    </>
  )
}
