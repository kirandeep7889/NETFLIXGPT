import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/movie/popular?page=1';
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    getPopularMovies();
  }, [dispatch]); 

  return () => {};
};

export default usePopularMovies;
