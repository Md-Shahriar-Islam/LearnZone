import React from 'react';
import "./Service.css"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Service = (props) => {
    const { id, image, Course, course, providing } = props.service
    const navigate = useNavigate()
    const checkOutNavigate = () => {
        navigate('/checkout')
    }
    return (
        <div className="m-5 card">
            <div className="card-container">
                <img src={image} className="image"></img>
                <h3 className="text-center">{course}</h3>
                <h3 className="text-center">{Course}</h3>
                <ul>

                    {providing.map(provide => <li className="list"> <IoIosCheckmarkCircleOutline />{provide}</li>)}
                </ul>

            </div>
            <div className="d-flex justify-content-center mb-2">
                <Button onClick={checkOutNavigate}>Select Course</Button>
            </div>
        </div>

    );
};

export default Service;