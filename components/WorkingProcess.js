import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const WorkingProcess = () => {
    return (
        <>
            <div>
                <p className='text-center text-[#486A6F] font-bold text-[60px] mt-40 mb-8'>How we Work?</p>
            </div>
            {/* <div className='mx-[9%]'> */}
            <div className='relative font-bold mx-[20%]'>
                <div className='flex items-center bg-transparent relative'>
                    <div className='absolute left-[16px] bottom-[0px] w-[1px] h-[50%] bg-[black] z-[-1]'></div>
                    <div>
                        <div className='flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[orange] mr-[15px]'>1</div>
                    </div>
                    <div className='my-[15px] bg-green-500 p-[15px]'>
                        <div className='flex items-end'>
                            {/* <FontAwesomeIcon icon={faPhone} size='2x' /> */}
                            <div className='w-[70px] h-[70px]'>
                                <img src="/demo1.png" alt="" />
                            </div>
                            <p className='text-[30px] font-bold'>Taking Notes!</p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia velit expedita itaque distinctio facere accusantium harum et sapiente nulla ipsum.</p>
                    </div>
                </div>
                <div className='flex items-center bg-transparent relative'>
                    <div className='absolute left-[16px] w-[1px] h-[100%] bg-[black] z-[-1]'></div>
                    <div>
                        <div className='flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[orange] mr-[15px]'>1</div>
                    </div>
                    <div className='my-[15px] bg-green-500 p-[15px]'>
                        <div className='flex items-end'>
                            {/* <FontAwesomeIcon icon={faPhone} size='2x' /> */}
                            <div className='w-[70px] h-[70px]'>
                                <img src="/demo1.png" alt="" />
                            </div>
                            <p className='text-[30px] font-bold'>Taking Notes!</p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia velit expedita itaque distinctio facere accusantium harum et sapiente nulla ipsum.</p>
                    </div>
                </div>
                <div className='flex items-center bg-transparent relative'>
                    <div className='absolute left-[16px] w-[1px] h-[100%] bg-[black] z-[-1]'></div>
                    <div>
                        <div className='flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[orange] mr-[15px]'>1</div>
                    </div>
                    <div className='my-[15px] bg-green-500 p-[15px]'>
                        <div className='flex items-end'>
                            {/* <FontAwesomeIcon icon={faPhone} size='2x' /> */}
                            <div className='w-[70px] h-[70px]'>
                                <img src="/demo1.png" alt="" />
                            </div>
                            <p className='text-[30px] font-bold'>Taking Notes!</p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia velit expedita itaque distinctio facere accusantium harum et sapiente nulla ipsum.</p>
                    </div>
                </div>
                <div className='flex items-center bg-transparent relative'>
                    <div className='absolute left-[16px] w-[1px] h-[100%] bg-[black] z-[-1]'></div>
                    <div>
                        <div className='flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[orange] mr-[15px]'>1</div>
                    </div>
                    <div className='my-[15px] bg-green-500 p-[15px]'>
                        <div className='flex items-end'>
                            {/* <FontAwesomeIcon icon={faPhone} size='2x' /> */}
                            <div className='w-[70px] h-[70px]'>
                                <img src="/demo1.png" alt="" />
                            </div>
                            <p className='text-[30px] font-bold'>Taking Notes!</p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia velit expedita itaque distinctio facere accusantium harum et sapiente nulla ipsum.</p>
                    </div>
                </div>
                <div className='flex items-center bg-transparent relative'>
                    <div className='absolute left-[16px] w-[1px] h-[50%] top-[0px] bg-[black] z-[-1]'></div>
                    <div>
                        <div className='flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[orange] mr-[15px]'>1</div>
                    </div>
                    <div className='my-[15px] bg-green-500 p-[15px]'>
                        <div className='flex items-end'>
                            {/* <FontAwesomeIcon icon={faPhone} size='2x' /> */}
                            <div className='w-[70px] h-[70px]'>
                                <img src="/demo1.png" alt="" />
                            </div>
                            <p className='text-[30px] font-bold'>Taking Notes!</p>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia velit expedita itaque distinctio facere accusantium harum et sapiente nulla ipsum.</p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default WorkingProcess;


{/* <div className='mx-[9%]'>
    <div className='rounded-2xl shadow-custom-1 my-4 p-6 text-[#486A6F]'>
        <p className='font-bold text-[20px] text-center'>Listening</p>
        <p className='font-medium text-center'>Listen: At first, we listen to all of the clients requirements very carefully.</p>
    </div>
    <div className='rounded-2xl shadow-custom-1 my-4 p-6 text-[#486A6F]'>
        <p className='font-bold text-[20px] text-center'>Making Draft</p>
        <p className='font-medium text-center'>Make draft: While listening, we make draft and take notes of important needs of our customers.</p>
    </div>
    <div className='rounded-2xl shadow-custom-1 my-4 p-6 text-[#486A6F]'>
        <p className='font-bold text-[20px] text-center'>Plan</p>
        <p className='font-medium text-center'>Plan: All of our team member sit together and plan on how our approach will be.</p>
    </div>
    <div className='rounded-2xl shadow-custom-1 my-4 p-6 text-[#486A6F]'>
        <p className='font-bold text-[20px] text-center'>Build</p>
        <p className='font-medium text-center'>Build: We create our customers desired website in this phase.</p>
    </div>
    <div className='rounded-2xl shadow-custom-1 my-4 p-6 text-[#486A6F]'>
        <p className='font-bold text-[20px] text-center'>Show</p>
        <p className='font-medium text-center'>Show: After making the whole site, we show it to our clients to make sure everything is okay.</p>
    </div>
    <div className='rounded-2xl shadow-custom-1 my-4 p-6 text-[#486A6F]'>
        <p className='font-bold text-[20px] text-center'>Revise</p>
        <p className='font-medium text-center'>Revise: After showing to clients, we redesign/ customize the site where needed. And, at the end of this stage, our website gets ready for deliver.</p>
    </div>
    <div className='rounded-2xl shadow-custom-1 my-4 p-6 text-[#486A6F]'>
        <p className='font-bold text-[20px] text-center'>Deliver</p>
        <p className='font-medium text-center'>Deliver: We deliver the complete project after full payment and complete our task.</p>
    </div>
</div> */}