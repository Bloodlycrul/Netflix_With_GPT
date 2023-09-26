import { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constant";

const useMovieVideoFetch = ({ id }) => {
    const [movieVideo, setMovieVideo] = useState(null);

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                API_OPTION
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch movie details for ID: ${id}`);
                
            }

            const data = await response.json();
            console.log('JSON RESPONCE' + data);
            setMovieVideo(data.results);
        } catch (error) {
            console.error("Error fetching movie details:", error);
            // Optionally, set some state here to indicate an error occurred.
        }
    };

    useEffect(() => {
        fetchMovieDetails();
        //eslint-disable-next-line
    }, [id]);

    return movieVideo;
};

export default useMovieVideoFetch;
