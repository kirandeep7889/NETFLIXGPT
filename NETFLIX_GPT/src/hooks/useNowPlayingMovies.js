import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowplayingMovies = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    getNowplayingMovies();
  }, [dispatch]); // Include dispatch in the dependency array

  // Return an empty function or null, as custom hooks should not return anything
  return () => {};
};

export default useNowPlayingMovies;
