import React, { useState } from 'react';

const Collapse = ({ question, answer }) => {
    const [accState, setAccState] = useState(false)
    return (
        <>
            <div className='rounded-2xl shadow-custom-2 cursor-pointer my-2'>
                <div onClick={() => setAccState(!accState)} className='flex justify-between px-6 py-4 font-bold'>
                    <div>{question}</div>
                    <div className='flex items-center'>
                        <img src="/arrow.svg" alt="" className={`h-[15px] w-[15px] ${accState? "rotate-180" : "rotate-0"} duration-300`} />
                    </div>
                </div>
                <div className={`overflow-hidden max-h-0 duration-200 ease-in-out ${accState && 'max-h-[300px]'}`}>
                    <p className='px-6 pb-6'>{answer}</p>
                </div>
            </div>
        </>
    );
};

export default Collapse;