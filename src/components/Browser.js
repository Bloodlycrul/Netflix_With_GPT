import Header from "./Header";
import useMovieDataFetch from "../hooks/useMovieDataFetch";
import { useSelector } from "react-redux";
import MovieBackVideo from "./MovieBackVideo";
import MovieTitle from "./MovieTitle";

const Browser = () => {
  useMovieDataFetch();
  const movieDetails = useSelector((store) => store.movie);

  return (
    <>
      <Header />
      <div className="">
        <MovieTitle />
        <div>
          {movieDetails.nowPlayingMovies &&
            movieDetails.nowPlayingMovies[3] && (
              <MovieBackVideo id={movieDetails.nowPlayingMovies[3].id} />
            )}
        </div>
      </div>
    </>
  );
};

export default Browser;
