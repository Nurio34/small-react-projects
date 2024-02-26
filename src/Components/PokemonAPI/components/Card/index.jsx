import { useState } from "react";
import { typeColors,statsColors } from "../Setup";
import "./styles/index.css"
import Id from "./components/Id";
import Name from "./components/Name";
import Types from "./components/Types"
import Stats from "./components/Stats"


function index({pokemon}) {

    const [cardInfo, setCardInfo] = useState(null)
    const {id,name,types,stats,sprites} = pokemon
    console.log(sprites.other.showdown.front_shiny);
  return (
    <div
        className="card border-[1px] border-red-500 rounded-md w-[102px] aspect-[0.7] 
            grid justify-items-center grid-rows-[1fr,auto] relative isolate"
            style={{backgroundImage: `url(${sprites.other.showdown.front_shiny})`}}
    >
        <Id id={id} />
        <Name name={name} />
        <Types types={types} />
        <Stats stats={stats} />

        
    </div>
  )
}

export default index