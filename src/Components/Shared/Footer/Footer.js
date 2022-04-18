import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    const year = (new Date().getFullYear());
    return (
        <div className="d-flex justify-content-center align-items-end w-100 bg-dark text-white p-4 mt-4" >
            <p >&copy;copyright {year}</p>

        </div>
    );
};

export default Footer;