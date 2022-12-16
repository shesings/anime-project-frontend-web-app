import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./login-service"

export const signupThunk = createAsyncThunk(
    'auth/signupThunk', async (loginCredentials) =>
        await service.signupUser(loginCredentials)
)

export const loginThunk = createAsyncThunk(
    'auth/loginThunk', async (loginCredentials) =>
        await service.loginUser(loginCredentials)
)

export const saveFavoriteAnimeThunk = createAsyncThunk(
    'auth/saveFavThunk', async (uid, anime) =>
        await service.saveFavoriteAnime(uid, anime)
)

export const saveWatchListAnimeThunk = createAsyncThunk(
    'auth/saveWatchThunk', async (uid, anime) =>
        await service.saveWatchlistAnime(uid, anime)
)

export const saveCompletedAnimeThunk = createAsyncThunk(
    'auth/saveCompletedThunk', async (uid, anime) =>
        await service.saveCompletedAnime(uid, anime)
)

export const findUserByIdThunk = createAsyncThunk(
    'auth/findUserByIdThunk', async (uid) =>
        await service.findUserById(uid)
)
