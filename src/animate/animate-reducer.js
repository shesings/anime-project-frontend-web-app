import { createSlice } from "@reduxjs/toolkit";
import {findMostPopularAnime, findTrendingAnimeThunk, findUpcomingAnime, getAnimeDetails} from "../services/animate-thunks.js";

const initialState = {
    upcomingAnimes: [],
    trendingAnimes: [],
    popularAnimes: [],
    animeDetails: [],
    loading: false
}

const animesSlice = createSlice({
    name: 'animes',
    initialState,
    extraReducers: {
        [findTrendingAnimeThunk.pending]:
            (state) => {
                state.loading = true
                state.trendingAnimes = []
            },
        [findTrendingAnimeThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.trendingAnimes = payload
            },
        [findTrendingAnimeThunk.rejected]:
            (state) => {
                state.trendingAnimes = false
            },
        [findUpcomingAnime.pending]:
            (state) => {
                state.loading = true
                state.upcomingAnimes = []
            },
        [findUpcomingAnime.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.upcomingAnimes = payload
            },
        [findUpcomingAnime.rejected]:
            (state) => {
                state.upcomingAnimes = false
            },
        [findMostPopularAnime.pending]:
            (state) => {
                state.loading = true
                state.popularAnimes = []
            },
        [findMostPopularAnime.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.popularAnimes = payload
            },
        [findMostPopularAnime.rejected]:
            (state) => {
                state.popularAnimes = false
            },
        [getAnimeDetails.pending]:
            (state) => {
                state.loading = true
                state.animeDetails = []
            },
        [getAnimeDetails.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.animeDetails = payload
            },
        [getAnimeDetails.rejected]:
            (state) => {
                state.animeDetails = false
            }
    },
});

export default animesSlice.reducer;