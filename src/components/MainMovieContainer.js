import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";
import { POPULAR_MOVIE, TOP_RATED, UPCOMING_MOVIES } from "../utils/constant";
import useMovieVideoFetch from "../hooks/useMovieVideoFetch";
import MoviesTemplate from "./MoviesTemplate";

const MainMovieContainer = () => {
  const { id } = useParams();
  const location = useLocation();
  const movie = location?.state;
  console.log(id);
  const result = useMovieVideoFetch({id : id});
  console.log(result);
  const trailer = result?.filter((obj) => obj?.type === "Trailer")[0]?.key;

  return (
    <>
      {!movie ? (
        " "
      ) : (
        <>
          <Header />
          <div className="w-full z-10">
            {trailer && (
              <iframe
                className="w-full aspect-video h-full"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="Talk To Me | Official Trailer 2 HD | A24"
                allow="autoplay; gyroscope;"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="mt-[310px]">
            <MoviesTemplate title={"Upcoming Movies"} url={UPCOMING_MOVIES} />
            <MoviesTemplate title={"Popular Now"} url={POPULAR_MOVIE} />
            <MoviesTemplate title={"Trending Now"} url={TOP_RATED} />
          </div>
        </>
      )}
    </>
  );
};

export default MainMovieContainer;
