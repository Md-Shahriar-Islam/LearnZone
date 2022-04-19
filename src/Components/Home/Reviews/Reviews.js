import React from 'react';
import { Carousel } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';

const Reviews = () => {
    return (
        <div className="background">
            <h3 className="text-center mb-2 mt-5">SOME OF MY STUDENTS STORY</h3>
            <Carousel variant="dark">
                <Carousel.Item>

                    <p className="d-block mx-auto w-25  text-center p-5">
                        <strong className="p-2" >Robert downey jr</strong><br></br>
                        He is very nice teacher He teaches Us very carefully.the dedication he has is mind blowing.His every courses are well designed.I was a student of his academic combo pack.Now I am also taking question bank solving course<br></br>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="d-block mx-auto w-25  text-center p-5">
                        <strong className="p-2" >Bruce Wayne</strong><br></br>
                        He is a wonderful teacher He teaches Us very carefully.I am a student of his Admission Program.His every courses are well designed.I was a student of his academic combo pack.Now I am also taking question bank solving course<br></br>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </p>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="d-block mx-auto w-25  text-center p-5">
                        <strong className="p-2" >Steve Rogers</strong><br></br>
                        He is a wonderful teacher He teaches Us very carefully.I am a student of his Admission Program.His every courses are well designed.I was a student of his academic combo pack.Now I am also taking question bank solving course<br></br>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar /></p>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Reviews;