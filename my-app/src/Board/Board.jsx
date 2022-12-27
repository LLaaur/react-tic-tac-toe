import Square from "../Square/Square";
import "./Board.css";
import { useState } from "react";

function Board({setScore}){
    const [nodes, setNodes] = useState({});
    const [board, setBoard] = useState({});
    const [winLine, setWinLine] = useState({});

    const gameReset = () => {
        setWinLine ([]);
        setBoard(Array(9).fill(''));
    }

    const getEmptySquares = () => {
        const moves = [];
        board.forEach((square, index) => {
            if (!square) { 
                moves.push(index) 
            }
        });
        return moves;
    }

    const handleWinner = (id) => {
        
    }

    return(

        <div className="board">

            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            

        </div>

    )
}

export default Board