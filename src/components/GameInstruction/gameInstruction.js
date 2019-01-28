import React from 'react';
import styled, {css} from 'styled-components';


const GameInstructionBox = styled.div`
    align-items: center;
    background-color: rgba(161, 162, 163, 0.5);
    border-radius: 10px;
    color: black;
    display: flex;
    flex-direction: column;
    height: 20rem;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1rem;
    width: 75%;
`


function GameInstruction() {
    return (
        <GameInstructionBox>
            <h1>Click Bait!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </GameInstructionBox>
    )
}

export default GameInstruction;