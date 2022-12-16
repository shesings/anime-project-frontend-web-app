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