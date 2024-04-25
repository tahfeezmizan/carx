// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcOKiiR3_-Du3JUYjS0XCRC42St_Q7_dw",
    authDomain: "carx-956a5.firebaseapp.com",
    projectId: "carx-956a5",
    storageBucket: "carx-956a5.appspot.com",
    messagingSenderId: "536618926640",
    appId: "1:536618926640:web:01f31c8902997d7649e3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)