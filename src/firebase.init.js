// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVRPUDyDtkvoKhNzaz4a8fuQAU6TEYuds",
    authDomain: "learn-zone-40763.firebaseapp.com",
    projectId: "learn-zone-40763",
    storageBucket: "learn-zone-40763.appspot.com",
    messagingSenderId: "905694714339",
    appId: "1:905694714339:web:09032d3fb53c448e9ea8d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;