import React from 'react';
import styled, {css} from 'styled-components';
// import "./scoreboard.css";

const ScoreboardBox = styled.div`
    background-color: rgba(35, 35, 35, 0.85);
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    width: 100%;
`

const Logo = styled.h1`
    
    /* color: red; */
`

const messageColor = (props) => {
    var red = "red";
    
    if (props.message == "Woops!  Better luck next time!") {
        return red.slice(1, -1);;
    }
}
const Message = styled.h1`
    color: ${messageColor};
    /* color: ${(props) =>
    (props.message === "Woops!  Better luck next time!" ) ? "red" : ""
    }; */
`;

const Score = styled.h1`

`


const Scoreboard = (props) => {
    return (
        <ScoreboardBox>
            <Logo>CLICK BAIT</Logo>
            <Message >{props.message}</Message>
            <Score>Score: {props.currentScore} | Top Score: {props.topScore}</Score>
        </ScoreboardBox>
    )
}

export default Scoreboard;