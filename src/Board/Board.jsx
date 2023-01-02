import Square from "../Square/Square";
import "./Board.css";
import { useState } from "react";

function Board({setScore}){
    const [nodes, setNodes] = useState({});
    const [board, setBoard] = useState(Array(9).fill(''));
    const [winLine, setWinLine] = useState([]);

    const gameReset = () => {
        setWinLine ([]);
        setBoard(Array(9).fill(''));
    }


    // function to check for available squares on the board

    const getEmptySquares = (board) => {
        const moves = [];
        board.forEach((square, index) => {
          if (!square) moves.push(index);
        });
        return moves;
      };


    // handler function on square click to check for winning lines
      
    const handleClick = (id) => {
        if (
            winningConditions(board).winner === 'X' ||
            winningConditions(board).winner === 'O'  ||
            fullBoard(board)
        ) {
            gameReset();
            return
        }
    

    if (board[id] !== '') return;
    

    
    // assign the X symbol for the player

    let modifiedBoard = [...board];
    modifiedBoard[id] = 'X';

    setBoard(modifiedBoard);

    // Increment the score on win declaration

    if (winningConditions(modifiedBoard).winner == 'X'){
        setWinLine(winningConditions(modifiedBoard).winLine);
        setScore((prevState) => ({...prevState, x: prevState.x + 1}));
        return
    }

    // assign the 0 symbol for the algorithm

    let randomNumber = getBestMove(modifiedBoard, 0, false);
    if (modifiedBoard[randomNumber] == ''){
        modifiedBoard[randomNumber] = 'O';
    }

    if (winningConditions(modifiedBoard).winner == 'O'){
        setWinLine(winningConditions(modifiedBoard).winLine);
        setScore((prevState) => ({...prevState, o: prevState.o + 1}));
        return
    }

    if (winningConditions(modifiedBoard).winner == 'tie'){
        setScore((prevState) => ({...prevState, tie: prevState.tie + 1}));
    }



    setBoard(modifiedBoard);
}
    
    const emptySquares = (board) => {
        return board.every((square) => !square);
    }

    const fullBoard = (board) => {
        return board.every((square) => square);
    }

    // declaring the indexes of the winning squares and lines

    const winningConditions = (board) => {
        if (emptySquares(board)) return false;

        if (board[0] === board[1] && board[0] === board[2] && board[0]) {
            return { winner: board[0], winLine: [0, 1, 2] };
          }
          if (board[3] === board[4] && board[3] === board[5] && board[3]) {
            return { winner: board[3], winLine: [3, 4, 5] };
          }
          if (board[6] === board[7] && board[6] === board[8] && board[6]) {
            return { winner: board[6], winLine: [6, 7, 8] };
          }
      
          if (board[0] === board[3] && board[0] === board[6] && board[0]) {
            return { winner: board[0], winLine: [0, 3, 6] };
          }
          if (board[1] === board[4] && board[1] === board[7] && board[1]) {
            return { winner: board[1], winLine: [1, 4, 7] };
          }
          if (board[2] === board[5] && board[2] === board[8] && board[2]) {
            return { winner: board[2], winLine: [2, 5, 8] };
          }
      
          if (board[0] === board[4] && board[0] === board[8] && board[0]) {
            return { winner: board[0], winLine: [0, 4, 8] };
          }
          if (board[2] === board[4] && board[2] === board[6] && board[2]) {
            return { winner: board[2], winLine: [2, 4, 6] };
          }
      
          if (fullBoard(board)) {
            return { winner: "tie" };
          }
      
          return false;
    };

    // minimax algorithm

    const getBestMove = (newBoard, depth, isMax, callBack = () => {}) => {
        if (depth === 0) { setNodes({}) };

        if (winningConditions(newBoard) || depth === -1){
            if (winningConditions(newBoard).winner === 'X'){
                return 100 - depth;
            }
            else if (winningConditions(newBoard).winner === '0'){
                return -100 + depth;
            }
            return 0;
        }

        if (isMax){
            let best = -100;

            getEmptySquares(newBoard).forEach((index) => {
                let child = [...newBoard];
                child[index] = 'X';

                let score = getBestMove(child, depth + 1, false, callBack);
                best = Math.max(best, score);
            });

            return best;
        }

        if (!isMax){
            let best = 100;

            getEmptySquares(newBoard).forEach((index) => {
                let child = [...newBoard];
                child[index] = 'O';

                let score = getBestMove(child, depth + 1, true, callBack);
                best = Math.min(best, score);

                if (depth === 0){
                    const moves = nodes[score] ? `${nodes[score]},${index}` : index;
                    nodes[score] = moves;
                }
            });

            if (depth === 0){
                let returnValue;

                if (typeof nodes[best] === 'string'){
                    const arr = nodes[best].split(',');
                    const rand = Math.floor(Math.random() * arr.length);
                    returnValue = arr[rand];
                }
                else{
                    returnValue = nodes[best];
                }

                callBack(returnValue);
                return returnValue;

            }

            return best
        }
    };


    // render the board and pass properties in each square

    return(

        <div className="board">

            {board.map((val, i) => {
                return(

                    <Square key={i}
                            id={i}
                            value={val}
                            handleClick={handleClick}
                            board={winLine}
                            
                            />      
                );
            })}

        </div>

    );
}

export default Board