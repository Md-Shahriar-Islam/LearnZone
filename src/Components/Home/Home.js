import React from 'react';
import Reviews from './Reviews/Reviews';
import Banner from './Sections/Banner/Banner';

import Services from './Sections/Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>



        </div>
    );
};

export default Home;