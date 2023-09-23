import useMovieVideoFetch from "../hooks/useMovieVideoFetch";

const MovieBackVideo = ({ id }) => {
  const result = useMovieVideoFetch({ id });
  if(!result) return;
  const trailer = result?.filter((obj) => obj.type === "Trailer")[0].key;

  return (
    <>
      <div className="w-screen">
        {trailer && (
          <iframe
            className="w-screen aspect-video h-screen"
            src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailer}`}
            title="Talk To Me | Official Trailer 2 HD | A24"
            allow="autoplay; gyroscope;"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </>
  );
};

export default MovieBackVideo;
