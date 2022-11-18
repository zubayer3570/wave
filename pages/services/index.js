import React from 'react';
import Navbar from '../../components/Navbar';
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../data/services';

const index = () => {
    return (
        <>
        <Navbar />
            <div className='grid grid-cols-3 mx-[9%] gap-12'>
                {
                    services.map(service => <ServiceCard key={service.id} name={service.name} price={service.price} />)
                }
            </div>
        </>
    );
};

export default index;