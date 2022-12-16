import React from "react";
import Animate from "./animate/index.js";
import NavigationBar from "./navigation-bar/index.js";
import Profile from "./profile/index.js";
import Search from "./search/index.js";
import Login from "./login/index.js";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { ProtectedRoute } from "./authentication/ProtectedRoute.js";
import { UserMovieStatsPage } from "./premium/UserMovieStatsPage.js";
import { PremiumSignUp } from "./premium/PremiumSignup.js";

import animateReducer from "./animate/animate-reducer.js";
import profileReducer from "./profile/profile-reducer.js";

import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'typeface-roboto'
import "@fontsource/roboto";
import AnimeDetails from "./animate/anime-details";
import loginReducer from "./login/login-reducer.js";

const store = configureStore(
    {reducer: {
        animesData: animateReducer,
        profile: profileReducer,
        user: loginReducer
    }});

function App() {
  return (
      <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route index element={<Animate/>} />
            <Route path="/details/:query" element={<AnimeDetails/>}/>
            <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit-view"
            element={
              <ProtectedRoute>
                <Profile editMode/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/stats"
            element={
              <ProtectedRoute checkPremiumUser>
                <UserMovieStatsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/premium" element={<PremiumSignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
      </Provider>
  );
}

export default App;
