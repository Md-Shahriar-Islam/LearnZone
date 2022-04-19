import React from 'react';
import { Carousel } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import review from "../../../images/banner/review.jpg"

const Reviews = () => {
    return (
        <div className="mx-4">
            <h4 className="text-center m-4">SOME OF MY STUDENTS FEELINGS</h4>
            <div className='card-holder' >

                <div>
                    <h3 class="text-center">Robert downey jr</h3>
                    <p style={{ textAlign: 'justify' }}>He is very nice teacher He teaches Us very carefully.the dedication he has is mind blowing.His every courses are well designed.I was a student of his academic combo pack.Now I am also taking question bank solving course<br></br>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar /></p>
                </div>
                <div>
                    <h3 className="text-center">Bruce Wayne</h3>
                    <p style={{ textAlign: 'justify' }}>He is a wonderful teacher He teaches Us very carefully.I am a student of his Admission Program.His every courses are well designed.I was a student of his academic combo pack.Now I am also taking question bank solving course<br></br>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar /></p>
                </div>
                <div>
                    <h3 className="text-center">Steve Rogers
                    </h3>
                    <p style={{ textAlign: 'justify' }}> He is a wonderful teacher He teaches Us very carefully.I am a student of his Admission Program.His every courses are well designed.I was a student of his academic combo pack.Now I am also taking question bank solving course<br></br>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar /></p>
                </div>



            </div>

        </div>

    );
};

export default Reviews;