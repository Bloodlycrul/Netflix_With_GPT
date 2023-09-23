import React from "react";

const MovieTitle = ({title , desc}) => {

  return (
    <div className="absolute w-full h-screen aspect-video bg-gradient-to-r from-black/50 text-white py-[420px]">
      <div className="w-2/4 px-[100px]">
        <h1 className="text-[70px] my-5">{title}</h1>
        <p className="text-[20px]">{desc}</p>

        <div className="my-4">
        <button className=" mr-2 py-5 px-14 bg-white text-black rounded-lg cursor-pointer text-[30px] transition ease-in-out hover:bg-white/80">Play Now</button>
        <button className=" ml-2 py-5 px-14 bg-[#596162]/50 text-white rounded-lg cursor-pointer text-[30px]">More Info</button>
        </div>
      </div>
    </div>
  );
};
export default MovieTitle;