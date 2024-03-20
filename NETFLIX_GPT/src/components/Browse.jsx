import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


export default function Browse() {
   useNowPlayingMovies();
   usePopularMovies();

     
    return (
       <div>
          <Header/>
          <MainContainer/>
          <SecondaryContainer/>
       </div>
    )
}