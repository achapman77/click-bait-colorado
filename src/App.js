import React, { Component } from 'react';
import './App.css'
import Scoreboard from './components/Scoreboard/scoreboard';
import GameInstruction from './components/GameInstruction/gameInstruction'
import PictureBoard from './components/PictureBoard/pictureBoard';
import Footer from './components/Footer/footer'

class App extends Component {
  render() {
    return (
      <>
        <Scoreboard />
        <GameInstruction />
        <PictureBoard />
        <Footer />
      </>
    );
  }
}

export default App;
