import React, { useRef, useState } from "react";
import Player from "./player";
import './game.css';
import { FaRegCircle } from "react-icons/fa6"; // circle
import { IoMdClose } from "react-icons/io"; // x
import cross from "../assets/cross.png"
import circle from "../assets/circle.png"


let game = [
              "", "", "",
              "", "", "",
              "", "", ""
]


const Game = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];



  const toggle = (e, num) => {
    if (lock)
    {
      return 0;
    }
    if (count % 2 === 0)
    {
      e.target.innerHTML = `<img class=cross src=${cross} />`
      game[num] = "x";
      setCount(++count)
    }
    else
    {
      e.target.innerHTML = `<img class=circle src=${circle} />`
      game[num] = "o";
      setCount(++count);
    }

    checkWin();
  }

  const checkWin = () => {
    if (game[0] === game[1] && game[1] === game[2] && game[2] !== "")
    {
      won(game[2]);
    }
    else if (game[3] === game[4] && game[4] === game[5] && game[5] !== "")
    {
      won(game[5]);
    }
    else if (game[6] === game[7] && game[7] === game[8] && game[8] !== "")
    {
      won(game[8]);
    }
    else if (game[0] === game[3] && game[3] === game[6] && game[6] !== "")
    {
      won(game[6]);
    }
    else if (game[1] === game[4] && game[4] === game[7] && game[7] !== "")
    {
      won(game[7]);
    }
    else if (game[2] === game[5] && game[5] === game[8] && game[8] !== "")
    {
      won(game[8]);
    }
    else if (game[0] === game[4] && game[4] === game[8] && game[8] !== "")
    {
      won(game[8]);
    }
    else if (game[2] === game[4] && game[4] === game[6] && game[6] !== "")
    {
      won(game[6]);
    }

    let draw = checkDraw();
    if (draw)
    {
      showDraw();
    }
  }

  const checkDraw = () => {
    for (let i = 0; i < game.length; i++)
    {
      if (game[i] === "")
      {
        return false;
      }
    }
    // when done iterating, we know, we dont have any "" strings and
    // we passed all possible win conditions, and that is why we have
    // the last option to show the draw
    return true;
  }

  const showDraw = () =>
  {
    titleRef.current.innerHTML = "Draw! Please Reset The Game"
  }

  const won = (winner) => {
    setLock(true);
    if (winner === "x")
    {
      titleRef.current.innerHTML = `Congratulations: <img src=${cross} /> Wins`
    }
    else
    {
      titleRef.current.innerHTML = `Congratulations: <img src=${circle} /> Wins`
    }
  }

  const reset = () => {
    setLock(false);
    for (let i = 0; i < game.length; i++)
    {
      game[i] = "";
    }
    titleRef.current.innerHTML = "Tic Tac Toe";
    box_arr.map((e) => {
      e.current.innerHTML = "";
    })
  }



  return (
        <div id="container">
          <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
          <div className="board">
            <div className="row1">
              <div className="boxes" ref={box1} onClick={(e) => {toggle(e, 0)}}></div>
              <div className="boxes" ref={box2} onClick={(e) => {toggle(e, 1)}}></div>
              <div className="boxes" ref={box3} onClick={(e) => {toggle(e, 2)}}></div>
            </div>
            <div className="row2">
              <div className="boxes" ref={box4} onClick={(e) => {toggle(e, 3)}}></div>
              <div className="boxes" ref={box5} onClick={(e) => {toggle(e, 4)}}></div>
              <div className="boxes" ref={box6} onClick={(e) => {toggle(e, 5)}}></div>
            </div>
            <div className="row3">
              <div className="boxes" ref={box7} onClick={(e) => {toggle(e, 6)}}></div>
              <div className="boxes" ref={box8} onClick={(e) => {toggle(e, 7)}}></div>
              <div className="boxes" ref={box9} onClick={(e) => {toggle(e, 8)}}></div>
            </div>
          </div>
          <div className="btn">
          <button className="reset" onClick={() => { reset() }}>Reset</button>
          </div>
          
        </div>
    );
}

export default Game;
