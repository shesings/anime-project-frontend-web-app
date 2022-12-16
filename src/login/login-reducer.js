import { createSlice } from "@reduxjs/toolkit";
import { findUserByIdThunk, loginThunk, signupThunk } from "./login-thunks.js";

const initialState = {
  user: {
    username: "anonUser",
    email: "",
    role: "User",
    personalProfile: {
      favorites: [
        {
        },
      ],
      completed: [
        {
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
    reducers:{
      logout: (state) => {
        return {...state, ...{user: {}}}
    }
    },
    extraReducers: {
        [signupThunk.pending]:
            (state) => {
                state.loading = true
            },
        [signupThunk.fulfilled]:
            (state, {payload}) => {
                console.log({state, payload})
                state.loading = false;
                localStorage.setItem("currentUser", JSON.stringify({...state.user, ...payload, authenticated: true}));
                state.user = {...state.user, ...payload, authenticated: true};
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
                state.loading = false;
                localStorage.setItem("currentUser", JSON.stringify({...state.user, ...payload, authenticated: true}));
                state.user = {...state.user, ...payload, authenticated: true};
            },
        [loginThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [findUserByIdThunk.pending]:
            (state) => {
                state.loading = true
            },
        [findUserByIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.user = {...state.user, ...payload};
            },
        [findUserByIdThunk.rejected]:
            (state) => {
                state.loading = false
            }
    },
});

export const {logout} = animesSlice.actions;

export default animesSlice.reducer;