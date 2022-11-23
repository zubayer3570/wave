import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useRouter } from 'next/router';
import Contact from '../../components/Contact';

const ContactPage = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#C6DBFF] to-[#E1EBFA]">
                <div className="bg-[url('/Figure.svg')] bg-no-repeat bg-right-top">
                    <Navbar />
                    <Contact />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;