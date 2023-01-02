import { useState } from "react";
import Board from '../Board/Board';
import Score from '../Score/Score';
import './Game.css'

function Game() {

    // set default score for both player and bot

    const [score, setScore] = useState({
        x: 0,
        o: 0,
        tie: 0
    })


    // render the score along with the game board

    return (

        <div className="game">
            <Board setScore={setScore} />
            <Score score={score} />
        </div>
    );

}

export default Game;