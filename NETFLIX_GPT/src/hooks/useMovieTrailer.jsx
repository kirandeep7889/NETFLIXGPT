import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=> {
    const dispatch=useDispatch();


    useEffect(() => {
        const getMovieVideos = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
                const data = await response.json();
                const filterData=data.results.filter((video)=>
                  video.type=="Trailer"
                );
                const trailer= filterData.length ?filterData[0] : data.results[0];
                dispatch(addTrailerVideo(trailer))
            } catch (error) {
                console.error("Error fetching movie videos:", error);
            }
        };

        getMovieVideos();
    }, [movieId]);

}

export default useMovieTrailer;