import React from 'react';
import './App.css';
import ExampleCss from "./Components/Animation.js";


function App() {
  return (
    <div className="body">
      <div className="background">
      <div className="Title">Mehak Sarang</div>
      <div className="star-background">
        <ExampleCss />
        <div class='night-sky'>
          <div class="star-box">
            <div class='star twinkle-star-1'></div>
            <div class='star twinkle-star-2'></div>
            <div class='star twinkle-star-3'></div>
            <div class='star twinkle-star-4'></div>
            <div class='star twinkle-star-5'></div>
            <div class='line line-1'></div>
            <div class='line line-2'></div>
            <div class='line line-3'></div>
            <div class='line line-4'></div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
