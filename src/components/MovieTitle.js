import React from "react";
import { useSelector } from "react-redux";

const MovieTitle = () => {
  const movieDetails = useSelector((store) => store.movie);
  const movieDetailsFirst = movieDetails.nowPlayingMovies[3];

  return (
    <div className="absolute w-full h-screen aspect-video bg-gradient-to-r from-black/50 text-white py-[420px]">
      <div className="w-2/4 px-[100px]">
        <h1 className="text-[100px] my-5">{movieDetailsFirst?.title}</h1>
        <p className="text-[30px]">{movieDetailsFirst?.overview}</p>

        <div className="my-4">
        <button className=" mr-2 py-5 px-14 bg-white text-black rounded-lg cursor-pointer text-[30px]">Play Now</button>
        <button className=" ml-2 py-5 px-14 bg-[#596162]/50 text-white rounded-lg cursor-pointer text-[30px]">More Info</button>
        </div>
      </div>
    </div>
  );
};
export default MovieTitle;