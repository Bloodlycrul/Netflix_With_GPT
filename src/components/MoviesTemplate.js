import React, { useEffect, useState } from "react";
import { API_OPTION, IMG_PATH } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/movieSlice";
import { Link } from "react-router-dom";

const MoviesTemplate = ({ title, url }) => {
  const upcommingMovie = useSelector((store) => store.movie.upcommingMovie);
  const dispatch = useDispatch();
  const [moviePoster, setMoviePoster] = useState(null);

  const movieFetch = async () => {
    const data = await fetch(url, API_OPTION);
    const json = await data.json();
    setMoviePoster(json.results);
    dispatch(addUpcommingMovies(json.results));
  };

  useEffect(() => {
    !upcommingMovie && movieFetch();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="bg-transparent relative text-white -mt-[300px] mb-[340px] z-20">
        <h1 className="px-6 text-[30px] my-2">{title}</h1>

        <div className="overflow-x-scroll scrollbar-color">
        <div className="flex w-[300vw] overflow-x-auto ">
            {moviePoster && moviePoster.map((movie) => (
                <Link state={movie} key={movie.id} to={"/movie/" + movie.id}>
                    <img
                        className="w-[500px] h-[300px] object-cover object-center px-6"
                        src={IMG_PATH + movie.poster_path}
                        alt={movie.original_title}
                    />
                </Link>
            ))}
        </div>
    </div>
    
      </div>
    </>
  );
};

export default MoviesTemplate;
