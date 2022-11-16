import React from 'react';
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../data/services';

const index = () => {
    return (
        <div>
            {
                services.map(service => <ServiceCard data={service} />)
            }
        </div>
    );
};

export default index;