import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mainBg, userAvatar } from "../utils/constants";

export default function Login() {
  const navigate=useNavigate();
        const [isSignInForm,setIsSignInForm]=useState(true);
        const [errorMessage,setErrorMessage]=useState(null);
        const dispatch=useDispatch();

       const toggleSignInForm =()=>{
              setIsSignInForm(!isSignInForm)
       }
       const email=useRef(null);
       const password=useRef(null);
       const name=useRef(null);

       const handleButtonClick=()=>{
        //validate the form data
         const message=checkValidData(email.current.value,password.current.value);
         setErrorMessage(message);

         if(message) return;

         //create a new user  i.e sign in/sign up

         if(!isSignInForm) {
          //signup user
          createUserWithEmailAndPassword(
            auth,
             email.current.value,
              password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: userAvatar
            }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL })); 
            }).catch((error) => {
              setErrorMessage(errorMessage)
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" +errorMessage)
            // ..
          });
         }
         else{
           //login user
           signInWithEmailAndPassword(auth, email.current.value,password.current.value)
           .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             // ...
           })
           .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode+ "-" + errorMessage)
           });

         }


       }
       return (
          <div >
            <Header/>
            <div className="absolute" >
              <img  src={mainBg}
             ></img>
            </div>
            <form  onSubmit={(e)=>{e.preventDefault()}}
             className=" w-3/12 absolute my-36 mx-auto right-0 left-0  p-12 bg-black text-white rounded-lg bg-opacity-80">
               <h1 className=" text-3xl py-4 ">
                {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm &&(<input
                type="text"
                ref={name}
                 placeholder="Enter your Name" 
                 className="p-4 my-4 w-full bg-gray-700">
                 </input>)}
               <input
               ref={email}
                type="text"
                 placeholder="Email Address" 
                 className="p-4 my-4 w-full bg-gray-700">
                 </input>
               <input 
               ref={password}
               type="password"
                placeholder="Password" 
                className="p-4 my-4 w-full bg-gray-700">    
                </input>
                <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
               <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}</button>
               <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? " New to Netflix Sign up Now" : "Already Registered? Sign Up Now."}
                </p>
            </form>
          </div>
       )
}