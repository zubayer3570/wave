import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const sendMail = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const name = e.target.name.value || "not given"
        const email = e.target.email.value || "not given"
        const location = e.target.location.value || "not given"
        const phone = e.target.phone.value || "not given"
        const text = e.target.text.value || "not given"
        await axios.post("https://mailing-service.onrender.com/sendmail", {
            name, email, phone, location, text
        })
        setIsLoading(false)
        Router.push('/')
    }
    return (
        <>
            <form onSubmit={sendMail} class="mx-4 lg:mx-24 mt-12" className={isLoading? 'blur-[8px] mx-4 lg:mx-24 mt-12' : 'mx-4 lg:mx-24 mt-12'}>
                <p className='font-bold text-[28px] text-gray-700 text-center mb-8'>Contact with Us</p>
                <div className='lg:flex mb-6'>
                    <div class="w-full lg:w-1/2 lg:pr-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                            Your Name
                        </label>
                        <input name="name" class="mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Name" />

                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input name='email' class=" mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Email Address" />

                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" >
                            Your Phone Number
                        </label>
                        <input name='phone' class="mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Name" />

                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                            Your Location
                        </label>
                        <input name='location' class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Email Address" />
                    </div>
                    <div className='w-full lg:w-1/2 relative'>
                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                            Your Message
                        </label>
                        <textarea name='text' class="lg:absolute lg:bottom-0 lg:top-[27px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter your Details or Thoughts, we'll contact with you!!!" />
                    </div>
                </div>
                <div>
                    <input type="submit" value="send to us" class="w-full h-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" />
                </div>
            </form>
            <div role="status" className={isLoading? 'block absolute top-[40%] left-[50%]' : 'hidden'}>
                <svg aria-hidden="true" class="mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </>
    );
};

export default Contact;

{/*
            <div>
                <p className='font-bold text-[28px] text-gray-700 text-center m-8'>Contact with Us</p>
            </div>
             <form class="lg:mx-24">
                <div className='lg:flex mb-8'>
                    <div class="w-full pr-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"e">
                            Your Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Name" />
                    </div>
                    <div class="w-full">
                        <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                            Email
                        </label>
                        <input required class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Email Address" />
                    </div>
                </div>
                <div className='lg:flex mb-4'>
                    <div class="w-full pr-6">
                        <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2"e">
                            Your Phone Number
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Name" />
                    </div>
                    <div class="w-full">
                        <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                            Your Location
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Email Address" />
                    </div>
                </div>
                <div className='mb-8'>
                    <label class="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
                        Your Thoughts
                    </label>
                    <textarea class="appearance-none block w-full h-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter your Details or Thoughts, we'll contact with you!!!" />
                </div>
                <div>
                    <input type="submit" value="send to us" class="w-full h-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" />
                </div>
            </form> */}