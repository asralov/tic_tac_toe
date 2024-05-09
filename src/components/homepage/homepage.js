import React, { useState } from "react";
import "./homepage.css";
import { GiTicTacToe } from "react-icons/gi";
import Game from "../game/game.jsx";

const GameTag = () => {
    return (
        <div>
            <span id="gameTag">
                Tic Tac Toe 
                {' '}
                <GiTicTacToe />
            </span>
        </div>
    );
}

const Play = ({ onClick }) => {
    return (
        <div>
            <button className="mainBtns" onClick={onClick}>
                Play
            </button>
        </div>
    );
}

const Description = () => {
    return (
        <div>
            <button className="mainBtns">
                Description
            </button>
        </div>
    );
}

const Starter = ({ onPlayClick }) => {
    return (
        <div id="mainTable">
            <GameTag />
            <Play onClick={onPlayClick} />
            <Description />
        </div>
    );
}

const Homepage = () => {
    const [showGame, setShowGame] = useState(false);

    const handlePlayClick = () => {
        setShowGame(true);
    }

    return (
        <div id="mainContainer">
            {showGame ? <Game /> : <Starter onPlayClick={handlePlayClick} />}
        </div>
    );
}

export default Homepage;
