import React, { Component } from 'react';
import fishes from './fishes.json';
import './App.css'
import Scoreboard from './components/Scoreboard/scoreboard';
import GameInstruction from './components/GameInstruction/gameInstruction'
import PictureBoard from './components/PictureBoard/pictureBoard';
import FishCard from './components/FishCard/fishCard'
import Footer from './components/Footer/footer'
// npm package
import shuffle from 'shuffle-array';

class App extends Component {
  
  state = {
    fishes,
    count: 0,
    highScore: 0,
    message: "Click an image to Begin!"
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }
  
  
  render() {
    //uses 'shuffle' npm package
    const shuffledFishPics = shuffle(this.state.fishes);
    
    return (
      <>
        <Scoreboard
          count={this.state.count}
          message={this.state.message}
          highScore={this.state.highScore}
        />
        <GameInstruction />
        <div className="pictureBoard">
          {shuffledFishPics.map(fish => (
              <FishCard
                  id={fish.id}
                  key={fish.id}
                  name={fish.name}
                  latinName={fish.latinName}
                  image={fish.image}
                  coNative={fish.coNative}
                  count={this.state.count}
                  handleIncrement={this.handleIncrement}
              />
          ))}
        </div>
          
        <Footer />
      </>
    );
  }
}

export default App;
