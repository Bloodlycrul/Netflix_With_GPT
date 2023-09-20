import { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constant";

const useMovieVideoFetch = ({ id }) => {

 const [movieVideo, setMovieVideo] = useState(null)

  const movieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTION
    );

    const json = await data.json();
    setMovieVideo(json.results)
  };

  useEffect(() => {
    movieDetails();
    // eslint-disable-next-line
  }, []);

  return movieVideo
};

export default useMovieVideoFetch;
