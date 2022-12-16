import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signupThunk } from "./login-thunks.js";

const initialState = {
  user: {
    username: "anonUser",
    email: "",
    role: "User",
    personalProfile: {
      favorites: [
        {
          animeId: "'222'",
          animeTitle: "'blue l0ck'",
          ratingScore: "'99'",
        },
      ],
      completed: [
        {
          animeId: "'223'",
          animeTitle: "'blue l1ck'",
          ratingScore: "'99'",
        },
      ],
      toBeWatched: [
        {
          animeId: "'224'",
          animeTitle: "'blue l2ck",
          ratingScore: "'99'",
        },
      ],
    },
  },
  error: "",
  loading: false,
};



const animesSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signupThunk.pending]:
            (state) => {
                state.loading = true
            },
        [signupThunk.fulfilled]:
            (state, {payload}) => {
                console.log({state, payload})
                state.loading = false;
                state.user = {...state.user, ...payload};
            },
        [signupThunk.rejected]:
            (state) => {
                state.loading = false;
            },
        [loginThunk.pending]:
            (state) => {
                state.loading = true
            },
        [loginThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state = payload;
            },
        [loginThunk.rejected]:
            (state) => {
                state.loading = false
            }
    },
});

export default animesSlice.reducer;