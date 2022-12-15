import { createSlice } from "@reduxjs/toolkit";
import {findTrendingAnimeThunk} from "../services/animate-thunks.js";

const initialState = {
    animes: [],
    loading: false
}

const animesSlice = createSlice({
    name: 'animes',
    initialState,
    extraReducers: {
        [findTrendingAnimeThunk.pending]:
            (state) => {
                state.loading = true
                state.animes = []
            },
        [findTrendingAnimeThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.animes = payload
            },
        [findTrendingAnimeThunk.rejected]:
            (state) => {
                state.animes = false
            }
    },
});

export default animesSlice.reducer;