import React, { Component } from 'react';
import "./pictureBoard.css";
import FishCard from '../FishCard/fishCard';
import fishes from '../../fishes.json';
// npm package
import shuffle from 'shuffle-array';


// this function works but not as fast as the shuffle import
// function shuffleArray(fishes) {
//     let i = fishes.length - 1;
//     for (; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = fishes[i];
//       fishes[i] = fishes[j];
//       fishes[j] = temp;
//     }
//     return fishes;
//   }

class PictureBoard extends Component {

    state = {
        fishes,
    }
    
    render() {
        const shuffledFishPics = shuffle(this.state.fishes);

        return (
            <div className="pictureBoard">
                {shuffledFishPics.map(fish => (
                    <FishCard
                        id={fish.id}
                        key={fish.id}
                        name={fish.name}
                        latinName={fish.latinName}
                        image={fish.image}
                        coNative={fish.coNative}
                    />
                ))}
            </div>
        )
    }


}



export default PictureBoard;