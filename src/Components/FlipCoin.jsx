import React, { useRef } from 'react'
import coin_front from "../assets/coin_front.png"
import coin_back from "../assets/coin_back.png"
import "../styles/flipCoin.css"


function FlipCoin({project, currentProject}) {

    const figureEl = useRef()
    const coinFrontEl = useRef()
    const coinBackEl = useRef()

    const flip = () => {
        console.log(coinFrontEl.current);
        console.log(coinBackEl.current);
        const random = Math.ceil(Math.random()*10)
        const winner = Math.random()<0.5 ? 180 : 0
        const winnerZ = winner == 180 ? 10 : 1
        console.log(winner);
        coinFrontEl.current.style = `transform : rotateY(${360*random }deg)`
        coinBackEl.current.style = `transform : rotateY(${(360*random) + winner}deg); z-index:${!winnerZ}`

    }

  return (
    <div style={{
        display: project === currentProject ? "grid" : "none",
    }}
        className=' place-content-center gap-4 p-4'
    >
        <figure ref={figureEl}>
            <img src={coin_front} alt="" className='coin coin_front' ref={coinFrontEl}  />
            <img src={coin_back} alt="" className='coin coin_back' ref={coinBackEl} />
        </figure>
        <button className=' bg-blue-600 text-white px-2' onClick={flip} >Flip</button>
    </div>
  )
}

export default FlipCoin