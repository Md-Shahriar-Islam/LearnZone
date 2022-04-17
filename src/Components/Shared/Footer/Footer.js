import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
    const year = (new Date().getFullYear());
    return (
        <div className="d-flex justify-content-center align-items-center">
            <p >&copy;copyright {year}</p>

        </div>
    );
};

export default Footer;