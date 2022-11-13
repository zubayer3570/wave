import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import MemberCard from '../../components/MemberCard';
import Navbar from '../../components/Navbar';
import {members} from '../../data/member'

const Index = () => {
    return (
        <>
        <p>hi</p>
            <div className='my-8'>
                <Navbar />
            </div>
            <p className='text-[#5BCCDE] text-center'>Our Team</p>
            <p className='font-bold text-[36px] text-[#486A6F] mb-6 text-center'>Let&apos;s meet!</p>
            <div className='grid grid-cols-3 gap-4 mx-[15%] mb-24'>
                {
                    members.map((member) => <MemberCard key={member.id} name={member.name} position={member.position} />)
                }
            </div>
            <Footer />
        </>
    );
};
export default Index;