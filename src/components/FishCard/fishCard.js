import React, { Component } from 'react';
import "./fishCard.css";




function FishCard(props) {
    return (
        <div className="pictureBox"
            id={props.id}
            coNativ={props.coNative}
            onClick={props.handleIncrement}
        >
            <p>{props.name}</p>
            <img src={props.image} alt={`${props.name}-${props.latinName}`} />
            <p>{props.latinName}</p>
        </div>
    )
}

export default FishCard;