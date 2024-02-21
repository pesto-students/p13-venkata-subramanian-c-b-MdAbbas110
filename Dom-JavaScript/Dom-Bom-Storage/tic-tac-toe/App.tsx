import React, { useState } from 'react'
import './App.css'
import Block from './components/Block'

function App() {
 const [ state, setState] = useState(Array(9).fill(null))
 const [currentTurn, setCurrentTurn] = useState("X")

 const  checkWinner = (state : string[]) => {
  const win = [
    [0,1,2],
    [3,4,5],
    [5,6,7],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for( let i = 0; i < win.length; i++) {
    const [a,b,c] = win[i]

    if (state[a]  !== null && state[a] === state[b] && state[c] === state[a]) return true
  }
  return false;
 }

 const handleBlockClick = (index: number) => {
  const stateCopy = Array.from(state)
  if (stateCopy[index] !== null) return
  stateCopy[index] = currentTurn

  setState(stateCopy)
  //Check if someone won, with easy winning logic
  const win = checkWinner(stateCopy)

  if (win) {
    alert(`${currentTurn} won the Game`)
  }

  setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
 }
 console.log(state);

console.log("state", state);
  return (
    <>
   <h2>Play The Game</h2>
  <div className='board'>
    <div className='row'>
      <Block onClick={() => handleBlockClick(0)} value={state[0]}/>
      <Block onClick={() => handleBlockClick(1)} value={state[1]} />
      <Block onClick={() => handleBlockClick(2)} value={state[2]} />
    </div>
    <div className='row'>
      <Block onClick={() => handleBlockClick(3)} value={state[3]} />
      <Block onClick={() => handleBlockClick(4)} value={state[4]} />
      <Block onClick={() => handleBlockClick(5)} value={state[5]} />
    </div>
    <div className='row'>
      <Block onClick={() => handleBlockClick(6)} value={state[6]} />
      <Block onClick={() => handleBlockClick(7)} value={state[7]} />
      <Block onClick={() => handleBlockClick(8)} value={state[8]} />
    </div>
  </div>
  </>
  )
}

export default App
