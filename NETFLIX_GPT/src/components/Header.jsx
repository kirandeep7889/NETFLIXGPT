import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
   const navigate=useNavigate();
   const user=useSelector(store=>store.user);

   const handleSignOut=()=>{
      signOut(auth).then(() => {
          navigate("/");

         // Sign-out successful.
       }).catch((error) => {
         navigate("/error");
       });
       
   } 

    return (
       <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
          <img
            className="w-40"
          src="/images/Netflix_Logo_PMS.png">
          </img>
          { user && (<div className="flex p-2">
            <img className=" w-12 h-12" alt="userIcon" src={user?.photoURL}></img>
            <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
          </div>)
}
       </div>
    )
}