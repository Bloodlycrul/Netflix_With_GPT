import Header from "./Header";
import useMovieDataFetch from "../hooks/useMovieDataFetch";
import { useSelector } from "react-redux";
import MovieBackVideo from "./MovieBackVideo";
import MovieTitle from "./MovieTitle";

const Browser = () => {
  useMovieDataFetch();
  const movieDetails = useSelector((store) => store.movie);
  const movieDetailsFirst = movieDetails.nowPlayingMovies[3];


  return (
    <>
      <Header />
        <MovieTitle title={movieDetailsFirst?.title} desc={movieDetailsFirst?.overview}  />
          {movieDetails.nowPlayingMovies &&
            movieDetails.nowPlayingMovies[3] && (
              <MovieBackVideo id={movieDetails?.nowPlayingMovies[3]?.id} />
            )}

    </>
  );
};

export default Browser;
