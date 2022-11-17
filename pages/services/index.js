import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import Navbar from '../../components/Navbar';
import Packages from '../../components/Packages';
// import ServiceCard from '../../components/ServiceCard';
// import { services } from '../../data/services';

const index = () => {
    return (
        <>
            <Navbar />
            <Packages />
        </>
    );
};

export default index;