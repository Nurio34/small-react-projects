import React, { useEffect, useState } from 'react'
import Board from './Components/Board'
import Result from './Result'

function TicTacToe({project,currentProject}) {

    const [squares,setSquares] = useState(Array(9).fill(null))
    const [currentOne, setCurrentOne] = useState("X")
    const [anyWinner, setAnyWinner] = useState(false)
    const [showResultBox, setShowResultBox] = useState(false)

    const handleClick = (id) => {
        if(!squares[id] && !anyWinner ) {
            setSquares(preState=>{
                return preState.map((item,index)=>{
                    return index === id ? currentOne : item
                })
            })

            setCurrentOne(preState=>{
                return preState === "X" ? "O" : "X"
            })
        }
    }

    useEffect(()=>{
        console.log(squares);
        calcWinner(squares)
    },[squares])

    useEffect(()=>{
        if(anyWinner) {
            setShowResultBox(preState => {
                return !preState
            })
        }
    },[anyWinner])

    function calcWinner (arr) {

        const rules = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

        for (const [a, b, c] of rules) {
            if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
                setAnyWinner(preState => {
                    return !preState
                })
            }
        }
        return null
    }

  return (
    <div className={`${project === currentProject ? "block" : "hidden"} p-4`}>
        <Board squares={squares} currentOne={currentOne} handleClick={handleClick} anyWinner={anyWinner} />
        <Result showResultBox={showResultBox} currentOne={currentOne} />
    </div>
  )
}

export default TicTacToe