// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb9pxyXYpoNeUXZvYHphMf_hE31AM361A",
    authDomain: "my-front-2b17a.firebaseapp.com",
    projectId: "my-front-2b17a",
    storageBucket: "my-front-2b17a.firebasestorage.app",
    messagingSenderId: "227769851440",
    appId: "1:227769851440:web:38d30f4a21d7630863d7f5",
    measurementId: "G-JJJYFKBQ27"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);

// กำหนดตัวแปร auth
export const auth = getAuth(app);

// Provider
export const googleProvider = new GoogleAuthProvider();