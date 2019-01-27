import React, { Component } from 'react';
import "./pictureBoard.css";
import FishPics from '../FishPics/fishPics';
import fishes from '../../fishes.json';


class PictureBoard extends Component {

    state = {
        fishes
    }

    render() {
        return (
            <div className="pictureBoard">
                {this.state.fishes.map(fish => (
                    <FishPics
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