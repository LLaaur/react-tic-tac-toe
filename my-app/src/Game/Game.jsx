import { useState } from "react";
import Board from '../Board/Board';
import Score from '../Score/Score';

function Game() {

    const [score, setScore] = useState({
        x: 0,
        o: 0,
        tie: 0
    })

    return (

        <div className="game">
            <Board setScore={setScore} />
            <Score score={score} />
        </div>
    );

}

export default Game;