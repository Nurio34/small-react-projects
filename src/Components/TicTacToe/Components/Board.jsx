import Square from "./Square"

function Board({squares,currentOne, handleClick,anyWinner}) {
  return (
    <div className=" grid grid-cols-3 border-l-[1px] border-t-[1px] border-black max-w-[300px] m-auto">
        {squares.map((square, index)=>{
            return <Square key={index} square={square} id={index} currentOne={currentOne} handleClick={handleClick} anyWinner={anyWinner}/>
        })}
    </div>
  )
}

export default Board