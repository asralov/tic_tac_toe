import React from "react";
import "./homepage.css";
import { GiTicTacToe } from "react-icons/gi";

const Starter = () => {
    return (
        <div id="mainTable">
            <div>
            
                <span id="gameTag">
                        Tic Tac Toe 
                        {' '}
                    <GiTicTacToe />
                </span>
            </div>
            <div>
                <button className="mainBtns">
                    Play
                </button>
            </div>
            <div>
                <button className="mainBtns">
                    Description
                </button>
            </div>
        </div>
    );
}



const Homepage = () => {
    return (
        <div id="mainContainer">
            <Starter />
        </div>
    );
}

export default Homepage;