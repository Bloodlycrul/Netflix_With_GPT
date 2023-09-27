import Header from "./Header";
import useMovieDataFetch from "../hooks/useMovieDataFetch";
import { useSelector } from "react-redux";
import MovieBackVideo from "./MovieBackVideo";
import MovieTitle from "./MovieTitle";
import MoviesTemplate from "./MoviesTemplate";
import { POPULAR_MOVIE } from "../utils/constant";
import { TOP_RATED } from "../utils/constant";
import { UPCOMING_MOVIES } from "../utils/constant";

const Browser = () => {
  useMovieDataFetch();
  const movieDetails = useSelector((store) => store.movie);
  const movieDetailsFirst = movieDetails.nowPlayingMovies[3];

  return (
    <>
      <Header />
      <MovieTitle
        title={movieDetailsFirst?.title}
        desc={movieDetailsFirst?.overview}
      />
      {movieDetails.nowPlayingMovies && movieDetails.nowPlayingMovies[3] && (
        <MovieBackVideo id={movieDetails?.nowPlayingMovies[3]?.id} />
      )}

      <MoviesTemplate title={"Now Playing"} url={process.env.REACT_APP_NOW_PLAYING} />
      <MoviesTemplate title={"Upcoming Movies"} url={UPCOMING_MOVIES} />
      <MoviesTemplate title={"Popular Now"} url={POPULAR_MOVIE} />
      <MoviesTemplate title={"Trending Now"} url={TOP_RATED} />

    </>
  );
};

export default Browser;
