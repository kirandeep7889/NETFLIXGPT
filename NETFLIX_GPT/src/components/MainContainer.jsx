import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackgroud";


const MainContainer =()=>{
      const movies=useSelector(store=>store.movies?.nowPlayingMovies);
       if(!movies) return;
      const mainMovie=movies[19];

    return<div>
        <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
}


export default  MainContainer;