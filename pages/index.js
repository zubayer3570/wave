import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]">
        <div className="bg-[url('/Figure.svg')] bg-no-repeat bg-right-top h-[100vh]">
          <div className="pt-12 pb-8">
            <Navbar />
          </div>
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
      <Packages />
      <FAQ />
      <Footer />
    </>
  )
}
