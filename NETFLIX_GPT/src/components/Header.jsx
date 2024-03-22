import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../utils/constants";
import gptSlice, { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

export default function Header() {
   const navigate=useNavigate();
   const dispatch=useDispatch();
   const user=useSelector(store=>store.user);
   const  showGptSearch =useSelector(store=>store.gpt.showGptSearch)

   const handleSignOut=()=>{
      signOut(auth).then(() => {
          navigate("/");

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
},[]);

    const handleGptSearchClick=()=> {
          dispatch(toggleGptSearchView())
    };
   const handleLanguageChange=(e)=> {
   dispatch(changeLanguage(e.target.value)) 
   }

    return (
       <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
          <img
            className="w-40"
          src={logo}>
          </img>
          { user && (
          <div  className="flex gap-3 p-2">
            {showGptSearch && (
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=><option value={lang.identifier}>{lang.name}</option>
 )}
            </select>
            )}
            <button onClick={handleGptSearchClick} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{showGptSearch  ? "Home" : "GPT Search"}</button>
            {/* <img className=" w-12 h-12" alt="userIcon" src={user?.photoURL}></img> */}
            <button onClick={handleSignOut} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign Out</button>

          </div>)
}
       </div>
    )
}