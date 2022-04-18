import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('learzone.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className="card-holder">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)

            }


        </div>
    );
};

export default Services;