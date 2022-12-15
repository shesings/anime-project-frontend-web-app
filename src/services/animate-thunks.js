import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./animate-service.js"

export const findTrendingAnimeThunk = createAsyncThunk(
    'animes/findTrendingAnime', async () =>
        await service.findTrendingAnime()
)