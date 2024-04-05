import React, { useState } from "react";
import Player from "./player";
import './game.css';

const Game = () => {
    const player1 = new Player("Player1", "X");
    const player2 = new Player("Player2", "O");
    const [currentPlayer, setCurrentPlayer] = useState(player1);
    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    const handleClick = (row, col) => {
        if (board[row][col] === '') {
            // Update the cell with the current player's symbol
            const updatedBoard = [...board];
            updatedBoard[row][col] = currentPlayer.symbol;
            setBoard(updatedBoard);

            // Switch turns to the next player
            setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
        }
    }

    return (
        <div id="gameBoard">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <div key={colIndex} className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Game;
