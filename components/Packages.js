import React from 'react';

const Packages = () => {
    return (
        <div className='mx-[9%] mb-40 mt-20'>
            <p className="font-bold text-[60px] text-[#486A6F] text-center">
                Our Services
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-8'>
                <div className='flex justify-center h-[400px] w-full '>
                    <div className='w-[200px] rounded-xl shadow-custom-1 h-full p-4'>
                        <p className='font-bold text-blue-500'>Basic</p>
                        <p className="font-bold text-[35px] ml-4">
                            $20
                        </p>
                    </div>
                </div>
                <div className='flex justify-center h-[400px] w-full '>
                    <div className='w-[200px] rounded-xl shadow-custom-1 h-full p-4'>
                        <p className='font-bold text-green-500'>Standard</p>
                        <p className="font-bold text-[35px] ml-4">
                            $50
                        </p>
                    </div>
                </div>
                <div className='flex justify-center h-[400px] w-full '>
                    <div className='w-[200px] rounded-xl shadow-custom-1 h-full p-4'>
                        <p className='font-bold text-red-500'>Premium</p>
                        <p className="font-bold text-[35px] ml-4">
                            $100
                        </p>
                    </div>
                </div>
                <div className='flex justify-center h-[400px] w-full '>
                    <div className='w-[200px] rounded-xl shadow-custom-1 h-full p-4'>
                        <p className='font-bold text-orange-500'>Custom</p>
                        <p className="font-bold text-[35px] ml-4">
                            $500
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;