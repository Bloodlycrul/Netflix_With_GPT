import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        nowPlayingMovies : {}
    },
    reducers : {
        addNowPlaingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
})


export const {addNowPlaingMovies} = movieSlice.actions
export default movieSlice.reducer