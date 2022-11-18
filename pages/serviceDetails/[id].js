import { useRouter } from 'next/router';
import React from 'react';

const id = () => {
    const { id } = useRouter().query
    return (
        <div>
            <p>this is service details</p>
            <p>the service id is: {id}</p>
        </div>
    );
};

export default id;