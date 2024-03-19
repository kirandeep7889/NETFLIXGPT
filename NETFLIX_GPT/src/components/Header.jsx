import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";

export default function Header() {
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const user=useSelector(store=>store.user);

   const handleSignOut=()=>{
      signOut(auth).then(() => {
          navigate("/");

         // Sign-out successful.
       }).catch((error) => {
         navigate("/error");
       });
       
   } 

   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
   const {uid,email,displayName,photoURL} = user;
   dispatch(addUser({ uid, email, displayName, photoURL }));
   navigate("/browse")

} else {
     dispatch(removeUser());
     navigate('/')
}
});
//unsubscribe when component unmounts
return ()=>unsubscribe();
},[])


    return (
       <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
          <img
            className="w-40"
          src={logo}>
          </img>
          { user && (<div className="flex p-2">
            <img className=" w-12 h-12" alt="userIcon" src={user?.photoURL}></img>
            <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
          </div>)
}
       </div>
    )
}