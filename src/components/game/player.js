class Player{
    constructor(name, symbol)
    {
        this.name = name;   // player name
        this.symbol = symbol;   // player symbol that is eiter X or O
        this.moves = []; // players moves on the board
    }

    move(x, y)
    {
        if (this.validMove(x, y))
        {
            // appending 
            this.moves.push([x,y]);
        }
    }


    validMove(x, y) 
    {
        // Check if [x, y] is not already in moves array
        return !this.moves.some(move => move[0] === x && move[1] === y);
    }

}

export default Player;