import React, { Component } from 'react';
import styled from 'styled-components';
import fishArray from './fishArray.json';
import './App.css'
import Scoreboard from './components/Scoreboard/scoreboard';
import GameInstruction from './components/GameInstruction/gameInstruction'
// import PictureBoard from './components/PictureBoard/pictureBoard';
import FishCard from './components/FishCard/fishCard'
import Footer from './components/Footer/footer'
// npm package
// import shuffle from 'shuffle-array';
const PictureBoard = styled.div`
  /* background-color:white; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 5rem auto 0 auto;
  width: 80%;
`


const shuffleArray = (array) => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};

class App extends Component {
  
  state = {
    fishArray,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: [],
    gameOver: false,
    color: ""
  }

  componentDidMount() {
    this.setState({message: "Click a Fish to Begin!"})
  }

  handleFishCardClick = (id) => {
    if (!this.state.clicked.includes(id)) {
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({ gameOver: false });
    } else {
      this.resetGame();
    }
  }


  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    if (score === this.state.fishArray.length) {
      this.setState({
        message: "Winner! Winner! Fishy Dinner!",
        color: "green",
        topScore: score,
        currentScore: 0,
        clicked: [],
        fishArray,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        message: "Awesome!  New High Score!",
        color: "yellow"
      });
    } else {
      this.setState({
        currentScore: score,
        message: "Correct! Focus on the Fish!",
        color: "blue"
      });
    }
    this.resetFishArray();
  }

  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Woops!  Better luck next time!",
      color: "red",
      clicked: [],
      fishArray,
      gameOver: true
    });
    // this.gameLostMessages()
    this.resetFishArray();
  }

  resetFishArray = () => {
    let newFishArray = shuffleArray(fishArray);
    this.setState({ fishArray: newFishArray })
  }

  
  
  render() {
    
    return (
      <>
        <Scoreboard
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          color={this.state.color}
        />
        {/* <GameInstruction /> */}
        <PictureBoard>
          {this.state.fishArray.map(fish => (
              <FishCard
                  id={fish.id}
                  key={fish.id}
                  name={fish.name}
                  latinName={fish.latinName}
                  image={fish.image}
                  co-native={fish.coNative}
                  handleFishCardClick={this.handleFishCardClick}
              />
          ))}
        </PictureBoard>
          
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
