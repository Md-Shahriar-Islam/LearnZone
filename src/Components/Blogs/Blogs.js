import React from 'react';

const Blogs = () => {
    return (
        <div class="question">
            <h3> Authoriztion and Authentication</h3>
            <p>Authentication means if the person is using valid identification.suppose a user has given an email which does not exists checking if the email exists or not is part of authentication</p>
            <p>authorization means a person has accessibility to a certain  work.suppose an admin of a website.he has access of those things of the website which are not accessible to the normal person.This thing is known as authorization</p>
            <h3>Why am I using Firebase and what other options</h3>
            <p>I am actually using firebase for authentication system.By using firebase we can authenticate an user.We have used different kinds of authentication with the help of firebase</p>
            <ul>
                <li>LoopBAck</li>
                <li>RxDB</li>
                <li>NativeScript</li>
                <li>Kuzzle</li>
                <li>AWS Amplify</li>
            </ul>
            <h3>What other services does firebase provide other than authentication</h3>
            <ul>
                <li>Cloud storage</li>
                <li>Google anlytics</li>
                <li>Cloud Messaging</li>
                <li>Hosting</li>
                <li>Remote Config</li>
            </ul>
        </div>
    );
};

export default Blogs;