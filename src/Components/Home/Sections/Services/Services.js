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
        <div className="cardshowcase">
            <h4 className="text-center fs-1"> COUR<span className="text-warning">SES</span></h4>

            <div id="services" className="card-holder">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)

                }


            </div>
        </div>

    );
};

export default Services;