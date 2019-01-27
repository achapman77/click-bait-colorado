import React, { Component } from 'react';
import "./fishPics.css";

function FishPics(props) {
    return (
        <div className="pictureBox" id={props.id} coNativ={props.coNative}>
            <p>{props.name}</p>
            <img src={props.image} alt={`${props.name}-${props.latinName}`} />
            <p>{props.latinName}</p>
        </div>
    )
}

export default FishPics;