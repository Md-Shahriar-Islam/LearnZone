import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useSendEmailVerification, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );


    const [
        createUserWithEmailAndPassword,
        user,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const homeNavigate = () => {
        navigate('/home')
    }

    const handleLogIn = (event) => {


        createUserWithEmailAndPassword(email, password);



        event.preventDefault();


    }
    if (user || user1 || user2) {
        homeNavigate()

    }


    return (
        <div>
            <div>
                <div className="w-25 mx-auto mt-2">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                    </Form>


                </div>
                <div className="d-flex justify-content-center">
                    <Button onClick={handleLogIn}>
                        LOGIN
                    </Button>

                </div>
                <div className="d-flex justify-content-center mt-2">
                    <p>Already Have an account<Link className="mx-2" to="/login">Register</Link></p>

                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="border border-primary" style={{ width: '150px', borderRadius: '4px' }}></div>
                    <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                    <div className="border border-primary" style={{ width: '150px', borderRadius: '4px' }}></div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <Button onClick={() => signInWithGoogle()} className='text-white shadow  p-2 bg-primary border-0 w-25 d-flex justify-content-center align-items-center'>
                        <IoLogoGoogle />
                        <span className='mx-2'> Register With Google</span>

                    </Button>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <Button onClick={() => signInWithGithub()} className=' p-2 shadow bg-white text-dark border-0 w-25 d-flex justify-content-center align-items-center'>
                        <IoLogoGithub />
                        <span className='mx-2'> Register With Github</span>

                    </Button>
                </div>





            </div>
        </div>
    );
};

export default Register;