import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    if (user || user1 || user2) {
        navigate(from, { replace: true })
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );


    }
    const handleSignIn = (event) => {

        signInWithEmailAndPassword(email, password);
        event.preventDefault();
    }
    return (
        <div>
            <div className="w-25 mx-auto mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>

                </Form>


            </div>
            <div className="d-flex justify-content-center">
                <Button onClick={handleSignIn} variant="primary" type="submit">
                    Submit
                </Button>


            </div>
            <div className="d-flex justify-content-center mt-2">
                <p>New To learzone<Link className="mx-2" to="/register">Register Here</Link></p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="border border-primary" style={{ width: '150px', borderRadius: '4px' }}></div>
                <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                <div className="border border-primary" style={{ width: '150px', borderRadius: '4px' }}></div>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <Button onClick={() => signInWithGoogle()} className='text-white shadow  p-2 bg-primary border-0 w-25 d-flex justify-content-center align-items-center'>
                    <IoLogoGoogle />
                    <span className='mx-2'> LogIn With Google</span>

                </Button>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <Button onClick={() => signInWithGithub()} className=' p-2 shadow bg-white text-dark border-0 w-25 d-flex justify-content-center align-items-center'>
                    <IoLogoGithub />
                    <span className='mx-2'> LogIn With Github</span>

                </Button>
            </div>


        </div>

    );
};

export default LogIn;