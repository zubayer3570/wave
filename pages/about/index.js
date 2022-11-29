import React from 'react';
import Footer from '../../components/Footer';
import MemberCard from '../../components/MemberCard';
import Navbar from '../../components/Navbar';
import { members } from '../../data/member'

const Index = () => {
    return (
        <>
            <Navbar />
            <div className='lg:h-[85vh] z-[-10]'>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_bpqri9y8.json" loop autoplay speed="1" background='transparent' />
            </div>
            <p className='text-[#5BCCDE] text-center'>Our Team</p>
            <p className='font-bold text-[36px] text-[#486A6F] mb-6 text-center'>Let&apos;s meet!</p>
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-12 mx-[9%] lg:mb-12'>
                {
                    members.slice(0, 3).map((member) => <div className='col-span-2' key={member.id}><MemberCard name={member.name} position={member.position} /></div>)
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-12 mx-[9%] mb-24'>
                <div></div>
                {
                    members.slice(3, 6).map((member) => <div className='col-span-2'><MemberCard key={member.id} name={member.name} position={member.position} /></div>)
                }
                <div></div>
            </div>
            <Footer />
        </>
    );
};
export default Index;