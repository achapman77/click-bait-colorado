import React, { Component } from 'react';
import "./scoreboard.css";



function Scoreboard(props) {
    return (
        <div className="scoreBoard">
            <h1>Click Bait!</h1>
            <h1>{props.message}</h1>
            <h1>Score: {props.count} | Top Score: {props.highScore}</h1>
        </div>
    )
}

export default Scoreboard;