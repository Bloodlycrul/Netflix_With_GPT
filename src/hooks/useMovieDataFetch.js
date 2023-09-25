import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";

const useMovieDataFetch = () => {

  const nowPlayingMovies = useSelector(store=> store.addNowPlaingMovies);


    const dispatch = useDispatch();
    const getNowPlayingMovie = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
    
        const json = await data.json();
        dispatch(addNowPlaingMovies(json.results))
      }
    
     
      useEffect(()=>{
        // We are using the memorizing here for reduce the api calls
        !nowPlayingMovies && getNowPlayingMovie();
         // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])


}

export default useMovieDataFetch