import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase.init';

const Signup = () => {
    const createUser = (e) => {
        e.preventDefault()
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ firstName, lastName, email, password })
        createUserWithEmailAndPassword(auth, email, password).then((userCredentials)=>{
            console.log(userCredentials)
            sendEmailVerification(userCredentials.user)
        })
    }
    return (
        <form onSubmit={createUser}>
            <div className='w-[450px] bg-[#D7E5FC] p-8 shadow-2xl text-[#678C92]'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <p className='text-[14px] mb-[5px] '>First Name</p>
                        <input type="text" name="firstName" className='border-[1.5px] outline-0 rounded-[3px] h-[40px] mb-[20px] border-[#486A6F] w-full bg-[#D7E5FC]' />
                    </div>
                    <div>
                        <p className='text-[14px] mb-[5px] '>Last Name</p>
                        <input type="text" name="lastName" className='border-[1.5px] outline-0 rounded-[3px] h-[40px] mb-[20px] border-[#486A6F] w-full bg-[#D7E5FC]' />
                    </div>
                </div>
                <div>
                    <p className='text-[14px] mb-[5px] '>Email</p>
                    <input type="text" name="email" className='border-[1.5px] outline-0 rounded-[3px] h-[40px] mb-[20px] border-[#486A6F] w-full bg-[#D7E5FC]' />
                </div>
                <div>
                    <p className='text-[14px] mb-[5px] '>Password</p>
                    <input type="password" name="password" className='border-[1.5px] outline-0 rounded-[3px] h-[40px] mb-[20px] border-[#486A6F] w-full bg-[#D7E5FC]' />
                </div>
                <input type="submit" value='Sign Up' className='font-bold text-[16px] w-full h-[40px] bg-[#4397A4] text-[white] rounded flex justify-center items-center' />
            </div>
        </form>
    );
};

export default Signup;