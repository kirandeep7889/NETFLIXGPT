import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import  { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";

export default function Body() {
    
    const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/Browse",
            element : <Browse/>
        }
    ]);

    useEffect(()=>{
         onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({ uid, email, displayName, photoURL })); 
  } else {
          dispatch(removeUser());
  }
});
    },[])

    return (
       <div>
           <RouterProvider router={appRouter}>   
           </RouterProvider>
 
       </div>
    )
}