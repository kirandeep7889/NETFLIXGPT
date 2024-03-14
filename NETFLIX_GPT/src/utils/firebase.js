// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB16gKfKyiI0kau21bwZoCqrp5LeFwN-L0",
  authDomain: "netlfixgpt-2d669.firebaseapp.com",
  projectId: "netlfixgpt-2d669",
  storageBucket: "netlfixgpt-2d669.appspot.com",
  messagingSenderId: "313426536946",
  appId: "1:313426536946:web:b4c97dd3ba80014b82636b",
  measurementId: "G-QE12QQVJDP"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();