import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ServiceHeroCard from '../../components/ServiceHeroCard';
import { services } from '../../data/services';

const index = () => {
    return (
        <>
            <Navbar />
            <div className='mx-[9%] gap-12'>
                {
                    services.map(service => <ServiceHeroCard key={service.id} id={service.id} name={service.name} text={service.text} />)
                }
            </div>
            <Footer />
        </>
    );
};

export default index;