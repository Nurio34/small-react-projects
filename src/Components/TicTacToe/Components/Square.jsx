import { useState } from "react"

function Square({square,id,currentOne, handleClick,anyWinner}) {

    const [clicked,setClicked] = useState(false)

  return (
    <button className=" border-r-[1px] border-b-[1px] border-black aspect-square min-w-[50px] font-bold text-5xl "
        id={id}
        onClick={(e)=>{
            handleClick(id)

            if(!clicked) {
                setClicked(preState=>{
                    return !preState
                })
                e.target.classList.add("font-bold", "text-5xl")
            }
            }
        }
        onMouseOver={(e)=>{
            if(!clicked && !anyWinner) {
                e.target.innerText = currentOne
                e.target.classList.remove("font-bold", "text-5xl")
            }
            
        }}
        onMouseLeave={e=>{
            if(!clicked) e.target.innerText = ""
        }}
    >{square}</button>
  )
}

export default Square