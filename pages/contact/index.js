import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import Contact from '../../components/Contact';

const ContactPage = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA] lg:h-[100vh]">
                <div className="bg-[url('/Figure.svg')] bg-no-repeat bg-right-top lg:h-[100vh] pb-8">
                    <Navbar />
                    <Contact />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;