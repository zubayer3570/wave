import React from 'react';
import axios from 'axios';
import Router from 'next/router';

const index = () => {
    // const router = useRouter()
    const sendMail = async (e) => {
        Router
        e.preventDefault()
        const name = e.target.name.value || "not given"
        const email = e.target.email.value || "not given"
        const location = e.target.location.value || "not given"
        const text = e.target.text.value || "not given"
        const result = await axios.post("https://mailing-service.onrender.com/sendmail", {
            name, email, location, text
        })
        Router.push('/')
    }
    return (
        <>
            <form onSubmit={sendMail} class="mx-4 lg:mx-24 mt-12">
                <p className='font-bold text-[28px] text-gray-700 text-center mb-8'>Contact with Us</p>
                <div className='lg:flex mb-6'>
                    <div class="w-full lg:w-1/2 lg:pr-6">
                        <label name="name" class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                            Your Name
                        </label>
                        <input class="mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Name" />

                        <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input name='email' class=" mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Your Email Address" required />

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
        </>
    );
};

export default index;

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