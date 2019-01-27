import React, { Component } from 'react';
import fishArray from './fishArray.json';
import './App.css'
import Scoreboard from './components/Scoreboard/scoreboard';
import GameInstruction from './components/GameInstruction/gameInstruction'
// import PictureBoard from './components/PictureBoard/pictureBoard';
import FishCard from './components/FishCard/fishCard'
import Footer from './components/Footer/footer'
// npm package
// import shuffle from 'shuffle-array';

class App extends Component {
  
  state = {
    fishArray,
    score: 0,
    highScore: 0,
    message: "Click an image to Begin!",
  }


  handleFishCardClick = (clickedId) => {
    
    this.shuffle(this.state.fishArray);

    const updatedFishArray = fishArray;
    let index = fishArray.findIndex(fishCard => fishCard.id === clickedId);

    if (this.state.fishArray[index].clicked === true) {
      this.setState({
        message: "Woops!  You clicked that tile already.  GAME OVER!"
      });
      setTimeout(this.resetGame, 3000);
    } else {
      let newScore = this.state.score;
      newScore++;
      if (newScore === 12) {
        this.setState({
          message: "Winner!",
          highScore: this.checkHighScore(newScore)
        });
        setTimeout(this.resetGame, 3000);
      } else {
        updatedFishArray[index].clicked = true;
        this.setState({
          message: "Nice!  You have not clicked that tile before!",
          score: newScore,
          highScore: this.checkHighScore(newScore),
          fishArray: updatedFishArray
        })
      }
    }
  }

  checkHighScore = (newScore) => {
    let newHiScore = Math.max(newScore, this.state.highScore);

    if (newScore < this.state.highScore) {
      return this.state.highScore;
    } else if (this.state.highScore === 12) {
      return 12;
    } else {
      return newHiScore
    }
  }

  resetGame = () => {
    const updatedFishArray = fishArray;

    updatedFishArray.map(fish => {
      fish.clicked = false;
    })
    
    this.setState({
      fishArray: updatedFishArray,
      score: 0,
      message: "Click an image to Begin!"
    })
    return true;
  }
    // Mix up the images inside the array 
  // Fisher-Yates (aka Knuth) Shuffle
  // http://sedition.com/perl/javascript-fy.html
  //===============================================/
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  componentDidMount() {
    
    this.setState({
      fishArray: this.shuffle(this.state.fishArray)
    });
  }
  
  render() {
    //uses 'shuffle' npm package
    // const shuffledFishPics = shuffle(this.state.fishArray);
    
    return (
      <>
        <Scoreboard
          
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <GameInstruction />
        <div className="pictureBoard">
          {this.state.fishArray.map(fish => (
              <FishCard
                  id={fish.id}
                  key={fish.id}
                  name={fish.name}
                  latinName={fish.latinName}
                  image={fish.image}
                  native={fish.coNative}
                  clicked={fish.clicked}
                  handleFishCardClick={this.handleFishCardClick}
              />
          ))}
        </div>
          
        <Footer />
      </>
    );
  }
}

export default App;
