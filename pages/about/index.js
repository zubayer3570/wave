import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import MemberCard from '../../components/MemberCard';
import Navbar from '../../components/Navbar';

const index = ({ members }) => {
    return (
        <>
            <div className='my-8'>
                <Navbar />
            </div>
            <p className='text-[#5BCCDE] text-center'>Our Team</p>
            <p className='font-bold text-[36px] text-[#486A6F] mb-6 text-center'>Let&apos;s meet!</p>
            <div className='grid grid-cols-3 gap-4 mx-[15%] mb-24'>
                {
                    members?.map((member) => <MemberCard name={member.name} position={member.position} />)
                }
            </div>
            <Footer />
        </>
    );
};
export const getStaticProps = async () => {
    const response = await fetch("http://localhost:3000/api/getMembers")
    const members = await response.json()
    return {
        props: {
            members
        }
    }
}
export default index;