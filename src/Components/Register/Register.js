import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";


const Register = () => {
    const name = (event) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <div>
                <div className="w-25 mx-auto mt-2">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={name} type="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={name} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                    </Form>


                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>


                </div>
                <div className="d-flex justify-content-center mt-2">
                    <p>Already Have an account<Link className="mx-2" to="/login">LogIn</Link></p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="border border-primary" style={{ width: '150px', borderRadius: '4px' }}></div>
                    <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                    <div className="border border-primary" style={{ width: '150px', borderRadius: '4px' }}></div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <Button className='text-white shadow  p-2 bg-primary border-0 w-25 d-flex justify-content-center align-items-center'>
                        <IoLogoGoogle />
                        <span className='mx-2'> Register With Google</span>

                    </Button>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <Button className=' p-2 shadow bg-white text-dark border-0 w-25 d-flex justify-content-center align-items-center'>
                        <IoLogoGithub />
                        <span className='mx-2'> Register With Github</span>

                    </Button>
                </div>





            </div>
        </div>
    );
};

export default Register;