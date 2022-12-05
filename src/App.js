import React from 'react';
import Animate from "./animate/index.js";
import NavigationBar from "./animate/navigation-bar/index.js";

function App() {
  return (
      <div>
        <h1>Hello Animators!</h1>
          <NavigationBar/>
          <Animate/>
      </div>
  );
}

export default App;
