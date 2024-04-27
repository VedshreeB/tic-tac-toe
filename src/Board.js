import React from 'react'
import Square from './Square'

function Board({xIsNext,squares,onPlay}) {
  
  const handleClick = (i) => {

    if(squares[i] || calculateWinner(squares))
      return;

    const nextSquares = squares.slice();
    if(xIsNext)
      nextSquares[i] = "X";
    else
      nextSquares[i] = "O";
    
    onPlay(nextSquares);   
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='boardRow'>
        <Square value={squares[0]} squareClickHandler={() => handleClick(0)}></Square>
        <Square value={squares[1]} squareClickHandler={() => handleClick(1)}></Square>
        <Square value={squares[2]} squareClickHandler={() => handleClick(2)}></Square>
      </div>

      <div className='boardRow'>
        <Square value={squares[3]} squareClickHandler={() => handleClick(3)}></Square>
        <Square value={squares[4]} squareClickHandler={() => handleClick(4)}></Square>
        <Square value={squares[5]} squareClickHandler={() => handleClick(5)}></Square>
      </div>
      
      <div className='boardRow'>
        <Square value={squares[6]} squareClickHandler={() => handleClick(6)}></Square>
        <Square value={squares[7]} squareClickHandler={() => handleClick(7)}></Square>
        <Square value={squares[8]} squareClickHandler={() => handleClick(8)}></Square>
      </div>
    </div>
  )
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a]===squares[b] && squares[b]===squares[c] && squares[c]===squares[a])
      return squares[a];
  }
  return null;
}
export default Board
