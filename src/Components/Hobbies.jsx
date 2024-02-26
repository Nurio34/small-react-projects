
import { useState } from "react";
import {people} from "../datas/hobbies"

function Hobbies({ project, currentProject }) {

    const [personIndex, setPersonIndex] = useState(0)
    const [buttonIndex, setButtonIndex] = useState(1)

    const nextPerson = () => {
        const nextPersonIndex = (personIndex + 1) % people.length
        setPersonIndex(nextPersonIndex)
        
        const nextButtonIndex = (buttonIndex + 1) % people.length
        setButtonIndex(nextButtonIndex)
    }

    return (
        <div
            data-id={project}
            style={{
                display: project === currentProject ? "grid" : "none",
            }}
            className="p-4 place-content-center text-center gap-1 capitalize"
        >
            <p>name : {people[personIndex].name}</p>
            <p>age : {people[personIndex].age}</p>
            <p>Hobbies : {people[personIndex].hobbies}</p>
            <button className=" border-[1px] border-black p-1 rounded-md transition-all capitalize
            hover:bg-green-400 
            active:scale-90 
            "
            onClick={nextPerson}
            >Look {people[buttonIndex].name} </button>
        </div>
    );
}

export default Hobbies;
