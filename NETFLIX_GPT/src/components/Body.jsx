import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";


export default function Body() {
    
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


    return (
       <div>
           <RouterProvider router={appRouter}>   
           </RouterProvider>
 
       </div>
    )
}