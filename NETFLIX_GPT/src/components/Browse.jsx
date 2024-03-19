import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";


export default function Browse() {
     
   useNowPlayingMovies();

     
    return (
       <div>
          <Header/>
          <MainContainer/>
       </div>
    )
}