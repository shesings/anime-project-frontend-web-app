import React from 'react';
import Animate from "./animate/index.js";
import NavigationBar from "./animate/navigation-bar/index.js";
import Profile from "./animate/profile/index.js";
import Search from "./animate/search/index.js";
import Login from "./animate/login/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
            <h1>Hello Animators!</h1>
              <NavigationBar/>
              <Routes>
                  <Route index
                         element={<Animate/>}/>
                  <Route path="/profile"
                         element={<Profile/>}/>
                  <Route path="/search"
                         element={<Search/>}/>
                  <Route path="/login"
                         element={<Login/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
