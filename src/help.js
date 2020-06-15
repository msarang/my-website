import React, { Component } from 'react';
import './App.css';
import Card from "./Components/Animation.js";


class App extends Component {
  render() {
    const cardtitleone = 'About';
    const cardbodyone = "Hello";
    const wrapperone = 'wrapper wrapper-1';
    const wrapperoneopen = 'wrapper-1-open';

    const cardtitletwo = 'Experiences';
    const cardbodytwo = "Hello";
    const wrappertwo = 'wrapper wrapper-2';
    const wrappertwoopen = 'wrapper-2-open';

    
  return (
    <div className="body">
      <div className="background">
      <div className="star-background">
        <div class='night-sky'>
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
  );
}
}

export default App;
