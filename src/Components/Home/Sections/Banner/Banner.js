import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../../images/banner/banner1.jpg"
import banner2 from "../../../../images/banner/banner2.jpg"
import banner3 from "../../../../images/banner/banner3.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block  img-fluid w-100"
                        style={{ height: "500px" }}
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black">
                        <h3>Greetings</h3>
                        <p>Hello there.Thank you for getting here.Hope your wish will be fulfilled</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "500px" }}
                        className="d-block w-100 img-fluid"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>WELCOME TO <span style={{ color: "goldenrod", fontWeight: "bold" }}>LEARNZONE</span></h3>
                        <p >What Is learnZone??LearnZone is my personal website.from where My students can directly make interaction with me.They can choose any service they want which are provided by me.Also they can learn online .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "500px" }}
                        className="d-block w-100 img-fluid"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>LEARN TO SATISFY YOUR MIND</h3>
                        <p>You will understand the core concept here.You will not just memorize some theory rather you will gain real knowledge which will make you eager to learn more.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;