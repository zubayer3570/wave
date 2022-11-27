import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import Contact from '../../components/Contact';

const ContactPage = () => {
    return (
        <>
            <div className="bg-[#FCFDF2]">
                <div className="bg-[url('/vector-svg.svg')] bg-contain bg-no-repeat bg-right-top lg:h-[100vh] pb-8">
                    <Navbar />
                    <div className='mt-12'>
                        <Contact />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;