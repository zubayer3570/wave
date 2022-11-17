import Script from 'next/script';
import React from 'react';
import Navbar from './Navbar';

const Packages = () => {
    return (
        <>
            <Script src={`https://unpkg.com/flowbite@1.5.4/dist/flowbite.js?${Math.random()}`} strategy='beforeInteractive'></Script>
            <div id="default-carousel" class="relative lg:hidden" data-carousel="static">
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        {/* <img src="https://imgv3.fotor.com/images/homepage-feature-card/enhance-photo-of-three-girls-playing-in-the-sunflower-garden.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
                        <div className='flex justify-center h-[400px] w-full bg-red-500'>
                            <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                                <p className='font-bold text-blue-500'>Basic</p>
                                <p className="font-bold text-[35px] ml-4">
                                    $20
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        {/* <img src="https://imgv3.fotor.com/images/homepage-feature-card/enhance-photo-of-three-girls-playing-in-the-sunflower-garden.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
                        <div className='flex justify-center h-[400px] w-full bg-red-500'>
                            <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                                <p className='font-bold text-green-500'>Standard</p>
                                <p className="font-bold text-[35px] ml-4">
                                    $50
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        {/* <img src="https://imgv3.fotor.com/images/homepage-feature-card/enhance-photo-of-three-girls-playing-in-the-sunflower-garden.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
                        <div className='flex justify-center h-[400px] w-full bg-red-500'>
                            <div className='w-full rounded-xl shadow-custom-1 h-full p-4'>
                                <p className='font-bold text-red-500'>Premium</p>
                                <p className="font-bold text-[35px] ml-4">
                                    $100
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className='mx-[9%] mb-40 mt-20 hidden lg:block '>
                <p className="font-bold text-[60px] text-[#486A6F] text-center">
                    Our <span className='text-red-500'>Pricing</span>
                </p>
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

        </>
    );
};

export default Packages;