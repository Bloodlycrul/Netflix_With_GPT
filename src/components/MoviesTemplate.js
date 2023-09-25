import React, { useEffect, useState } from "react";
import { API_OPTION, IMG_PATH } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/movieSlice";

const MoviesTemplate = ({ title, url }) => {
  const upcommingMovie = useSelector(store => store.movie.upcommingMovie)
  const dispatch = useDispatch();
  const [moviePoster, setMoviePoster] = useState(null);

  const movieFetch = async () => {
    const data = await fetch(url, API_OPTION);
    const json = await data.json();
    setMoviePoster(json.results);
    dispatch(addUpcommingMovies(json.results))
  };

  useEffect(() => {
    !upcommingMovie && movieFetch();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="bg-transparent relative text-white -mt-[300px] mb-[340px] z-20">
        <h1 className="px-6 text-[30px] my-2">{title}</h1>

        <div className="overflow-x-auto scrollbar-color">
          <div className="flex  box-border">
            {" "}
            {/* Consider increasing w-[325px] if needed */}
            {moviePoster &&
              moviePoster?.map((movie) => (
                <img
                  className="w-[325px] !h-[183px]] px-6 h-auto"
                  key={movie.id}
                  src={IMG_PATH + movie.poster_path}
                  alt={movie.original_title}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesTemplate;
