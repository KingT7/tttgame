
import './App.css';
import Square from './Square';
import {useState} from 'react';


function App() {

  
const [squares, setSquares] = useState(Array(9).fill(null));

const [xIsNext, setXIsNext] = useState(true);

const handleClick = (i) =>{

  if (squares[i] || calculateWinner(squares)) {
    return;
  }

  if (squares[i]) {
    return;
  }

  const playerSquares = squares.slice();
  if (xIsNext) {
    playerSquares[i] = 'X'
    
  } else {
    playerSquares[i] = 'O'
  }

  setSquares(playerSquares);
  setXIsNext(!xIsNext);

}



const reset = () =>{
  setSquares([])
} 



const calculateWinner = (squares) =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



const winner = calculateWinner(squares);
let status;
winner ? status = "The Winner Is: " + winner : 
status = "The Next Player To Choose Is: " + (xIsNext ? "X" : "O") 

if (xIsNext === !'X' || !'O') {
  status = 'Nobody Won. Reset & Play A New Game.'
}





  return (
  <div className='main'>


  <div className='status'> {status}  </div>

<div className='reset'> <button className='btn' onClick={reset} > Reset Game </button>  </div>

    <div className="App">

       


      <div className= 'gameBoard'>

         

      <div className="board-row">

        <Square value= {squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value= {squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value= {squares[2]} onSquareClick={() => handleClick(2)}/>

      </div>


      <div className="board-row">
       
        <Square value= {squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value= {squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value= {squares[5]} onSquareClick={() => handleClick(5)}/>

      </div>


      <div className="board-row">
        
        <Square value= {squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value= {squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value= {squares[8]} onSquareClick={() => handleClick(8)}/>

      </div>


    </div>

    </div>

    </div>
  );
};

export default App;
