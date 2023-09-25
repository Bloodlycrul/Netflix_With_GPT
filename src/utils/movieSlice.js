import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState : {
        nowPlayingMovies : {},
        upcommintMovices : {}
    },
    reducers : {
        addNowPlaingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },

        addUpcommingMovies : (state, action)=>{
            state.upcommintMovices = action.payload
        }
    }
})


export const {addNowPlaingMovies, addUpcommingMovies} = movieSlice.actions
export default movieSlice.reducer