import React from 'react';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index.js";
import Animate from "./animate/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/*"
                   element={<Animate/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
