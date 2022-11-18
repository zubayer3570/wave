import React from 'react';
import Navbar from '../../components/Navbar';
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../data/services';

const index = () => {
    return (
        <>
        <Navbar />
            <div className='grid grid-cols-3 m-8 gap-8'>
                {
                    services.map(service => <ServiceCard key={service.id} name={service.name} price={service.price} />)
                }
            </div>
        </>
    );
};

export default index;