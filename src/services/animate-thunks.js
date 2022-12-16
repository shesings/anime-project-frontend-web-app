import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./animate-service.js"

export const findTrendingAnimeThunk = createAsyncThunk(
    'animes/findTrendingAnime', async () =>
        await service.findTrendingAnime()
)

export const findUpcomingAnime = createAsyncThunk(
    'animes/findUpcomingAnime', async () =>
        await service.findUpcomingAnime()
)

export const findMostPopularAnime = createAsyncThunk(
    'animes/findMostPopularAnime', async () =>
        await service.findMostPopularAnime()
)

export const getAnimeDetails = createAsyncThunk(
    'animes/getAnimeDetails', async () =>
        await service.getAnimeDetails()
)